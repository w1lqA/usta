import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  errorId?: string;
  children: ReactNode;
};

export function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  errorId,
  children,
}: FieldProps) {
  return (
    <div className={cn("field", className)}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required && " *"}
      </label>
      {children}
      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}