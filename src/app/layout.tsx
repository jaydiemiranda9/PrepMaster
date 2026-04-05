import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ExitIntentPopup from "@/components/cro/ExitIntentPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PrepMaster — Pass Your Exam. First Try.",
    template: "%s | PrepMaster",
  },
  description:
    "14 premium exam prep study guides for LSAT, CLEP, NCLEX, CPC, PMP, and Insurance. Instant PDF download. 1,500+ practice questions per book.",
  keywords: [
    "LSAT prep",
    "CLEP study guide",
    "NCLEX-RN study guide",
    "CPC exam prep",
    "exam prep books",
    "digital study guides",
    "PDF study guide",
  ],
  openGraph: {
    siteName: "PrepMaster",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Toaster position="bottom-right" richColors />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
