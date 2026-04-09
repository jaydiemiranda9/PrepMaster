"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  ClipboardList,
  Gauge,
  GraduationCap,
  Layers,
  LucideIcon,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Timer,
  TrendingUp,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";
import AddToCartButton from "@/components/products/AddToCartButton";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import { SALES_COPY } from "@/data/sales-copy";
import { PRODUCT_REVIEWS } from "@/data/reviews";

const ICON_MAP: Record<string, LucideIcon> = {
  Brain,
  Zap,
  BookOpenCheck,
  Target,
  Timer,
  Gauge,
  Layers,
  ClipboardList,
  Trophy,
  Sparkles,
};

function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Sparkles;
}

interface Props {
  product: Product;
}

export default function ProductSalesSection({ product }: Props) {
  const copy = SALES_COPY[product.category];
  const productReviews = PRODUCT_REVIEWS[product.id] ?? [];
  const displayReviews =
    productReviews.length >= 3
      ? productReviews.slice(0, 3).map((r) => ({ quote: r.text, author: r.author }))
      : copy.fallbackReviews;

  return (
    <div className="mt-20 space-y-24">
      {/* ──────────────────────────── HEADLINE HOOK ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-navy/90 text-white p-8 sm:p-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/20 text-orange text-xs font-semibold mb-6 ring-1 ring-orange/30">
            <GraduationCap className="h-3.5 w-3.5" />
            {copy.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
            Pass {copy.examShort} on Your First Attempt —{" "}
            <span className="text-orange">Without Guessing What to Study.</span>
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl">
            Master the {copy.examLong} with a complete, step-by-step system designed
            to boost your score, sharpen your reasoning, and help you{" "}
            {copy.outcome}.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
            {(product.bullets ?? []).slice(0, 3).map((b) => (
              <span key={b} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange" />
                {b}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <AddToCartButton
              product={product}
              className="bg-orange hover:bg-orange/90 text-white h-12 px-7 text-base shadow-lg shadow-orange/25"
              label="Get Your Copy →"
            />
            <span className="flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              7-day money-back guarantee
            </span>
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────── THE PROBLEM ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Preparing for {copy.examShort} can feel overwhelming…
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {copy.painPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 p-4 rounded-xl border border-rose-200 bg-rose-50"
            >
              <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <span className="text-rose-900/90">{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-lg text-navy font-semibold">
            Most students don&apos;t fail because they&apos;re not smart.
          </p>
          <p className="text-lg text-muted-foreground">
            They fail because they don&apos;t have a structured system.
          </p>
        </div>
      </motion.section>

      {/* ──────────────────────────── THE SOLUTION ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange mb-3">
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Your roadmap from confusion → confidence → high score
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This isn&apos;t just another prep book. {product.title} is a complete,
            all-in-one study system built around how real test-takers learn — not how
            academics write.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: Layers,
              title: "A Complete System",
              subtitle: "Not random practice",
              bullets: [
                `${product.pages ?? "Hundreds"} pages of focused content`,
                "Detailed explanations — so you actually learn",
              ],
            },
            {
              icon: ClipboardList,
              title: "Real Exam Simulation",
              subtitle: "Build stamina, crush anxiety",
              bullets: [
                "Timed practice tests matching the real format",
                "Every answer rationale explained",
              ],
            },
            {
              icon: Target,
              title: "Step-by-Step Study Plans",
              subtitle: "Stay consistent without burnout",
              bullets: [
                "4-week, 8-week, and 12-week tracks",
                "Know exactly what to do every day",
              ],
            },
            {
              icon: Gauge,
              title: "Score-Boosting Strategies",
              subtitle: "Speed, accuracy, confidence",
              bullets: [
                "Time-management frameworks",
                "Common-mistake avoidance drills",
              ],
            },
          ].map(({ icon: Icon, title, subtitle, bullets }) => (
            <div
              key={title}
              className="p-6 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy text-lg">{title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
                  <ul className="space-y-1.5">
                    {bullets.map((b) => (
                      <li key={b} className="text-sm text-foreground/80 flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ──────────────────────────── MASTERY ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-secondary/50 border border-border p-8 sm:p-12"
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange mb-3">
            What You&apos;ll Master
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Inside this book, you&apos;ll learn how to:
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {copy.masterySkills.map(({ text, icon }) => {
            const Icon = resolveIcon(icon);
            return (
              <li
                key={text}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-orange" />
                </div>
                <span className="text-navy font-medium pt-1.5">{text}</span>
              </li>
            );
          })}
        </ul>
      </motion.section>

      {/* ──────────────────────────── TRANSFORMATION ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange mb-3">
            The Transformation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Imagine walking into your exam feeling…
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-rose-50 border border-rose-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-600 mb-4">
              Before
            </p>
            <ul className="space-y-3">
              {copy.beforeAfter.map((b) => (
                <li key={b.before} className="flex gap-2 text-rose-900/80 text-sm">
                  <XCircle className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  {b.before}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              After
            </p>
            <ul className="space-y-3">
              {copy.beforeAfter.map((b) => (
                <li key={b.after} className="flex gap-2 text-emerald-900/90 text-sm">
                  <TrendingUp className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  {b.after}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────── SOCIAL PROOF ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange mb-3">
            What Students Are Saying
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Real reviews from verified buyers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {displayReviews.map(({ quote, author }) => (
            <figure
              key={quote}
              className="p-6 rounded-xl bg-white border border-border shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange text-orange" />
                ))}
              </div>
              <blockquote className="text-navy leading-relaxed">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                — {author}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.section>

      {/* ──────────────────────────── BONUSES ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-gradient-to-br from-orange/10 via-orange/5 to-transparent border-2 border-dashed border-orange/30 p-8 sm:p-12"
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange text-white text-xs font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Included — No Extra Cost
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Plus, You&apos;ll Unlock 4 Free Bonuses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These add ~$60 in extra value — yours at checkout, at no extra charge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {copy.bonuses.map(({ icon, title, text }) => {
            const Icon = resolveIcon(icon);
            return (
              <div
                key={title}
                className="p-6 rounded-xl bg-white border border-orange/20 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-orange/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* ──────────────────────────── FINAL CTA ──────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-navy text-white p-8 sm:p-14 text-center relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-orange/20 blur-3xl"
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Boost Your {copy.examShort} Score?
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed">{copy.finalSubhead}</p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange" />
              Study smarter
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange" />
              Practice effectively
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange" />
              Perform confidently
            </li>
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <AddToCartButton
              product={product}
              className="bg-orange hover:bg-orange/90 text-white h-13 px-8 text-base shadow-lg shadow-orange/30"
              label="Buy Now →"
            />
            <Link
              href="/shop"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:bg-white hover:text-navy cursor-pointer"
              )}
            >
              Browse More Guides
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              7-day money-back guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <RotateCcw className="h-3.5 w-3.5 text-emerald-400" />
              Instant PDF delivery
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Secure Stripe checkout
            </span>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
