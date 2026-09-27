import { Container, Section, Heading, Text } from "@/shared/ui";

type Props = {
  categoryTitle: string;
};

export function CategoryIntro({ categoryTitle }: Props) {
  return (
    <Section padding="sm" surface="surface">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-8 bg-brand-accent" />
              <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
                О направлении
              </span>
            </div>
            <Heading as="h2" level="heading-md" className="text-dark-900">
              Программы направления «{categoryTitle}»
            </Heading>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <Text size="lg" className="text-neutral-700">
              Учебный центр «УСТА» реализует программы дополнительного
              профессионального образования в соответствии с требованиями
              действующего законодательства Российской Федерации. Все программы
              разработаны с учётом актуальных нормативных актов и практических
              потребностей организаций.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
