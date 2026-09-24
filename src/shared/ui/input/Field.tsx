import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Layout wrapper only — pass an <Input> or <Textarea> as children.
 * Matches .field / .field-label / .field-error from globals.css.
 */
export function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("field", className)}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required && " *"}
      </label>
      {children}
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}
