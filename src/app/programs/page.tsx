import type { Metadata } from "next";
import { ProgramsPage } from "@/views/programs";

export const metadata: Metadata = {
  title: "Программы обучения — УЦ УСТА",
  description:
    "Каталог программ дополнительного профессионального образования учебного центра «УСТА»: охрана труда, пожарная и промышленная безопасность, электробезопасность, первая помощь.",
};

export default function Page() {
  return <ProgramsPage />;
}