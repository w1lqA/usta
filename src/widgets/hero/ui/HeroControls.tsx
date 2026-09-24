"use client";

import { cn } from "@/shared/lib";

type Props = {
  total: number;
  active: number;
  progress: number;
  onPrev: () => void;
  onNext: () => void;
  onDot: (idx: number) => void;
};

export function HeroControls({
  total,
  active,
  progress,
  onPrev,
  onNext,
  onDot,
}: Props) {
  return (
    <div className="flex flex-col items-end gap-4">
      <div className="text-caption font-semibold tabular-nums tracking-wide">
        <span className="text-white/90">
          {String(active + 1).padStart(2, "0")}
        </span>
        <span className="mx-1.5 text-white/30">/</span>
        <span className="text-white/30">{String(total).padStart(2, "0")}</span>
      </div>

      {/* Progress */}
      <div className="h-px w-16 overflow-hidden bg-white/20">
        <div
          className="h-full bg-brand-green"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Arrows */}
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          aria-label="Назад"
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-sm",
            "border border-white/20 text-white/50",
            "transition-all hover:border-white/55 hover:text-white",
          )}
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={onNext}
          aria-label="Вперёд"
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-sm",
            "border border-white/20 text-white/50",
            "transition-all hover:border-white/55 hover:text-white",
          )}
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onDot(idx)}
            aria-label={`Слайд ${idx + 1}`}
            className={cn(
              "h-0.5 transition-all duration-300",
              idx === active
                ? "w-7 bg-brand-green"
                : "w-3 bg-white/25 hover:bg-white/45",
            )}
          />
        ))}
      </div>
    </div>
  );
}