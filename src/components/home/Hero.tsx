"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  ShieldCheck,
  Star,
  Clock,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const TRUST_POINTS = [
  { icon: Download, text: "Instant PDF delivery" },
  { icon: ShieldCheck, text: "Stripe secure checkout" },
  { icon: Clock, text: "7-day money-back guarantee" },
];

const SAMPLE_GUIDES = [
  { title: "LSAT Prep 2026–2027", color: "from-orange-500 to-orange-600" },
  { title: "NCLEX-RN Study Guide", color: "from-emerald-500 to-emerald-600" },
  { title: "CLEP College Composition", color: "from-sky-500 to-sky-600" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      {/* Orange glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-navy/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            {/* Announcement bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-semibold mb-6 ring-1 ring-orange/20">
                <Star className="h-3 w-3 fill-orange" />
                Spring 2026 Launch — 14 Study Guides Now Available
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Pass Your Exam.{" "}
              <span className="text-orange relative whitespace-nowrap">
                First Try.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-orange/40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <path d="M2 8 Q 50 2, 100 6 T 198 6" />
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Expert-written study guides for{" "}
              <strong className="text-navy">LSAT, NCLEX, CLEP, CPC, PMP,</strong> and{" "}
              <strong className="text-navy">Insurance</strong> exams.{" "}
              <span className="whitespace-nowrap">1,500+ practice questions</span> per
              book, 10 full-length practice tests, and every answer rationale explained
              like a tutor is sitting next to you.
            </motion.p>

            {/* Feature checklist */}
            <motion.ul
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              {[
                "Download in under 30 seconds",
                "Study on phone, tablet, or print",
                "Lifetime access to updates",
                "Fits into a 4-week study plan",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Link
                href="/shop"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-orange hover:bg-orange/90 text-white text-base px-7 h-12 shadow-lg shadow-orange/25 cursor-pointer"
                )}
              >
                Browse Study Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#bundles"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-base px-7 h-12 border-navy text-navy hover:bg-navy hover:text-white cursor-pointer"
                )}
              >
                Save 30% on Bundles
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {TRUST_POINTS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <Icon className="h-4 w-4 text-orange" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Social proof row */}
            <motion.div
              className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex -space-x-2">
                {["bg-orange", "bg-navy", "bg-emerald-500", "bg-sky-500"].map((c, i) => (
                  <div
                    key={c}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 border-white",
                      c,
                      "flex items-center justify-center text-white text-xs font-bold"
                    )}
                  >
                    {["JM", "AS", "RK", "LT"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-orange text-orange"
                    />
                  ))}
                  <span className="ml-1.5 font-semibold text-navy">4.9/5</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Loved by students preparing for their first attempt
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Stacked book cards */}
              {SAMPLE_GUIDES.map((g, i) => (
                <motion.div
                  key={g.title}
                  className={cn(
                    "absolute w-56 sm:w-64 h-72 sm:h-80 rounded-2xl shadow-2xl bg-gradient-to-br",
                    g.color,
                    "p-6 flex flex-col justify-between text-white border border-white/10"
                  )}
                  style={{
                    top: `${i * 18}px`,
                    left: `${i * 24}px`,
                    zIndex: 10 - i,
                    transform: `rotate(${(i - 1) * 3}deg)`,
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    <span className="text-xs font-semibold opacity-80">
                      PrepMaster
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-70">
                      Study Guide
                    </p>
                    <h3 className="text-xl font-bold mt-1 leading-tight">{g.title}</h3>
                  </div>
                  <div className="flex items-center justify-between text-xs opacity-80">
                    <span>2026 Edition</span>
                    <span>PDF</span>
                  </div>
                </motion.div>
              ))}

              {/* Spacer to give height to the absolute stack */}
              <div className="invisible h-96 w-full" />

              {/* Floating badge */}
              <motion.div
                className="absolute -right-2 -bottom-4 bg-white shadow-xl border border-border rounded-xl p-4 w-48 z-20"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-xs font-semibold text-navy">
                    100% Risk-Free
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  7-day money-back guarantee. No questions, no guilt.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
