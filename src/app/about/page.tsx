import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Target, Award, Users } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import SiteLayout from "@/components/layout/SiteLayout";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "About PrepMaster",
  description:
    "Learn about PrepMaster — the team behind 14 premium exam prep study guides for LSAT, CLEP, NCLEX, CPC, PMP, and Insurance exams.",
};

const STATS = [
  { icon: BookOpen, value: "14", label: "Study Guides Published" },
  { icon: Target, value: "1,500+", label: "Practice Questions Per Book" },
  { icon: Award, value: "5 Exams", label: "Category Coverage" },
  { icon: Users, value: "100%", label: "Digital — Instant Access" },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange/10 mx-auto mb-5">
            <BookOpen className="h-8 w-8 text-orange" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">About PrepMaster</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PrepMaster was built on a single belief: passing your exam on the first try
            shouldn&apos;t require spending thousands on tutors or outdated textbooks.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-xl bg-secondary/40 border border-border"
            >
              <Icon className="h-7 w-7 text-orange mx-auto mb-3" />
              <p className="text-2xl font-bold text-navy">{value}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
          <p>
            We create premium, expert-written study guides for high-stakes professional and
            academic exams — LSAT, CLEP, NCLEX, CPC, PMP, and Insurance licensing. Every
            guide is built with one goal: give you everything you need to pass on your first
            attempt, in a clear, organized, and efficient format.
          </p>

          <h2 className="text-2xl font-bold text-navy">What Makes PrepMaster Different</h2>
          <p>
            Our guides aren&apos;t padded with filler. Every page serves a purpose. We focus
            on the concepts that actually appear on exams, provide detailed answer rationales
            (not just answer keys), and structure content around how real test-takers study —
            not how academics write.
          </p>
          <p>
            With 1,500+ original practice questions per book, 10 full-length practice tests,
            and proven study plans, our materials give you the depth and repetition needed to
            build real exam confidence.
          </p>

          <h2 className="text-2xl font-bold text-navy">Instant Access, Always</h2>
          <p>
            Every PrepMaster guide is delivered as an instant PDF download. No waiting for
            shipping, no physical storage required. Study on any device, print what you need,
            or read on-screen — your choice.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center p-8 rounded-xl bg-navy text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Preparing?</h2>
          <p className="text-white/60 mb-6">
            Browse all {PRODUCTS.length} study guides and find the one for your exam.
          </p>
          <Link href="/shop" className={cn(buttonVariants(), "bg-orange hover:bg-orange/90 text-white cursor-pointer")}>
            Browse All Study Guides
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
