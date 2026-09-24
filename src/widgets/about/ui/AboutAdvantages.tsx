import { GraduationCap, ShieldCheck, Building2, FileText } from "lucide-react";

const advantages = [
  { icon: GraduationCap, label: "Высокая скорость подготовки" },
  { icon: ShieldCheck, label: "Лицензированный центр" },
  { icon: Building2, label: "Корпоративные программы" },
  { icon: FileText, label: "Индивидуальный подход" },
] as const;

export function AboutAdvantages() {
  return (
    <div className="mt-12 mb-14 grid max-w-[30rem] grid-cols-2 gap-x-10 gap-y-6">
      {advantages.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-start gap-3">
          <Icon
            size={16}
            className="mt-0.5 flex-shrink-0 text-brand-accent"
          />
          <span className="text-sm font-medium leading-snug text-neutral-700">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}