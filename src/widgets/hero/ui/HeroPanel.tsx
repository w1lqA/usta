import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroSlide } from "../model/slides";
import { cn } from "@/shared/lib";

type Props = {
  slide: HeroSlide;
  isActive: boolean;
};

export function HeroPanel({ slide, isActive }: Props) {
  return (
    <div
      className={cn(
        "transition-all duration-700",
        isActive
          ? "translate-y-0 opacity-100"
          : "pointer-events-none absolute inset-0 translate-y-[1.125rem] opacity-0",
      )}
    >
      <div
        className={cn(
          "glass rounded-3xl flex flex-col w-full gap-4 border-l-[0.1875rem] border-l-brand-accent",
          "shadow-lg",
          "py-9 pr-11 pb-8 pl-9",
        )}
      >
        <p className="text-label mb-5 text-brand-accent">{slide.label}</p>

        <h1 className="text-hero w-full font-extrabold text-dark-900 mb-5 whitespace-pre-line break-words hyphens-auto leading-none">
          {slide.title}
        </h1>

        <p className="text-body text-neutral-600 mb-7 leading-[1.65]">
          {slide.sub}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href={slide.ctaLink}
            className="btn btn-primary rounded-md"
          >
            {slide.cta}
            <ArrowRight size={14} />
          </Link>
          <Link
            href={slide.ctaSecondaryLink}
            className="btn btn-outline rounded-md"
          >
            {slide.ctaSecondary}
          </Link>
        </div>
      </div>
    </div>
  );
}