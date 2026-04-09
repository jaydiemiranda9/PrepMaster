import type { Metadata } from "next";
import { Shield, Lock, Eye, Database, Mail, UserCheck } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | PrepMaster",
  description:
    "How PrepMaster collects, uses, and protects your personal information when you purchase study guides.",
};

const LAST_UPDATED = "April 1, 2026";

const HIGHLIGHTS = [
  {
    icon: Lock,
    title: "We never sell your data",
    text: "Your email, name, and purchase history are yours. We don't sell, rent, or trade them to anyone — ever.",
  },
  {
    icon: Database,
    title: "Minimal data collection",
    text: "We only collect what's strictly needed to deliver your PDF and send your receipt.",
  },
  {
    icon: Shield,
    title: "Stripe handles payments",
    text: "We never see or store your card details. All payment data is processed by Stripe (PCI-DSS Level 1 certified).",
  },
];

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange/10 mx-auto mb-5">
            <Shield className="h-8 w-8 text-orange" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-secondary/40 border border-border"
            >
              <Icon className="h-6 w-6 text-orange mb-3" />
              <p className="font-semibold text-navy mb-1.5">{title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
              <Eye className="h-5 w-5 text-orange" />
              What we collect
            </h2>
            <p>
              When you place an order, we collect your email address, name, billing
              country (for tax calculation), and the list of study guides you purchased.
              When you subscribe to our newsletter, we only collect your email address.
            </p>
            <p>
              We do not store credit card numbers, CVVs, or billing addresses.
              Stripe processes all payment information on its own PCI-DSS Level 1 certified
              infrastructure.
            </p>
            <p>
              Our web server logs (powered by Vercel) temporarily record IP addresses,
              user-agent strings, and request paths for a rolling 24-hour window to detect
              abuse and keep the site running. These logs are never linked to your customer
              account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
              <Mail className="h-5 w-5 text-orange" />
              How we use your information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver your purchased PDFs via secure, time-limited download links</li>
              <li>Send your order receipt and download instructions</li>
              <li>Respond to customer support inquiries you send us</li>
              <li>Send newsletter and study tips — only if you explicitly opt in</li>
              <li>
                Calculate and remit applicable sales tax in jurisdictions where we&apos;re
                required to do so
              </li>
            </ul>
            <p>
              We <strong>never</strong> use your data for retargeting ads, third-party
              analytics profiling, or marketing outside of PrepMaster.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Who processes your data</h2>
            <p>We work with a short, carefully-chosen list of providers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Stripe</strong> — payment processing
              </li>
              <li>
                <strong>Resend</strong> — transactional email (receipts, download links)
              </li>
              <li>
                <strong>Vercel</strong> — hosting and CDN delivery
              </li>
              <li>
                <strong>Upstash</strong> — temporary storage of your download tokens
                (auto-deleted after 72 hours)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Cookies</h2>
            <p>
              We use a minimal set of strictly necessary cookies to maintain your cart
              and checkout session. We do <strong>not</strong> use advertising,
              profiling, or third-party tracking cookies. No cookie consent banner is
              required because we do not set non-essential cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-orange" />
              Your rights (GDPR &amp; CCPA)
            </h2>
            <p>
              You have the right to access, correct, export, or delete any personal data
              we hold about you. You can also opt out of all non-transactional emails at
              any time by clicking the unsubscribe link in the footer of any newsletter,
              or by emailing us directly.
            </p>
            <p>
              To exercise any of these rights, email{" "}
              <a
                href="mailto:privacy@prepmaster.com"
                className="text-orange hover:underline"
              >
                privacy@prepmaster.com
              </a>
              . We&apos;ll respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Data retention</h2>
            <p>
              Order records (email, purchase list, total paid) are retained for 7 years
              to meet tax and accounting requirements. Download tokens expire and are
              purged after 72 hours. Newsletter subscriptions are kept until you
              unsubscribe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Children&apos;s privacy</h2>
            <p>
              PrepMaster is intended for customers aged 16 and older. We do not
              knowingly collect personal information from children under 16. If you
              believe a child has provided us with personal information, please contact
              us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be
              announced on this page and, where required, emailed to active customers.
              Continued use of the site after an update constitutes acceptance of the
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a
                href="mailto:privacy@prepmaster.com"
                className="text-orange hover:underline"
              >
                privacy@prepmaster.com
              </a>{" "}
              or visit our{" "}
              <a href="/contact" className="text-orange hover:underline">
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
