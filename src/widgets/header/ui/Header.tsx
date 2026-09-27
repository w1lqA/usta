"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Container, Button } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { navLinks } from "../model/nav-links";
import { MobileMenu } from "./MobileMenu";

const PHONE = "+7 (999) 870-74-05";
const PHONE_HREF = "tel:+79998707405";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[100] h-(--header-height) w-full",
          "glass-soft border-b border-border transition-fast",
          scrolled && "shadow-sm",
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-accent text-caption font-bold text-white">
              УЦ
            </span>
            <span className="leading-none">
              <span className="block text-xs font-bold tracking-wide text-neutral-900">
                УЧЕБНЫЙ ЦЕНТР
              </span>
              <span className="mt-0.5 block text-micro font-semibold tracking-[0.18em] text-brand-green">
                УСТА
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium text-neutral-700 transition-colors hover:text-brand-primary",
                      isActive && "text-brand-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-primary",
                      isActive && "text-brand-primary",
                    )}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.href}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        openDropdown === item.href && "rotate-180",
                      )}
                    />
                  </Link>

                  <div
                    className={cn(
                      "absolute left-0 top-full pt-3",
                      "transition-all duration-200",
                      openDropdown === item.href
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="glass min-w-[15rem] rounded-lg border border-border py-2 shadow-md">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-primary"
            >
              <Phone size={15} className="text-brand-accent" />
              {PHONE}
            </a>
            <Button href="/contacts" size="sm">
              Оставить заявку
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-neutral-900 lg:hidden"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} phone={PHONE} phoneHref={PHONE_HREF} />
    </>
  );
}