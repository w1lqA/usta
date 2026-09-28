import type { Metadata } from "next";
import { LicensesPage } from "@/views/about-licenses";

export const metadata: Metadata = {
  title: "Лицензия и сертификаты — УЦ УСТА",
  description:
    "Лицензия на образовательную деятельность и сертификаты АНО ДПО УЦ «УСТА».",
};

export default function Page() {
  return <LicensesPage />;
}