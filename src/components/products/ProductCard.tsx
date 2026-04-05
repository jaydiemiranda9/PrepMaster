"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cart";
import { StarRating } from "./StarRating";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, hasItem } = useCartStore();
  const inCart = hasItem(product.id);

  function handleAddToCart() {
    addItem({
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      coverImage: product.coverImage,
      blobKey: product.blobKey,
    });
  }

  return (
    <article className="group flex flex-col bg-white rounded-xl border border-border hover:border-orange/40 hover:shadow-lg transition-all duration-200 overflow-hidden">
      {/* Cover image */}
      <Link href={`/products/${product.slug}`} className="block relative">
        <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
          <Image
            src={product.coverImage}
            alt={`${product.title} cover`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.bestseller && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-orange text-white text-xs font-semibold">
                Bestseller
              </Badge>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex-1">
          <p className="text-xs font-medium text-orange uppercase tracking-wider mb-1">
            {product.category.replace("-", " ").toUpperCase()}
          </p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-semibold text-sm text-navy leading-snug hover:text-orange transition-colors line-clamp-2">
              {product.title}
            </h3>
          </Link>
          <p className="text-xs text-muted-foreground mt-1">{product.author}</p>

          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={5} size="sm" />
            <span className="text-xs text-muted-foreground">{product.pages}pp</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-bold text-lg text-navy">
            ${product.price.toFixed(2)}
          </span>
          <Button
            onClick={handleAddToCart}
            disabled={inCart}
            size="sm"
            className={`cursor-pointer text-xs ${
              inCart
                ? "bg-green-600 hover:bg-green-600 text-white"
                : "bg-orange hover:bg-orange/90 text-white"
            }`}
          >
            {inCart ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-3 w-3 mr-1" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}
