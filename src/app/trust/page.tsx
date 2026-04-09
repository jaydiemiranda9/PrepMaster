import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Download,
  Lock,
  CreditCard,
  HeartHandshake,
  KeyRound,
  Mail,
  Server,
} from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "Trust & Security | PrepMaster",
  description:
    "Instant PDF delivery, Stripe secure checkout, and a 7-day satisfaction guarantee. Here's exactly how we protect your purchase and your data.",
};

const HIGHLIGHTS = [
  {
    icon: Download,
    title: "Instant PDF delivery",
    text: "Your download links arrive by email within seconds of checkout. No waiting, no shipping, no tracking numbers. Open any device and start studying.",
  },
  {
    icon: CreditCard,
    title: "Stripe secure checkout",
    text: "All payments are processed by Stripe, a PCI-DSS Level 1 certified payment processor trusted by Amazon, Shopify, and Google. We never see or store your card details.",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction guarantee",
    text: "If something's wrong with your download or the guide isn't what we described, you get a full refund within 7 days — no questions, no guilt trip.",
  },
];

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: "TLS 1.3 encryption",
    text: "Every page on PrepMaster is served over HTTPS with modern TLS 1.3 encryption. Your order details are encrypted in transit from your browser to our servers.",
  },
  {
    icon: KeyRound,
    title: "Signed, time-limited downloads",
    text: "Each download link is unique to you, signed cryptographically, and expires after 72 hours. Even if a link were intercepted, it can't be used by anyone else.",
  },
  {
    icon: Server,
    title: "Hardened infrastructure",
    text: "PrepMaster runs on Vercel's global edge network with DDoS protection, automated security patches, and 99.99% uptime. No unattended servers, no unpatched software.",
  },
  {
    icon: ShieldCheck,
    title: "Zero card storage",
    text: "We never store credit card numbers, CVVs, or full billing addresses. Stripe handles payment data on its own certified infrastructure — we only see a tokenized reference.",
  },
];

export default function TrustPage() {
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange/10 mx-auto mb-5">
            <ShieldCheck className="h-8 w-8 text-orange" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Trust &amp; Security
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three promises we make with every order — and exactly how we keep them.
          </p>
        </div>

        {/* The 3 checkmarks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-7 rounded-xl border border-border bg-white shadow-sm"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange/10 mb-4">
                <Icon className="h-6 w-6 text-orange" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold"
                >
                  ✓
                </span>
                <h2 className="font-bold text-navy">{title}</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Security pillars */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              How we protect your purchase
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Security isn&apos;t a marketing checkbox. Here&apos;s the real
              infrastructure behind every PrepMaster order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SECURITY_PILLARS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-xl bg-secondary/40 border border-border"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-orange/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1.5">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy snapshot */}
        <div className="p-8 rounded-xl bg-navy text-white mb-16">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange/20 flex items-center justify-center">
              <Mail className="h-6 w-6 text-orange" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">We never sell your data.</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Your email, name, and purchase history stay with us and are only used to
                deliver your order and reply to your messages. We don&apos;t sell,
                rent, or trade customer data to anyone — ever.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/privacy"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "border-white/30 text-white hover:bg-white hover:text-navy cursor-pointer"
                  )}
                >
                  Read the Privacy Policy
                </Link>
                <Link
                  href="/refunds"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "border-white/30 text-white hover:bg-white hover:text-navy cursor-pointer"
                  )}
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-xl border-2 border-dashed border-orange/30 bg-orange/5">
          <h2 className="text-2xl font-bold text-navy mb-2">
            Shop with confidence.
          </h2>
          <p className="text-muted-foreground mb-5 max-w-lg mx-auto">
            Every guide is protected by secure checkout, instant delivery, and a 7-day
            money-back guarantee. If anything goes wrong, we&apos;ll make it right.
          </p>
          <Link
            href="/shop"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-orange hover:bg-orange/90 text-white cursor-pointer"
            )}
          >
            Browse All Study Guides
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
