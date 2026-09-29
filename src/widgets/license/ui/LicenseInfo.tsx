"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { ActionLink } from "@/src/shared/ui";

type Props = {
  onOpen: () => void;
};

const rows = [
  { label: "Орган выдачи", value: "Министерство просвещения РФ" },
  { label: "Срок действия", value: "Бессрочно" },
  {
    label: "Вид деятельности",
    value: "Дополнительное профессиональное образование",
  },
] as const;

export function LicenseInfo({ onOpen }: Props) {
  return (
    <div className="flex flex-col justify-center border-white/10 py-20 lg:border-r lg:py-28 pr-10 lg:pr-16">
      <div className="mb-12 flex items-center gap-4">
        <div className="h-px w-8 bg-brand-green" />
        <span className="text-caption font-bold uppercase text-neutral-500 tracking-[0.22em]">
          ЛИЦЕНЗИЯ
        </span>
      </div>

      <h2 className="mb-6 text-3xl leading-[1.1] font-extrabold text-white lg:text-5xl">
        Образовательная деятельность
        <br />
        <span className="text-white/45">на основании лицензии</span>
      </h2>

      <p className="mb-12 max-w-[27.5rem] text-lg leading-[1.7] text-white/60">
        АНО ДПО УЦ «УСТА» ведёт образовательную деятельность на основании
        лицензии уполномоченного органа. Все удостоверения имеют юридическую
        силу и признаются работодателями по всей России.
      </p>

      <div className="mb-12 space-y-5 max-w-[40rem]">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline gap-4">
            <span className="w-[8.5rem] flex-shrink-0 text-caption font-semibold tracking-wide text-white/30 uppercase">
              {row.label}
            </span>
            <div className="flex-1 border-b border-white/10" />
            <span className="max-w-[12.5rem] text-right text-xs leading-snug text-white/65">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-6">
        <button
          onClick={onOpen}
          className="btn btn-primary btn-sm text-brand-primary! bg-white!"
        >
          <Eye size={14} />
          Посмотреть лицензию
        </button>

        <ActionLink
          href="/about/documents"
          tone="light"
        >
          Все документы
        </ActionLink>
      </div>
    </div>
  );
}