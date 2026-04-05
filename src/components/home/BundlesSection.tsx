"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cart";
import { BUNDLES, getBundleProducts } from "@/data/products";

export default function BundlesSection() {
  const { addItem, hasItem } = useCartStore();

  return (
    <section id="bundles" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-orange/10 text-orange border-0 text-xs font-semibold">
            Best Value
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Bundle & Save More
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Get every book in a category together and save up to 42% compared
            to buying individually
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUNDLES.map((bundle) => {
            const inCart = hasItem(bundle.id);
            const savings = bundle.originalPrice - bundle.price;
            const savingsPct = Math.round((savings / bundle.originalPrice) * 100);
            const includedProducts = getBundleProducts(bundle);

            return (
              <article
                key={bundle.id}
                className="flex flex-col bg-white rounded-xl border-2 border-border hover:border-orange transition-colors overflow-hidden shadow-sm hover:shadow-md"
              >
                {/* Header */}
                <div className="bg-navy px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold">{bundle.title}</p>
                    <p className="text-white/60 text-xs mt-0.5">{bundle.subtitle}</p>
                  </div>
                  <Badge className="bg-orange text-white text-xs font-bold flex-shrink-0">
                    Save {savingsPct}%
                  </Badge>
                </div>

                {/* Included books */}
                <div className="flex-1 px-5 py-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Includes {includedProducts.length} Books
                  </p>
                  <ul className="space-y-2">
                    {includedProducts.map((p) => (
                      <li key={p.id} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 line-clamp-1">{p.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing + CTA */}
                <div className="px-5 pb-5">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-navy">
                      ${bundle.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${bundle.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      Save ${savings.toFixed(2)}
                    </span>
                  </div>
                  <Button
                    onClick={() =>
                      addItem({
                        id: bundle.id,
                        slug: bundle.slug,
                        title: bundle.title,
                        price: bundle.price,
                        coverImage: bundle.coverImage,
                        isBundle: true,
                        productIds: bundle.productIds,
                      })
                    }
                    disabled={inCart}
                    className={`w-full cursor-pointer ${
                      inCart
                        ? "bg-green-600 hover:bg-green-600 text-white"
                        : "bg-orange hover:bg-orange/90 text-white"
                    }`}
                  >
                    {inCart ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Get Bundle
                      </>
                    )}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
