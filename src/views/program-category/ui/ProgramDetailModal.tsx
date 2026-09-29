"use client";

import { ArrowRight } from "lucide-react";
import type { Program } from "@/entities/program";
import { Modal } from "@/shared/ui";

type Props = {
  program: Program | null;
  onClose: () => void;
  onContact: () => void;
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

export function ProgramDetailModal({ program, onClose, onContact }: Props) {
  const open = Boolean(program);
  const breakdown = program ? formatBreakdown(program) : [];

  const handleContact = () => {
    onClose();
    onContact();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={program?.title}
      className="max-w-2xl"
    >
      {program && (
        <>
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
              <ul className="flex flex-col gap-2">
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
              <ul className="flex flex-col gap-2">
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
              <ul className="flex flex-col gap-2">
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
            <button
              type="button"
              onClick={handleContact}
              className="btn btn-primary w-full rounded-md"
            >
              Оставить заявку
              <ArrowRight size={15} />
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}