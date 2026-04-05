"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Download, CheckCircle, ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import SiteLayout from "@/components/layout/SiteLayout";
import { useCartStore } from "@/store/cart";
import { PRODUCTS } from "@/data/products";

interface OrderDetails {
  productTitles: string[];
  tokens: string[];
  totalAmount: number;
  email: string;
}

function UpsellSection({ purchasedIds }: { purchasedIds: string[] }) {
  const suggestions = PRODUCTS.filter(
    (p) => !purchasedIds.includes(p.id) && p.featured
  ).slice(0, 2);

  if (suggestions.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-border">
      <p className="font-semibold text-navy mb-4">You might also like:</p>
      <div className="flex flex-wrap gap-3">
        {suggestions.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-orange transition-colors text-sm"
          >
            {p.title.split(" ").slice(0, 5).join(" ")}… →
          </Link>
        ))}
      </div>
    </div>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCartStore();

  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchOrder = useCallback(
    async (sid: string) => {
      try {
        const res = await fetch(`/api/order/${sid}`);
        if (res.ok) {
          const data = await res.json();
          setOrder(data);
          clearCart();
        }
      } catch {
        // Order details unavailable — user still gets email
      } finally {
        setLoading(false);
      }
    },
    [clearCart]
  );

  useEffect(() => {
    if (sessionId) {
      fetchOrder(sessionId);
    } else {
      setLoading(false);
    }
  }, [sessionId, fetchOrder]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      {/* Success icon */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-6">
        <CheckCircle className="h-10 w-10 text-green-600" />
      </div>

      <h1 className="text-3xl font-bold text-navy mb-3">Order Confirmed!</h1>
      <p className="text-muted-foreground mb-2">
        Thank you for your purchase. Your PDF study guides are ready to download.
      </p>
      {order?.email && (
        <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          Download links also sent to <strong>{order.email}</strong>
        </p>
      )}

      {/* Download buttons */}
      <div className="mt-8 space-y-3">
        {loading ? (
          <>
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </>
        ) : order ? (
          order.tokens.map((token, i) => (
            <a
              key={token}
              href={`/api/download/${token}`}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-orange text-white font-semibold hover:bg-orange/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download: {order.productTitles[i]?.split(" ").slice(0, 5).join(" ")}…
            </a>
          ))
        ) : (
          <p className="text-sm text-muted-foreground py-4">
            Check your email for download links. Links expire in 72 hours.
          </p>
        )}
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Download links expire in 72 hours. Need help?{" "}
        <Link href="/contact" className="text-orange hover:underline">
          Contact us
        </Link>
      </p>

      {order && (
        <UpsellSection purchasedIds={order.tokens.map((_, i) => i.toString())} />
      )}

      <div className="mt-8">
        <Link
          href="/shop"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border-navy text-navy cursor-pointer"
          )}
        >
          Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <SiteLayout>
      <Suspense
        fallback={
          <div className="max-w-2xl mx-auto px-4 py-16 text-center">
            <Skeleton className="h-20 w-20 rounded-full mx-auto mb-6" />
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-12 w-full rounded-lg mt-8" />
          </div>
        }
      >
        <SuccessContent />
      </Suspense>
    </SiteLayout>
  );
}
