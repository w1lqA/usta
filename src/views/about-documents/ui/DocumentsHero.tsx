import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/shared/ui";

export function DocumentsHero() {
  return (
    <section className="relative overflow-hidden bg-dark-900">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 0%, rgba(39,124,122,0.22) 0%, transparent 60%)",
        }}
      />

      <Container className="relative">
        <div className="py-20 lg:py-28">
          <nav
            aria-label="Хлебные крошки"
            className="mb-8 flex flex-wrap items-center gap-2 text-caption text-white/40"
          >
            <Link href="/" className="transition-colors hover:text-white/70">
              Главная
            </Link>
            <ChevronRight size={12} className="text-white/20" />
            <Link
              href="/about"
              className="transition-colors hover:text-white/70"
            >
              О центре
            </Link>
            <ChevronRight size={12} className="text-white/20" />
            <span className="text-white/70">Документы</span>
          </nav>

          <h1 className="mb-6 max-w-[44rem] text-4xl leading-[1.05] font-extrabold text-white lg:text-6xl">
            Документы
          </h1>

          <p className="max-w-[40rem] text-lg leading-[1.65] text-white/55">
            Прайс-лист, реквизиты, перечень образовательных программ и другие
            документы учебного центра.
          </p>
        </div>
      </Container>
    </section>
  );
}