import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS, CATEGORY_META } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Study Guides",
  description:
    "Browse all 14 PrepMaster exam prep study guides. LSAT, CLEP, NCLEX, CPC, PMP, and Insurance license exam prep — instant PDF download.",
};

export default function ShopPage() {
  const categories = Object.entries(CATEGORY_META) as [
    ProductCategory,
    (typeof CATEGORY_META)[ProductCategory],
  ][];

  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            All Study Guides
          </h1>
          <p className="mt-2 text-muted-foreground">
            {PRODUCTS.length} premium PDF study guides — instant download after purchase
          </p>
        </div>

        {/* Category filter links */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="px-4 py-1.5 rounded-full bg-navy text-white text-sm font-medium">
            All ({PRODUCTS.length})
          </span>
          {categories.map(([slug, meta]) => {
            const count = PRODUCTS.filter((p) => p.category === slug).length;
            return (
              <Link
                key={slug}
                href={`/shop/${slug}`}
                className="px-4 py-1.5 rounded-full border border-border text-sm font-medium hover:border-orange hover:text-orange transition-colors"
              >
                {meta.label} ({count})
              </Link>
            );
          })}
        </div>

        {/* Products by category */}
        {categories.map(([slug, meta]) => {
          const products = PRODUCTS.filter((p) => p.category === slug);
          return (
            <section key={slug} className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-navy">{meta.label}</h2>
                <Link
                  href={`/shop/${slug}`}
                  className="text-sm text-orange hover:text-orange/80 font-medium"
                >
                  View category →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </SiteLayout>
  );
}
