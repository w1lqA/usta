import Link from "next/link";
import { Phone, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";

const rows = [
  {
    icon: Phone,
    label: "Телефон",
    content: (
      <div className="flex flex-col gap-1.5">
        <a
          href="tel:+79998707405"
          className="text-sm font-bold text-white transition-colors hover:text-brand-green"
        >
          +7 (999) 870-74-05
        </a>
        <a
          href="tel:+79602919052"
          className="text-sm text-white/40 transition-colors hover:text-white/70"
        >
          +7 (960) 291-90-52
        </a>
      </div>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a
        href="mailto:info@usta.com.ru"
        className="text-sm font-bold text-white transition-colors hover:text-brand-green"
      >
        info@usta.com.ru
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Часы работы",
    content: (
      <span className="text-sm text-white/65">
        Понедельник – Пятница: 9:00 – 18:00
      </span>
    ),
  },
  {
    icon: MapPin,
    label: "Москва",
    content: (
      <span className="text-sm leading-relaxed text-white/65">
        109147, г. Москва,
        <br />
        ул. Марксистская, д. 20, стр. 8
      </span>
    ),
  },
  {
    icon: MapPin,
    label: "Юр. адрес",
    content: (
      <span className="text-sm leading-relaxed text-white/65">
        Чеченская Республика, г. Грозный,
        <br />
        ул. Моздокская, д. 13, кв. 3
      </span>
    ),
  },
] as const;

export function ContactInfo() {
  return (
    <div>
      <h2 className="mb-6 text-3xl leading-[1.05] font-extrabold text-white lg:text-6xl">
        Оставьте заявку
      </h2>
      <p className="mb-12 max-w-[25rem] text-base leading-[1.7] text-white/50">
        Ответим на все вопросы об обучении, стоимости и сроках. Связываемся
        в течение рабочего дня.
      </p>

      <div>
        {rows.map(({ icon: Icon, label, content }) => (
          <div
            key={label}
            className="flex items-start gap-6 border-b border-white/6 py-5"
          >
            <div className="flex w-[8.125rem] flex-shrink-0 items-center gap-3 pt-0.5">
              <Icon size={14} className="flex-shrink-0 text-brand-accent" />
              <span className="text-caption font-bold tracking-wide text-white/30 uppercase">
                {label}
              </span>
            </div>
            <div>{content}</div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/contacts"
          className="inline-flex items-center gap-2.5 text-sm font-semibold text-brand-green transition-all hover:gap-4"
        >
          Страница контактов
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}