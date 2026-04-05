import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import type { CartItem } from "@/types/product";

interface CheckoutBody {
  items: CartItem[];
}

export async function POST(req: Request) {
  try {
    const body: CheckoutBody = await req.json();
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: item.coverImage.startsWith("/")
            ? []
            : [item.coverImage],
          metadata: {
            productId: item.id,
            isBundle: item.isBundle ? "true" : "false",
            blobKey: item.blobKey ?? "",
            productIds: item.productIds?.join(",") ?? "",
          },
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: 1,
    }));

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
      customer_creation: "always",
      billing_address_collection: "required",
      metadata: {
        itemIds: items.map((i) => i.id).join(","),
        itemBlobKeys: items
          .map((i) =>
            i.isBundle ? `bundle:${i.productIds?.join("|")}` : i.blobKey ?? ""
          )
          .join(","),
        itemTitles: items.map((i) => i.title).join("|||"),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
