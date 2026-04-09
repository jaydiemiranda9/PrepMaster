"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How do I receive my study guide after purchase?",
    a: "Instantly. The moment your payment completes, you'll get an email with your download links. Most customers have the PDF open within 30 seconds of checkout. No shipping, no waiting, no tracking numbers.",
  },
  {
    q: "Can I read the PDF on my phone, tablet, and laptop?",
    a: "Yes — every PrepMaster guide is a standard PDF, so it works on any device with a PDF reader: iPhone, iPad, Android, Mac, Windows, or Chromebook. You can also print any section you want for physical study.",
  },
  {
    q: "What if the guide isn't what I expected?",
    a: "You're covered by our 7-day money-back guarantee. If something's wrong with your download or the content isn't what we described, email support and we'll refund you in full — no hoops, no guilt trip.",
  },
  {
    q: "How is this different from free PDFs and YouTube videos?",
    a: "Free resources are scattered, outdated, and rarely map to the current exam format. Every PrepMaster guide is written for the current exam cycle, structured as a daily study plan, and backed by full-length practice tests with answer rationales — not just answer keys.",
  },
  {
    q: "Are the practice questions similar to the real exam?",
    a: "Yes. Our questions are written to match the style, difficulty, and pacing of the real exam. Every question includes a detailed rationale so you understand why each answer is correct — that's how you actually improve your score.",
  },
  {
    q: "Is my payment information secure?",
    a: "100%. Checkout is handled by Stripe, a PCI-DSS Level 1 certified payment processor trusted by Amazon, Google, and Shopify. We never see or store your card details — only a tokenized reference.",
  },
  {
    q: "Do you offer discounts on bundles?",
    a: "Yes. Most exam categories have a bundle that saves you 30% or more compared to buying each guide individually. Bundles include every related study guide for your exam category.",
  },
  {
    q: "Will I get updates if the exam format changes?",
    a: "Yes. When we release a new edition for an exam you've purchased, we'll email you a link to the update at no extra charge for a full year.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 mx-auto mb-4">
            <HelpCircle className="h-6 w-6 text-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            Questions, answered
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything students ask before their first purchase.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className={cn(
                  "rounded-xl border transition-all duration-200",
                  isOpen
                    ? "border-orange/40 bg-orange/5 shadow-sm"
                    : "border-border bg-white hover:border-navy/20"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 cursor-pointer"
                >
                  <span className="font-semibold text-navy text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                      isOpen
                        ? "bg-orange text-white rotate-45"
                        : "bg-secondary text-navy"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
