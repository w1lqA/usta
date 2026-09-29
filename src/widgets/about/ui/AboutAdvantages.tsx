"use client";

import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, ShieldCheck, Building2, FileText } from "lucide-react";
import { fadeUpVariants, springSoft, staggerContainer } from "@/shared/lib";

const advantages = [
  { icon: GraduationCap, label: "Высокая скорость подготовки" },
  { icon: ShieldCheck, label: "Лицензированный центр" },
  { icon: Building2, label: "Корпоративные программы" },
  { icon: FileText, label: "Индивидуальный подход" },
] as const;

export function AboutAdvantages() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer(0.06, 0.2)}
      className="grid max-w-[30rem] grid-cols-2 gap-4"
    >
      {advantages.map(({ icon: Icon, label }) => (
        <motion.div
          key={label}
          variants={fadeUpVariants}
          transition={shouldReduceMotion ? { duration: 0 } : springSoft}
          className="flex items-center gap-4"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-accent/5">
            <Icon size={17} className="text-brand-accent" />
          </span>
          <span className="text-sm font-medium text-neutral-700">{label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}