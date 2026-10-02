"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { HeroSlide } from "../model/slides";
import { cn, springSoft } from "@/shared/lib";

type Props = {
  slide: HeroSlide;
  isActive: boolean;
};

export function HeroPanel({ slide, isActive }: Props) {
  const TitleTag: "h1" | "h2" = isActive ? "h1" : "h2";
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "w-full transition-all duration-700",
        isActive
          ? "translate-y-0 opacity-100"
          : "pointer-events-none absolute inset-0 translate-y-[1.125rem] opacity-0",
      )}
    >
      <motion.div
        initial={
          shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.98 }
        }
        animate={
          isActive
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 40, scale: 0.98 }
        }
        transition={shouldReduceMotion ? { duration: 0 } : springSoft}
        className={cn(
          "glass flex w-full flex-col gap-4 rounded-3xl border-l-[0.1875rem] border-l-brand-accent",
          "px-5 py-5 shadow-lg sm:gap-5 sm:px-7 sm:py-7 md:px-9 md:py-8",
        )}
      >
        <p className="text-label text-brand-accent">{slide.label}</p>

        <TitleTag className="mt-0.5 mb-1 text-[clamp(1.5rem,6vw,3.25rem)] leading-[1.05] font-extrabold text-dark-900 sm:mt-1 sm:mb-2 sm:max-w-[20ch]">
          {slide.title}
        </TitleTag>

        <ul className="mb-2 flex flex-col gap-2 sm:mb-4 sm:gap-2.5">
          {slide.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent/10">
                <Check size={9} className="text-brand-accent" strokeWidth={3} />
              </span>
              <span className="text-xs leading-snug text-neutral-600 sm:text-sm">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={`/programs/${slide.slug}`}
          className="btn btn-primary w-full rounded-md sm:w-fit"
        >
          Смотреть направление
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  );
}