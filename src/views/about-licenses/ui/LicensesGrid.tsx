"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Container, Section } from "@/shared/ui";
import { licenseDocuments, type LicenseDocument } from "@/entities/document";
import { DocumentLightbox } from "@/features/document-lightbox";

export function LicensesGrid() {
  const [active, setActive] = useState<LicenseDocument | null>(null);

  return (
    <Section padding="default" surface="surface">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {licenseDocuments.map((doc) => (
            <button
              key={doc.id}
              type="button"
              onClick={() => setActive(doc)}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white text-left shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Preview */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-3xl bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand-primary/0 opacity-0 transition-all duration-300 group-hover:bg-brand-primary/40 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-brand-primary">
                    <Maximize2 size={13} />
                    Увеличить
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-1 flex-col gap-2 px-6 py-5">
                <p className="text-caption font-bold tracking-[0.14em] text-brand-accent uppercase">
                  {doc.fileType === "license"
                    ? "Лицензия"
                    : doc.fileType === "certificate"
                      ? "Сертификат"
                      : "Документ"}
                </p>
                <p className="text-sm leading-snug font-semibold text-neutral-900">
                  {doc.title}
                </p>
                {doc.description && (
                  <p className="text-xs leading-relaxed text-neutral-500">
                    {doc.description}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </Container>

      <DocumentLightbox
        open={!!active}
        image={active?.image ?? ""}
        title={active?.title ?? ""}
        onClose={() => setActive(null)}
      />
    </Section>
  );
}