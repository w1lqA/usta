"use client";

import { useEffect, useState } from "react";
import { cn } from "@/shared/lib";
import { educationNavigation } from "../model/navigation";

export function EducationNavigation() {
  const [activeId, setActiveId] = useState<string>(
    educationNavigation[0].id,
  );

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;
      let current = educationNavigation[0].id;

      for (const item of educationNavigation) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollY) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <>
      {/* Mobile: dropdown */}
      <div className="mb-6 lg:hidden">
        <label
          htmlFor="sveden-nav"
          className="mb-2 block text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase"
        >
          Разделы
        </label>
        <select
          id="sveden-nav"
          value={activeId}
          onChange={(e) => handleClick(e.target.value)}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-neutral-900"
        >
          {educationNavigation.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: sticky sidebar — sticky-обёртка в EducationInformationPage */}
      <nav className="hidden lg:block">
        <p className="mb-4 text-caption font-bold tracking-[0.18em] text-neutral-400 uppercase">
          Разделы
        </p>
        <ul className="flex flex-col gap-1 border-l border-border">
          {educationNavigation.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                className={cn(
                  "-ml-px border-l-2 py-2 pl-4 text-left text-sm transition-colors",
                  activeId === item.id
                    ? "border-brand-accent font-semibold text-brand-primary"
                    : "border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-900",
                )}
              >
                {item.shortLabel}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}