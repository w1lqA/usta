"use client";

import { useEffect, useRef } from "react";

const LERP = 0.15;
const DOT_SIZE = 10;
const HOVER_SCALE = 7;
const ACCENT = "39, 124, 122"; // --brand-accent: #277c7a

export function useCustomCursor() {
  const outerWrapRef = useRef<HTMLDivElement | null>(null);
  const outerCircleRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });
  const hoverRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    const outerWrap = outerWrapRef.current;
    const outerCircle = outerCircleRef.current;
    const inner = innerRef.current;
    if (!outerWrap || !outerCircle || !inner) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const setHover = (active: boolean) => {
      if (hoverRef.current === active) return;
      hoverRef.current = active;

      // Внутренняя точка — растворяется при hover
      inner.style.opacity = active ? "0" : "1";
      inner.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0) translate(-50%, -50%) scale(${active ? 0.4 : 1})`;

      // Внешний круг — растёт, становится полупрозрачным
      outerCircle.style.backgroundColor = active
        ? `rgba(${ACCENT}, 0.14)`
        : "transparent";
      outerCircle.style.borderColor = active
        ? `rgba(${ACCENT}, 0.35)`
        : `rgba(${ACCENT}, 0.55)`;
      outerCircle.style.transform = `translate(-50%, -50%) scale(${active ? HOVER_SCALE : 1})`;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const interactive = el.closest(
        "a, button, input, select, textarea, label, [role='button']",
      );
      setHover(!!interactive);
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related) {
        setHover(false);
        return;
      }
      const interactive = related.closest(
        "a, button, input, select, textarea, label, [role='button']",
      );
      setHover(!!interactive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });

    const tick = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * LERP;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * LERP;

      outerWrap.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;

      // Позиция точки — всегда строго за курсором. Масштаб — управляется в setHover.
      const innerScale = hoverRef.current ? 0.4 : 1;
      inner.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0) translate(-50%, -50%) scale(${innerScale})`;

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { outerWrapRef, outerCircleRef, innerRef, dotSize: DOT_SIZE };
}