"use client";

import { Eye } from "lucide-react";
import type { Program } from "@/entities/program";
import { cn } from "@/shared/lib";

type Props = {
  program: Program;
  index: number;
  onOpen: (program: Program) => void;
};

function formatBreakdown(program: Program): string[] {
  const rows: string[] = [];
  const { breakdown } = program;

  if (breakdown.theory) {
    rows.push(`${breakdown.theory} ч. — теоретическое обучение`);
  }
  if (breakdown.practice) {
    rows.push(`${breakdown.practice} ч. — практические занятия`);
  }
  if (breakdown.internship) {
    rows.push(`${breakdown.internship} ч. — стажировка`);
  }
  if (breakdown.exam) {
    rows.push(`${breakdown.exam} ч. — итоговая аттестация`);
  }

  return rows;
}

export function ProgramItem({ program, index, onOpen }: Props) {
  // Чередование: чётные — фото слева, нечётные — фото справа
  const isReversed = index % 2 === 1;

  const breakdown = formatBreakdown(program);

  return (
    <div
      className={cn(
        "grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2",
      )}
    >
      {/* Photo */}
      <div
        className={cn(
          "relative min-h-[18rem] lg:min-h-[26rem]",
          isReversed && "lg:order-2",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={program.image}
          alt={program.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col justify-between gap-6 p-8 lg:p-12",
          isReversed && "lg:order-1",
        )}
      >
        <div>
          <h3 className="mb-5 text-xl leading-snug font-bold text-dark-900 lg:text-2xl">
            {program.title}
          </h3>

          {program.note && (
            <p className="mb-5 text-sm leading-relaxed text-neutral-500 italic">
              {program.note}
            </p>
          )}

          <p className="mb-4 text-sm font-semibold text-neutral-700">
            Программа рассчитана на {program.hours} часов
          </p>

          {breakdown.length > 0 && (
            <ul className="mb-5 space-y-1.5">
              {breakdown.map((row) => (
                <li
                  key={row}
                  className="flex items-start gap-3 text-sm text-neutral-500"
                >
                  <span className="mt-2 h-px w-4 flex-shrink-0 bg-neutral-300" />
                  <span>{row}</span>
                </li>
              ))}
            </ul>
          )}

          {program.duration && (
            <p className="mb-5 text-sm text-neutral-500">
              Обучение рассчитано на {program.duration}
            </p>
          )}

          {program.variants && program.variants.length > 0 && (
            <div className="mb-5">
              <p className="mb-2 text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase">
                Группы обучения
              </p>
              <ul className="space-y-1.5">
                {program.variants.map((v) => (
                  <li key={v} className="text-sm text-neutral-600">
                    · {v}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {program.formats.length > 0 && (
            <div className="mb-5">
              <p className="mb-2 text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase">
                Форма обучения
              </p>
              <ul className="space-y-1.5">
                {program.formats.map((f) => (
                  <li key={f} className="text-sm text-neutral-600">
                    · {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {program.mode && (
            <p className="text-sm text-neutral-500">
              Режим обучения — {program.mode}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => onOpen(program)}
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-accent transition-all hover:gap-3"
        >
          <Eye size={15} />
          Просмотреть
        </button>
      </div>
    </div>
  );
}
