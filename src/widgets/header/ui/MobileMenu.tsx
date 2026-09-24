"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { navLinks } from "../model/nav-links";

type MobileMenuProps = {
  open: boolean;
  phone: string;
  phoneHref: string;
};

export function MobileMenu({ open, phone, phoneHref }: MobileMenuProps) {
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
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-b border-border py-4 text-lg font-medium text-neutral-900"
          >
            {item.label}
          </Link>
        ))}
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