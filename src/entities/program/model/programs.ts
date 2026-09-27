import type { Program } from "./types";

export const programs: Program[] = [
  // ─── Охрана труда ─────────────────────────────────────────────────────────
  {
    slug: "obshchie-voprosy-ohrany-truda",
    categorySlug: "ohrana-truda",
    title:
      "Общие вопросы охраны труда и функционирования системы управления охраной труда",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=640&fit=crop&auto=format",
    hours: 16,
    breakdown: { theory: 14, exam: 2 },
    formats: ["очно-заочная", "заочная с применением ДОТ"],
  },
  {
    slug: "okazanie-pervoy-pomoshchi",
    categorySlug: "ohrana-truda",
    title: "Оказание первой помощи пострадавшим",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=640&fit=crop&auto=format",
    hours: 16,
    breakdown: { theory: 7, practice: 7, exam: 2 },
    duration: "2 дня",
    formats: ["очно-заочная с применением дистанционных технологий"],
  },
  {
    slug: "ispolzovanie-siz",
    categorySlug: "ohrana-truda",
    title: "Использование (применение) средств индивидуальной защиты (СИЗ)",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&h=640&fit=crop&auto=format",
    hours: 8,
    breakdown: { theory: 3, practice: 4, exam: 1 },
    formats: ["очно-заочная", "заочная с применением ДОТ"],
  },
  {
    slug: "raboty-na-vysote",
    categorySlug: "ohrana-truda",
    title: "Безопасные методы и приемы выполнения работ на высоте",
    image:
      "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=900&h=640&fit=crop&auto=format",
    hours: 24,
    breakdown: { theory: 14, practice: 8, exam: 2 },
    formats: ["очная", "очно-заочная"],
    mode: "8 часов в день",
    variants: [
      "Программа обучения для 1 группы",
      "Программа обучения для 2 группы",
      "Программа обучения для 3 группы",
    ],
  },
  {
    slug: "zamknutye-prostranstva",
    categorySlug: "ohrana-truda",
    title:
      "Безопасное выполнение работ в ограниченных и замкнутых пространствах для работников",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&h=640&fit=crop&auto=format",
    hours: 16,
    breakdown: { theory: 11, practice: 4, exam: 1 },
    formats: ["очно-заочная", "заочная с применением ДОТ"],
    variants: [
      "Программа обучения для 1 группы",
      "Программа обучения для 2 группы",
      "Программа обучения для 2 группы (для работников, в функции которых входит оценка параметров среды ОЗП)",
      "Программа обучения для 3 группы",
    ],
  },
  {
    slug: "raboty-povyshennoy-opasnosti",
    categorySlug: "ohrana-truda",
    title:
      "Безопасные методы и приемы выполнения работ повышенной опасности…",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&h=640&fit=crop&auto=format",
    hours: 16,
    breakdown: { theory: 11, practice: 4, exam: 1 },
    formats: ["очно-заочная", "заочная с применением ДОТ"],
    note: "…к которым предъявляются дополнительные требования в соответствии с нормативными правовыми актами, содержащими государственные нормативные требования охраны труда",
  },

  // ─── Пожарная безопасность ────────────────────────────────────────────────
  {
    slug: "specialist-po-pozharnoy-profilaktike",
    categorySlug: "pozharnaya-bezopasnost",
    title: "Специалист по пожарной профилактике",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=900&h=640&fit=crop&auto=format",
    hours: 256,
    breakdown: { theory: 236, exam: 6 },
    formats: [
      "очно-заочная с использованием дистанционных образовательных технологий",
      "заочная с использованием дистанционных образовательных технологий",
    ],
    mode: "8 часов в день",
  },
  {
    slug: "montazh-sistem-pozharotusheniya",
    categorySlug: "pozharnaya-bezopasnost",
    title:
      "Монтаж, техническое обслуживание и ремонт систем пожаротушения и их элементов, включая диспетчеризацию и проведение пусконаладочных работ",
    image:
      "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=900&h=640&fit=crop&auto=format",
    hours: 24,
    breakdown: { theory: 22, exam: 2 },
    formats: ["очно-заочная", "заочная с применением ДОТ"],
    mode: "8 часов в день",
  },

  // ─── Профессиональное обучение ────────────────────────────────────────────
  {
    slug: "montazhnik-naruzhnyh-truboprovodov",
    categorySlug: "professionalnoe-obuchenie",
    title: "Монтажник наружных трубопроводов",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=640&fit=crop&auto=format",
    hours: 112,
    breakdown: { theory: 40, practice: 64, exam: 8 },
    formats: [
      "очно-заочная",
      "заочная с применением ДОТ",
      "выездная на территорию заказчика",
    ],
    mode: "8 часов в день",
  },
  {
    slug: "montazhnik-stalnyh-konstrukciy",
    categorySlug: "professionalnoe-obuchenie",
    title: "Монтажник по монтажу стальных и железобетонных конструкций",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=640&fit=crop&auto=format",
    hours: 112,
    breakdown: { theory: 40, practice: 64, exam: 8 },
    formats: [
      "очно-заочная",
      "заочная с применением ДОТ",
      "выездная на территорию заказчика",
    ],
    mode: "8 часов в день",
  },
  {
    slug: "izolirovshchik",
    categorySlug: "professionalnoe-obuchenie",
    title: "Изолировщик",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=640&fit=crop&auto=format",
    hours: 112,
    breakdown: { theory: 40, practice: 64, exam: 8 },
    formats: [
      "очно-заочная",
      "заочная с применением ДОТ",
      "выездная на территорию заказчика",
    ],
    mode: "8 часов в день",
  },
  {
    slug: "izolirovshchik-termoizolyaciya",
    categorySlug: "professionalnoe-obuchenie",
    title: "Изолировщик на термоизоляции",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=640&fit=crop&auto=format",
    hours: 112,
    breakdown: { theory: 40, practice: 64, exam: 8 },
    formats: [
      "очно-заочная",
      "заочная с применением ДОТ",
      "выездная на территорию заказчика",
    ],
    mode: "8 часов в день",
  },
  {
    slug: "stropalshchik",
    categorySlug: "professionalnoe-obuchenie",
    title: "Стропальщик",
    image:
      "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=900&h=640&fit=crop&auto=format",
    hours: 112,
    breakdown: { theory: 40, practice: 64, exam: 8 },
    formats: [
      "очно-заочная",
      "заочная с применением ДОТ",
      "выездная на территорию заказчика",
    ],
    mode: "8 часов в день",
  },

  // ─── Дополнительная профессиональная переподготовка ───────────────────────
  {
    slug: "tehnosfernaya-bezopasnost-ohrana-truda",
    categorySlug: "dopolnitelnaya-professionalnaya-perepodgotovka",
    title: "Техносферная безопасность. Охрана труда",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=640&fit=crop&auto=format",
    hours: 512,
    breakdown: { theory: 504, exam: 8 },
    formats: ["заочная с применением ДОТ"],
  },
  {
    slug: "specialist-bdd-perepodgotovka",
    categorySlug: "dopolnitelnaya-professionalnaya-perepodgotovka",
    title:
      "Специалист, ответственный за обеспечение безопасности дорожного движения",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&h=640&fit=crop&auto=format",
    hours: 512,
    breakdown: { theory: 454, internship: 50, exam: 8 },
    formats: ["очно-заочная с применением ДОТ"],
  },
  {
    slug: "specialist-pozharnoy-profilaktiki-perepodgotovka",
    categorySlug: "dopolnitelnaya-professionalnaya-perepodgotovka",
    title: "Специалист по пожарной профилактике",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=900&h=640&fit=crop&auto=format",
    hours: 256,
    breakdown: { theory: 236, exam: 6 },
    formats: [
      "очно-заочная с использованием дистанционных образовательных технологий",
      "заочная с использованием дистанционных образовательных технологий",
    ],
    mode: "8 часов в день",
  },
  {
    slug: "kontroler-ats-perepodgotovka",
    categorySlug: "dopolnitelnaya-professionalnaya-perepodgotovka",
    title: "Контролер технического состояния автотранспортных средств",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&h=640&fit=crop&auto=format",
    hours: 512,
    breakdown: { theory: 454, internship: 50, exam: 8 },
    formats: ["очно-заочная с применением ДОТ"],
  },

  // ─── Повышение квалификации ───────────────────────────────────────────────
  {
    slug: "ekologicheskaya-bezopasnost-othody",
    categorySlug: "povyshenie-kvalifikacii",
    title:
      "Обеспечение экологической безопасности при работах в области обращения с опасными отходами I–IV классов опасности",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900&h=640&fit=crop&auto=format",
    hours: 112,
    breakdown: { theory: 110, exam: 2 },
    formats: ["очно-заочная", "заочная с применением ДОТ"],
    mode: "8 часов в день",
  },
  {
    slug: "promyshlennaya-bezopasnost-oborudovanie",
    categorySlug: "povyshenie-kvalifikacii",
    title:
      "Требования промышленной безопасности к оборудованию, работающему под давлением",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&h=640&fit=crop&auto=format",
    hours: 72,
    breakdown: { theory: 68, exam: 4 },
    formats: ["очно-заочная", "заочная с применением ДОТ"],
    mode: "8 часов в день",
  },
  {
    slug: "ohrana-okruzhayushchey-sredy",
    categorySlug: "povyshenie-kvalifikacii",
    title:
      "Подготовка руководителей организаций и специалистов в области охраны окружающей среды и экологической безопасности…",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&h=640&fit=crop&auto=format",
    hours: 40,
    breakdown: { theory: 38, exam: 2 },
    formats: ["очно-заочная", "заочная с применением ДОТ"],
    mode: "8 часов в день",
    note: "…ответственных за принятие решений при осуществлении хозяйственной и иной деятельности, которая оказывает или может оказать негативное воздействие на окружающую среду",
  },
];

export function getProgram(categorySlug: string, programSlug: string) {
  return programs.find(
    (p) => p.categorySlug === categorySlug && p.slug === programSlug,
  );
}

export function getProgramsByCategory(categorySlug: string) {
  return programs.filter((p) => p.categorySlug === categorySlug);
}