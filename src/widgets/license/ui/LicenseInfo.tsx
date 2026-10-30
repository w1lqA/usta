// src/widgets/license/ui/LicenseInfo.tsx
import { Eye } from "lucide-react";
import Link from "next/link";

const LICENSE_PDF =
  "/documents/sveden/registration/license-extract.pdf";

const rows = [
  { label: "Номер", value: "Л035-01275-20/04739757" },
  {
    label: "Орган выдачи",
    value: "Министерство образования Чеченской Республики",
  },
  { label: "Дата выдачи", value: "03.04.2026" },
  { label: "Срок действия", value: "Бессрочно" },
  {
    label: "Вид деятельности",
    value: "Дополнительное профессиональное образование, профессиональное обучение",
  },
] as const;

export function LicenseInfo() {
  return (
    <div className="flex flex-col justify-center border-white/10 py-16 pr-0 lg:border-r lg:py-28 lg:pr-16">
      <div className="mb-10 flex items-center gap-4 lg:mb-12">
        <div className="h-px w-8 bg-brand-green" />
        <span className="text-caption font-bold tracking-[0.22em] text-white/50 uppercase">
          Лицензия
        </span>
      </div>

      <h2 className="mb-6 text-3xl leading-[1.1] font-extrabold text-white lg:text-5xl">
        Образовательная деятельность
        <br />
        <span className="text-white/45">на основании лицензии</span>
      </h2>

      <p className="mb-10 max-w-[27.5rem] text-base leading-[1.7] text-white/60 lg:mb-12 lg:text-lg">
        ООО «УСТА» ведёт образовательную деятельность на основании бессрочной
        лицензии, выданной Министерством образования Чеченской Республики. Все
        выдаваемые документы имеют юридическую силу и признаются работодателями
        по всей России.
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
            <span className="text-xs leading-snug text-white/65 sm:max-w-[14rem] sm:text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={LICENSE_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm bg-white text-brand-primary hover:bg-white/90"
        >
          <Eye size={14} />
          Посмотреть выписку
        </a>

        <Link
          href="/sveden#osnovnye-svedeniya"
          className="text-sm font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Сведения об образовательной организации →
        </Link>
      </div>
    </div>
  );
}