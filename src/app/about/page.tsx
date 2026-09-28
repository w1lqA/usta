import type { Metadata } from "next";
import { AboutPage } from "@/views/about";

export const metadata: Metadata = {
  title: "О центре — УЦ УСТА",
  description:
    "Сведения об АНО ДПО УЦ «УСТА»: лицензия, уровни образования, формы обучения, образовательные программы, контактная информация.",
};

export default function Page() {
  return <AboutPage />;
}