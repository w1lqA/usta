import { FileText, Download, ExternalLink } from "lucide-react";
import { Container, Section } from "@/shared/ui";
import { pdfDocuments } from "@/entities/document";

export function DocumentsList() {
  return (
    <Section padding="default" surface="surface">
      <Container>
        <div className="flex flex-col gap-4">
          {pdfDocuments.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:p-7"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                  <FileText size={22} className="text-brand-accent" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-neutral-900 lg:text-base">
                    {doc.title}
                  </p>
                  {doc.description && (
                    <p className="text-xs leading-relaxed text-neutral-500 lg:text-sm">
                      {doc.description}
                    </p>
                  )}
                </div>
              </div>

              <a
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm w-fit rounded-md"
              >
                Посмотреть
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}