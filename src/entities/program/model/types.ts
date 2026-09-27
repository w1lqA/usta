export type ProgramBreakdown = {
  theory?: number;
  practice?: number;
  exam?: number;
  internship?: number;
};

export type Program = {
  slug: string;
  categorySlug: string;
  title: string;
  image: string;
  hours: number;
  breakdown: ProgramBreakdown;
  duration?: string;
  formats: string[];
  mode?: string;
  note?: string;
  variants?: string[];
};