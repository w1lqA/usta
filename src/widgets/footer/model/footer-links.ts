export type FooterLink = { label: string; href: string };

export const trainingLinks: FooterLink[] = [
  { label: "Все программы", href: "/programs" },
  { label: "Охрана труда", href: "/programs/ohrana-truda" },
  { label: "Пожарная безопасность", href: "/programs/pozharnaya-bezopasnost" },
  {
    label: "Профессиональное обучение",
    href: "/programs/professionalnoe-obuchenie",
  },
  {
    label: "Повышение квалификации",
    href: "/programs/povyshenie-kvalifikacii",
  },
];

export const serviceItems: string[] = [
  "Аутсорсинг охраны труда",
  "Разработка документации",
  "Консультация по охране труда",
];

export const documentLinks: FooterLink[] = [
  { label: "Сведения об образовательной организации", href: "/sveden" },
  { label: "Политика конф.", href: "/privacy" },
];