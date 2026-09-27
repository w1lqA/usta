"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { navLinks } from "../model/nav-links";

type MobileMenuProps = {
  open: boolean;
  phone: string;
  phoneHref: string;
};

export function MobileMenu({ open, phone, phoneHref }: MobileMenuProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-[90] flex flex-col overflow-y-auto",
        "top-(--header-height) h-[calc(100dvh-var(--header-height))]",
        "border-t border-border bg-white px-6 py-8",
        "transition-standard lg:hidden",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0",
      )}
      aria-hidden={!open}
    >
      <nav className="flex flex-col">
        {navLinks.map((item) => {
          if (!item.children) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border py-4 text-lg font-medium text-neutral-900"
              >
                {item.label}
              </Link>
            );
          }

          const isOpen = openGroup === item.href;

          return (
            <div key={item.href} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpenGroup(isOpen ? null : item.href)}
                className="flex w-full items-center justify-between py-4 text-lg font-medium text-neutral-900"
                aria-expanded={isOpen}
              >
                {item.label}
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col pb-3 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2.5 text-base text-neutral-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <a
        href={phoneHref}
        className="mt-8 flex items-center gap-2 text-base font-medium text-neutral-700"
      >
        <Phone size={16} className="text-brand-accent" />
        {phone}
      </a>

      <Button href="/contacts" className="mt-6 w-full">
        Оставить заявку
      </Button>
    </div>
  );
}