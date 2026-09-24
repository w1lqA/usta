import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/entities/program";

type Props = {
  program: Program;
};

export function ProgramCard({ program }: Props) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white transition-shadow duration-300 hover:shadow-md"
    >
      {/* Photo */}
      <div className="relative h-[15rem] overflow-hidden rounded-t-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover brightness-[0.78] transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,14,20,0.6) 0%, transparent 55%)",
          }}
        />
        {/* Number */}
        <div className="absolute top-5 left-6">
          <span className="text-caption font-bold tracking-[0.05em] text-brand-green">
            {program.num}
          </span>
        </div>
        {/* Duration */}
        <div className="absolute right-6 bottom-5">
          <span className="text-xs font-medium text-white/65">
            {program.duration}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-7 py-6">
        <h3 className="mb-5 flex-1 text-xl leading-snug font-bold text-dark-900 transition-colors group-hover:text-brand-primary lg:text-2xl">
          {program.title}
        </h3>
        <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent transition-all group-hover:gap-3">
          Подробнее
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}