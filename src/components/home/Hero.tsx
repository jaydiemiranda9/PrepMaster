"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download, Shield, Star } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-semibold mb-6">
              <Star className="h-3 w-3 fill-orange" />
              14 Premium Study Guides — Instant PDF Download
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Pass Your Exam.{" "}
            <span className="text-orange">First Try.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expert-written study guides for LSAT, CLEP, NCLEX, CPC, PMP, and
            Insurance exams. 1,500+ practice questions per book. Download
            instantly and start studying in minutes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/shop"
              className={cn(buttonVariants({ size: "lg" }), "bg-orange hover:bg-orange/90 text-white text-base px-6 cursor-pointer")}
            >
              Browse Study Guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#bundles"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-base px-6 border-navy text-navy hover:bg-navy hover:text-white cursor-pointer")}
            >
              View Bundles &amp; Save
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {[
              { icon: Download, text: "Instant PDF download" },
              { icon: Shield, text: "Stripe secure checkout" },
              { icon: Star, text: "4.9★ average rating" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <Icon className="h-4 w-4 text-orange" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
