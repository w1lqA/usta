import { PageHero } from "@/shared/ui";

export function AboutHero() {
  return (
    <PageHero
      breadcrumbs={[{ label: "Главная", href: "/" }, { label: "О центре" }]}
      title="О центре"
      description="АНО ДПО УЦ «УСТА» — учебный центр дополнительного профессионального образования. Реализуем программы профессиональной подготовки, переподготовки и повышения квалификации."
    />
  );
}