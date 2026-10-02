"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/features/contact-form/model/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  contactMethod: "phone" | "email";
  phone?: string;
  email?: string;
  message: string;
}) {
  const validated = contactFormSchema.safeParse(formData);
  if (!validated.success) {
    return { success: false, error: "Некорректные данные" };
  }

  const { name, contactMethod, phone, email, message } = validated.data;
  const contactInfo = contactMethod === "phone" ? phone : email;

  try {
    await resend.emails.send({
      from: "Сайт УЦ УСТА <noreply@usta.com.ru>",
      to: ["info@usta.com.ru"],
      subject: `Новая заявка с сайта — ${name}`,
      replyTo: contactMethod === "email" ? email : undefined,
      text: `
Имя: ${name}
Способ связи: ${contactMethod === "phone" ? "Телефон" : "Email"}
Контакт: ${contactInfo}
Сообщение: ${message}
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Ошибка отправки" };
  }
}