"use client";

import { useCustomCursor } from "./useCustomCursor";

const ACCENT = "39, 124, 122";

export function AnimatedCursor() {
  const { outerWrapRef, outerCircleRef, innerRef, dotSize } = useCustomCursor();

  return (
    <>
      {/* Outer circle wrapper — только позиция */}
      <div
        ref={outerWrapRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ width: 0, height: 0, willChange: "transform" }}
      >
        {/* Outer circle — scale + визуал */}
        <div
          ref={outerCircleRef}
          className="pointer-events-none absolute rounded-full transition-[transform,background-color,border-color] duration-200 ease-out"
          style={{
            width: dotSize,
            height: dotSize,
            border: `1px solid rgba(${ACCENT}, 0.55)`,
            backgroundColor: "transparent",
            transform: "translate(-50%, -50%) scale(1)",
            willChange: "transform, background-color, border-color",
          }}
        />
      </div>

      {/* Inner dot — строго за курсором, растворяется при hover */}
      <div
        ref={innerRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-[opacity,transform] duration-200 ease-out"
        style={{
          width: dotSize,
          height: dotSize,
          backgroundColor: `rgb(${ACCENT})`,
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 1,
          willChange: "transform, opacity",
        }}
      />
    </>
  );
}