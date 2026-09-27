import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  programCategories,
  getProgramCategory,
} from "@/entities/program-category";
import { getProgramsByCategory } from "@/entities/program";
import { CategoryPage } from "@/views/program-category";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return programCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getProgramCategory(categorySlug);

  if (!category) {
    return { title: "Направление не найдено — УЦ УСТА" };
  }

  return {
    title: `${category.title} — УЦ УСТА`,
    description: category.shortDescription,
  };
}

export default async function Page({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getProgramCategory(categorySlug);

  if (!category) notFound();

  const programs = getProgramsByCategory(categorySlug);

  return <CategoryPage category={category} programs={programs} />;
}