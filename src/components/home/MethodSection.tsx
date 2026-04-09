"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Brain,
  ClipboardList,
  Gauge,
  Target,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: Target,
    step: "01",
    title: "Diagnose Your Gaps",
    text: "A 20-minute diagnostic test pinpoints exactly which topics are costing you points. No generic study plans — just your plan.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Follow the Daily Roadmap",
    text: "A day-by-day study schedule built around 4, 8, or 12-week tracks. Know what to study every single morning.",
  },
  {
    icon: Brain,
    step: "03",
    title: "Master With Real Questions",
    text: "1,500+ practice questions per book — every single one with a full rationale, not just an answer key.",
  },
  {
    icon: Gauge,
    step: "04",
    title: "Simulate Exam Day",
    text: "Full-length timed practice tests that match the real exam's format, difficulty, and pacing. Build exam-day stamina.",
  },
];

const TRANSFORMATION = [
  { before: "Overwhelmed by 10+ random study resources", after: "Following one focused system, step-by-step" },
  { before: "Practice questions that don't match the real exam", after: "Realistic questions with full rationales" },
  { before: "Guessing whether you're 'ready' enough", after: "Walking in confident — because your data proves it" },
  { before: "Burning out two weeks before test day", after: "Peaking on exam day with a fresh mind" },
];

export default function MethodSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/30 to-white py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[120%] bg-orange/5 blur-3xl rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-semibold mb-4 ring-1 ring-orange/20">
            The PrepMaster Method
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            The difference between guessing and{" "}
            <span className="text-orange">passing first try</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most students fail because they don&apos;t have a system — not because they
            aren&apos;t smart. Here&apos;s the 4-step framework every PrepMaster guide
            is built around.
          </p>
        </motion.div>

        {/* 4-step grid — bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {STEPS.map(({ icon: Icon, step, title, text }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl bg-white border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-5 right-5 text-[2.75rem] font-black text-navy/5 leading-none select-none">
                {step}
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 mb-5 group-hover:bg-orange/20 transition-colors">
                <Icon className="h-6 w-6 text-orange" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Before/After transformation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy">
              What changes when you use a real system
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-rose-50 border border-rose-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-600 mb-5">
                Without a system
              </p>
              <ul className="space-y-4">
                {TRANSFORMATION.map((t) => (
                  <li
                    key={t.before}
                    className="flex gap-3 text-rose-900/90"
                  >
                    <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{t.before}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 rounded-2xl bg-emerald-50 border border-emerald-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-5">
                With PrepMaster
              </p>
              <ul className="space-y-4">
                {TRANSFORMATION.map((t) => (
                  <li
                    key={t.after}
                    className="flex gap-3 text-emerald-900/90"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{t.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange hover:bg-orange/90 text-white shadow-lg shadow-orange/25 cursor-pointer"
              )}
            >
              Find Your Exam Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { MethodSection };
