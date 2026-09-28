import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Container, Section, Heading, Text } from "@/shared/ui";

const PHONE_PRIMARY = "+7 (999) 870-74-05";
const PHONE_PRIMARY_HREF = "tel:+79998707405";
const PHONE_SECONDARY = "+7 (960) 291-90-52";
const PHONE_SECONDARY_HREF = "tel:+79602919052";
const EMAIL = "info@usta.com.ru";

export function AboutContacts() {
  return (
    <Section padding="default" surface="subtle">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-8 bg-brand-accent" />
              <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
                Контакты
              </span>
            </div>
            <Heading as="h2" level="heading-md" className="mb-6 text-dark-900">
              Свяжитесь с нами
            </Heading>
            <Text className="mb-8 text-neutral-600">
              Ответим на все вопросы об обучении, стоимости и сроках.
            </Text>
            <Link
              href="/contacts"
              className="btn btn-primary rounded-md"
            >
              Страница контактов
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                <div>
                  <p className="mb-1 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                    Юридический адрес
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    Российская Федерация, Чеченская республика, г. о. Город
                    Грозный, р-н Ахматовский, ул. Моздокская, д. 13, кв. 3
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                <div>
                  <p className="mb-1 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                    Московский офис
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    109147, г. Москва, ул. Марксистская, д. 20, стр. 8
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                <div className="flex flex-col gap-1">
                  <p className="mb-1 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                    Телефоны
                  </p>
                  <a
                    href={PHONE_PRIMARY_HREF}
                    className="text-sm font-semibold text-neutral-800 transition-colors hover:text-brand-primary"
                  >
                    {PHONE_PRIMARY}
                  </a>
                  <a
                    href={PHONE_SECONDARY_HREF}
                    className="text-sm text-neutral-700 transition-colors hover:text-brand-primary"
                  >
                    {PHONE_SECONDARY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                <div>
                  <p className="mb-1 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm font-semibold text-neutral-800 transition-colors hover:text-brand-primary"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                <div>
                  <p className="mb-1 text-caption font-bold tracking-wide text-neutral-400 uppercase">
                    Режим работы
                  </p>
                  <p className="text-sm text-neutral-700">
                    Понедельник – Пятница: 9:00 – 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}