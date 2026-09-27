import type { Metadata } from "next";
import { PagePlaceholder } from "@/shared/ui";

export const metadata: Metadata = {
  title: "Лицензия и сертификаты — УЦ УСТА",
  description: "Лицензия и сертификаты учебного центра «УСТА»",
};

export default function LicensesPage() {
  return (
    <PagePlaceholder
      title="Лицензия и сертификаты"
      description="Подтверждающие документы учебного центра."
    />
  );
}