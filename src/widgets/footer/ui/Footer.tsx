"use client";

import Link from "next/link";
import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/shared/ui";
import {
  fadeUpVariants,
  springGentle,
  staggerContainer,
} from "@/shared/lib";
import {
  trainingLinks,
  serviceItems,
  documentLinks,
} from "../model/footer-links";

const PHONE_PRIMARY = "+7 (999) 870-74-05";
const PHONE_PRIMARY_HREF = "tel:+79998707405";
const PHONE_SECONDARY = "+7 (960) 291-90-52";
const PHONE_SECONDARY_HREF = "tel:+79602919052";
const EMAIL = "info@usta.com.ru";

const viewportOnce = { once: true, amount: 0.15 } as const;

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const rt = shouldReduceMotion ? { duration: 0 } : undefined;

  return (
    <footer className="bg-dark-footer text-white">
      <Container>
        {/* Top bar */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0)}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-6 sm:py-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={rt ?? springGentle}
            className="flex items-center gap-3"
          >
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
          </motion.div>

          <motion.a
            variants={{
              hidden: { opacity: 0, x: 12 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={rt ?? springGentle}
            href={PHONE_PRIMARY_HREF}
            className="flex items-center gap-2 text-xs font-semibold text-white/70 transition-colors hover:text-white"
          >
            <Phone size={13} className="text-brand-green" />
            {PHONE_PRIMARY}
          </motion.a>
        </motion.div>

        {/* Main grid — 1 col on mobile, 2 on sm, 4 on md */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.07, 0.1)}
          className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:py-12 md:grid-cols-4 lg:gap-12"
        >
          {/* About */}
          <motion.div
            variants={fadeUpVariants}
            transition={rt ?? springGentle}
            className="sm:col-span-2 md:col-span-1"
          >
            <p className="mb-4 text-caption font-bold tracking-[0.14em] text-white/35 uppercase sm:mb-5">
              О центре
            </p>
            <p className="mb-5 max-w-[24rem] text-xs leading-relaxed text-white/50">
              АНО ДПО УЦ «УСТА» — профессиональный учебный центр
              дополнительного профессионального образования.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-white/45">
                <Clock size={12} className="flex-shrink-0 text-brand-green" />
                Пн–Пт: 9:00–18:00
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 break-all text-xs text-white/45 transition-colors hover:text-white/75"
              >
                <Mail size={12} className="flex-shrink-0 text-brand-green" />
                {EMAIL}
              </a>
            </div>
          </motion.div>

          {/* Обучение */}
          <motion.div
            variants={fadeUpVariants}
            transition={rt ?? springGentle}
          >
            <p className="mb-4 text-caption font-bold tracking-[0.14em] text-white/35 uppercase sm:mb-5">
              Обучение
            </p>
            <ul className="flex flex-col gap-2.5">
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
          </motion.div>

          {/* Услуги + Документы */}
          <motion.div
            variants={fadeUpVariants}
            transition={rt ?? springGentle}
          >
            <p className="mb-4 text-caption font-bold tracking-[0.14em] text-white/35 uppercase sm:mb-5">
              Услуги
            </p>
            <ul className="flex flex-col gap-2.5">
              {serviceItems.map((item) => (
                <li key={item}>
                  <span className="text-xs text-white/50">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 mb-3 text-caption font-bold tracking-[0.14em] text-white/35 uppercase sm:mb-4">
              Документы
            </p>
            <ul className="flex flex-col gap-2.5">
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
          </motion.div>

          {/* Контакты */}
          <motion.div
            variants={fadeUpVariants}
            transition={rt ?? springGentle}
          >
            <p className="mb-4 text-caption font-bold tracking-[0.14em] text-white/35 uppercase sm:mb-5">
              Контакты
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="mb-1.5 text-micro tracking-wide text-white/30 uppercase">
                  Московский офис
                </p>
                <p className="text-xs leading-relaxed text-white/55">
                  109147, г. Москва,
                  <br />
                  ул. Марксистская, д. 20, стр. 8
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
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
                Все контакты
                <ArrowUpRight size={11} />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={rt ?? { ...springGentle, delay: 0.35 }}
          className="flex flex-col items-center gap-3 border-t border-white/8 py-5 sm:flex-row sm:justify-between sm:py-6"
        >
          <p className="text-center text-caption text-white/25 sm:text-left">
            © {new Date().getFullYear()} АНО ДПО УЦ «УСТА». Все права защищены.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
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
        </motion.div>
      </Container>
    </footer>
  );
}