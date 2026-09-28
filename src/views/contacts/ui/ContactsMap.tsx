import { Container, Section, Heading, Text } from "@/shared/ui";
import { YandexMap } from "@/features/map";

// Координаты московского офиса (ул. Марксистская, д. 20, стр. 8)
const OFFICE_COORDS: [number, number] = [37.6572, 55.7414];

export function ContactsMap() {
  return (
    <Section padding="default" surface="surface">
      <Container>
        <div className="mb-12 max-w-[44rem]">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
              Как нас найти
            </span>
          </div>
          <Heading as="h2" level="heading-md" className="mb-6 text-dark-900">
            Московский офис на карте
          </Heading>
          <Text className="text-neutral-600">
            109147, г. Москва, ул. Марксистская, д. 20, стр. 8
          </Text>
        </div>

        <YandexMap
          center={OFFICE_COORDS}
          zoom={17}
          className="h-[26rem] lg:h-[32.5rem]"
        />
      </Container>
    </Section>
  );
}