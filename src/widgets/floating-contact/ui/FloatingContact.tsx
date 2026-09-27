"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Mail, X, Send } from "lucide-react";
import { cn } from "@/shared/lib";

const PHONE_PRIMARY = "+7 (999) 870-74-05";
const PHONE_PRIMARY_HREF = "tel:+79998707405";
const PHONE_SECONDARY = "+7 (960) 291-90-52";
const PHONE_SECONDARY_HREF = "tel:+79602919052";
const EMAIL = "info@usta.com.ru";

export function FloatingContact() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Показываем только когда hero уехал за экран
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Закрываем панель при прокрутке вверх (когда возвращаемся на hero)
  useEffect(() => {
    if (!scrolled && open) setOpen(false);
  }, [scrolled, open]);

  if (!scrolled) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-3">
      {/* Раскрытая панель */}
      <div
        className={cn(
          "glass w-[20rem] rounded-2xl border border-border p-5 shadow-lg",
          "transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-sm font-bold text-dark-900">
              Связаться с нами
            </p>
            <p className="text-xs leading-snug text-neutral-500">
              Ответим в течение рабочего дня
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Закрыть"
            className="text-neutral-400 transition-colors hover:text-neutral-700"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-3">
          <a
            href={PHONE_PRIMARY_HREF}
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-neutral-100"
          >
            <Phone size={14} className="flex-shrink-0 text-brand-accent" />
            <span className="text-sm font-semibold text-dark-900">
              {PHONE_PRIMARY}
            </span>
          </a>

          <a
            href={PHONE_SECONDARY_HREF}
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-neutral-100"
          >
            <Phone size={14} className="flex-shrink-0 text-brand-accent" />
            <span className="text-sm text-neutral-700">{PHONE_SECONDARY}</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-neutral-100"
          >
            <Mail size={14} className="flex-shrink-0 text-brand-accent" />
            <span className="text-sm text-neutral-700">{EMAIL}</span>
          </a>
        </div>

        <Link
          href="/contacts"
          onClick={() => setOpen(false)}
          className="btn btn-primary btn-sm mt-4 w-full rounded-md"
        >
          Оставить заявку
          <Send size={13} />
        </Link>
      </div>

      {/* Кнопка-триггер */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Закрыть" : "Связаться с нами"}
        aria-expanded={open}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full",
          "bg-brand-primary text-white shadow-lg",
          "transition-all duration-300 hover:scale-105",
          open && "rotate-90",
        )}
      >
        {open ? <X size={20} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}