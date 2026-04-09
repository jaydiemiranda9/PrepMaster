import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import SiteLayout from "@/components/layout/SiteLayout";
import { PRODUCTS, BUNDLES, CATEGORY_META, getProductsByCategory } from "@/data/products";
import { PRODUCT_REVIEWS } from "@/data/reviews";
import { StarRating } from "@/components/products/StarRating";
import ProductCard from "@/components/products/ProductCard";
import AddToCartButton from "@/components/products/AddToCartButton";
import BundleCardInline from "@/components/products/BundleCardInline";
import ProductSalesSection from "@/components/products/ProductSalesSection";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Download, FileText, Shield } from "lucide-react";
import Link from "next/link";
import type { ProductCategory } from "@/types/product";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const reviews = PRODUCT_REVIEWS[product.id] ?? [];
  const avgRating = reviews.length
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : 5;

  const categoryMeta = CATEGORY_META[product.category];
  const bundle = BUNDLES.find((b) => b.category === product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link href="/shop" className="hover:text-navy">All Guides</Link>
          <span className="mx-2">›</span>
          <Link href={`/shop/${product.category}`} className="hover:text-navy">
            {categoryMeta.label}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-navy font-medium line-clamp-1">{product.title}</span>
        </nav>

        {/* Main product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Cover image */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={product.coverImage}
                alt={`${product.title} cover`}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
                priority
              />
              {product.bestseller && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-orange text-white font-semibold">Bestseller</Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product info */}
          <div>
            <Badge variant="secondary" className="mb-3 text-xs font-medium">
              {categoryMeta.label}
            </Badge>

            <h1 className="text-2xl sm:text-3xl font-bold text-navy leading-tight">
              {product.title}
            </h1>
            <p className="mt-2 text-muted-foreground font-medium">{product.subtitle}</p>

            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={avgRating} showValue size="md" />
              {reviews.length > 0 && (
                <span className="text-sm text-muted-foreground">
                  ({reviews.length} reviews)
                </span>
              )}
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">by {product.author}</span>
            </div>

            {/* Format badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                { icon: FileText, label: `${product.pages} pages` },
                { icon: Download, label: "Instant PDF download" },
                { icon: Shield, label: "Secure checkout" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/70"
                >
                  <Icon className="h-3.5 w-3.5 text-orange" />
                  {label}
                </span>
              ))}
            </div>

            <Separator className="my-6" />

            {/* Pricing + CTA */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-navy">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground">PDF download</span>
            </div>

            <AddToCartButton product={product} size="lg" />

            <Separator className="my-6" />

            {/* What's inside */}
            <div>
              <h2 className="font-semibold text-navy mb-3">What&apos;s Inside</h2>
              <ul className="space-y-2">
                {product.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bundle upsell */}
        {bundle && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-navy mb-4">Save More with the Bundle</h2>
            <BundleCardInline bundle={bundle} />
          </section>
        )}

        {/* Reviews */}
        {reviews.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-navy mb-6">
              Student Reviews ({reviews.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((review) => (
                <figure
                  key={review.id}
                  className="flex flex-col p-5 rounded-xl border border-border bg-secondary/30"
                >
                  <StarRating rating={review.rating} size="sm" />
                  <blockquote className="mt-3 text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 pt-3 border-t border-border">
                    <p className="font-semibold text-sm text-navy">{review.author}</p>
                    {review.examPassed && (
                      <p className="text-xs text-green-700 font-medium mt-0.5">
                        ✓ {review.examPassed}
                      </p>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Long-form sales section — every product */}
        <ProductSalesSection product={product} />


        {/* Related products */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-navy mb-6">
              More {categoryMeta.label} Guides
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </SiteLayout>
  );
}
