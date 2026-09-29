import { PageHero } from "@/shared/ui";

export function LicensesHero() {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Главная", href: "/" },
        { label: "О центре", href: "/about" },
        { label: "Лицензия и сертификаты" },
      ]}
      title="Лицензия и сертификаты"
      description="Подтверждающие документы учебного центра: лицензия на образовательную деятельность, сертификаты и другие документы."
    />
  );
}