// src/views/education-information/sections/Education.tsx
import { EducationSection } from "../ui/EducationSection";

const programs = [
  {
    name: "Кадровое делопроизводство",
    form: "Заочная, ЭО и ДОТ",
    hours: "72 ак. ч.",
    price: "10 000 ₽",
  },
  {
    name: "СЕКРЕТАРЬ-АДМИНИСТРАТОР",
    form: "Заочная, ЭО и ДОТ",
    hours: "72 ак. ч.",
    price: "14 000 ₽",
  },
];

export function Education() {
  return (
    <EducationSection id="obrazovanie" title="Образование">
      {/* Общие сведения */}
      <div className="flex flex-col gap-3">
        <p className="text-sm">
          <strong>Вид образования:</strong> профессиональное обучение,
          дополнительное профессиональное образование.
        </p>
        <p className="text-sm">
          <strong>Форма обучения:</strong> заочная, с применением исключительно
          электронного обучения и дистанционных образовательных технологий.
        </p>
        <p className="text-sm">
          <strong>Нормативный срок обучения:</strong> 72 академических часа.
        </p>
        <p className="text-sm">
          <strong>Язык обучения:</strong> русский.{" "}
          <a
            href="/documents/sveden/local-acts/01-language.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-accent hover:underline"
          >
            Положение о языке обучения →
          </a>
        </p>
        <p className="text-sm">
          <strong>Учебный процесс:</strong> осуществляется в течение всего
          календарного года на онлайн-платформе.
        </p>
      </div>

      {/* Реализуемые программы */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Реализуемые образовательные программы
        </h3>

        <div className="mb-4 rounded-xl border border-border bg-neutral-50 p-4">
          <p className="mb-1 text-sm font-medium text-neutral-900">
            Программа профессиональной подготовки по профессии рабочего,
            должности служащего «Рекрутер»
          </p>
          <p className="text-sm text-neutral-600">
            Заочная форма с применением ЭО и ДОТ, 72 ак. часа. Программа
            разрабатывается организацией самостоятельно и утверждается в
            установленном порядке.
          </p>
        </div>

        <p className="mb-3 text-sm font-semibold text-neutral-900">
          Программы, утверждённые приказом об утверждении стоимости:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead className="bg-neutral-100">
              <tr>
                <th className="px-4 py-3 text-xs font-bold tracking-wide text-neutral-500 uppercase">
                  Наименование программы
                </th>
                <th className="px-4 py-3 text-xs font-bold tracking-wide text-neutral-500 uppercase">
                  Форма обучения
                </th>
                <th className="px-4 py-3 text-xs font-bold tracking-wide text-neutral-500 uppercase">
                  Срок
                </th>
                <th className="px-4 py-3 text-xs font-bold tracking-wide text-neutral-500 uppercase">
                  Стоимость
                </th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr
                  key={program.name}
                  className="border-t border-border"
                >
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                    {program.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-700">
                    {program.form}
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-700">
                    {program.hours}
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-700">
                    {program.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a
          href="/documents/sveden/paid-services/24-cost-order.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-brand-accent hover:underline"
        >
          Приказ об утверждении стоимости обучения →
        </a>
      </div>

      {/* Численность обучающихся */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Численность обучающихся
        </h3>
        <p className="text-sm text-neutral-700">
          Численность обучающихся определяется по мере комплектования групп.
          Приём ведётся круглогодично.
        </p>
        <div className="mt-3 flex flex-col gap-3">
          <div className="rounded-xl border border-border bg-neutral-50 p-4">
            <p className="text-sm text-neutral-600">
              За счёт бюджетных ассигнований федерального бюджета, бюджетов
              субъектов РФ, местных бюджетов — не предусмотрено.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-neutral-50 p-4">
            <p className="text-sm text-neutral-600">
              По договорам об образовании за счёт средств физических и (или)
              юридических лиц — определяется по мере комплектования групп.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-neutral-50 p-4">
            <p className="text-sm text-neutral-600">
              Иностранные граждане — обучаются на общих основаниях в соответствии
              с законодательством РФ.
            </p>
          </div>
        </div>
      </div>

      {/* Документы об образовании */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900">
          Документы об образовании и (или) о квалификации
        </h3>
        <ul className="flex flex-col gap-2 text-sm text-neutral-700">
          <li>
            · <strong>Удостоверение о повышении квалификации</strong> — лицам,
            успешно освоившим программу повышения квалификации и прошедшим
            итоговую аттестацию.
          </li>
          <li>
            · <strong>Диплом о профессиональной переподготовке</strong> — лицам,
            успешно освоившим программу профессиональной переподготовки.
          </li>
          <li>
            · <strong>Свидетельство о профессии рабочего, должности
            служащего</strong> — лицам, успешно освоившим основную программу
            профессионального обучения.
          </li>
        </ul>
        <a
          href="/documents/sveden/local-acts/12-dpo-issuance.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-brand-accent hover:underline"
        >
          Положение о выдаче и учёте документов ДПО, ПО →
        </a>
      </div>
    </EducationSection>
  );
}