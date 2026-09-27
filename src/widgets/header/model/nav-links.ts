import { programCategories } from "@/entities/program-category";

export type NavChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navLinks: NavLink[] = [
  { label: "Главная", href: "/" },
  {
    label: "Программы обучения",
    href: "/programs",
    children: [
      { label: "Все программы", href: "/programs" },
      ...programCategories.map((c) => ({
        label: c.title,
        href: `/programs/${c.slug}`,
      })),
    ],
  },
  {
    label: "О центре",
    href: "/about",
    children: [
      { label: "Сведения об ОО", href: "/about" },
      { label: "Лицензия и сертификаты", href: "/about/licenses" },
      { label: "Документы", href: "/about/documents" },
    ],
  },
  { label: "Контакты", href: "/contacts" },
];