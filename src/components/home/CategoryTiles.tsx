import Link from "next/link";
import { Scale, GraduationCap, Heart, Briefcase, Home } from "lucide-react";
import { CATEGORY_META } from "@/data/products";
import { PRODUCTS } from "@/data/products";
import type { ProductCategory } from "@/types/product";

const CATEGORY_ICONS: Record<ProductCategory, React.ComponentType<{ className?: string }>> = {
  lsat: Scale,
  clep: GraduationCap,
  nclex: Heart,
  "professional-cert": Briefcase,
  insurance: Home,
};

export default function CategoryTiles() {
  const categories = Object.entries(CATEGORY_META) as [
    ProductCategory,
    (typeof CATEGORY_META)[ProductCategory],
  ][];

  return (
    <section className="py-16 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Browse by Exam
          </h2>
          <p className="mt-2 text-muted-foreground">
            Find the study guide for your specific certification or license exam
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(([slug, meta]) => {
            const Icon = CATEGORY_ICONS[slug];
            const count = PRODUCTS.filter((p) => p.category === slug).length;

            return (
              <Link
                key={slug}
                href={`/shop/${slug}`}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white border border-border hover:border-orange hover:shadow-md transition-all duration-200"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy/5 group-hover:bg-orange/10 transition-colors">
                  <Icon className="h-6 w-6 text-navy group-hover:text-orange transition-colors" />
                </span>
                <div className="text-center">
                  <p className="font-semibold text-sm text-navy">{meta.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {count} {count === 1 ? "guide" : "guides"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
