"use client";

import { FileText, X } from "lucide-react";
import { cn } from "@/shared/lib";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function LicenseModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-(--z-modal) flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-[0_1.5rem_0_0] bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-7 py-5">
          <h3 className="text-sm font-bold text-neutral-900">
            Лицензия на образовательную деятельность
          </h3>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="text-neutral-400 transition-colors hover:text-neutral-700"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-7">
          <div className="flex min-h-[22.5rem] flex-col items-center justify-center border border-dashed border-neutral-300 bg-neutral-100 p-12">
            <FileText size={32} className="mb-5 text-neutral-400" />
            <p className="text-center text-sm text-neutral-400">
              Скан лицензии будет добавлен заказчиком
            </p>
            <p className="mt-1 text-center text-xs text-neutral-300">
              [Placeholder — документ предоставит организация]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}