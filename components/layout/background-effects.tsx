"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.92_0.06_264/0.5),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,oklch(0.93_0.05_280/0.35),transparent)]" />
      <motion.div
        className="absolute -left-[20%] top-1/4 size-[42rem] rounded-full bg-[linear-gradient(135deg,oklch(0.88_0.08_264/0.45),oklch(0.9_0.06_300/0.25))] blur-3xl"
        animate={{
          x: [0, 24, 0],
          y: [0, -16, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] bottom-[10%] size-[36rem] rounded-full bg-[linear-gradient(200deg,oklch(0.9_0.05_220/0.4),oklch(0.92_0.04_264/0.2))] blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.995_0.003_264),oklch(0.99_0.004_264)_40%,oklch(0.98_0.006_264)_100%)]" />
    </div>
  );
}
