export type HeroSlide = {
  id: number;
  image: string;
  label: string;
  title: string;
  sub: string;
  cta: string;
  ctaLink: string;
  ctaSecondary: string;
  ctaSecondaryLink: string;
};

export const slides: HeroSlide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop&auto=format",
    label: "ПРОФЕССИОНАЛЬНАЯ ПОДГОТОВКА",
    title: "Обучение\nпо охране\nтруда",
    sub: "Индивидуальный подход. Официальные документы государственного образца.",
    cta: "Программы обучения",
    ctaLink: "/programs",
    ctaSecondary: "О центре",
    ctaSecondaryLink: "/about",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1577199001468-44c049e7603f?w=1920&h=1080&fit=crop&auto=format",
    label: "ПРОМЫШЛЕННАЯ БЕЗОПАСНОСТЬ",
    title: "Обучение\nспециалистов\nОПО",
    sub: "Аккредитованный учебный центр. Лицензия Министерства просвещения РФ.",
    cta: "Подробнее",
    ctaLink: "/programs/promyshlennaya",
    ctaSecondary: "Все программы",
    ctaSecondaryLink: "/programs",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?w=1920&h=1080&fit=crop&auto=format",
    label: "КОРПОРАТИВНОЕ ОБУЧЕНИЕ",
    title: "Выездное\nобучение для\nорганизаций",
    sub: "Обучение сотрудников с выездом к заказчику. Гибкий график и форматы.",
    cta: "Оставить заявку",
    ctaLink: "/contacts",
    ctaSecondary: "О центре",
    ctaSecondaryLink: "/about",
  },
];

export const SLIDE_DURATION = 6000;