import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { HeroSlide } from "../model/slides";
import { cn } from "@/shared/lib";

type Props = {
  slide: HeroSlide;
  isActive: boolean;
};

export function HeroPanel({ slide, isActive }: Props) {
  const TitleTag: "h1" | "h2" = isActive ? "h1" : "h2";

  return (
    <div
      className={cn(
        "w-full max-w-[30rem] transition-all duration-700",
        isActive
          ? "translate-y-0 opacity-100"
          : "pointer-events-none absolute inset-0 translate-y-[1.125rem] opacity-0",
      )}
    >
      <div
        className={cn(
          "glass flex flex-col gap-4 rounded-3xl border-l-[0.1875rem] border-l-brand-accent",
          "w-full px-8 py-7 shadow-lg",
        )}
      >
        <p className="text-label text-brand-accent">{slide.label}</p>

        <TitleTag className="text-hero font-extrabold leading-none text-dark-900">
          {slide.title}
        </TitleTag>

        <ul className="flex flex-col gap-2 my-2">
          {slide.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent/10">
                <Check
                  size={9}
                  className="text-brand-accent"
                  strokeWidth={3}
                />
              </span>
              <span className="text-sm leading-snug text-neutral-600">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={`/programs/${slide.slug}`}
          className="btn btn-primary w-fit rounded-md"
        >
          Смотреть направление
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}