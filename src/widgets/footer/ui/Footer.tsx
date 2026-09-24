import Link from "next/link";
import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/shared/ui";
import { trainingLinks, serviceItems, documentLinks } from "../model/footer-links";

const PHONE_PRIMARY = "+7 (999) 870-74-05";
const PHONE_PRIMARY_HREF = "tel:+79998707405";
const PHONE_SECONDARY = "+7 (960) 291-90-52";
const PHONE_SECONDARY_HREF = "tel:+79602919052";
const EMAIL = "info@usta.com.ru";

export function Footer() {
  return (
    <footer className="bg-dark-footer text-white">
      <Container>
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 py-8">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center bg-brand-accent text-micro font-bold text-white">
              УЦ
            </span>
            <span className="leading-none">
              <span className="text-xs font-bold tracking-wide">
                УЧЕБНЫЙ ЦЕНТР
              </span>
              <span className="mt-0.5 block text-micro font-semibold tracking-[0.18em] text-brand-green">
                УСТА
              </span>
            </span>
          </div>
          <a
            href={PHONE_PRIMARY_HREF}
            className="hidden items-center gap-2 text-xs font-semibold text-white/70 transition-colors hover:text-white sm:flex"
          >
            <Phone size={13} className="text-brand-green" />
            {PHONE_PRIMARY}
          </a>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:gap-12">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <p className="mb-5 text-caption font-bold uppercase tracking-[0.14em] text-white/35">
              О центре
            </p>
            <p className="mb-5 text-xs leading-relaxed text-white/50">
              АНО ДПО УЦ «УСТА» — профессиональный учебный центр
              дополнительного профессионального образования.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-white/45">
                <Clock size={12} className="flex-shrink-0 text-brand-green" />
                Пн–Пт: 9:00–18:00
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-white/75"
              >
                <Mail size={12} className="flex-shrink-0 text-brand-green" />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Обучение */}
          <div>
            <p className="mb-5 text-caption font-bold uppercase tracking-[0.14em] text-white/35">
              Обучение
            </p>
            <ul className="space-y-2.5">
              {trainingLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/50 transition-colors hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Услуги + Документы */}
          <div>
            <p className="mb-5 text-caption font-bold uppercase tracking-[0.14em] text-white/35">
              Услуги
            </p>
            <ul className="space-y-2.5">
              {serviceItems.map((item) => (
                <li key={item}>
                  <span className="text-xs text-white/50">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mb-4 mt-6 text-caption font-bold uppercase tracking-[0.14em] text-white/35">
              Документы
            </p>
            <ul className="space-y-2.5">
              {documentLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/50 transition-colors hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <p className="mb-5 text-caption font-bold uppercase tracking-[0.14em] text-white/35">
              Контакты
            </p>
            <div className="space-y-4">
              <div>
                <p className="mb-1.5 text-micro uppercase tracking-wide text-white/30">
                  Московский офис
                </p>
                <p className="text-xs leading-relaxed text-white/55">
                  109147, г. Москва,
                  <br />
                  ул. Марксистская, д. 20, стр. 8
                </p>
              </div>
              <div className="space-y-1.5">
                <a
                  href={PHONE_PRIMARY_HREF}
                  className="flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-white/80"
                >
                  <Phone size={11} className="flex-shrink-0" />
                  {PHONE_PRIMARY}
                </a>
                <a
                  href={PHONE_SECONDARY_HREF}
                  className="flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-white/80"
                >
                  <Phone size={11} className="flex-shrink-0" />
                  {PHONE_SECONDARY}
                </a>
              </div>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green transition-colors"
              >
                Страница контактов
                <ArrowUpRight size={11} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 py-6 sm:flex-row">
          <p className="text-caption text-white/25">
            © {new Date().getFullYear()} АНО ДПО УЦ «УСТА». Все права защищены.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-caption text-white/25 transition-colors hover:text-white/50"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/documents"
              className="text-caption text-white/25 transition-colors hover:text-white/50"
            >
              Реквизиты
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}