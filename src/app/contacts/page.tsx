import type { Metadata } from "next";
import { ContactsPage } from "@/views/contacts";

export const metadata: Metadata = {
  title: "Контакты — УЦ УСТА",
  description:
    "Контактная информация учебного центра «УСТА»: адреса, телефоны, email, форма обратной связи и карта.",
};

export default function Page() {
  return <ContactsPage />;
}