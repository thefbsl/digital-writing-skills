"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FadeInSection } from "@/components/sections/fade-in-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const weekly = [
  { label: "Mon", v: 42 },
  { label: "Tue", v: 58 },
  { label: "Wed", v: 51 },
  { label: "Thu", v: 72 },
  { label: "Fri", v: 64 },
  { label: "Sat", v: 48 },
  { label: "Sun", v: 55 },
];

type ProgressChartsProps = {
  variant?: "home" | "page";
};

export function ProgressCharts({ variant = "home" }: ProgressChartsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  const [counts, setCounts] = useState({
    exercises: 0,
    streak: 0,
    improvement: 0,
  });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const targets = { exercises: 28, streak: 12, improvement: 18 };
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - p) ** 3;
      setCounts({
        exercises: Math.round(targets.exercises * eased),
        streak: Math.round(targets.streak * eased),
        improvement: Math.round(targets.improvement * eased),
      });
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  const maxV = Math.max(...weekly.map((w) => w.v), 1);

  const inner = (
    <div ref={ref} className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">Your trajectory</p>
        <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Progress you can actually feel
        </h2>
        <p className="mt-3 text-muted-foreground sm:text-lg">
          {variant === "home"
            ? "Learning analytics built for calm dashboards—gentle trends, not noisy gamification."
            : "Drill into cohort-style charts and individual streaks. Figures below use representative sample data for illustration."}
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card className="border-primary/15 bg-gradient-to-br from-card/80 to-primary/5 shadow-xl backdrop-blur-xl lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Weekly writing rhythm</CardTitle>
            <p className="text-sm text-muted-foreground">
              Minutes spent in focused drafting (representative sample).
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex h-52 items-end justify-between gap-2 sm:gap-3">
              {weekly.map((d, i) => (
                <div
                  key={d.label}
                  className="flex h-52 min-h-0 flex-1 flex-col justify-end gap-2"
                >
                  <motion.div
                    className="w-full max-w-[3.25rem] self-center rounded-t-lg bg-gradient-to-t from-primary/80 to-primary/40 shadow-inner"
                    initial={{ height: "0%" }}
                    animate={
                      inView
                        ? { height: `${(d.v / maxV) * 100}%` }
                        : { height: "0%" }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.06 * i,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  <span className="text-center text-[11px] text-muted-foreground">
                    {d.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <StatCard
            label="Completed exercises"
            value={counts.exercises}
            suffix=""
            blurb="Across prompts and difficulty levels."
            active={inView}
          />
          <StatCard
            label="Day streak"
            value={counts.streak}
            suffix=" days"
            blurb="Consistent short sessions beat rare marathons."
            active={inView}
          />
          <StatCard
            label="Skill lift index"
            value={counts.improvement}
            suffix="%"
            blurb="Composite of clarity, structure, and vocabulary."
            active={inView}
            emphasize
          />
        </div>
      </div>

      {variant === "home" ? (
        <div className="mt-10 flex justify-center">
          <Link
            href="/progress"
            className={cn(
              buttonVariants({ variant: "outline", className: "rounded-full" })
            )}
          >
            Full analytics workspace
          </Link>
        </div>
      ) : null}
    </div>
  );

  if (variant === "page") {
    return <div className="px-4 sm:px-6 lg:px-8">{inner}</div>;
  }

  return (
    <FadeInSection
      id="progress-preview"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      {inner}
    </FadeInSection>
  );
}

function StatCard({
  label,
  value,
  suffix,
  blurb,
  active,
  emphasize,
}: {
  label: string;
  value: number;
  suffix: string;
  blurb: string;
  active: boolean;
  emphasize?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
    >
      <Card
        className={cn(
          "border-border/60 bg-card/70 shadow-md backdrop-blur-xl",
          emphasize &&
            "border-primary/20 bg-gradient-to-br from-card/80 to-primary/10"
        )}
      >
        <CardHeader className="pb-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          <CardTitle className="font-heading text-3xl font-semibold tracking-tight">
            {value}
            <span className="text-lg font-medium text-muted-foreground">
              {suffix}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">{blurb}</CardContent>
      </Card>
    </motion.div>
  );
}
