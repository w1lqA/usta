// src/widgets/license/ui/LicensePreview.tsx
import { FileText, ExternalLink } from "lucide-react";

const LICENSE_PDF =
  "/documents/sveden/registration/license-extract.pdf";
const LICENSE_PREVIEW =
  "/documents/sveden/registration/license-preview.png";

export function LicensePreview() {
  return (
    <a
      href={LICENSE_PDF}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full max-w-[32rem]"
      style={{ aspectRatio: "1/1.41" }}
      aria-label="Открыть выписку из реестра лицензий (PDF)"
    >
      <div className="glass-dark flex h-full w-full flex-col rounded-[0_2rem_0_2rem] border border-white/10 p-8">
        <div className="mb-7 flex items-center gap-3">
          <FileText size={18} className="text-brand-green" />
          <span className="text-caption font-bold tracking-wide text-white/75 uppercase">
            Выписка из реестра лицензий
          </span>
        </div>

        {/* Превью первого листа PDF — заполняет «пустую» область */}
        <div className="relative flex-1 overflow-hidden rounded-md border border-white/10 bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LICENSE_PREVIEW}
            alt="Первая страница выписки из реестра лицензий"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          {/* Мягкая тень снизу, чтобы документ «утопал» в стекле */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 65%, rgba(11,23,35,0.35) 100%)",
            }}
          />
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-caption text-white/30">PDF</span>
          <span className="flex items-center gap-1.5 text-caption text-white/50 transition-colors group-hover:text-white/80">
            Открыть
            <ExternalLink size={11} />
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[0_2rem_0_2rem] bg-brand-green/10 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="glass-dark-soft flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold text-white">
          <ExternalLink size={13} /> Открыть PDF
        </div>
      </div>
    </a>
  );
}