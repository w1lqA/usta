"use client";

import { Eye } from "lucide-react";
import { ActionLink } from "@/shared/ui";

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
    <div className="flex flex-col justify-center border-white/10 py-16 pr-0 lg:border-r lg:py-28 lg:pr-16">
      <div className="mb-10 flex items-center gap-4 lg:mb-12">
        <div className="h-px w-8 bg-brand-green" />
        <span className="text-caption font-bold tracking-[0.22em] text-white/50 uppercase">
          ЛИЦЕНЗИЯ
        </span>
      </div>

      <h2 className="mb-6 text-3xl leading-[1.1] font-extrabold text-white lg:text-5xl">
        Образовательная деятельность
        <br />
        <span className="text-white/45">на основании лицензии</span>
      </h2>

      <p className="mb-10 max-w-[27.5rem] text-base leading-[1.7] text-white/60 lg:mb-12 lg:text-lg">
        АНО ДПО УЦ «УСТА» ведёт образовательную деятельность на основании
        лицензии уполномоченного органа. Все удостоверения имеют юридическую
        силу и признаются работодателями по всей России.
      </p>

      <div className="mb-10 flex flex-col gap-4 lg:mb-12 lg:gap-5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="text-caption font-semibold tracking-wide text-white/30 uppercase sm:w-[8.5rem] sm:flex-shrink-0">
              {row.label}
            </span>
            <span className="hidden h-px flex-1 bg-white/10 sm:block" />
            <span className="text-xs leading-snug text-white/65 sm:max-w-[12.5rem] sm:text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="button"
          onClick={onOpen}
          className="btn btn-sm bg-white text-brand-primary hover:bg-white/90"
        >
          <Eye size={14} />
          Посмотреть лицензию
        </button>

        <ActionLink href="/about/documents" tone="light">
          Все документы
        </ActionLink>
      </div>
    </div>
  );
}