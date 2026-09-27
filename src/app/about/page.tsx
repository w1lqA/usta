import type { Metadata } from "next";
import { PagePlaceholder } from "@/shared/ui";

export const metadata: Metadata = {
  title: "О центре — УЦ УСТА",
  description: "Сведения об учебном центре «УСТА»",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="Сведения об организации"
      description="Информация об АНО ДПО УЦ «УСТА»."
    />
  );
}