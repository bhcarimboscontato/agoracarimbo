export const stampTypeOptions = [
  "Carimbo CNPJ",
  "Carimbo automático",
  "Carimbo médico",
  "Carimbo profissional",
  "Carimbo para empresa",
  "Carimbo de madeira",
  "Carimbo datador",
  "Carimbo numerador",
  "Carimbo urgente",
  "Outro / não sei o modelo"
] as const;

export const regionOptions = [
  "Venda Nova",
  "Pampulha",
  "Centro",
  "Savassi",
  "Buritis",
  "Outra região de BH",
  "Região metropolitana",
  "Retirada na loja",
  "A combinar"
] as const;

export type ContactFormPayload = {
  name: string;
  whatsapp: string;
  email: string;
  stampType: string;
  message: string;
  region: string;
  consent: boolean;
  website: string;
  pageUrl: string;
};

export type SanitizedContactPayload = {
  name: string;
  whatsapp: string;
  email: string;
  stampType: string;
  message: string;
  region: string;
  consent: true;
  pageUrl: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const htmlTagPattern = /<[^>]*>/g;

const fieldLimits = {
  name: { min: 2, max: 80 },
  whatsappRaw: { max: 20 },
  whatsappDigits: { min: 10, max: 13 },
  email: { max: 120 },
  message: { min: 5, max: 1000 },
  pageUrl: { max: 300 }
} as const;

export function sanitizeText(value: unknown, maxLength = 1000): string {
  return String(value ?? "")
    .replace(htmlTagPattern, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function normalizeBrazilianWhatsapp(value: string): string {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 12 || digits.length === 13) {
    return digits.startsWith("55") ? digits.slice(2) : digits;
  }

  return digits;
}

function isAllowedOption(value: string, options: readonly string[]): boolean {
  return options.includes(value);
}

export function validateContactForm(payload: ContactFormPayload): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = sanitizeText(payload.name, fieldLimits.name.max);
  const whatsappRaw = sanitizeText(payload.whatsapp, fieldLimits.whatsappRaw.max);
  const whatsappDigits = normalizeBrazilianWhatsapp(whatsappRaw);
  const email = sanitizeText(payload.email, fieldLimits.email.max);
  const stampType = sanitizeText(payload.stampType, 80);
  const message = sanitizeText(payload.message, fieldLimits.message.max);
  const region = sanitizeText(payload.region, 80);
  const pageUrl = sanitizeText(payload.pageUrl, fieldLimits.pageUrl.max);

  if (name.length < fieldLimits.name.min) {
    errors.name = "Informe seu nome.";
  }

  if (String(payload.whatsapp ?? "").length > fieldLimits.whatsappRaw.max) {
    errors.whatsapp = "Informe um WhatsApp válido.";
  } else if (whatsappDigits.length < 10 || whatsappDigits.length > 11) {
    errors.whatsapp = "Informe um WhatsApp válido.";
  }

  if (email && (email.length > fieldLimits.email.max || !emailPattern.test(email))) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!isAllowedOption(stampType, stampTypeOptions)) {
    errors.stampType = "Informe o tipo de carimbo.";
  }

  if (message.length < fieldLimits.message.min) {
    errors.message = "Informe os detalhes do pedido.";
  }

  if (!isAllowedOption(region, regionOptions)) {
    errors.region = "Informe a região.";
  }

  if (!payload.consent) {
    errors.consent = "Confirme o consentimento para envio dos dados.";
  }

  if (sanitizeText(payload.website, 120)) {
    errors.website = "Não foi possível enviar a mensagem.";
  }

  if (!pageUrl || pageUrl.length > fieldLimits.pageUrl.max) {
    errors.pageUrl = "Não foi possível identificar a página de origem.";
  }

  return errors;
}

export function sanitizeContactPayload(payload: ContactFormPayload): SanitizedContactPayload {
  return {
    name: sanitizeText(payload.name, fieldLimits.name.max),
    whatsapp: normalizeBrazilianWhatsapp(sanitizeText(payload.whatsapp, fieldLimits.whatsappRaw.max)),
    email: sanitizeText(payload.email, fieldLimits.email.max),
    stampType: sanitizeText(payload.stampType, 80),
    message: sanitizeText(payload.message, fieldLimits.message.max),
    region: sanitizeText(payload.region, 80),
    consent: true,
    pageUrl: sanitizeText(payload.pageUrl, fieldLimits.pageUrl.max)
  };
}

