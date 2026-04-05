"use client";

import { Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cart";
import { getBundleProducts } from "@/data/products";
import type { Bundle } from "@/types/product";

interface BundleCardInlineProps {
  bundle: Bundle;
}

export default function BundleCardInline({ bundle }: BundleCardInlineProps) {
  const { addItem, hasItem } = useCartStore();
  const inCart = hasItem(bundle.id);
  const savings = bundle.originalPrice - bundle.price;
  const savingsPct = Math.round((savings / bundle.originalPrice) * 100);
  const included = getBundleProducts(bundle);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl bg-navy/5 border border-navy/20">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Badge className="bg-orange/10 text-orange border-0 text-xs font-semibold">
            Save {savingsPct}%
          </Badge>
          <span className="font-bold text-navy">{bundle.title}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Includes all {included.length} books in this category
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
          {included.map((p) => (
            <span key={p.id} className="flex items-center gap-1 text-xs text-muted-foreground">
              <Check className="h-3 w-3 text-green-600" />
              {p.title.split(" ").slice(0, 4).join(" ")}…
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="text-right">
          <p className="text-xl font-bold text-navy">${bundle.price.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground line-through">${bundle.originalPrice.toFixed(2)}</p>
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
          className={`cursor-pointer ${inCart ? "bg-green-600 hover:bg-green-600 text-white" : "bg-orange hover:bg-orange/90 text-white"}`}
        >
          {inCart ? <><Check className="h-4 w-4 mr-1" /> Added</> : <><ShoppingCart className="h-4 w-4 mr-1" /> Get Bundle</>}
        </Button>
      </div>
    </div>
  );
}
