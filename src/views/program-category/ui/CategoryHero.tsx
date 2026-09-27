import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import type { ProgramCategory } from "@/entities/program-category";
import { Container } from "@/shared/ui";

type Props = {
  category: ProgramCategory;
};

export function CategoryHero({ category }: Props) {
  return (
    <section className="relative overflow-hidden bg-dark-950">
      {/* Фоновое изображение */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={category.heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-[0.42]"
      />

      {/* Затемняющий градиент слева */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(8,14,20,0.85) 0%, rgba(8,14,20,0.5) 55%, rgba(8,14,20,0.3) 100%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-12 lg:py-28">
          {/* Left — заголовок + описание */}
          <div className="lg:col-span-7">
            {/* Breadcrumbs */}
            <nav
              aria-label="Хлебные крошки"
              className="mb-8 flex flex-wrap items-center gap-2 text-caption text-white/40"
            >
              <Link
                href="/"
                className="transition-colors hover:text-white/70"
              >
                Главная
              </Link>
              <ChevronRight size={12} className="text-white/20" />
              <Link
                href="/programs"
                className="transition-colors hover:text-white/70"
              >
                Программы обучения
              </Link>
              <ChevronRight size={12} className="text-white/20" />
              <span className="text-white/70">{category.title}</span>
            </nav>

            {/* Label */}
            <p className="mb-5 text-caption font-bold tracking-[0.24em] text-brand-green uppercase">
              {category.heroLabel}
            </p>

            <h1 className="mb-6 max-w-[36rem] text-4xl leading-[1.05] font-extrabold text-white lg:text-6xl">
              {category.title}
            </h1>

            <p className="max-w-[34rem] text-base leading-[1.7] text-white/55">
              {category.shortDescription}
            </p>
          </div>

          {/* Right — чек-лист */}
          {category.checklist.length > 0 && (
            <div className="lg:col-span-5">
              <div className="glass-dark rounded-3xl border border-white/10 p-8">
                <p className="mb-6 text-caption font-bold tracking-[0.22em] text-white/40 uppercase">
                  Программы направления
                </p>
                <ul className="space-y-4">
                  {category.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-green/15">
                        <Check
                          size={11}
                          className="text-brand-green"
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-sm leading-relaxed text-white/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
