"use client";

import { FileText, Eye } from "lucide-react";

type Props = {
  onOpen: () => void;
};

export function LicensePreview({ onOpen }: Props) {
  return (
    <button
      onClick={onOpen}
      className="group relative w-full max-w-[17.5rem]"
      style={{ aspectRatio: "1/1.41" }}
      aria-label="Открыть лицензию"
    >
      <div className="glass-dark flex h-full w-full flex-col rounded-[0_2rem_0_2rem] border border-white/10 p-8">
        <div className="mb-7 flex items-center gap-3">
          <FileText size={18} className="text-brand-green" />
          <span className="text-caption font-bold tracking-wide text-white/75 uppercase">
            Лицензия
          </span>
        </div>
        <div className="flex-1 space-y-3.5">
          {[95, 80, 88, 72, 85, 70, 60, 78, 64, 82].map((w, i) => (
            <div
              key={i}
              className="h-1"
              style={{
                width: `${w}%`,
                background: `rgba(255,255,255,${0.07 + i * 0.01})`,
              }}
            />
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-base">
            ⚜
          </div>
          <span className="text-caption text-white/30">Бессрочно</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[0_2rem_0_2rem] bg-brand-green/10 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="glass-dark-soft flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold text-white">
          <Eye size={13} /> Открыть
        </div>
      </div>
    </button>
  );
}