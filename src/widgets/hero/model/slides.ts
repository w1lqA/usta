import { programCategories } from "@/entities/program-category";

export type HeroSlide = {
  id: number;
  slug: string;
  image: string;
  label: string;
  title: string;
  checklist: string[];
};

export const slides: HeroSlide[] = programCategories.map((category, idx) => ({
  id: idx + 1,
  slug: category.slug,
  image: category.heroImage,
  label: category.heroLabel.toUpperCase(),
  title: category.title,
  checklist: category.checklist,
}));

export const SLIDE_DURATION = 7000;