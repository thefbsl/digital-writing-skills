"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, PenLine, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/practice", label: "Practice" },
  { href: "/tools", label: "Tools" },
  { href: "/progress", label: "Progress" },
  { href: "/tips", label: "Tips" },
  { href: "/about", label: "About" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/60 bg-background/75 backdrop-blur-xl shadow-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground shadow-md ring-1 ring-foreground/5">
            <PenLine className="size-4" aria-hidden />
            <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-white/95 text-primary shadow-sm">
              <Sparkles className="size-2.5" aria-hidden />
            </span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">WriteLab</span>
            <span className="text-[11px] text-muted-foreground">
              Digital writing skills
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/tips"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
                className:
                  "hidden rounded-full border-border/80 bg-card/60 shadow-sm backdrop-blur-sm sm:inline-flex",
              })
            )}
          >
            Study guides
          </Link>
          <Link
            href="/practice"
            className={cn(
              buttonVariants({
                size: "sm",
                className: "hidden rounded-full px-4 shadow-md sm:inline-flex",
              })
            )}
          >
            Start writing
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/70 text-foreground shadow-sm backdrop-blur-sm lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              aria-label="Mobile primary"
              className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
            >
              {navItems.map((item, i) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-3 py-3 text-base font-medium hover:bg-muted",
                        active ? "text-primary" : "text-foreground"
                      )}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                href="/practice"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({
                    className: "mt-2 h-11 w-full rounded-full",
                  })
                )}
              >
                Start writing
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
