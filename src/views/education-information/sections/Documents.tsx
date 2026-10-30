// src/views/education-information/sections/Documents.tsx
import { EducationSection } from "../ui/EducationSection";
import {
  DocumentCard,
  educationDocumentsByCategory,
} from "@/entities/education-document";

export function Documents() {
  return (
    <EducationSection id="dokumenty" title="Документы">
      {/* Учредительные */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Учредительные документы и регистрационные сведения
        </h3>
        <div className="flex flex-col gap-3">
          {educationDocumentsByCategory.registration.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      </div>

      {/* Правила */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Правила внутреннего распорядка
        </h3>
        <div className="flex flex-col gap-3">
          {educationDocumentsByCategory["local-acts"]
            .filter((d) => ["lnk-labor", "lnk-students"].includes(d.id))
            .map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
        </div>
        <p className="mt-3 text-sm text-neutral-500">
          Коллективный договор — не предусмотрен.
        </p>
      </div>

      {/* ЛНА */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Локальные нормативные акты
        </h3>
        <div className="flex flex-col gap-3">
          {educationDocumentsByCategory["local-acts"]
            .filter(
              (d) =>
                !["lnk-labor", "lnk-students", "lnk-language"].includes(d.id),
            )
            .map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm text-neutral-500">
        <p>
          Отчёт о результатах самообследования формируется по итогам
          календарного года.
        </p>
        <p>
          Предписания органов государственного контроля (надзора) в сфере
          образования — не предусмотрены.
        </p>
      </div>
    </EducationSection>
  );
}