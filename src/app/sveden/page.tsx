// src/app/sveden/page.tsx
import type { Metadata } from "next";
import { EducationInformationPage } from "@/views/education-information";

export const metadata: Metadata = {
  title: "Сведения об образовательной организации — ООО «УСТА»",
  description:
    "Официальные сведения об образовательной организации ООО «УСТА»: основные данные, документы, образовательные программы, руководство, педагогический состав и условия обучения.",
};

export default function Page() {
  return <EducationInformationPage />;
}