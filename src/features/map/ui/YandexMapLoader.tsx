"use client";

import dynamic from "next/dynamic";

export const YandexMap = dynamic(
  () => import("./YandexMap").then((m) => m.YandexMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[26rem] items-center justify-center rounded-3xl border border-border bg-neutral-100 lg:h-[32.5rem]">
        <p className="text-sm text-neutral-400">Загрузка карты…</p>
      </div>
    ),
  },
);