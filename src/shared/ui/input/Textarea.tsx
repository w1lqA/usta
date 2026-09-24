import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "field-input",
        "field-textarea",
        error && "field-input-error",
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
