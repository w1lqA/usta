// src/views/education-information/sections/Scholarships.tsx
import { EducationSection } from "../ui/EducationSection";

const rows = [
  "Наличие и условия предоставления обучающимся стипендий",
  "Меры социальной поддержки",
  "Наличие общежития, интерната",
  "Количество жилых помещений в общежитии, интернате для иногородних обучающихся",
  "Формирование платы за проживание в общежитии",
];

export function Scholarships() {
  return (
    <EducationSection
      id="stipendii"
      title="Стипендии и меры поддержки обучающихся"
    >
      <div className="flex flex-col gap-3">
        {rows.map((label) => (
          <div
            key={label}
            className="flex flex-col gap-1 border-b border-border py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm text-neutral-700">{label}</span>
            <span className="text-sm font-medium text-neutral-500">
              Не предусмотрено
            </span>
          </div>
        ))}
      </div>
    </EducationSection>
  );
}