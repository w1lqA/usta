"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { Input, Textarea, Field } from "@/shared/ui";
import { cn } from "@/shared/lib";
import {
  contactFormSchema,
  type ContactMethod,
} from "../model/schema";

type FormState = "idle" | "submitting" | "success" | "error";

type Props = {
  compact?: boolean;
  dark?: boolean;
};

type Errors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const CONTACT_OPTIONS: { value: ContactMethod; label: string }[] = [
  { value: "phone", label: "Телефон" },
  { value: "email", label: "Email" },
];

export function ContactForm({ compact = false, dark = false }: Props) {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const isSubmitting = formState === "submitting";

  const clearFieldError = (field: keyof Errors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleMethodChange = (method: ContactMethod) => {
    if (method === contactMethod) return;
    setContactMethod(method);
    // Очищаем ошибку неактивного поля, чтобы не висела под другим инпутом
    setErrors((prev) => {
      const next = { ...prev };
      if (method === "phone") delete next.email;
      else delete next.phone;
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse({
      name,
      contactMethod,
      phone,
      email,
      message,
    });

    if (!result.success) {
      const flat = result.error.flatten().fieldErrors;
      setErrors({
        name: flat.name?.[0],
        phone: flat.phone?.[0],
        email: flat.email?.[0],
        message: flat.message?.[0],
      });
      return;
    }

    setErrors({});
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1400));
    setFormState("success");
  };

  const handleReset = () => {
    setFormState("idle");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex h-10 w-10 items-center justify-center bg-brand-primary">
          <Check size={20} className="text-white" strokeWidth={2.5} />
        </div>
        <h3
          className={cn(
            "mb-2 text-base font-bold",
            dark ? "text-white" : "text-neutral-900",
          )}
        >
          Сообщение отправлено
        </h3>
        <p
          className={cn(
            "max-w-xs text-xs leading-relaxed",
            dark ? "text-white/50" : "text-neutral-500",
          )}
        >
          Мы свяжемся с вами в ближайшее время
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-5 text-xs font-semibold text-brand-green underline underline-offset-2"
        >
          Отправить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Имя */}
      <Field label="Имя / ФИО" htmlFor="cf-name" error={errors.name} required>
        <Input
          id="cf-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            clearFieldError("name");
          }}
          placeholder="Иванов Иван Иванович"
          disabled={isSubmitting}
          error={!!errors.name}
          maxLength={100}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          className={cn(dark && "field-input-dark")}
        />
      </Field>

      {/* Способ связи */}
      <div className="field">
        <span className="field-label">Способ связи *</span>

        <div
          role="group"
          aria-label="Способ связи"
          className={cn(
            "flex gap-1 rounded-md border p-1",
            dark
              ? "border-white/12 bg-white/5"
              : "border-neutral-200 bg-neutral-50",
          )}
        >
          {CONTACT_OPTIONS.map((option) => {
            const isActive = contactMethod === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleMethodChange(option.value)}
                aria-pressed={isActive}
                disabled={isSubmitting}
                className={cn(
                  "flex-1 rounded-sm px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? dark
                      ? "bg-white/12 text-white"
                      : "bg-white text-brand-primary shadow-sm"
                    : dark
                      ? "text-white/50 hover:text-white/80"
                      : "text-neutral-500 hover:text-neutral-800",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Телефон или Email — в зависимости от выбранного метода */}
      {contactMethod === "phone" ? (
        <Field label="Телефон" htmlFor="cf-phone" error={errors.phone} required>
          <Input
            id="cf-phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              clearFieldError("phone");
            }}
            placeholder="+7 (___) ___-__-__"
            disabled={isSubmitting}
            error={!!errors.phone}
            maxLength={20}
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "cf-phone-error" : undefined}
            className={cn(dark && "field-input-dark")}
          />
        </Field>
      ) : (
        <Field label="Email" htmlFor="cf-email" error={errors.email} required>
          <Input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearFieldError("email");
            }}
            placeholder="example@mail.ru"
            disabled={isSubmitting}
            error={!!errors.email}
            maxLength={254}
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            className={cn(dark && "field-input-dark")}
          />
        </Field>
      )}

      {/* Сообщение */}
      <Field
        label="Сообщение"
        htmlFor="cf-message"
        error={errors.message}
        required
      >
        <Textarea
          id="cf-message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearFieldError("message");
          }}
          placeholder="Расскажите о вашем запросе"
          rows={compact ? 3 : 5}
          disabled={isSubmitting}
          error={!!errors.message}
          maxLength={1000}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className={cn(
            "max-h-[20rem] resize-none overflow-y-auto",
            dark && "field-input-dark",
          )}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "btn btn-primary w-full rounded-md py-4",
          isSubmitting && "disabled:opacity-60",
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Отправка…
          </>
        ) : (
          "Отправить"
        )}
      </button>

      <p
        className={cn(
          "text-caption",
          dark ? "text-white/30" : "text-neutral-400",
        )}
      >
        Нажимая «Отправить», вы соглашаетесь с{" "}
        <Link
          href="/privacy"
          className={cn(
            "underline",
            dark ? "hover:text-white/50" : "hover:text-neutral-600",
          )}
        >
          политикой конфиденциальности
        </Link>
      </p>
    </form>
  );
}