"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container, Section, Heading, Text, ActionLink } from "@/shared/ui";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeUpVariants,
  springGentle,
  springSoft,
  staggerContainer,
} from "@/shared/lib";
import { programCategories } from "@/entities/program-category";
import { ProgramCard } from "./ProgramCard";

export function Programs() {
  const shouldReduceMotion = useReducedMotion();
  const rt = shouldReduceMotion ? { duration: 0 } : undefined;

  return (
    <Section surface="subtle" padding="default">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ─── Left — vertical list, each card is its own motion unit ─── */}
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-7">
            {programCategories.map((category, idx) => {
              // Контролируемая вариация направления: чётные — снизу, нечётные — снизу с чуть большей амплитудой.
              // Никаких left/right/rotate — единый motion language.
              const yOffset = idx % 2 === 0 ? 36 : 28;

              return (
                <motion.div
                  key={category.slug}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: yOffset, scale: 0.97 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={rt ?? springSoft}
                >
                  <ProgramCard category={category} />
                </motion.div>
              );
            })}
          </div>

          {/* ─── Right — sticky editorial column, appears first ─── */}
          <motion.aside
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: 24, scale: 0.98 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, x: 0, scale: 1 }
            }
            viewport={{ once: true, amount: 0.15 }}
            transition={rt ?? springGentle}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <div className="lg:sticky lg:top-[calc(var(--header-height)+2.5rem)]">
              {/* Внутренний stagger только для 4 блоков info — не для карточек */}
              <motion.div
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer(0.1, 0.05)}
              >
                <motion.div
                  variants={fadeInLeftVariants}
                  transition={rt ?? springGentle}
                  className="mb-6 flex items-center gap-4"
                >
                  <div className="h-px w-8 bg-brand-accent" />
                  <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
                    Обучение
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeUpVariants}
                  transition={rt ?? springGentle}
                >
                  <Heading
                    as="h2"
                    level="heading-lg"
                    className="mb-8 max-w-[16ch] leading-tight text-dark-900"
                  >
                    Программы
                    <br />
                    обучения
                  </Heading>
                </motion.div>

                <motion.div
                  variants={fadeUpVariants}
                  transition={rt ?? springSoft}
                >
                  <Text className="mb-10 max-w-[32rem] text-neutral-600">
                    Профессиональная подготовка, переподготовка и повышение
                    квалификации по направлениям охраны труда, пожарной и
                    транспортной безопасности, промышленной и экологической
                    безопасности.
                  </Text>
                </motion.div>

                <motion.div
                  variants={fadeInLeftVariants}
                  transition={rt ?? springSoft}
                >
                  <ActionLink href="/about">Подробнее о центре</ActionLink>
                </motion.div>
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </Section>
  );
}