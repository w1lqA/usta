// src/views/education-information/sections/Facilities.tsx
import { EducationSection } from "../ui/EducationSection";

const equipment = [
    "Конденсаторный студийный микрофон для ПК со штативом. Микрофон игровой, компьютерный для стримов и конференций проводной настольный — 1 шт.",
    "ExeGate Web-камера C615 FullHD, чёрный — 1 шт.",
    "Проводная оптическая мышь Defender Patch MS-759 чёрный, компактная — 1 шт.",
    "14\" Ноутбук Azerty AZ-1406, Intel Celeron N3350 (1.1 ГГц), RAM 6 ГБ, SSD 256 ГБ, Intel HD Graphics 500, Windows Pro, Российская — 1 шт.",
];

export function Facilities() {
    return (
        <EducationSection
            id="materialno-tehnicheskoe"
            title="Материально-техническое обеспечение и оснащённость образовательного процесса. Доступная среда"
        >
            <div>
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                    Материально-техническое обеспечение образовательной деятельности
                </h3>
                <ul className="flex flex-col gap-2 text-sm text-neutral-700">
                    {equipment.map((item) => (
                        <li key={item}>· {item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                    Наличие оборудованных учебных кабинетов, объектов для проведения
                    практических занятий, библиотек, объектов спорта, средств обучения и
                    воспитания
                </h3>
                <p className="text-sm text-neutral-700">
                    Не предусмотрено, так как обучение ведётся с применением
                    исключительно электронного обучения, дистанционных образовательных
                    технологий.
                </p>
            </div>

            <div>
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                    Электронные образовательные ресурсы, к которым обеспечивается доступ
                    обучающихся
                </h3>
                <p className="text-sm text-neutral-700">
                    Доступ к электронным образовательным ресурсам осуществляется через
                    систему дистанционного обучения (СДО), обеспечивающую размещение
                    учебных материалов, проведение занятий и аттестации. Наименование СДО
                    определяется организацией и доводится до обучающихся при заключении
                    договора.
                </p>
                <a
                    href="/documents/sveden/local-acts/16-elearning.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-brand-accent hover:underline"
                >
                    Положение о порядке применения ЭО и ДОТ →
                </a>
            </div>

            <div>
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                    Общежития и интернаты
                </h3>
                <p className="text-sm text-neutral-700">
                    Количество жилых помещений в общежитии, интернате, формирование платы
                    за проживание — не предусмотрено.
                </p>
            </div>

            <div>
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                    Специальные условия для получения образования инвалидами и лицами с
                    ОВЗ
                </h3>
                <p className="text-sm text-neutral-700">
                    Электронная обучающая среда отвечает установленным требованиям
                    законодательства. Обучение проводится дистанционно, что обеспечивает
                    беспрепятственный доступ к обучению для лиц с ограниченными
                    возможностями здоровья.
                </p>
            </div>
        </EducationSection>
    );
}