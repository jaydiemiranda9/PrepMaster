import { NextResponse } from "next/server";
import { after } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Fire-and-forget: notify n8n to add subscriber to Klaviyo
    const n8nUrl = process.env.N8N_NEWSLETTER_WEBHOOK_URL;
    if (n8nUrl) {
      after(async () => {
        await fetch(n8nUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ event: "newsletter_signup", email }),
        }).catch((err: unknown) => {
          console.error("[newsletter] n8n webhook failed:", err);
        });
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("[newsletter] POST error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
