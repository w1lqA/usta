"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/shared/ui";
import {
  documentVariants,
  fadeInRightVariants,
  fadeInLeftVariants,
  fadeUpVariants,
  springGentle,
  springSoft,
  staggerContainer,
} from "@/shared/lib";
import { LicenseInfo } from "./LicenseInfo";
import { LicensePreview } from "./LicensePreview";
import { LicenseModal } from "./LicenseModal";

const viewportOnce = { once: true, amount: 0.2 } as const;

export function License() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const rt = shouldReduceMotion ? { duration: 0 } : undefined;

  return (
    <section className="bg-brand-primary">
      <Container>
        <div className="flex flex-col lg:flex-row">
          {/* Left — text. Golden ratio */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.12, 0.05)}
            className="flex min-w-0 lg:flex-[1.618]"
          >
            <LicenseInfo onOpen={() => setOpen(true)} />
          </motion.div>

          {/* Right — preview. Document "arrives" as physical object */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={documentVariants}
            transition={rt ?? springGentle}
            className="flex min-w-0 items-center justify-center px-10 py-20 lg:flex-1 lg:px-16 lg:py-28"
          >
            <LicensePreview onOpen={() => setOpen(true)} />
          </motion.div>
        </div>
      </Container>

      <LicenseModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}