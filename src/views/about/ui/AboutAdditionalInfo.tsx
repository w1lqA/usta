import { Container, Section, Heading, Text } from "@/shared/ui";

const blocks = [
  {
    title: "Язык обучения",
    body: "Обучение по всем программам в АНО ДПО УЦ «УСТА» осуществляется на русском языке.",
  },
  {
    title: "Государственная аккредитация",
    body: "Государственная аккредитация образовательной деятельности по реализуемым образовательным программам отсутствует. Федеральным законом от 29.12.2012 № 273-ФЗ «Об образовании в Российской Федерации» не предусмотрено проведение государственной аккредитации образовательной деятельности по программам дополнительного образования и профессионального обучения.",
  },
  {
    title: "Условия приёма",
    body: "Образовательные услуги предоставляются на платной основе без вступительных испытаний, на основании заявок от физических и юридических лиц. Обучение проводится по мере комплектования групп, начало обучения — по согласованию.",
  },
  {
    title: "Адаптированные программы",
    body: "В настоящее время учебный центр не реализует адаптированные образовательные программы для инвалидов и лиц с ограниченными возможностями здоровья.",
  },
  {
    title: "Научная деятельность",
    body: "Учебный центр научную (научно-исследовательскую) деятельность не осуществляет.",
  },
];

export function AboutAdditionalInfo() {
  return (
    <Section padding="default" surface="surface">
      <Container>
        <div className="mb-14 max-w-[44rem]">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
              Дополнительно
            </span>
          </div>
          <Heading as="h2" level="heading-md" className="text-dark-900">
            Дополнительная информация
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-8"
            >
              <p className="text-caption font-bold tracking-[0.18em] text-brand-accent uppercase">
                {block.title}
              </p>
              <Text className="text-neutral-600">{block.body}</Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}