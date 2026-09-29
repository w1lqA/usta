import { PageHero } from "@/shared/ui";

export function ContactsHero() {
  return (
    <PageHero
      breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
      title="Контакты"
      description="Свяжитесь с нами удобным способом — по телефону, email или через форму обратной связи. Отвечаем в течение рабочего дня."
    />
  );
}