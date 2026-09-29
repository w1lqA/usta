"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container, Button } from "@/shared/ui";
import { cn, springSoft } from "@/shared/lib";
import { navLinks } from "../model/nav-links";
import { MobileMenu } from "./MobileMenu";

const PHONE = "+7 (999) 870-74-05";
const PHONE_HREF = "tel:+79998707405";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

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
      <motion.header
        initial={shouldReduceMotion ? false : { y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : springSoft}
        className={cn(
          "sticky top-0 z-[100] h-(--header-height) w-full",
          "border-b transition-[background-color,border-color,box-shadow] duration-300",
          "backdrop-blur-xl backdrop-saturate-150",
          scrolled
            ? "border-neutral-200/80 bg-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_24px_rgba(8,14,20,0.06)]"
            : "border-white/40 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
        )}
      >
        <Container className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-accent text-caption font-bold text-white transition-transform duration-300 hover:scale-105">
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

          {/* Nav */}
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
                      "group relative text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-brand-primary"
                        : "text-neutral-700 hover:text-brand-primary",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-[2px] bg-brand-accent transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
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
                      "group relative flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-brand-primary"
                        : "text-neutral-700 hover:text-brand-primary",
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
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-[2px] bg-brand-accent transition-all duration-300",
                        isActive || openDropdown === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>

                  <div
                    className={cn(
                      "absolute top-full left-0 pt-3",
                      "transition-all duration-200",
                      openDropdown === item.href
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="min-w-[15rem] rounded-lg border border-white/50 bg-white/85 py-2 shadow-lg backdrop-blur-xl backdrop-saturate-150">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-white/60 hover:text-brand-primary"
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

          {/* Actions */}
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

          {/* Burger */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-neutral-900 transition-colors hover:bg-white/50 lg:hidden"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>
      </motion.header>

      <MobileMenu open={menuOpen} phone={PHONE} phoneHref={PHONE_HREF} />
    </>
  );
}