import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export function EducationSection({ id, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-[calc(var(--header-height)+2rem)]">
      <h2 className="mb-6 border-b border-border pb-4 text-2xl font-bold text-dark-900 lg:text-3xl">
        {title}
      </h2>
      <div className="flex flex-col gap-6 text-base leading-relaxed text-neutral-700">
        {children}
      </div>
    </section>
  );
}