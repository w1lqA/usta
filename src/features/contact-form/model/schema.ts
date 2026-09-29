import { z } from "zod";

export const CONTACT_METHODS = ["phone", "email"] as const;

export type ContactMethod = (typeof CONTACT_METHODS)[number];

/**
 * Нормализация телефона: убираем всё, кроме цифр.
 * +7 (999) 123-45-67 → 79991234567
 * 8 (999) 123-45-67 → 79991234567
 * 8 999 123 45 67   → 79991234567
 */
function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("8")) {
    return "7" + digits.slice(1);
  }
  return digits;
}

export const contactFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Имя должно содержать не менее 2 символов")
      .max(100, "Имя не должно превышать 100 символов"),
    contactMethod: z.enum(CONTACT_METHODS),
    phone: z.string().trim().optional(),
    email: z.string().trim().optional(),
    message: z
      .string()
      .trim()
      .min(10, "Сообщение должно содержать не менее 10 символов")
      .max(1000, "Сообщение не должно превышать 1000 символов"),
  })
  .superRefine((data, ctx) => {
    if (data.contactMethod === "phone") {
      const raw = data.phone ?? "";
      if (!raw) {
        ctx.addIssue({
          code: "custom",
          path: ["phone"],
          message: "Укажите телефон",
        });
        return;
      }
      const normalized = normalizePhone(raw);
      if (normalized.length !== 11) {
        ctx.addIssue({
          code: "custom",
          path: ["phone"],
          message: "Введите корректный номер телефона",
        });
      }
    }

    if (data.contactMethod === "email") {
      const raw = data.email ?? "";
      if (!raw) {
        ctx.addIssue({
          code: "custom",
          path: ["email"],
          message: "Укажите email",
        });
        return;
      }
      if (raw.length > 254) {
        ctx.addIssue({
          code: "custom",
          path: ["email"],
          message: "Email не должен превышать 254 символа",
        });
        return;
      }
      const emailCheck = z.string().email().safeParse(raw);
      if (!emailCheck.success) {
        ctx.addIssue({
          code: "custom",
          path: ["email"],
          message: "Введите корректный email",
        });
      }
    }
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;