export const whatsappMessages = {
  general: "Olá! Vim pelo site e gostaria de pedir um orçamento de carimbo.",
  cnpj: "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo CNPJ.",
  medical: "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo médico.",
  urgent: "Olá! Vim pelo site e preciso de um carimbo com urgência em BH.",
  custom: "Olá! Vim pelo site e gostaria de fazer um carimbo personalizado.",
  wood: "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo de madeira.",
  delivery: "Olá! Vim pelo site e gostaria de saber sobre entrega de carimbo em BH."
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;
