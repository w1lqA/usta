// src/views/education-information/sections/Vacancies.tsx
import { EducationSection } from "../ui/EducationSection";

export function Vacancies() {
  return (
    <EducationSection
      id="vakantnye-mesta"
      title="Вакантные места для приёма (перевода) обучающихся"
    >
      <p className="text-sm text-neutral-700">
        Вакантные места на обучение имеются всегда, так как образовательные
        услуги оказываются круглогодично и обучение по образовательным программам
        проводится по мере комплектования групп. Зачисление в группы обучения
        ведётся по результатам собеседования, согласно полученным заявкам
        физических или юридических лиц с заключением договора об оказании
        образовательных услуг.
      </p>
    </EducationSection>
  );
}