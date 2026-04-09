"use client";

import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/types/product";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  product: Product;
  size?: "default" | "lg" | "sm";
  label?: string;
  className?: string;
}

export default function AddToCartButton({
  product,
  size = "default",
  label,
  className,
}: AddToCartButtonProps) {
  const { addItem, hasItem } = useCartStore();
  const inCart = hasItem(product.id);

  function handleAdd() {
    addItem({
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      coverImage: product.coverImage,
      blobKey: product.blobKey,
    });
    toast.success(`"${product.title.split(" ").slice(0, 5).join(" ")}…" added to cart`);
  }

  return (
    <Button
      onClick={handleAdd}
      disabled={inCart}
      size={size}
      className={cn(
        "cursor-pointer w-full sm:w-auto",
        inCart
          ? "bg-green-600 hover:bg-green-600 text-white"
          : "bg-orange hover:bg-orange/90 text-white",
        className
      )}
    >
      {inCart ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          {label ?? `Add to Cart — $${product.price.toFixed(2)}`}
        </>
      )}
    </Button>
  );
}
