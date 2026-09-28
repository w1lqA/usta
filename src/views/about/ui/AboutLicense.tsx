import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { Container, Section, Heading, Text } from "@/shared/ui";

export function AboutLicense() {
  return (
    <Section padding="default" surface="surface">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-8 bg-brand-accent" />
              <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
                Лицензия
              </span>
            </div>
            <Heading as="h2" level="heading-md" className="mb-6 text-dark-900">
              Образовательная деятельность на основании лицензии
            </Heading>
            <Text className="mb-8 text-neutral-600">
              АНО ДПО УЦ «УСТА» имеет бессрочную лицензию на осуществление
              образовательной деятельности. Все выдаваемые документы имеют
              юридическую силу и признаются работодателями по всей России.
            </Text>

            <div className="rounded-3xl bg-brand-primary p-8">
              <FileText size={28} className="mb-5 text-brand-green" />
              <p className="mb-5 text-sm leading-relaxed text-white/70">
                Скан лицензии доступен на отдельной странице вместе с
                сертификатами и другими подтверждающими документами.
              </p>
              <Link
                href="/about/licenses"
                className="btn btn-secondary rounded-md"
              >
                Смотреть лицензию
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-baseline gap-4 border-b border-border pb-4">
                <span className="w-[10rem] flex-shrink-0 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                  Орган выдачи
                </span>
                <span className="text-sm text-neutral-700">
                  [уточняется]
                </span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-border pb-4">
                <span className="w-[10rem] flex-shrink-0 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                  Срок действия
                </span>
                <span className="text-sm text-neutral-700">Бессрочно</span>
              </div>
              <div className="flex items-baseline gap-4 border-b border-border pb-4">
                <span className="w-[10rem] flex-shrink-0 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                  Вид деятельности
                </span>
                <span className="text-sm text-neutral-700">
                  Дополнительное профессиональное образование
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="w-[10rem] flex-shrink-0 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                  Язык обучения
                </span>
                <span className="text-sm text-neutral-700">Русский</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}