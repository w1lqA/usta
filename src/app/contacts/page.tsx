import type { Metadata } from "next";
import { PagePlaceholder } from "@/shared/ui";

export const metadata: Metadata = {
  title: "Контакты — УЦ УСТА",
  description: "Контактная информация учебного центра «УСТА»",
};

export default function ContactsPage() {
  return (
    <PagePlaceholder
      title="Контакты"
      description="Адреса, телефоны, email и форма обратной связи."
    />
  );
}