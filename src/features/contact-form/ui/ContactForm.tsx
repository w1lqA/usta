"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { Input, Textarea, Field } from "@/shared/ui";
import { cn } from "@/shared/lib";

type FormState = "idle" | "submitting" | "success" | "error";

type Props = {
  compact?: boolean;
  dark?: boolean;
};

export function ContactForm({ compact = false, dark = false }: Props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    message?: string;
  }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Укажите имя";
    if (!contact.trim()) e.contact = "Укажите телефон или email";
    if (!message.trim()) e.message = "Напишите сообщение";
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1400));
    setFormState("success");
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
          onClick={() => {
            setFormState("idle");
            setName("");
            setContact("");
            setMessage("");
          }}
          className="mt-5 text-xs font-semibold text-brand-green underline underline-offset-2"
        >
          Отправить ещё раз
        </button>
      </div>
    );
  }

  const isSubmitting = formState === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Имя / ФИО" htmlFor="cf-name" error={errors.name} required>
        <Input
          id="cf-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((p) => ({ ...p, name: undefined }));
          }}
          placeholder="Иванов Иван Иванович"
          disabled={isSubmitting}
          error={!!errors.name}
          className={cn(dark && "field-input-dark")}
        />
      </Field>

      <Field
        label="Телефон или Email"
        htmlFor="cf-contact"
        error={errors.contact}
        required
      >
        <Input
          id="cf-contact"
          type="text"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
            setErrors((p) => ({ ...p, contact: undefined }));
          }}
          placeholder="+7 (___) ___-__-__ или email"
          disabled={isSubmitting}
          error={!!errors.contact}
          className={cn(dark && "field-input-dark")}
        />
      </Field>

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
            setErrors((p) => ({ ...p, message: undefined }));
          }}
          placeholder="Расскажите о вашем запросе"
          rows={compact ? 3 : 5}
          disabled={isSubmitting}
          error={!!errors.message}
          className={cn("resize-none", dark && "field-input-dark")}
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