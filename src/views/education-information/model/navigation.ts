export type EducationNavItem = {
  id: string;
  label: string;
  shortLabel: string;
};

export const educationNavigation: EducationNavItem[] = [
  { id: "osnovnye-svedeniya", label: "Основные сведения", shortLabel: "Основные сведения" },
  { id: "struktura", label: "Структура и органы управления", shortLabel: "Структура" },
  { id: "dokumenty", label: "Документы", shortLabel: "Документы" },
  { id: "obrazovanie", label: "Образование", shortLabel: "Образование" },
  { id: "rukovodstvo", label: "Руководство", shortLabel: "Руководство" },
  { id: "ped-sostav", label: "Педагогический состав", shortLabel: "Педагогический состав" },
  { id: "materialno-tehnicheskoe", label: "Материально-техническое обеспечение и оснащённость", shortLabel: "Материально-техническое обеспечение" },
  { id: "platnye-uslugi", label: "Платные образовательные услуги", shortLabel: "Платные услуги" },
  { id: "finansovo-hozyaystvennaya", label: "Финансово-хозяйственная деятельность", shortLabel: "Финансово-хозяйственная деятельность" },
  { id: "vakantnye-mesta", label: "Вакантные места для приёма (перевода)", shortLabel: "Вакантные места" },
  { id: "stipendii", label: "Стипендии и меры поддержки", shortLabel: "Стипендии" },
  { id: "mezhdunarodnoe", label: "Международное сотрудничество", shortLabel: "Международное сотрудничество" },
  { id: "pitanie", label: "Организация питания", shortLabel: "Организация питания" },
];