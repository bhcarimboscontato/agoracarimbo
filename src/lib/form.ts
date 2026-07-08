import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormPayload
} from "@lib/contactValidation";

export type { ContactFormErrors, ContactFormPayload };

export async function submitContactForm(
  payload: ContactFormPayload
): Promise<{ ok: boolean; message: string }> {
  const errors = validateContactForm(payload);
  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      message: "Revise os campos obrigatórios antes de enviar."
    };
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "Não foi possível enviar sua mensagem agora. Tente novamente ou chame pelo WhatsApp."
      };
    }

    return {
      ok: true,
      message: "Mensagem enviada com sucesso. A BH Carimbos vai retornar pelo contato informado."
    };
  } catch {
    return {
      ok: false,
      message: "Não foi possível enviar sua mensagem agora. Tente novamente ou chame pelo WhatsApp."
    };
  }
}
