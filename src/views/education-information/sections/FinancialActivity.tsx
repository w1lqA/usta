// src/views/education-information/sections/FinancialActivity.tsx
import { EducationSection } from "../ui/EducationSection";

export function FinancialActivity() {
  return (
    <EducationSection
      id="finansovo-hozyaystvennaya"
      title="Финансово-хозяйственная деятельность"
    >
      <div className="flex flex-col gap-3">
        <p className="text-sm">
          Образовательная деятельность, финансовое обеспечение которой
          осуществляется за счёт бюджетных ассигнований федерального бюджета,
          бюджетов субъектов Российской Федерации, местных бюджетов, не
          реализуется.
        </p>
        <p className="text-sm">
          Образовательная деятельность, финансовое обеспечение которой
          осуществляется по договорам об образовании за счёт средств физических
          и (или) юридических лиц, составляет <strong>100%</strong>.
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Поступление и расходование финансовых и материальных средств по итогам
          финансового года
        </h3>
        <p className="text-sm text-neutral-700">
          Отчёт о поступлении и расходовании финансовых и материальных средств
          формируется по итогам финансового года.
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          План финансово-хозяйственной деятельности
        </h3>
        <p className="text-sm text-neutral-700">
          Организация является коммерческой и не формирует план
          финансово-хозяйственной деятельности в порядке, установленном для
          государственных и муниципальных учреждений.
        </p>
      </div>
    </EducationSection>
  );
}