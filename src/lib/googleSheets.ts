import type { SanitizedContactPayload } from "./contactValidation";

declare const process: {
  env: Record<string, string | undefined>;
};

type GoogleSheetsEnv = {
  spreadsheetId: string;
  sheetName: string;
  serviceAccountEmail: string;
  privateKey: string;
};

export type ContactSheetRow = SanitizedContactPayload & {
  submittedAtIso: string;
  submittedAtBrazil: string;
  status: string;
};

const tokenEndpoint = "https://oauth2.googleapis.com/token";
const sheetsScope = "https://www.googleapis.com/auth/spreadsheets";

function getGoogleSheetsEnv(): GoogleSheetsEnv | null {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !sheetName || !serviceAccountEmail || !privateKey) {
    return null;
  }

  return {
    spreadsheetId,
    sheetName,
    serviceAccountEmail,
    privateKey
  };
}

function base64UrlEncode(value: string | Uint8Array): string {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : value;
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const base64 = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes.buffer;
}

async function createJwt(env: GoogleSheetsEnv): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: "RS256",
    typ: "JWT"
  };
  const claim = {
    iss: env.serviceAccountEmail,
    scope: sheetsScope,
    aud: tokenEndpoint,
    exp: now + 3600,
    iat: now
  };
  const unsignedJwt = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(claim))}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(env.privateKey),
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256"
    },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsignedJwt)
  );

  return `${unsignedJwt}.${base64UrlEncode(new Uint8Array(signature))}`;
}

async function getAccessToken(env: GoogleSheetsEnv): Promise<string> {
  const assertion = await createJwt(env);
  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  if (!response.ok) {
    throw new Error("Google OAuth token request failed.");
  }

  const data = (await response.json()) as { access_token?: string };

  if (!data.access_token) {
    throw new Error("Google OAuth token response did not include an access token.");
  }

  return data.access_token;
}

function toSheetValues(row: ContactSheetRow): string[] {
  return [
    row.submittedAtIso,
    row.submittedAtBrazil,
    row.name,
    row.whatsapp,
    row.email,
    row.stampType,
    row.message,
    row.region,
    row.pageUrl,
    row.consent ? "sim" : "não",
    row.status
  ];
}

export function hasGoogleSheetsConfig(): boolean {
  return Boolean(getGoogleSheetsEnv());
}

export async function appendContactLead(row: ContactSheetRow): Promise<void> {
  const env = getGoogleSheetsEnv();

  if (!env) {
    throw new Error("Google Sheets configuration is missing.");
  }

  const token = await getAccessToken(env);
  const range = encodeURIComponent(`${env.sheetName}!A:K`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.spreadsheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      values: [toSheetValues(row)]
    })
  });

  if (!response.ok) {
    throw new Error("Google Sheets append request failed.");
  }
}
