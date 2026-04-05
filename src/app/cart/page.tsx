"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2, ShoppingBag, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import SiteLayout from "@/components/layout/SiteLayout";
import { useCartStore } from "@/store/cart";
import { toast } from "sonner";

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, totalPrice } = useCartStore();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (items.length === 0) return;
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Checkout failed");
      router.push(data.url);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Checkout failed";
      toast.error(message);
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <SiteLayout>
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-navy mb-3">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Browse our study guides and add one to get started.
          </p>
          <Link href="/shop" className={cn(buttonVariants(), "bg-orange hover:bg-orange/90 text-white cursor-pointer")}>
            Browse Study Guides <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-8">
          Your Cart ({items.length} {items.length === 1 ? "item" : "items"})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-white rounded-xl border border-border"
              >
                <div className="relative w-16 h-20 flex-shrink-0 rounded-md overflow-hidden bg-secondary">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-navy line-clamp-2">{item.title}</p>
                  {item.isBundle && (
                    <p className="text-xs text-orange font-medium mt-0.5">Bundle</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">PDF · Instant download</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="font-bold text-navy">${item.price.toFixed(2)}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove {item.title}</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-border p-6 sticky top-24">
              <h2 className="font-bold text-navy mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-muted-foreground">
                    <span className="truncate mr-2 max-w-[160px]">{item.title.split(" ").slice(0,4).join(" ")}…</span>
                    <span className="flex-shrink-0">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-bold text-navy text-lg mb-6">
                <span>Total</span>
                <span>${totalPrice().toFixed(2)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-orange hover:bg-orange/90 text-white text-base cursor-pointer"
                size="lg"
              >
                {loading ? "Redirecting…" : "Proceed to Checkout"}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5" />
                Secure checkout powered by Stripe
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
