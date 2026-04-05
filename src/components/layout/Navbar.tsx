"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart";

const NAV_LINKS = [
  { label: "LSAT", href: "/shop/lsat" },
  { label: "CLEP", href: "/shop/clep" },
  { label: "NCLEX", href: "/shop/nclex" },
  { label: "Professional Cert", href: "/shop/professional-cert" },
  { label: "Insurance", href: "/shop/insurance" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-navy hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange text-white">
              <BookOpen className="h-4 w-4" />
            </span>
            <span>PrepMaster</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-navy rounded-md hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="ml-1 px-3 py-2 text-sm font-semibold text-orange hover:text-orange/80 transition-colors"
            >
              All Books
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative cursor-pointer">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange text-white text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Cart ({totalItems} items)</span>
              </Button>
            </Link>

            {/* Mobile menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden cursor-pointer"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetContent side="right" className="w-72 pt-12">
                <nav className="flex flex-col gap-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 pb-2">
                    Browse by Exam
                  </p>
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="my-3 border-t border-border" />
                  <Link
                    href="/shop"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm font-semibold text-orange rounded-md hover:bg-secondary transition-colors"
                  >
                    All Books
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
