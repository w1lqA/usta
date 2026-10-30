// src/views/education-information/sections/Management.tsx
import { EducationSection } from "../ui/EducationSection";

export function Management() {
  return (
    <EducationSection id="rukovodstvo" title="Руководство">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-neutral-900">
          Руководитель образовательной организации:
        </p>
        <p className="text-sm">
          Директор — Мамажанов Адилет
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-neutral-900">
          Контактные данные:
        </p>
        <ul className="flex flex-col gap-2 text-sm">
          <li>
            · <strong>Телефон:</strong>{" "}
            <a href="tel:+79602919052" className="text-brand-primary hover:underline">
              +7 (960) 291-90-52
            </a>
            ,{" "}
            <a href="tel:+79998707405" className="text-brand-primary hover:underline">
              +7 (999) 870-74-05
            </a>
          </li>
          <li>
            · <strong>Email:</strong>{" "}
            <a href="mailto:info@usta.com.ru" className="text-brand-primary hover:underline">
              info@usta.com.ru
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-neutral-900">
          Должностная инструкция руководителя:
        </p>
        <a
          href="/documents/sveden/local-acts/22-director-job.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-accent hover:underline"
        >
          Открыть документ →
        </a>
      </div>
    </EducationSection>
  );
}