import { Container, Section, Heading, Text } from "@/shared/ui";

export function AboutEducationLevels() {
  return (
    <Section padding="default" surface="subtle">
      <Container>
        <div className="mb-14 max-w-[44rem]">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
              Уровни и формы
            </span>
          </div>
          <Heading as="h2" level="heading-md" className="mb-6 text-dark-900">
            Уровни образования и формы обучения
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Уровни */}
          <div className="lg:col-span-6">
            <Text className="mb-8 text-neutral-600">
              АНО ДПО УЦ «УСТА» реализует образовательные программы по
              направлениям:
            </Text>

            <div className="flex flex-col gap-8">
              <div>
                <p className="mb-3 text-caption font-bold tracking-[0.18em] text-brand-accent uppercase">
                  Дополнительное профессиональное образование
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-neutral-700">
                    · Программы профессиональной переподготовки
                  </li>
                  <li className="text-sm text-neutral-700">
                    · Программы повышения квалификации
                  </li>
                </ul>
              </div>

              <div>
                <p className="mb-3 text-caption font-bold tracking-[0.18em] text-brand-accent uppercase">
                  Профессиональное обучение
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-neutral-700">
                    · Программы профессиональной подготовки по профессиям
                    рабочих, должностям служащих
                  </li>
                  <li className="text-sm text-neutral-700">
                    · Программы переподготовки рабочих, служащих
                  </li>
                  <li className="text-sm text-neutral-700">
                    · Программы повышения квалификации рабочих, служащих
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Формы + сроки */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <p className="mb-4 text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase">
                Формы обучения
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-sm text-neutral-700">
                  · Очно-заочная с применением дистанционных образовательных
                  технологий и электронного обучения
                </li>
                <li className="text-sm text-neutral-700">· Очная</li>
                <li className="text-sm text-neutral-700">
                  · Заочная с применением дистанционных образовательных
                  технологий и электронного обучения
                </li>
                <li className="text-sm text-neutral-700">
                  · С выездом на предприятие заказчика (выездное обучение)
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase">
                Нормативные сроки обучения
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-sm text-neutral-700">
                  · Повышение квалификации — не менее 16 часов
                </li>
                <li className="text-sm text-neutral-700">
                  · Профессиональная переподготовка — не менее 250 часов
                </li>
                <li className="text-sm text-neutral-700">
                  · Профессиональная подготовка — от 72 часов
                </li>
                <li className="text-sm text-neutral-700">
                  · Иные программы — от 8 часов
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}