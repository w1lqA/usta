import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/shared/lib";

type Tone = "primary" | "light";

type Props = {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
};

const toneStyles: Record<
  Tone,
  { link: string; border: string; arrow: string }
> = {
  primary: {
    link: "text-brand-primary hover:text-brand-accent",
    border: "border-brand-primary/30 group-hover:border-brand-accent",
    arrow: "",
  },
  light: {
    link: "text-white hover:text-white/70",
    border: "border-white/30 group-hover:border-white",
    arrow: "",
  },
};

export function ActionLink({
  href,
  children,
  tone = "primary",
  className,
}: Props) {
  const styles = toneStyles[tone];

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex w-fit items-center gap-2.5 text-sm font-semibold transition-colors",
        styles.link,
        className,
      )}
    >
      <span
        className={cn(
          "border-b pb-0.5 transition-colors",
          styles.border,
          styles.arrow,
        )}
      >
        {children}
      </span>
      <ArrowRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}