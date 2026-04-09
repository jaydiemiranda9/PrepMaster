import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, CheckCircle2, XCircle, Clock, MailQuestion } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "Refund Policy | PrepMaster",
  description:
    "PrepMaster's 7-day satisfaction guarantee. If your study guide isn't what you expected, we'll make it right.",
};

const LAST_UPDATED = "April 1, 2026";

const ELIGIBLE = [
  "The file is corrupted, unreadable, or won't open",
  "You were charged twice for the same product",
  "The content is materially different from what the product page described",
  "You purchased within the last 7 days and haven't downloaded the file more than twice",
];

const NOT_ELIGIBLE = [
  "Change of mind after downloading and reading the guide",
  "You enrolled in a different exam or chose not to take the test",
  "You feel the content is too easy or too advanced — please check the product samples first",
  "Requests made more than 7 days after purchase",
];

export default function RefundsPage() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange/10 mx-auto mb-5">
            <RefreshCw className="h-8 w-8 text-orange" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            7-Day Satisfaction Guarantee
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We stand behind every PrepMaster guide. If something goes wrong, we&apos;ll
            fix it fast — no runaround, no guilt-trip emails.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Eligibility grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <h2 className="font-bold text-emerald-900">Eligible for a full refund</h2>
            </div>
            <ul className="space-y-2.5">
              {ELIGIBLE.map((item) => (
                <li
                  key={item}
                  className="text-sm text-emerald-900/80 flex gap-2 leading-relaxed"
                >
                  <span className="text-emerald-600 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-rose-50 border border-rose-200">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5 text-rose-600" />
              <h2 className="font-bold text-rose-900">Not eligible</h2>
            </div>
            <ul className="space-y-2.5">
              {NOT_ELIGIBLE.map((item) => (
                <li
                  key={item}
                  className="text-sm text-rose-900/80 flex gap-2 leading-relaxed"
                >
                  <span className="text-rose-600 flex-shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange" />
              How to request a refund
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Email{" "}
                <a
                  href="mailto:support@prepmaster.com"
                  className="text-orange hover:underline"
                >
                  support@prepmaster.com
                </a>{" "}
                within 7 days of your purchase.
              </li>
              <li>
                Include your Stripe receipt number (starts with <code>pi_</code> or{" "}
                <code>cs_</code>) or the email address you used at checkout.
              </li>
              <li>Briefly tell us what went wrong — one or two sentences is fine.</li>
              <li>
                We&apos;ll reply within 24 business hours. Approved refunds are processed
                through Stripe and typically appear on your statement in 5–10 business
                days depending on your bank.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Bundle refunds</h2>
            <p>
              Bundles are discounted specifically because they&apos;re purchased as a
              set. If you need to refund a bundle, the full bundle must be refunded — we
              can&apos;t refund individual titles within a bundle at the bundle
              discount rate. We can, however, swap one bundle title for another at any
              time within the 7-day window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Chargebacks</h2>
            <p>
              Please contact us before filing a chargeback with your bank — we&apos;re
              quick to resolve legitimate issues directly. Filing a chargeback for a
              purchase that falls outside our refund policy may result in the license to
              your guide being revoked and future orders declined.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
              <MailQuestion className="h-5 w-5 text-orange" />
              Still have questions?
            </h2>
            <p>
              Our team reads every message. If you&apos;re unsure whether you qualify for
              a refund, just ask — we&apos;d rather hear from you before you buy than
              after.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 rounded-xl bg-navy text-white">
          <h2 className="text-2xl font-bold mb-2">Questions? We&apos;re here for you.</h2>
          <p className="text-white/60 mb-6">
            Real humans reply to every message — usually within a few hours.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "bg-orange hover:bg-orange/90 text-white cursor-pointer"
            )}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
