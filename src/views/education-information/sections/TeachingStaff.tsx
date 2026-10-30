// src/views/education-information/sections/TeachingStaff.tsx
import { EducationSection } from "../ui/EducationSection";

export function TeachingStaff() {
  return (
    <EducationSection id="ped-sostav" title="Педагогический состав">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-neutral-700">
          Персональный состав педагогических работников формируется по мере
          приёма на работу и утверждается приказом руководителя организации.
        </p>
        <p className="text-sm text-neutral-700">
          Требования к квалификации педагогических работников установлены
          должностной инструкцией преподавателя.
        </p>
        <a
          href="/documents/sveden/local-acts/23-teacher-job.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-accent hover:underline"
        >
          Должностная инструкция преподавателя →
        </a>
      </div>
    </EducationSection>
  );
}