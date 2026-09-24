import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Heading, Text } from "@/shared/ui";
import { AboutAdvantages } from "./AboutAdvantages";
import { AboutImage } from "./AboutImage";

export function About() {
  return (
    <Section surface="surface" padding="lg">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-0">
          {/* Left — 7 cols: label + massive heading + body */}
          <div className="lg:col-span-7 lg:pr-20 flex flex-col gap-6">
            {/* Section marker */}
            <div className="mb-12 flex items-center gap-4">
              <div className="h-px w-8 bg-brand-accent" />
              <span className="text-caption font-bold uppercase tracking-[0.22em] text-neutral-500">
                О нас
              </span>
            </div>

            <Heading
              as="h2"
              level="display-lg"
              className="mb-10 text-dark-900"
            >
              Скорость.
              <br />
              <span className="text-brand-accent">Точность.</span>
              <br />
              Результат.
            </Heading>

            <div className="max-w-[36rem] flex flex-col gap-5">
              <Text size="lg" className="text-neutral-700">
                В основе работы АНО ДПО УЦ «УСТА» лежит безупречная
                клиентоориентированность. Наша главная «изюминка» — сочетание
                высокой скорости подготовки с индивидуальным подходом к каждому
                клиенту.
              </Text>
              <Text className="text-neutral-500">
                Мы ценим ваше время и уделяем максимум внимания вашим запросам,
                чтобы обеспечить именно тот результат, который вам нужен.
              </Text>
            </div>

            <AboutAdvantages />

            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 text-sm font-bold text-brand-primary transition-all hover:gap-4"
            >
              Подробнее о центре
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — 5 cols: image + badge */}
          <div className="relative lg:col-span-5">
            {/* Thin vertical accent line */}
            <div
              className="absolute top-0 bottom-0 -left-8 hidden w-px lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #e5e4e0 20%, #e5e4e0 80%, transparent)",
              }}
            />

            <AboutImage />
          </div>
        </div>
      </Container>
    </Section>
  );
}