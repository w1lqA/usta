import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProgramCategory } from "@/entities/program-category";
import { getProgramsByCategory } from "@/entities/program";

type Props = {
  category: ProgramCategory;
};

export function ProgramCard({ category }: Props) {
  const count = getProgramsByCategory(category.slug).length;

  return (
    <Link
      href={`/programs/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white transition-shadow duration-300 hover:shadow-md"
    >
      <div className="relative h-[15rem] overflow-hidden rounded-t-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.heroImage}
          alt={category.title}
          className="h-full w-full object-cover brightness-[0.78] transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,14,20,0.6) 0%, transparent 55%)",
          }}
        />
        <div className="absolute bottom-5 left-6">
          <span className="text-caption font-bold tracking-[0.05em] text-brand-green">
            {count} {count === 1 ? "программа" : count < 5 ? "программы" : "программ"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-7 py-6">
        <h3 className="flex-1 mb-2 text-xl leading-snug font-bold text-dark-900 transition-colors group-hover:text-brand-primary lg:text-2xl">
          {category.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-neutral-500 line-clamp-2">
          {category.shortDescription}
        </p>
        <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent transition-all group-hover:gap-3">
          Смотреть программы
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}