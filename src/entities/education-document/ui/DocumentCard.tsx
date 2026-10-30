import { FileText, ExternalLink, Download } from "lucide-react";
import type { EducationDocument } from "../model/types";

type Props = {
  document: EducationDocument;
};

export function DocumentCard({ document }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-white p-5 transition-colors hover:border-brand-accent/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
          <FileText size={18} className="text-brand-accent" />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-neutral-900">
            {document.title}
          </p>
          {document.description && (
            <p className="text-xs text-neutral-500">{document.description}</p>
          )}
          <span className="text-caption text-neutral-400 uppercase">
            {document.format}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={document.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-brand-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-deep"
        >
          <ExternalLink size={13} />
          Открыть
        </a>
        <a
          href={document.href}
          download
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-neutral-700 transition-colors hover:border-brand-accent hover:text-brand-primary"
        >
          <Download size={13} />
          Скачать
        </a>
      </div>
    </div>
  );
}