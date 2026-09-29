import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Heading } from "@/shared/ui";
import { programCategories } from "@/entities/program-category";
import { ProgramCard } from "./ProgramCard";

export function Programs() {
  return (
    <Section surface="subtle" padding="default">
      <Container>
        <div className="mb-14 flex items-end justify-between border-b border-neutral-300 pb-8">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-8 bg-brand-accent" />
              <span className="text-caption font-bold uppercase tracking-[0.22em] text-neutral-500">
                Обучение
              </span>
            </div>
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programCategories.map((category) => (
            <ProgramCard key={category.slug} category={category} />
          ))}
        </div>

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
    </Section >
  );
}