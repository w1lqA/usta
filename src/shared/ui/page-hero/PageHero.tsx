"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { Container } from "../container";
import { cn } from "@/shared/lib";

export type Breadcrumb = {
  label: string;
  href?: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
  title: string;
  description?: ReactNode;
  className?: string;
};

/**
 * Пятна света.
 * - left/top — позиция в % от hero (якорь пятна).
 * - size — размер пятна в % от ширины hero.
 * - drift — амплитуда блуждания в px (не в %, чтобы не зависеть от размера пятна).
 * - parallax — коэффициент отставания от скролла (0 = стоит, 1 = едет как hero).
 */
const blobs = [
  {
    // Левое верхнее — база
    left: "-15%",
    top: "-20%",
    size: "85%",
    drift: { x: 40, y: 30, duration: 26, delay: 0 },
    parallax: 0.65,
    background:
      "radial-gradient(circle, rgba(39,124,122,0.38) 0%, transparent 70%)",
  },
  {
    // Левое нижнее
    left: "-10%",
    top: "60%",
    size: "70%",
    drift: { x: 30, y: 25, duration: 28, delay: 6 },
    parallax: 0.5,
    background:
      "radial-gradient(circle, rgba(24,119,121,0.34) 0%, transparent 72%)",
  },
];

export function PageHero({
  breadcrumbs,
  title,
  description,
  className,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  // На каждый блоб — свой motion value для parallax.
  // Хук нельзя вызывать в цикле, поэтому фиксированное количество.
  const parallaxY0 = useTransform(smoothProgress, [0, 1], ["0px", "200px"]);
  const parallaxY1 = useTransform(smoothProgress, [0, 1], ["0px", "150px"]);
  const parallaxValues = [parallaxY0, parallaxY1];

  return (
    <section
      ref={ref}
      className={cn("relative overflow-hidden bg-dark-900", className)}
    >
      <div className="pointer-events-none absolute inset-0">
        {blobs.map((blob, idx) => {
          const parallaxMV = parallaxValues[idx];

          return (
            <motion.div
              key={idx}
              className="absolute"
              style={{
                // Позиция — через left/top в % от hero (не через translate).
                left: blob.left,
                top: blob.top,
                width: blob.size,
                height: blob.size,
                // Параллакс — пишем в CSS-переменную.
                // motion поддерживает запись MotionValue в кастомные CSS-свойства.
                ["--parallax-y" as string]: parallaxMV,
                transform: "translate3d(0, var(--parallax-y, 0px), 0)",
                willChange: "transform",
              }}
            >
              <motion.div
                className="h-full w-full"
                style={{
                  background: blob.background,
                  filter: "blur(60px)",
                }}
                initial={{
                  x: -blob.drift.x,
                  y: -blob.drift.y,
                }}
                animate={{
                  // Блуждание — в px, амплитуда предсказуема.
                  x: [
                    -blob.drift.x,
                    blob.drift.x,
                    0,
                    -blob.drift.x,
                  ],
                  y: [
                    -blob.drift.y,
                    0,
                    blob.drift.y,
                    -blob.drift.y,
                  ],
                }}
                transition={{
                  duration: blob.drift.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: blob.drift.delay,
                }}
              />
            </motion.div>
          );
        })}

        {/* Сетка */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Нижний градиент для читаемости текста */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,23,35,0) 0%, rgba(11,23,35,0) 60%, rgba(11,23,35,0.4) 100%)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="py-20 lg:py-28">
          <nav
            aria-label="Хлебные крошки"
            className="mb-8 flex flex-wrap items-center gap-2 text-caption text-white/40"
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;

              return (
                <span
                  key={`${crumb.label}-${idx}`}
                  className="flex items-center gap-2"
                >
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white/70"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{crumb.label}</span>
                  )}
                  {!isLast && (
                    <ChevronRight size={12} className="text-white/20" />
                  )}
                </span>
              );
            })}
          </nav>

          <h1 className="mb-6 max-w-[44rem] text-4xl leading-[1.05] font-extrabold text-white lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="max-w-[40rem] text-lg leading-[1.65] text-white/55">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}