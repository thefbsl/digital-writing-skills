"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Sparkles,
  Target,
  Type,
  Wand2,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AnalysisState = "idle" | "analyzing" | "done";

function countWords(text: string) {
  return text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).filter(Boolean).length;
}

function scoreFromText(text: string) {
  const words = countWords(text);
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const avgLen =
    sentences.length > 0
      ? words / Math.max(1, sentences.length)
      : words;
  const baseGrammar = Math.min(
    96,
    Math.round(68 + Math.min(20, words / 12) + (avgLen > 25 ? -4 : 2))
  );
  const baseVocab = Math.min(
    95,
    Math.round(62 + Math.min(22, words / 10) + (words > 80 ? 6 : 0))
  );
  return {
    words,
    sentences: Math.max(sentences.length, text.trim() ? 1 : 0),
    grammar: Math.max(52, baseGrammar),
    vocabulary: Math.max(50, baseVocab),
  };
}

const suggestions = [
  {
    title: "Tighten the thesis",
    body: "State your claim in one crisp sentence so readers know the essay’s promise.",
    icon: Target,
  },
  {
    title: "Add a transition",
    body: "Link the paragraph above with a phrase like “Building on this idea…”",
    icon: Type,
  },
  {
    title: "Elevate word choice",
    body: "Swap a repeated verb with a precise academic alternative (“establish”, “clarify”).",
    icon: Wand2,
  },
];

export function WritingEditor() {
  const [text, setText] = useState(
    "Digital technologies can make learning more inclusive when they are paired with thoughtful teaching. Clear goals and timely feedback help students revise with purpose."
  );
  const [state, setState] = useState<AnalysisState>("idle");
  const metrics = useMemo(() => scoreFromText(text), [text]);

  const runAnalysis = () => {
    if (state === "analyzing") return;
    setState("analyzing");
    window.setTimeout(() => {
      setState("done");
    }, 1100);
  };

  const showResults = state === "done";

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="border-border/70 bg-card/70 shadow-xl shadow-primary/5 backdrop-blur-xl">
        <CardHeader className="border-b border-border/60 pb-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <CardTitle>Writing editor</CardTitle>
              <CardDescription>
                Draft your paragraph, then run an on-page analysis. Outputs are
                generated locally for learning purposes.
              </CardDescription>
            </div>
            <Button
              type="button"
              onClick={runAnalysis}
              disabled={state === "analyzing"}
              className="rounded-full px-5 shadow-md"
            >
              {state === "analyzing" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Analyzing…
                </>
              ) : (
                <>
                  <Sparkles className="size-4" />
                  Analyze
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <label htmlFor="writing-draft" className="sr-only">
            Writing draft
          </label>
          <textarea
            id="writing-draft"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setState("idle");
            }}
            rows={9}
            className="w-full resize-y rounded-xl border border-border/80 bg-background/80 px-4 py-3 font-mono text-sm leading-relaxed shadow-inner outline-none ring-offset-background transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
            spellCheck
          />
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span>{metrics.words} words</span>
            <span aria-hidden>·</span>
            <span>{metrics.sentences} sentences</span>
            <span aria-hidden>·</span>
            <span>Estimated readability index</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-6">
        <Card className="border-border/70 bg-card/65 shadow-lg backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="size-4 text-primary" />
              Coach insights
            </CardTitle>
            <CardDescription>
              Structured feedback preview—grammar emphasis, vocabulary breadth,
              and next-step suggestions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <AnimatePresence mode="wait">
              {state === "analyzing" ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="h-2 overflow-hidden rounded-full bg-muted"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                  <p className="text-sm text-muted-foreground">
                    Scanning structure, tone, and clarity…
                  </p>
                </motion.div>
              ) : null}

              {showResults ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <ScoreBar
                      label="Grammar & mechanics"
                      value={metrics.grammar}
                      color="from-sky-400 to-primary"
                    />
                    <ScoreBar
                      label="Vocabulary range"
                      value={metrics.vocabulary}
                      color="from-violet-400 to-primary"
                    />
                  </div>
                  <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Summary
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      Your draft reads clearly. Strengthen the opening claim and
                      vary a few repeated words to lift academic tone.
                    </p>
                  </div>
                </motion.div>
              ) : null}

              {!showResults && state !== "analyzing" ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-muted-foreground"
                >
                  Run analysis to surface feedback cards and skill scores.
                </motion.p>
              ) : null}
            </AnimatePresence>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Suggestions
              </p>
              <div className="space-y-2">
                {suggestions.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={
                      showResults
                        ? { opacity: 0, x: -8 }
                        : { opacity: 0.5, x: 0 }
                    }
                    animate={
                      showResults
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0.45, x: 0 }
                    }
                    transition={{
                      delay: showResults ? 0.08 * i : 0,
                      duration: 0.35,
                    }}
                    className={cn(
                      "flex gap-3 rounded-xl border border-border/50 bg-background/60 p-3 shadow-sm",
                      showResults && "border-primary/25 shadow-primary/5"
                    )}
                  >
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <s.icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{s.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                    {showResults ? (
                      <CheckCircle2 className="ml-auto size-4 shrink-0 text-emerald-500" />
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ScoreBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="tabular-nums font-semibold text-foreground">
          {value}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className={cn("h-full rounded-full bg-gradient-to-r", color)}
          initial={{ width: "0%" }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
