"use client";

import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ActionLink } from "@/shared/ui";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeUpVariants,
  springSoft,
  staggerContainer,
} from "@/shared/lib";

type Variant = "home" | "page";
type Props = { variant?: Variant };

const viewportOnce = { once: true, amount: 0.15 } as const;

export function ContactInfo({ variant = "home" }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const rt = shouldReduceMotion ? { duration: 0 } : undefined;

  return (
    <div className="flex w-full flex-col">
      {/* ─── Intro ─── */}
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1, 0.05)}
        className="mb-14"
      >
        <motion.h2
          variants={fadeUpVariants}
          transition={rt ?? springSoft}
          className="mb-6 max-w-[15ch] text-3xl leading-[1.05] font-extrabold text-white lg:text-5xl"
        >
          Оставьте заявку
        </motion.h2>
        <motion.p
          variants={fadeUpVariants}
          transition={rt ?? springSoft}
          className="mb-8 max-w-[26rem] text-base leading-[1.7] text-white/50"
        >
          Ответим на все вопросы об обучении, стоимости и сроках. Связываемся
          в течение рабочего дня.
        </motion.p>
        {variant === "home" && (
          <motion.div
            variants={fadeInLeftVariants}
            transition={rt ?? springSoft}
          >
            <ActionLink href="/contacts" tone="light">
              Все контакты
            </ActionLink>
          </motion.div>
        )}
      </motion.div>

      {/* ─── Contact rows ─── */}
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08, 0.15)}
        className="flex flex-col gap-8 pb-10"
      >
        {/* Телефон */}
        <motion.div
          variants={fadeUpVariants}
          transition={rt ?? springSoft}
          className="flex items-start gap-5"
        >
          <Phone size={15} className="mt-1 flex-shrink-0 text-brand-accent" strokeWidth={2} />
          <div className="flex flex-col gap-1">
            <span className="mb-1 text-caption font-bold tracking-[0.18em] text-white/30 uppercase">
              Телефон
            </span>
            <a href="tel:+79998707405" className="text-sm font-semibold text-white transition-colors hover:text-brand-green">
              +7 (999) 870-74-05
            </a>
            <a href="tel:+79602919052" className="text-sm text-white/55 transition-colors hover:text-white/80">
              +7 (960) 291-90-52
            </a>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={fadeUpVariants}
          transition={rt ?? springSoft}
          className="flex items-start gap-5"
        >
          <Mail size={15} className="mt-1 flex-shrink-0 text-brand-accent" strokeWidth={2} />
          <div className="flex flex-col gap-1">
            <span className="mb-1 text-caption font-bold tracking-[0.18em] text-white/30 uppercase">
              Email
            </span>
            <a href="mailto:info@usta.com.ru" className="text-sm font-semibold text-white transition-colors hover:text-brand-green">
              info@usta.com.ru
            </a>
          </div>
        </motion.div>

        {/* Часы */}
        <motion.div
          variants={fadeUpVariants}
          transition={rt ?? springSoft}
          className="flex items-start gap-5"
        >
          <Clock size={15} className="mt-1 flex-shrink-0 text-brand-accent" strokeWidth={2} />
          <div className="flex flex-col gap-1">
            <span className="mb-1 text-caption font-bold tracking-[0.18em] text-white/30 uppercase">
              Часы работы
            </span>
            <span className="text-sm text-white/65">
              Понедельник – Пятница: 9:00 – 18:00
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* ─── Locations ─── */}
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1, 0.25)}
        className="grid grid-cols-1 gap-8 border-t border-white/8 pt-10 sm:grid-cols-2"
      >
        <motion.div
          variants={fadeInLeftVariants}
          transition={rt ?? springSoft}
          className="flex items-start gap-4"
        >
          <MapPin size={14} className="mt-1 flex-shrink-0 text-brand-accent" strokeWidth={2} />
          <div className="flex flex-col gap-1">
            <span className="mb-1 text-caption font-bold tracking-[0.18em] text-white/30 uppercase">
              Москва
            </span>
            <span className="text-sm leading-relaxed text-white/65">
              109147, г. Москва,
              <br />
              ул. Марксистская, д. 20, стр. 8
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRightVariants}
          transition={rt ?? springSoft}
          className="flex items-start gap-4"
        >
          <MapPin size={14} className="mt-1 flex-shrink-0 text-brand-accent" strokeWidth={2} />
          <div className="flex flex-col gap-1">
            <span className="mb-1 text-caption font-bold tracking-[0.18em] text-white/30 uppercase">
              Юр. адрес
            </span>
            <span className="text-sm leading-relaxed text-white/65">
              Чеченская Республика, г. Грозный,
              <br />
              ул. Моздковская, д. 13, кв. 3
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}