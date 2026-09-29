import { PageHero } from "@/shared/ui";

export function DocumentsHero() {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Главная", href: "/" },
        { label: "О центре", href: "/about" },
        { label: "Документы" },
      ]}
      title="Документы"
      description="Прайс-лист, реквизиты, перечень образовательных программ и другие документы учебного центра."
    />
  );
}