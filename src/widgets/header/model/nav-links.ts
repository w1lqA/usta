// src/widgets/header/model/nav-links.ts
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
  { label: "Сведения об ОО", href: "/sveden" },
  { label: "Контакты", href: "/contacts" },
];