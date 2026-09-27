import { Container, Section } from "@/shared/ui";
import { programCategories } from "@/entities/program-category";
import { ProgramCard } from "@/widgets/programs";

export function ProgramsCatalog() {
  return (
    <Section padding="sm" surface="subtle">
      <Container>
        <div className="mb-10 flex items-end justify-between border-b border-neutral-300 pb-6">
          <p className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
            {programCategories.length} направлений
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {programCategories.map((category) => (
            <ProgramCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}