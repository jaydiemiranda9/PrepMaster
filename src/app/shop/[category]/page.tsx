import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteLayout from "@/components/layout/SiteLayout";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS, BUNDLES, CATEGORY_META, getBundleProducts } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import BundleCardInline from "@/components/products/BundleCardInline";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((cat) => ({ category: cat }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_META[category as ProductCategory];
  if (!meta) return {};
  return {
    title: `${meta.label} Study Guides`,
    description: `${meta.description} — Instant PDF download. Expert-written, 1,500+ practice questions.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const meta = CATEGORY_META[category as ProductCategory];
  if (!meta) notFound();

  const products = PRODUCTS.filter((p) => p.category === (category as ProductCategory));
  const bundle = BUNDLES.find((b) => b.category === (category as ProductCategory));

  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/shop" className="hover:text-navy">All Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-navy font-medium">{meta.label}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            {meta.label} Study Guides
          </h1>
          <p className="mt-2 text-muted-foreground">{meta.description}</p>
        </div>

        {/* Bundle callout */}
        {bundle && (
          <div className="mb-10">
            <BundleCardInline bundle={bundle} />
          </div>
        )}

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
