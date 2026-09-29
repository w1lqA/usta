import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container, Section, Heading } from "@/shared/ui";

const PHONE_PRIMARY = "+7 (999) 870-74-05";
const PHONE_PRIMARY_HREF = "tel:+79998707405";
const PHONE_SECONDARY = "+7 (960) 291-90-52";
const PHONE_SECONDARY_HREF = "tel:+79602919052";
const EMAIL = "info@usta.com.ru";

export function ContactsInfo() {
  return (
    <Section padding="none" className="pt-20" surface="surface">
      <Container>
        <div className="mb-14 max-w-[44rem]">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
              Контактная информация
            </span>
          </div>
          <Heading as="h2" level="heading-md" className="text-dark-900">
            Как с нами связаться
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Московский офис */}
          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-white p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                <MapPin size={20} className="text-brand-accent" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-caption font-bold tracking-[0.14em] text-brand-accent uppercase">
                  Московский офис
                </p>
                <p className="text-base leading-relaxed font-semibold text-neutral-900">
                  109147, г. Москва,
                  <br />
                  ул. Марксистская, д. 20, стр. 8
                </p>
              </div>
            </div>
          </div>

          {/* Юридический адрес */}
          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-white p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                <MapPin size={20} className="text-brand-accent" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-caption font-bold tracking-[0.14em] text-brand-accent uppercase">
                  Юридический адрес
                </p>
                <p className="text-sm leading-relaxed text-neutral-700">
                  Российская Федерация, Чеченская республика,
                  <br />
                  г. о. Город Грозный, р-н Ахматовский,
                  <br />
                  ул. Моздокская, д. 13, кв. 3
                </p>
              </div>
            </div>
          </div>

          {/* Телефоны */}
          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-white p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                <Phone size={20} className="text-brand-accent" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-caption font-bold tracking-[0.14em] text-brand-accent uppercase">
                  Телефоны
                </p>
                <a
                  href={PHONE_PRIMARY_HREF}
                  className="text-base font-semibold text-neutral-900 transition-colors hover:text-brand-primary"
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
          </div>

          {/* Email + режим */}
          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-white p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                <Mail size={20} className="text-brand-accent" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-caption font-bold tracking-[0.14em] text-brand-accent uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-base font-semibold text-neutral-900 transition-colors hover:text-brand-primary"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-border pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                <Clock size={20} className="text-brand-accent" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-caption font-bold tracking-[0.14em] text-brand-accent uppercase">
                  Режим работы
                </p>
                <p className="text-sm leading-relaxed text-neutral-700">
                  Понедельник – Пятница: 9:00 – 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}