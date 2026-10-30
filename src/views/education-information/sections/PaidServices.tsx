// src/views/education-information/sections/PaidServices.tsx
import { EducationSection } from "../ui/EducationSection";

export function PaidServices() {
  return (
    <EducationSection id="platnye-uslugi" title="Платные образовательные услуги">
      <div className="flex flex-col gap-3">
        <p className="text-sm">
          Образовательные услуги в ООО «УСТА» являются платными.
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Порядок оказания платных образовательных услуг
        </h3>
        <a
          href="/documents/sveden/paid-services/06-paid-services.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-accent hover:underline"
        >
          Положение о порядке оказания платных образовательных услуг →
        </a>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Образцы договоров
        </h3>
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border bg-neutral-50 p-4">
            <p className="mb-1 text-sm font-medium text-neutral-900">
              Договор с физическими лицами
            </p>
            <p className="text-sm text-neutral-600">
              Образец договора предоставляется по запросу. Условия договора
              определяются Положением о порядке оказания платных образовательных
              услуг.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-neutral-50 p-4">
            <p className="mb-1 text-sm font-medium text-neutral-900">
              Договор с юридическими лицами
            </p>
            <p className="text-sm text-neutral-600">
              Образец договора предоставляется по запросу. Условия договора
              определяются Положением о порядке оказания платных образовательных
              услуг.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Стоимость обучения
        </h3>
        <a
          href="/documents/sveden/paid-services/24-cost-order.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-accent hover:underline"
        >
          Приказ об утверждении стоимости обучения →
        </a>
      </div>
    </EducationSection>
  );
}