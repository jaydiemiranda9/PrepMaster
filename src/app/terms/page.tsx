import type { Metadata } from "next";
import { FileText, Scale } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "Terms of Service | PrepMaster",
  description:
    "The terms and conditions for purchasing and using PrepMaster digital study guides.",
};

const LAST_UPDATED = "April 1, 2026";

export default function TermsPage() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange/10 mx-auto mb-5">
            <Scale className="h-8 w-8 text-orange" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-navy">1. Agreement</h2>
            <p>
              By accessing or purchasing from PrepMaster (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;), you (&quot;customer&quot;, &quot;you&quot;) agree to these
              Terms of Service. If you do not agree, please do not use the site or purchase
              our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
              <FileText className="h-5 w-5 text-orange" />
              2. What you&apos;re buying
            </h2>
            <p>
              PrepMaster sells digital study guides delivered as PDF downloads. Each
              purchase grants you a <strong>single-user, non-transferable license</strong>{" "}
              to use the PDF for your own personal exam preparation.
            </p>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Download the file to your personal devices</li>
              <li>Print one physical copy for your own study use</li>
              <li>Store a personal backup</li>
            </ul>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Share, forward, email, upload, or re-sell the PDF in whole or in part
              </li>
              <li>Post the file on file-sharing sites, Discord servers, or group chats</li>
              <li>Use any portion of the content in another commercial product</li>
              <li>Remove copyright notices or watermarks</li>
            </ul>
            <p>
              Violation of these restrictions terminates your license immediately and may
              result in legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">3. Delivery</h2>
            <p>
              After successful payment, you&apos;ll receive a receipt and download links by
              email within minutes. Download links are time-limited for security and
              remain valid for 72 hours. If you lose access, email support and we&apos;ll
              reissue new links free of charge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">4. Pricing, taxes, currency</h2>
            <p>
              All prices are listed in US dollars unless otherwise noted. We collect and
              remit sales tax in jurisdictions where required. Prices may change at any
              time, but changes will not affect orders already completed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">5. Refunds</h2>
            <p>
              Because our products are digital and delivered instantly, all sales are
              covered by our{" "}
              <a href="/refunds" className="text-orange hover:underline">
                Refund Policy
              </a>
              . Please review it before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">6. No exam outcome guarantee</h2>
            <p>
              PrepMaster study guides are designed to help you prepare effectively, but
              we cannot and do not guarantee that you will pass any specific exam. Exam
              outcomes depend on many factors, including individual study effort,
              background knowledge, and test-taking skill. We are not affiliated with, nor
              endorsed by, the LSAC, NCBSN, College Board, AAPC, PMI, or any other exam
              administrator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">7. Intellectual property</h2>
            <p>
              All content on PrepMaster — including study guides, website copy, graphics,
              and branding — is the property of PrepMaster or its licensors and is
              protected by copyright and trademark law. Unauthorized reproduction or
              distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">8. Acceptable use</h2>
            <p>When using our site, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Interfere with, disrupt, or probe our infrastructure</li>
              <li>Scrape, harvest, or bulk-download content using automated tools</li>
              <li>Use the site for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">9. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, PrepMaster&apos;s total liability
              arising out of or related to your use of the site or any product purchased
              from us is limited to the amount you paid for that product. We are not
              liable for indirect, incidental, consequential, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">10. Changes to these terms</h2>
            <p>
              We may update these terms periodically. Material changes will be posted
              here with an updated &quot;Last updated&quot; date. Continued use of the
              site after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">11. Governing law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which
              PrepMaster is registered, without regard to conflict-of-law provisions. Any
              disputes will be resolved in the competent courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">12. Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a
                href="mailto:legal@prepmaster.com"
                className="text-orange hover:underline"
              >
                legal@prepmaster.com
              </a>{" "}
              or use our{" "}
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
