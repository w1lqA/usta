import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { AnimatedCursor } from "../shared/ui/cursor";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "УСТА — Учебный центр",
  description:
    "АНО ДПО УЦ «УСТА» — учебный центр дополнительного профессионального образования",
};



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        <AnimatedCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}