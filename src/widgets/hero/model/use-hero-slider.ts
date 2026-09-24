"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDE_DURATION } from "./slides";

export function useHeroSlider(total: number) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  // Единственный источник старта/перезапуска таймеров — activeSlide.
  useEffect(() => {
    clearTimers();
    setProgress(0);

    let p = 0;
    const step = 100 / (SLIDE_DURATION / 50);

    progressRef.current = window.setInterval(() => {
      p += step;
      setProgress(Math.min(p, 100));
    }, 50);

    intervalRef.current = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % total);
    }, SLIDE_DURATION);

    return clearTimers;
  }, [activeSlide, total, clearTimers]);

  const goTo = useCallback((idx: number) => {
    setActiveSlide(idx);
  }, []);

  const next = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveSlide((current) => (current - 1 + total) % total);
  }, [total]);

  return { activeSlide, progress, goTo, next, prev };
}