"use client";

import { motion } from "framer-motion";
import { Award, Flame, Medal, Trophy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Streak starter",
    desc: "Seven consecutive writing days",
    icon: Flame,
    unlocked: true,
  },
  {
    title: "Structured voice",
    desc: "Complete five thesis-first outlines",
    icon: Trophy,
    unlocked: true,
  },
  {
    title: "Precision boost",
    desc: "Improve lexical diversity by 12%",
    icon: Medal,
    unlocked: false,
  },
  {
    title: "Peer mentor",
    desc: "Share three exemplar revisions",
    icon: Award,
    unlocked: false,
  },
];

export function AchievementsGrid() {
  return (
    <section className="border-t border-border/50 bg-muted/15 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Achievements</p>
          <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight">
            Milestones that reward consistency
          </h2>
          <p className="mt-3 text-muted-foreground">
            Celebrate habits, not hacks. Badges below use sample unlock states to show
            how a learner journey could feel.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
            >
              <Card
                className={`h-full border-border/60 bg-card/70 shadow-lg backdrop-blur-xl ${
                  a.unlocked ? "ring-1 ring-primary/25" : "opacity-80"
                }`}
              >
                <CardContent className="p-5">
                  <a.icon
                    className={`size-8 ${a.unlocked ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <h3 className="mt-3 font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                  <p className="mt-3 text-xs font-medium text-primary">
                    {a.unlocked ? "Unlocked" : "In progress"}
                  </p>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
