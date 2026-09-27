import type { ProgramCategory } from "@/entities/program-category";
import type { Program } from "@/entities/program";
import { CategoryHero } from "./CategoryHero";
import { CategoryIntro } from "./CategoryIntro";
import { CategoryPrograms } from "./CategoryPrograms";
import { ProgramsCTA } from "@/views/programs";

type Props = {
  category: ProgramCategory;
  programs: Program[];
};

export function CategoryPage({ category, programs }: Props) {
  return (
    <>
      <CategoryHero category={category} />
      <CategoryIntro categoryTitle={category.title} />
      <CategoryPrograms programs={programs} />
      <ProgramsCTA />
    </>
  );
}