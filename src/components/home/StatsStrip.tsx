"use client";

import { motion } from "motion/react";
import { BookOpen, Users, TrendingUp, Clock } from "lucide-react";

const STATS = [
  {
    icon: BookOpen,
    value: "14",
    label: "Premium Study Guides",
    sublabel: "Across 5 exam categories",
  },
  {
    icon: TrendingUp,
    value: "1,500+",
    label: "Practice Questions",
    sublabel: "Per book, with rationales",
  },
  {
    icon: Users,
    value: "4.9/5",
    label: "Average Rating",
    sublabel: "From verified buyers",
  },
  {
    icon: Clock,
    value: "< 30 sec",
    label: "Delivery Time",
    sublabel: "From checkout to PDF",
  },
];

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-navy text-white py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,115,0,0.15),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Trusted by students preparing for{" "}
            <span className="text-orange">their most important exam</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label, sublabel }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange/30 transition-all"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-orange/20 mb-4">
                <Icon className="h-5 w-5 text-orange" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight">{value}</p>
              <p className="mt-1 text-sm font-semibold text-white/90">{label}</p>
              <p className="text-xs text-white/50 mt-0.5">{sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
