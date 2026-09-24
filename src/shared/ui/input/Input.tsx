import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      ref={ref}
      className={cn("field-input", error && "field-input-error", className)}
      {...props}
    />
  )
);

Input.displayName = "Input";
