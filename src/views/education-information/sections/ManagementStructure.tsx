import { EducationSection } from "../ui/EducationSection";

export function ManagementStructure() {
  return (
    <EducationSection
      id="struktura"
      title="Структура и органы управления образовательной организацией"
    >
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
          Органы управления:
        </p>
        <ul className="flex flex-col gap-2 text-sm">
          <li>
            · <strong>Общее собрание участников</strong> — высший орган
            управления (ООО «УСТА»)
          </li>
          <li>
            · <strong>Генеральный директор</strong> — единоличный исполнительный
            орган
          </li>
          <li>
            · <strong>Общее собрание работников</strong> — коллегиальный орган
            Учебного центра
          </li>
          <li>
            · <strong>Педагогический совет</strong> — коллегиальный орган
            Учебного центра
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-neutral-900">
          Структурное подразделение:
        </p>
        <ul className="flex flex-col gap-2 text-sm">
          <li>
            · <strong>Полное наименование:</strong> Учебный центр Общества с
            ограниченной ответственностью «УСТА»
          </li>
          <li>
            · <strong>Сокращённое:</strong> УЦ ООО «УСТА»
          </li>
          <li>
            · <strong>Руководитель:</strong> Директор — Мамажанов Адилет
          </li>
          <li>
            · <strong>Место нахождения:</strong> 364020, Чеченская Республика,
            г.о. Город Грозный, г. Грозный, р-н Ахматовский, ул. Моздокская,
            д. 13, кв. 3
          </li>
        </ul>
        <a
          href="/documents/sveden/local-acts/11-structural.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-accent hover:underline"
        >
          Положение о структурном подразделении →
        </a>
      </div>
    </EducationSection>
  );
}