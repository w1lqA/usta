import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export type SectionPadding = "none" | "sm" | "default" | "lg";
export type SectionSurface =
  | "transparent"
  | "surface"
  | "muted"
  | "subtle"
  | "dark"
  | "dark-deep";

export type SectionProps = {
  as?: ElementType;
  padding?: SectionPadding;
  surface?: SectionSurface;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

const paddingClass: Record<SectionPadding, string> = {
  none: "",
  sm: "section-padding-sm",
  default: "section-padding",
  lg: "section-padding-lg",
};

const surfaceClass: Record<SectionSurface, string> = {
  transparent: "",
  surface: "surface",
  muted: "surface-muted",
  subtle: "surface-subtle",
  dark: "surface-dark",
  "dark-deep": "surface-dark-deep",
};

/**
 * One <section> = one page block. Handles vertical rhythm (padding) and
 * background (surface) so widgets never hardcode py-* or bg-* for this.
 */
export function Section({
  as: Component = "section",
  padding = "default",
  surface = "transparent",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "page-section",
        paddingClass[padding],
        surfaceClass[surface],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
