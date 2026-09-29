"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { Container, Section, Heading, Text, ActionLink } from "@/shared/ui";
import {
  fadeInLeftVariants,
  fadeUpVariants,
  springGentle,
  springSoft,
  staggerContainer,
} from "@/shared/lib";
import { AboutAdvantages } from "./AboutAdvantages";
import { AboutImage } from "./AboutImage";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const imageParallaxY = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? ["0px", "0px"] : ["40px", "-40px"],
  );
  const cardParallaxY = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? ["0px", "0px"] : ["80px", "-60px"],
  );

  const viewportOnce = { once: true, amount: 0.2 } as const;

  return (
    <div ref={sectionRef}>
      <Section surface="surface" padding="default" className="overflow-hidden">
        <Container>
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeftVariants}
            transition={shouldReduceMotion ? { duration: 0 } : springSoft}
            className="mb-16 flex items-center gap-4"
          >
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
              О нас
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-0">
            <motion.div
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer(0.12, 0.05)}
              className="flex flex-col lg:col-span-7 lg:pr-16"
            >
              <motion.div
                variants={fadeUpVariants}
                transition={shouldReduceMotion ? { duration: 0 } : springGentle}
              >
                <Heading
                  as="h2"
                  level="display-lg"
                  className="mb-10 max-w-[14ch] text-dark-900"
                >
                  Скорость.
                  <br />
                  <span className="text-brand-accent">Точность.</span>
                  <br />
                  Результат.
                </Heading>
              </motion.div>

              <motion.div
                variants={fadeUpVariants}
                transition={shouldReduceMotion ? { duration: 0 } : springSoft}
                className="mb-14 flex max-w-[36rem] flex-col gap-5"
              >
                <Text size="lg" className="text-neutral-700">
                  В основе работы АНО ДПО УЦ «УСТА» лежит безупречная
                  клиентоориентированность. Наша главная «изюминка» — сочетание
                  высокой скорости подготовки с индивидуальным подходом к
                  каждому клиенту.
                </Text>
                <Text className="text-neutral-500">
                  Мы ценим ваше время и уделяем максимум внимания вашим
                  запросам, чтобы обеспечить именно тот результат, который вам
                  нужен.
                </Text>
              </motion.div>

              <motion.div
                variants={fadeInLeftVariants}
                transition={shouldReduceMotion ? { duration: 0 } : springSoft}
              >
                <ActionLink href="/about">
                  Подробнее о центре
                </ActionLink>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5 lg:relative">
              <AboutImage
                imageParallaxY={imageParallaxY}
                cardParallaxY={cardParallaxY}
                shouldReduceMotion={!!shouldReduceMotion}
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}