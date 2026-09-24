import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

/**
 * Max-width 1400px, responsive side padding (24 → 64px).
 * Values live in app/globals.css as --container-max / --page-padding-*.
 */
export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component className={cn("container", className)} {...props}>
      {children}
    </Component>
  );
}
