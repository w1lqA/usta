"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/shared/ui";
import { ContactForm } from "@/features/contact-form";
import {
  fadeInLeftVariants,
  scaleInVariants,
  springGentle,
  springSoft,
} from "@/shared/lib";
import { ContactInfo } from "./ContactInfo";

type Variant = "home" | "page";
type Props = { variant?: Variant };

const viewportOnce = { once: true, amount: 0.15 } as const;

export function Contact({ variant = "home" }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const rt = shouldReduceMotion ? { duration: 0 } : undefined;

  return (
    <section className="bg-[#0f1922] py-16 sm:py-20 lg:py-24">
      <Container>
        {variant === "home" && (
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeftVariants}
            transition={rt ?? springSoft}
            className="mb-10 flex items-center gap-4 border-b border-white/6 pb-6 sm:mb-16 sm:pb-8"
          >
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-caption font-bold tracking-[0.22em] text-white/30 uppercase">
              Контакты
            </span>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <ContactInfo variant={variant} />
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleInVariants}
            transition={rt ?? springGentle}
            className="lg:col-span-5"
          >
            <div className="rounded-[0_2rem_0_0] border border-white/7 bg-white/4 p-6 sm:p-8 lg:p-10">
              <ContactForm dark />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}