"use client";

import { slides } from "../model/slides";
import { useHeroSlider } from "../model/use-hero-slider";
import { HeroPanel } from "./HeroPanel";
import { HeroControls } from "./HeroControls";
import { Container } from "@/shared/ui";
import { cn } from "@/shared/lib";

export function Hero() {
  const { activeSlide, progress, goTo, next, prev } = useHeroSlider(
    slides.length,
  );

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-dark-950",
        "h-[calc(100vh-var(--header-height))]",
        "min-h-(--hero-min-height) max-h-(--hero-max-height)",
        "rounded-b-3xl",
      )}
    >
      {/* Full-bleed background slides */}
      {slides.map((slide, idx) => {
        const isActive = idx === activeSlide;
        return (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              isActive ? "opacity-100" : "opacity-0",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt=""
              className={cn(
                "absolute inset-0 h-full w-full object-cover",
                "transition-transform duration-[7s] ease-out",
                isActive ? "scale-[1.04]" : "scale-100",
                "brightness-[0.52]",
              )}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(118deg, rgba(8,14,20,0.72) 0%, rgba(8,14,20,0.22) 40%, transparent 62%)",
              }}
            />
          </div>
        );
      })}

      {/* Content overlay — constrained to Container width */}
      <Container className="pointer-events-none relative h-full">
        {/* Panel — bottom left */}
        <div className="pointer-events-auto absolute bottom-14 left-0 w-[min(30rem,88%)]">
          <div className="relative">
            {slides.map((slide, idx) => (
              <HeroPanel
                key={slide.id}
                slide={slide}
                isActive={idx === activeSlide}
              />
            ))}
          </div>
        </div>

        {/* Controls — bottom right */}
        <div className="pointer-events-auto absolute bottom-14 right-0 z-10">
          <HeroControls
            total={slides.length}
            active={activeSlide}
            progress={progress}
            onPrev={prev}
            onNext={next}
            onDot={goTo}
          />
        </div>
      </Container>
    </section>
  );
}