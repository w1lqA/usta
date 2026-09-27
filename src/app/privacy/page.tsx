import type { Metadata } from "next";
import { PagePlaceholder } from "@/shared/ui";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — УЦ УСТА",
};

export default function PrivacyPage() {
  return (
    <PagePlaceholder
      title="Политика конфиденциальности"
      description="Правила обработки персональных данных."
    />
  );
}