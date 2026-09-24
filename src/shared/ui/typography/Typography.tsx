import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export type HeadingLevel =
  | "display-xl"
  | "display-lg"
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "heading-sm";

export type HeadingProps = {
  as?: ElementType;
  level: HeadingLevel;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

const headingClass: Record<HeadingLevel, string> = {
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  "heading-xl": "text-heading-xl",
  "heading-lg": "text-heading-lg",
  "heading-md": "text-heading-md",
  "heading-sm": "text-heading-sm",
};

// Sensible default tag per level — override with `as` when the outline
// needs a different heading order than the visual size.
const defaultTag: Record<HeadingLevel, ElementType> = {
  "display-xl": "h1",
  "display-lg": "h1",
  "heading-xl": "h2",
  "heading-lg": "h2",
  "heading-md": "h3",
  "heading-sm": "h3",
};

export function Heading({ as, level, className, children, ...props }: HeadingProps) {
  const Component = as ?? defaultTag[level];
  return (
    <Component className={cn(headingClass[level], className)} {...props}>
      {children}
    </Component>
  );
}

export type TextSize = "lg" | "default" | "sm" | "label" | "caption";

export type TextProps = {
  as?: ElementType;
  size?: TextSize;
  muted?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

const textClass: Record<TextSize, string> = {
  lg: "text-body-lg",
  default: "text-body",
  sm: "text-body-sm",
  label: "text-label",
  caption: "text-caption",
};

export function Text({
  as: Component = "p",
  size = "default",
  muted = false,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textClass[size], muted && "text-neutral-600", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
