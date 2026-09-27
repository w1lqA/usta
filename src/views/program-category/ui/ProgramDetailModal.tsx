"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import type { Program } from "@/entities/program";

type Props = {
  program: Program | null;
  onClose: () => void;
};

function formatBreakdown(program: Program): string[] {
  const rows: string[] = [];
  const { breakdown } = program;

  if (breakdown.theory) rows.push(`${breakdown.theory} ч. — теоретическое обучение`);
  if (breakdown.practice) rows.push(`${breakdown.practice} ч. — практические занятия`);
  if (breakdown.internship) rows.push(`${breakdown.internship} ч. — стажировка`);
  if (breakdown.exam) rows.push(`${breakdown.exam} ч. — итоговая аттестация`);

  return rows;
}

export function ProgramDetailModal({ program, onClose }: Props) {
  if (!program) return null;

  const breakdown = formatBreakdown(program);

  return (
    <div
      className="fixed inset-0 z-(--z-modal) flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-neutral-100 bg-white px-7 py-5">
          <h3 className="text-base font-bold text-neutral-900 lg:text-lg">
            {program.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="flex-shrink-0 text-neutral-400 transition-colors hover:text-neutral-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-7">
          {/* Photo */}
          <div className="mb-7 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={program.image}
              alt={program.title}
              className="h-64 w-full object-cover"
            />
          </div>

          {program.note && (
            <p className="mb-6 text-sm leading-relaxed text-neutral-500 italic">
              {program.note}
            </p>
          )}

          {/* Hours */}
          <div className="mb-7 rounded-2xl bg-neutral-50 p-6">
            <p className="mb-1 text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase">
              Объём программы
            </p>
            <p className="mb-5 text-3xl font-extrabold text-brand-primary">
              {program.hours} ч.
            </p>

            {breakdown.length > 0 && (
              <ul className="space-y-2">
                {breakdown.map((row) => (
                  <li
                    key={row}
                    className="flex items-start gap-3 text-sm text-neutral-600"
                  >
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-neutral-300" />
                    <span>{row}</span>
                  </li>
                ))}
              </ul>
            )}

            {program.duration && (
              <p className="mt-4 text-sm text-neutral-500">
                Обучение рассчитано на {program.duration}
              </p>
            )}
          </div>

          {/* Formats */}
          {program.formats.length > 0 && (
            <div className="mb-7">
              <p className="mb-3 text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase">
                Форма обучения
              </p>
              <ul className="space-y-2">
                {program.formats.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Variants */}
          {program.variants && program.variants.length > 0 && (
            <div className="mb-7">
              <p className="mb-3 text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase">
                Группы обучения
              </p>
              <ul className="space-y-2">
                {program.variants.map((v) => (
                  <li
                    key={v}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-accent" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {program.mode && (
            <p className="mb-7 text-sm text-neutral-500">
              <span className="font-semibold text-neutral-700">
                Режим обучения:
              </span>{" "}
              {program.mode}
            </p>
          )}

          {/* CTA */}
          <div className="border-t border-neutral-100 pt-6">
            <p className="mb-4 text-sm text-neutral-500">
              Хотите записаться на программу или уточнить детали?
            </p>
            <Link
              href="/contacts"
              onClick={onClose}
              className="btn btn-primary w-full rounded-md"
            >
              Оставить заявку
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}