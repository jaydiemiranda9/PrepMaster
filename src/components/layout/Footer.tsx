import Link from "next/link";
import { BookOpen } from "lucide-react";

const CATEGORY_LINKS = [
  { label: "LSAT Prep", href: "/shop/lsat" },
  { label: "CLEP Exams", href: "/shop/clep" },
  { label: "NCLEX Nursing", href: "/shop/nclex" },
  { label: "Professional Cert", href: "/shop/professional-cert" },
  { label: "Insurance License", href: "/shop/insurance" },
];

const COMPANY_LINKS = [
  { label: "About PrepMaster", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog & Study Tips", href: "/blog" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refunds" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-white mb-4"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange text-white">
                <BookOpen className="h-4 w-4" />
              </span>
              PrepMaster
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Premium exam prep study guides. Instant PDF download. 14 books
              across LSAT, CLEP, NCLEX, CPC, PMP, and Insurance exams.
            </p>
            <p className="text-xs text-white/40">
              Secure checkout powered by Stripe
            </p>
          </div>

          {/* Exam Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
              Exam Categories
            </h3>
            <ul className="space-y-2.5">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust + Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
              Trust & Security
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span className="text-green-400">✓</span> Instant PDF delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span className="text-green-400">✓</span> Stripe secure checkout
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span className="text-green-400">✓</span> Satisfaction guarantee
              </div>
            </div>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} PrepMaster. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            All study guides are digital PDF downloads. No physical product is
            shipped.
          </p>
        </div>
      </div>
    </footer>
  );
}
