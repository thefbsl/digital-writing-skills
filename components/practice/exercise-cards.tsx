"use client";

import { motion } from "framer-motion";
import {
  AtSign,
  ClipboardList,
  GraduationCap,
  MessageSquareQuote,
  PenTool,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const tasks = [
  {
    title: "Academic Essay",
    description:
      "Build an evidence-led argument with clear signposting and precise citations.",
    prompt:
      "To what extent do digital tools improve equity in education? Use two counterarguments and refute them with evidence.",
    icon: GraduationCap,
    accent: "from-sky-500/15 to-primary/10",
  },
  {
    title: "Opinion Essay",
    description:
      "State a position, support it with reasons, and acknowledge other views.",
    prompt:
      "Do digital technologies improve modern education? Write 220–260 words with a clear stance.",
    icon: MessageSquareQuote,
    accent: "from-violet-500/15 to-primary/10",
  },
  {
    title: "Formal Email",
    description:
      "Practice tone, openings, and requests that match workplace expectations.",
    prompt:
      "Email a supervisor requesting a short extension for a report. Keep it respectful and concise.",
    icon: AtSign,
    accent: "from-indigo-500/15 to-primary/10",
  },
  {
    title: "IELTS Writing",
    description:
      "Timed structure: paraphrase the task, plan, and paragraph with cohesion.",
    prompt:
      "Task 2: Some believe online learning is as effective as classroom study. Discuss both views and give your opinion.",
    icon: ClipboardList,
    accent: "from-cyan-500/15 to-primary/10",
  },
  {
    title: "Creative Writing",
    description:
      "Shape voice and imagery while keeping narrative control and pacing.",
    prompt:
      "Write a short scene where a character discovers an old letter that changes their perspective.",
    icon: PenTool,
    accent: "from-fuchsia-500/15 to-primary/10",
  },
];

type ExerciseCardsProps = {
  showEyebrow?: boolean;
  className?: string;
};

export function ExerciseCards({
  showEyebrow = true,
  className = "",
}: ExerciseCardsProps) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          {showEyebrow ? (
            <p className="text-sm font-medium text-primary">Guided practice</p>
          ) : null}
          <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Writing tasks for every goal
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            Open a card to read the full prompt. Sessions stay in your
            browser—nothing is submitted to a server.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-md">
          <Sparkles className="size-4 text-primary" />
          Curated prompts
        </div>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task, i) => (
          <motion.li
            key={task.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Dialog>
              <Card className="group h-full overflow-hidden border-border/70 bg-gradient-to-br from-card/90 via-card/70 to-muted/30 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div
                  className={`h-1 w-full bg-gradient-to-r ${task.accent}`}
                  aria-hidden
                />
                <CardHeader>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <task.icon className="size-5" />
                  </span>
                  <CardTitle className="mt-3 text-lg">{task.title}</CardTitle>
                  <CardDescription>{task.description}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t border-border/50 bg-muted/30 pb-4">
                  <DialogTrigger
                    nativeButton={false}
                    render={
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full rounded-full border-border/80 bg-background/80 hover:bg-background"
                      />
                    }
                  >
                    Start exercise
                  </DialogTrigger>
                </CardFooter>
              </Card>
              <DialogContent className="max-w-md sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>{task.title}</DialogTitle>
                  <DialogDescription>Writing prompt</DialogDescription>
                </DialogHeader>
                <div className="rounded-xl border border-border/60 bg-muted/40 p-4 text-sm leading-relaxed">
                  {task.prompt}
                </div>
                <p className="text-xs text-muted-foreground">
                  Your draft stays local in this learning environment.
                </p>
              </DialogContent>
            </Dialog>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
