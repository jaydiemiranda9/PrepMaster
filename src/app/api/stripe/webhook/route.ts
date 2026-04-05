import { NextResponse } from "next/server";
import { after } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getResend } from "@/lib/resend";
import { storeDownloadToken, storeOrder } from "@/lib/redis";
import OrderConfirmation from "../../../../../emails/OrderConfirmation";
import { PRODUCTS } from "@/data/products";
import { v4 as uuidv4 } from "uuid";

// App Router: no config needed — req.text() reads raw body directly
export async function POST(req: Request) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;
  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Webhook error";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object;
  const email = session.customer_details?.email ?? "";
  const customerName = session.customer_details?.name ?? undefined;
  const sessionId = session.id;
  const totalAmount = (session.amount_total ?? 0) / 100;

  const itemBlobKeysRaw: string = session.metadata?.itemBlobKeys ?? "";
  const itemTitlesRaw: string = session.metadata?.itemTitles ?? "";

  const itemBlobKeys = itemBlobKeysRaw.split(",").filter(Boolean);
  const itemTitles = itemTitlesRaw.split("|||").filter(Boolean);

  // Expand bundle keys into individual product blob keys
  const allDeliveries: Array<{ title: string; blobKey: string }> = [];
  itemBlobKeys.forEach((keyEntry, idx) => {
    const title = itemTitles[idx] ?? "Study Guide";
    if (keyEntry.startsWith("bundle:")) {
      const productIds = keyEntry.replace("bundle:", "").split("|");
      productIds.forEach((productId) => {
        const product = PRODUCTS.find((p) => p.id === productId);
        if (product) {
          allDeliveries.push({ title: product.title, blobKey: product.blobKey });
        }
      });
    } else {
      allDeliveries.push({ title, blobKey: keyEntry });
    }
  });

  // Generate download tokens
  const tokens: string[] = [];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  for (const delivery of allDeliveries) {
    const token = uuidv4();
    tokens.push(token);
    await storeDownloadToken(token, {
      productBlobKey: delivery.blobKey,
      orderId: sessionId,
      email,
      expiresAt: Date.now() + 72 * 60 * 60 * 1000,
    });
  }

  // Store order summary (for success page lookup)
  await storeOrder(sessionId, {
    sessionId,
    email,
    tokens,
    productTitles: allDeliveries.map((d) => d.title),
    totalAmount,
    createdAt: Date.now(),
  });

  // Build download links for email
  const downloads = allDeliveries.map((d, i) => ({
    title: d.title,
    url: `${siteUrl}/api/download/${tokens[i]}`,
  }));

  // Send order confirmation email
  if (email) {
    await getResend().emails.send({
      from: "PrepMaster <orders@prepmaster.com>",
      to: email,
      subject: "Your PrepMaster order is ready — download your books",
      react: OrderConfirmation({
        customerName,
        orderId: sessionId,
        downloads,
        totalAmount,
      }),
    });
  }

  // Notify n8n for Klaviyo email marketing flow — fire after response is sent
  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
  if (n8nWebhookUrl) {
    after(async () => {
      await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "purchase",
          email,
          name: customerName,
          products: allDeliveries.map((d) => d.title),
          totalAmount,
          orderId: sessionId,
        }),
      }).catch(() => {
        // Non-critical: n8n failure does not affect order delivery
      });
    });
  }

  return NextResponse.json({ received: true });
}
