import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Container, Section, Button } from "@/shared/ui";

export function ProgramsCTA() {
  return (
    <Section padding="default" surface="surface">
      <Container>
        <div className="rounded-3xl bg-brand-primary p-10 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-4 text-caption font-bold tracking-[0.22em] text-brand-green uppercase">
                Нужна консультация?
              </p>
              <h2 className="mb-5 max-w-[36rem] text-3xl leading-[1.15] font-extrabold text-white lg:text-5xl">
                Не нашли нужную программу?
              </h2>
              <p className="max-w-[32rem] text-base leading-[1.7] text-white/65">
                Свяжитесь с нами — подберём подходящий курс или разработаем
                индивидуальную программу обучения под задачи вашей организации.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Button
                href="/contacts"
                variant="secondary"
                size="default"
                icon={<ArrowRight size={16} />}
                className="w-full lg:w-auto"
              >
                Оставить заявку
              </Button>

              <a
                href="tel:+79998707405"
                className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <Phone size={15} className="text-brand-green" />
                +7 (999) 870-74-05
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}