"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CONTRIBUTORS = [
  "Maten Eleonora",
  "Kaldaulat Nurai",
  "Suleimen Shugyla",
] as const;

export function AcademicContributors() {
  const blockRef = useRef<HTMLElement | null>(null);
  const inView = useInView(blockRef, { once: true, margin: "-8%" });

  return (
    <section
      ref={blockRef}
      aria-labelledby="academic-contributors-heading"
      className="border-t border-border/50 pt-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          id="academic-contributors-heading"
          className="font-heading uppercase text-[10px] font-semibold tracking-[0.22em] text-muted-foreground"
        >
          Academic Contributors
        </h2>

        <div className="mt-3 h-px w-full bg-gradient-to-r from-border/70 via-border/40 to-transparent" />

        <p className="mt-5 text-[13px] font-medium leading-relaxed tracking-tight text-foreground/90 sm:text-sm">
          <span className="sr-only">
            {CONTRIBUTORS.join(", ")}
          </span>
          <span aria-hidden>{CONTRIBUTORS.join(" · ")}</span>
        </p>
      </motion.div>
    </section>
  );
}
