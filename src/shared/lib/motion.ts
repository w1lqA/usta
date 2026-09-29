import type { Transition, Variants } from "motion/react";

/**
 * Единая система spring/ease-параметров для всего сайта.
 * Используется во всех onlanding / whileInView / hover-анимациях,
 * чтобы движение ощущалось как одна система.
 */

// ─── Springs ──────────────────────────────────────────────────────────────

/** Мягкий пружинный переход — базовый для большинства появлений. */
export const springSoft: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

/** Более живой, с лёгким overshoot — для акцентных элементов (кнопки, бейджи). */
export const springBouncy: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.6,
};

/** Медленный, спокойный — для крупных блоков и секций. */
export const springGentle: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 24,
  mass: 1,
};

// ─── Easing (не-spring) ───────────────────────────────────────────────────

/** Плавный ease-out для opacity-переходов. */
export const easeOut: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};

/** Быстрый fade — для мелких элементов. */
export const easeFade: Transition = {
  duration: 0.4,
  ease: [0.2, 0.8, 0.2, 1],
};

// ─── Готовые variants ─────────────────────────────────────────────────────

/** Стандартное появление снизу вверх — fade + подъём. */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

/** Появление сверху вниз — для header, дропдаунов. */
export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

/** Появление слева. */
export const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

/** Появление справа. */
export const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

/** Простой fade без движения. */
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Stagger-контейнер: children появляются друг за другом.
 * Применяй к родителю, у детей — свои variants (fadeUpVariants и т.п.).
 */
export function staggerContainer(
  stagger = 0.08,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

// ─── Учёт reduced-motion ──────────────────────────────────────────────────

/**
 * Возвращает true, если пользователь запросил уменьшенное движение
 * (prefers-reduced-motion: reduce). В этом случае анимации нужно отключить
 * или свести к простому fade.
 *
 * Motion уже учитывает это в useReducedMotion.
 */
export const reducedMotionTransition: Transition = {
  duration: 0.01,
};


/** Появление с лёгким вращением — для документов, «физических» объектов. */
export const fadeScaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

/** Появление с лёгким наклоном — для документов. */
export const documentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 30, rotate: -1 },
  visible: { opacity: 1, scale: 1, y: 0, rotate: 0 },
};

/** Простое появление с масштабом без движения. */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};