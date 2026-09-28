"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    ymaps3: typeof ymaps3;
  }
}

type YmapsStatus = "idle" | "loading" | "ready" | "error";

export function useYmaps() {
  const [status, setStatus] = useState<YmapsStatus>("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Уже загружен (например, при hot-reload)
    if (window.ymaps3) {
      window.ymaps3.ready.then(() => setStatus("ready"));
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
    if (!apiKey) {
      console.error("NEXT_PUBLIC_YANDEX_MAPS_API_KEY не задан");
      setStatus("error");
      return;
    }

    // Проверяем, не загружается ли скрипт уже
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="api-maps.yandex.ru"]',
    );
    if (existing) {
      setStatus("loading");
      const checkReady = () => {
        if (window.ymaps3) {
          window.ymaps3.ready.then(() => setStatus("ready"));
        } else {
          setTimeout(checkReady, 100);
        }
      };
      checkReady();
      return;
    }

    setStatus("loading");

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;

    script.onload = () => {
      if (window.ymaps3) {
        window.ymaps3.ready.then(() => setStatus("ready"));
      } else {
        setStatus("error");
      }
    };

    script.onerror = () => setStatus("error");
    document.head.appendChild(script);
  }, []);

  return status;
}