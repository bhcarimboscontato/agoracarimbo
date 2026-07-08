import {
  sanitizeContactPayload,
  validateContactForm,
  type ContactFormPayload,
  type SanitizedContactPayload
} from "../src/lib/contactValidation.js";

declare const process: {
  env: Record<string, string | undefined>;
};

type VercelRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: Record<string, unknown>) => void;
  setHeader?: (name: string, value: string) => void;
};

const genericError = "Não foi possível enviar sua mensagem agora. Tente novamente ou chame pelo WhatsApp.";
const successMessage = "Mensagem enviada com sucesso. A BH Carimbos vai retornar pelo contato informado.";
const maxBodySize = 5000;

const rateLimitStore = new Map<string, { count: number; expiresAt: number }>();
const duplicateStore = new Map<string, number>();

function getHeader(req: VercelRequest, name: string): string {
  const value = req.headers[name] ?? req.headers[name.toLowerCase()];
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function parsePositiveInteger(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function isAllowedOrigin(origin: string): boolean {
  const normalizedOrigin = origin.replace(/\/$/, "");
  const allowedOrigins = [
    process.env.CONTACT_FORM_ALLOWED_ORIGIN,
    process.env.CONTACT_FORM_PRODUCTION_ORIGIN
  ]
    .filter(Boolean)
    .map((allowedOrigin) => allowedOrigin?.replace(/\/$/, ""));

  return Boolean(normalizedOrigin && allowedOrigins.includes(normalizedOrigin));
}

function createPayload(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return null;
  }

  const source = body as Record<string, unknown>;

  return {
    name: String(source.name ?? ""),
    whatsapp: String(source.whatsapp ?? ""),
    email: String(source.email ?? ""),
    stampType: String(source.stampType ?? ""),
    message: String(source.message ?? ""),
    region: String(source.region ?? ""),
    consent: source.consent === true,
    website: String(source.website ?? ""),
    pageUrl: String(source.pageUrl ?? "")
  };
}

function getBrazilDateTime(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(date);
}

function cleanupExpiredEntries(now: number): void {
  rateLimitStore.forEach((entry, key) => {
    if (entry.expiresAt <= now) {
      rateLimitStore.delete(key);
    }
  });

  duplicateStore.forEach((expiresAt, key) => {
    if (expiresAt <= now) {
      duplicateStore.delete(key);
    }
  });
}

async function hashSubmission(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  const bytes = Array.from(new Uint8Array(digest));

  return bytes.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function getSubmissionKey(payload: SanitizedContactPayload): Promise<string> {
  return hashSubmission(
    JSON.stringify({
      name: payload.name.toLowerCase(),
      whatsapp: payload.whatsapp,
      email: payload.email.toLowerCase(),
      stampType: payload.stampType,
      message: payload.message.toLowerCase(),
      region: payload.region
    })
  );
}

function isRateLimited(payload: SanitizedContactPayload, now: number): boolean {
  const windowSeconds = parsePositiveInteger(process.env.CONTACT_FORM_RATE_LIMIT_WINDOW_SECONDS, 60);
  const maxRequests = parsePositiveInteger(process.env.CONTACT_FORM_RATE_LIMIT_MAX_REQUESTS, 3);
  const identifier = payload.email.toLowerCase() || payload.whatsapp;
  const expiresAt = now + windowSeconds * 1000;
  const current = rateLimitStore.get(identifier);

  // Best-effort only: Vercel serverless instances do not share this memory.
  // Production-grade rate limiting needs approved shared storage.
  if (!current || current.expiresAt <= now) {
    rateLimitStore.set(identifier, { count: 1, expiresAt });
    return false;
  }

  current.count += 1;

  if (current.count > maxRequests) {
    return true;
  }

  rateLimitStore.set(identifier, current);
  return false;
}

async function isDuplicate(payload: SanitizedContactPayload, now: number): Promise<boolean> {
  const key = await getSubmissionKey(payload);
  const currentExpiresAt = duplicateStore.get(key);

  return Boolean(currentExpiresAt && currentExpiresAt > now);
}

async function markDuplicate(payload: SanitizedContactPayload, now: number): Promise<void> {
  const duplicateWindowSeconds = parsePositiveInteger(process.env.CONTACT_FORM_DUPLICATE_WINDOW_SECONDS, 120);
  const key = await getSubmissionKey(payload);
  duplicateStore.set(key, now + duplicateWindowSeconds * 1000);
}

function sendError(res: VercelResponse, statusCode: number): void {
  res.status(statusCode).json({
    ok: false,
    message: genericError
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (res.setHeader) {
    res.setHeader("Cache-Control", "no-store");
  }

  if (req.method !== "POST") {
    sendError(res, 405);
    return;
  }

  const contentType = getHeader(req, "content-type");
  if (!contentType.includes("application/json")) {
    sendError(res, 415);
    return;
  }

  const origin = getHeader(req, "origin");
  if (!isAllowedOrigin(origin)) {
    sendError(res, 403);
    return;
  }

  const rawBodySize = typeof req.body === "string" ? req.body.length : JSON.stringify(req.body ?? {}).length;
  if (rawBodySize > maxBodySize) {
    sendError(res, 413);
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      sendError(res, 400);
      return;
    }
  }

  const payload = createPayload(body);
  if (!payload) {
    sendError(res, 400);
    return;
  }

  const errors = validateContactForm(payload);
  if (Object.keys(errors).length > 0) {
    sendError(res, 400);
    return;
  }

  const sanitizedPayload = sanitizeContactPayload(payload);
  const now = Date.now();
  cleanupExpiredEntries(now);

  if (isRateLimited(sanitizedPayload, now)) {
    sendError(res, 429);
    return;
  }

  if (await isDuplicate(sanitizedPayload, now)) {
    sendError(res, 409);
    return;
  }

  const submittedAt = new Date(now);

  try {
    const { appendContactLead, hasGoogleSheetsConfig } = await import("../src/lib/googleSheets.js");

    if (!hasGoogleSheetsConfig()) {
      console.error("Contact form Google Sheets configuration is missing.");
      sendError(res, 500);
      return;
    }

    await appendContactLead({
      ...sanitizedPayload,
      submittedAtIso: submittedAt.toISOString(),
      submittedAtBrazil: getBrazilDateTime(submittedAt),
      status: "novo"
    });
    await markDuplicate(sanitizedPayload, now);

    res.status(200).json({
      ok: true,
      message: successMessage
    });
  } catch {
    console.error("Contact form could not append lead to Google Sheets.");
    sendError(res, 500);
  }
}
