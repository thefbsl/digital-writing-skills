"use client";

import { motion } from "framer-motion";
import { Globe, PenLine, Rss, Share2, Sparkles } from "lucide-react";
import Link from "next/link";

const footerExplore = [
  { href: "/practice", label: "Practice" },
  { href: "/tools", label: "Tools" },
  { href: "/progress", label: "Progress" },
];

const footerLearn = [
  { href: "/tips", label: "Tips" },
  { href: "/about", label: "About" },
  { href: "/essays", label: "Essays" },
];

const footerMore = [
  { href: "/resources", label: "Resources" },
  { href: "/feedback", label: "Feedback" },
];

const social = [
  { href: "https://twitter.com", label: "Community feed", icon: Globe },
  { href: "https://linkedin.com", label: "Updates", icon: Share2 },
  { href: "https://github.com", label: "Open materials", icon: Rss },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border/60 bg-gradient-to-b from-muted/30 to-background px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md">
                <PenLine className="size-4" />
              </span>
              WriteLab
              <Sparkles className="size-4 text-primary" aria-hidden />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Digital tools for stronger English writing—guided practice,
              structured feedback, and analytics designed for serious learners.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Product
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {footerExplore.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Learn
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {footerLearn.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                More
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {footerMore.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Connect
              </p>
              <ul className="mt-3 flex gap-3">
                {social.map((s) => (
                  <li key={s.label}>
                    <motion.a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/70 text-muted-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/30 hover:text-foreground"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <s.icon className="size-4" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WriteLab. All rights reserved.</p>
          <p className="sm:text-right">
            Digital Tools and Writing Skills · Modern English learning
          </p>
        </div>
      </div>
    </footer>
  );
}
