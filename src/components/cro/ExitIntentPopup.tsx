"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const STORAGE_KEY = "pm_exit_popup_shown";
const COUPON_CODE = "SAVE10";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if already shown this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        setVisible(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    }

    // Small delay so it doesn't fire on page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit_popup" }),
      });
    } catch {
      // Non-critical — still show success
    }

    setSubmitted(true);
    toast.success(`Your code: ${COUPON_CODE} — 10% off your order!`);
  }

  function dismiss() {
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/50 z-50"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-navy px-6 pt-6 pb-5 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange/20 mx-auto mb-3">
                  <Tag className="h-6 w-6 text-orange" />
                </div>
                <h2 id="exit-popup-title" className="text-xl font-bold text-white">
                  Wait — Get 10% Off
                </h2>
                <p className="text-white/60 text-sm mt-1">
                  Enter your email to get an instant 10% discount on any study guide.
                </p>
              </div>

              {/* Body */}
              <div className="px-6 py-6">
                {submitted ? (
                  <div className="text-center py-4">
                    <p className="font-bold text-navy text-lg mb-2">Your coupon code:</p>
                    <div className="inline-block bg-secondary border-2 border-dashed border-orange px-6 py-3 rounded-lg">
                      <span className="font-mono font-bold text-orange text-2xl tracking-widest">
                        {COUPON_CODE}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Use at checkout. Valid for 48 hours.
                    </p>
                    <Button
                      onClick={dismiss}
                      className="mt-4 bg-orange hover:bg-orange/90 text-white cursor-pointer w-full"
                    >
                      Shop Now
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                    />
                    <Button
                      type="submit"
                      className="w-full bg-orange hover:bg-orange/90 text-white cursor-pointer"
                    >
                      Get My 10% Discount
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-3 right-3 p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
