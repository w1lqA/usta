export type FooterLink = {
  label: string;
  href: string;
};

export const trainingLinks: FooterLink[] = [
  { label: "Все программы", href: "/programs" },
  { label: "Охрана труда", href: "/programs/ohrana-truda" },
  { label: "Пожарная безопасность", href: "/programs/pozharnaya" },
  { label: "Промышленная безопасность", href: "/programs/promyshlennaya" },
  { label: "Электробезопасность", href: "/programs/elektro" },
];

export const serviceItems: string[] = [
  "Аутсорсинг охраны труда",
  "Разработка документации",
  "Консультация по ОТ",
];

export const documentLinks: FooterLink[] = [
  { label: "Прайс-лист", href: "/documents" },
  { label: "Реквизиты", href: "/documents" },
  { label: "Лицензия", href: "/licenses" },
  { label: "Политика конф.", href: "/privacy" },
];
