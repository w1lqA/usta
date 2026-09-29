import { PageHero } from "@/shared/ui";

export function PrivacyHero() {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Главная", href: "/" },
        { label: "Политика конфиденциальности" },
      ]}
      title="Политика конфиденциальности"
      description="Правила обработки персональных данных пользователей сайта АНО ДПО УЦ «УСТА»."
    />
  );
}