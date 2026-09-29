"use client";

import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn, springSoft } from "@/shared/lib";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  /** Переопределить className панели (например max-w-2xl). */
  className?: string;
  /** Классы для внутреннего контента (padding и т.п.). */
  contentClassName?: string;
  /** Скрыть крестик — по умолчанию показывается. */
  showCloseButton?: boolean;
};

export function Modal({
  open,
  onClose,
  children,
  title,
  className,
  contentClassName,
  showCloseButton = true,
}: Props) {
  const shouldReduceMotion = useReducedMotion();
  const generatedId = useId();
  const titleId = title ? `${generatedId}-title` : undefined;

  // Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // SSR-safe
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-(--z-modal) flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <motion.div
            key="panel"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.97, y: 12 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            transition={shouldReduceMotion ? { duration: 0 } : springSoft}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "scrollbar-thin relative max-h-[90vh] w-full overflow-y-auto rounded-3xl bg-white shadow-lg",
              className,
            )}
          >
            {/* Header — всегда sticky, если есть title или close */}
            {(title || showCloseButton) && (
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-neutral-100 bg-white px-7 py-5">
                {title ? (
                  <h2
                    id={titleId}
                    className="text-base font-bold text-neutral-900 lg:text-lg"
                  >
                    {title}
                  </h2>
                ) : (
                  <span />
                )}
                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Закрыть"
                    className="flex-shrink-0 text-neutral-400 transition-colors hover:text-neutral-700"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            <div className={cn("px-7 py-7", contentClassName)}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}