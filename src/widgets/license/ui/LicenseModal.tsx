"use client";

import { FileText } from "lucide-react";
import { Modal } from "@/shared/ui";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function LicenseModal({ open, onClose }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Лицензия на образовательную деятельность"
      className="max-w-lg"
    >
      <div className="flex min-h-[22.5rem] flex-col items-center justify-center border border-dashed border-neutral-300 bg-neutral-100 p-12">
        <FileText size={32} className="mb-5 text-neutral-400" />
        <p className="text-center text-sm text-neutral-400">
          Скан лицензии будет добавлен заказчиком
        </p>
        <p className="mt-1 text-center text-xs text-neutral-300">
          [Placeholder — документ предоставит организация]
        </p>
      </div>
    </Modal>
  );
}