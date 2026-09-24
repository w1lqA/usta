import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Heading } from "@/shared/ui";
import { programs } from "@/entities/program";
import { ProgramCard } from "./ProgramCard";

export function Programs() {
  return (
    <Section surface="subtle" padding="lg">
      <Container>
        {/* Header */}
        <div className="mb-14 flex items-end justify-between border-b border-neutral-300 pb-8">
          <div>
            <p className="mb-4 text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
              Обучение
            </p>
            <Heading
              as="h2"
              level="heading-lg"
              className="leading-tight text-dark-900"
            >
              Программы обучения
            </Heading>
          </div>
          <Link
            href="/programs"
            className="hidden items-center gap-2 pb-1 text-sm font-semibold text-brand-accent transition-all hover:gap-3 sm:flex"
          >
            Все программы
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 3×2 equal grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/programs"
            className="btn btn-primary flex items-center justify-center gap-2 rounded-2xl text-sm font-bold"
          >
            Все программы
            <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}