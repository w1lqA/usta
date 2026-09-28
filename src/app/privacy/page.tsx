import type { Metadata } from "next";
import { PrivacyPage } from "@/views/privacy";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — УЦ УСТА",
  description:
    "Политика обработки персональных данных АНО ДПО УЦ «УСТА».",
};

export default function Page() {
  return <PrivacyPage />;
}