export type EducationProgramRow = {
  code: string;              // "ДПП ПП", "ДПП ПК", "ДОП ОР", "ОП ПО", "Рабочая программа"
  name: string;
  form: string;              // "Очно-заочная с применением ДОТ"
  hours: number;
  language: string;          // "русский"
  accreditation: string;     // "не предусмотрено"
  hasPractice: boolean;
  category: string;          // для группировки: "ДПП ПП", "ДПП ПК", "ОП ПО", "Охрана труда"
};