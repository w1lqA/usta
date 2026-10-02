import type { Metadata } from "next";
import { DocumentsPage } from "@/views/about-documents";

export const metadata: Metadata = {
  title: "Документы — УЦ УСТА",
  description:
    "Реквизиты, перечень образовательных программ и другие документы АНО ДПО УЦ «УСТА».",
};

export default function Page() {
  return <DocumentsPage />;
}