import { EducationSection } from "../ui/EducationSection";

const rows = [
    {
        label: "Полное наименование",
        value: "Общество с ограниченной ответственностью «УСТА»",
    },
    { label: "Сокращённое наименование", value: "ООО «УСТА»" },
    {
        label: "Наименование на английском языке",
        value: "«USTA» Limited Liability Company / «USTA» LLC",
    },
    { label: "Дата создания", value: "26 декабря 2025 г." },
    { label: "Учредитель", value: "Мамажанов Адилет" },
    {
        label: "Место нахождения",
        value:
            "364020, Чеченская Республика, г.о. Город Грозный, г. Грозный, р-н Ахматовский, ул. Моздокская, д. 13, кв. 3",
    },
    {
        label: "Адрес места осуществления образовательной деятельности",
        value:
            "364020, Чеченская Республика, г.о. Город Грозный, г. Грозный, р-н Ахматовский, ул. Моздокская, д. 13, кв. 3",
    },
    { label: "Режим работы", value: "Пн–Пт: 09:00–18:00. Сб, Вс — выходные." },
    { label: "ОГРН", value: "1252000011229" },
    { label: "ИНН", value: "2014047595" },
    { label: "КПП", value: "201401001" },
];

export function BasicInformation() {
    return (
        <EducationSection id="osnovnye-svedeniya" title="Основные сведения">
            <div className="flex flex-col gap-3">
                {rows.map((row) => (
                    <div
                        key={row.label}
                        className="grid grid-cols-1 gap-1 border-b border-border py-3 sm:grid-cols-[16rem_1fr] sm:gap-6"
                    >
                        <span className="text-sm font-medium text-neutral-500">
                            {row.label}
                        </span>
                        <span className="text-sm text-neutral-900">{row.value}</span>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
                <p className="text-sm font-semibold text-neutral-900">
                    Контактные телефоны:
                </p>
                <div className="flex flex-col gap-2">
                    <a
                        href="tel:+79602919052"
                        className="text-sm text-brand-primary transition-colors hover:text-brand-accent"
                    >
                        +7 (960) 291-90-52
                    </a>
                    <a
                        href="tel:+79998707405"
                        className="text-sm text-brand-primary transition-colors hover:text-brand-accent"
                    >
                        +7 (999) 870-74-05
                    </a>
                    <a
                        href="mailto:info@usta.com.ru"
                        className="text-sm text-brand-primary transition-colors hover:text-brand-accent"
                    >
                        info@usta.com.ru
                    </a>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
                <p className="text-sm font-semibold text-neutral-900">
                    Лицензия на образовательную деятельность:
                </p>
                <p className="text-sm text-neutral-700">
                    № Л035-01275-20/04739757 от 03.04.2026, выдана Министерством
                    образования Чеченской Республики. Бессрочная.
                </p>
                <a
                    href="/documents/sveden/registration/license-extract.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-accent hover:underline"
                >
                    Выписка из реестра лицензий →
                </a>
            </div>
        </EducationSection>
    );
}