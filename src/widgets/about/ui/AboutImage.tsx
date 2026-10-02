"use client";

import { motion, type MotionValue } from "motion/react";
import { AboutAdvantages } from "./AboutAdvantages";

type Props = {
  imageParallaxY: MotionValue<string>;
  cardParallaxY: MotionValue<string>;
  shouldReduceMotion: boolean;
};

export function AboutImage({
  imageParallaxY,
  cardParallaxY,
  shouldReduceMotion,
}: Props) {
  return (
    <div className="relative">
      {/* ─── Mobile: normal flow, без bleed и parallax ─── */}
      <div className="lg:hidden relative mb-64">
        <div className="radius-signature relative aspect-[4/5] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=760&h=1000&fit=crop&auto=format"
            alt="Учебный процесс"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(2,71,92,0.65) 0%, rgba(2,71,92,0.1) 55%, transparent 75%)",
            }}
          />
        </div>

        <div className="mt-6 flex w-full absolute -bottom-64 flex-col gap-4 rounded-2xl border border-[#f0efeb] bg-white px-6 py-6 shadow-md">
          <div className="flex items-center gap-4">
            <span className="text-5xl leading-none font-extrabold text-brand-primary">
              6+
            </span>
            <span className="text-xs leading-snug font-medium text-neutral-500">
              направлений
              <br />
              обучения
            </span>
          </div>
          <div className="h-px w-full bg-neutral-200" />
          <AboutAdvantages />
        </div>
      </div>

      {/* ─── Desktop: bleed + parallax (как было) ─── */}
      <div className="hidden lg:block">
        <div className="absolute inset-y-0 left-0 right-0 -mr-[calc((100vw-87.5rem)/2+3.5rem)]">
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : imageParallaxY }}
            className="radius-signature relative aspect-[4/5] h-full w-full overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=1200&h=1600&fit=crop&auto=format"
              alt="Учебный процесс"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(2,71,92,0.65) 0%, rgba(2,71,92,0.1) 55%, transparent 75%)",
              }}
            />
          </motion.div>
        </div>

        <motion.div
          style={{ y: shouldReduceMotion ? 0 : cardParallaxY }}
          className="pointer-events-none absolute -bottom-10 -left-10 z-10 flex w-fit max-w-[42rem] items-stretch gap-6 rounded-[0_1.25rem_0_1.25rem] border border-[#f0efeb] bg-white px-10 py-8 shadow-md"
        >
          <div className="flex flex-col justify-center">
            <div className="mb-1 text-6xl leading-none font-extrabold text-brand-primary">
              6+
            </div>
            <div className="text-xs leading-snug font-medium text-neutral-500">
              направлений
              <br />
              обучения
            </div>
          </div>
          <div className="w-px self-stretch bg-neutral-200" />
          <div className="flex items-center">
            <AboutAdvantages />
          </div>
        </motion.div>
      </div>
    </div>
  );
}