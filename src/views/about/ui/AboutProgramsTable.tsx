import { Container, Section, Heading, Text } from "@/shared/ui";
import {
    educationProgramsTable,
    educationProgramCategories,
    type EducationProgramRow,
} from "@/entities/education-program";
import { Fragment } from "react/jsx-runtime";

function groupByCategory(rows: EducationProgramRow[]) {
    return educationProgramCategories.map((cat) => ({
        category: cat,
        rows: rows.filter((r) => r.category === cat),
    }));
}

export function AboutProgramsTable() {
    const grouped = groupByCategory(educationProgramsTable);

    return (
        <Section padding="default" surface="surface">
            <Container>
                <div className="mb-12 max-w-[44rem]">
                    <div className="mb-5 flex items-center gap-4">
                        <div className="h-px w-8 bg-brand-accent" />
                        <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
                            Программы
                        </span>
                    </div>
                    <Heading as="h2" level="heading-md" className="mb-6 text-dark-900">
                        Образовательные программы
                    </Heading>
                    <Text className="text-neutral-600">
                        Полный перечень образовательных программ, реализуемых учебным
                        центром, с указанием форм обучения и нормативных сроков.
                    </Text>
                </div>

                {/* Desktop table */}
                <div className="hidden overflow-hidden rounded-2xl border border-border lg:block">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-neutral-100">
                                <th className="px-6 py-4 text-caption font-bold tracking-wide text-neutral-500 uppercase">
                                    Код
                                </th>
                                <th className="px-6 py-4 text-caption font-bold tracking-wide text-neutral-500 uppercase">
                                    Наименование программы
                                </th>
                                <th className="px-6 py-4 text-caption font-bold tracking-wide text-neutral-500 uppercase">
                                    Форма обучения
                                </th>
                                <th className="px-6 py-4 text-caption font-bold tracking-wide text-neutral-500 uppercase">
                                    Часы
                                </th>
                                <th className="px-6 py-4 text-caption font-bold tracking-wide text-neutral-500 uppercase">
                                    Язык
                                </th>
                                <th className="px-6 py-4 text-caption font-bold tracking-wide text-neutral-500 uppercase">
                                    Практика
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {grouped.map(({ category, rows }) => (
                                <Fragment key={category}>
                                    <tr key={category} className="bg-brand-primary/5">
                                        <td
                                            colSpan={6}
                                            className="px-6 py-3 text-caption font-bold tracking-[0.18em] text-brand-primary uppercase"
                                        >
                                            {category}
                                        </td>
                                    </tr>
                                    {rows.map((row, idx) => (
                                        <tr
                                            key={`${category}-${idx}`}
                                            className="border-t border-border"
                                        >
                                            <td className="px-6 py-4 text-xs font-semibold text-neutral-500 align-top">
                                                {row.code}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-neutral-800 align-top">
                                                {row.name}
                                            </td>
                                            <td className="px-6 py-4 text-xs text-neutral-600 align-top">
                                                {row.form}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-semibold text-neutral-800 align-top whitespace-nowrap">
                                                {row.hours}
                                            </td>
                                            <td className="px-6 py-4 text-xs text-neutral-600 align-top">
                                                {row.language}
                                            </td>
                                            <td className="px-6 py-4 text-xs text-neutral-600 align-top">
                                                {row.hasPractice ? "предусмотрена" : "не предусмотрено"}
                                            </td>
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile cards */}
                <div className="flex flex-col gap-6 lg:hidden">
                    {grouped.map(({ category, rows }) => (
                        <div key={category} className="flex flex-col gap-3">
                            <p className="text-caption font-bold tracking-[0.18em] text-brand-primary uppercase">
                                {category}
                            </p>
                            {rows.map((row, idx) => (
                                <div
                                    key={`${category}-${idx}`}
                                    className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-5"
                                >
                                    <p className="text-xs font-semibold text-neutral-500">
                                        {row.code}
                                    </p>
                                    <p className="text-sm font-semibold text-neutral-900">
                                        {row.name}
                                    </p>
                                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-600">
                                        <span>{row.form}</span>
                                        <span className="font-semibold">{row.hours} ч.</span>
                                        <span>{row.language}</span>
                                        <span>
                                            {row.hasPractice
                                                ? "Практика предусмотрена"
                                                : "Без практики"}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}