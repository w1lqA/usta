import type { Metadata } from "next";
import { PagePlaceholder } from "@/shared/ui";

export const metadata: Metadata = {
  title: "Документы — УЦ УСТА",
  description: "Документы учебного центра «УСТА»",
};

export default function DocumentsPage() {
  return (
    <PagePlaceholder
      title="Документы"
      description="Прайс-лист, реквизиты и другие документы учебного центра."
    />
  );
}