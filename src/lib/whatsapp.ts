import { businessInfo } from "@data/site";
import { whatsappMessages, type WhatsAppMessageKey } from "@data/whatsapp";

export function createWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${businessInfo.whatsappDigits}?text=${encodedMessage}`;
}

export function getWhatsAppUrl(key: WhatsAppMessageKey = "general"): string {
  return createWhatsAppUrl(whatsappMessages[key]);
}
