"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setEmail("");
      toast.success("You're in! Check your inbox for your free study checklist.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 bg-navy">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-5">
          <Mail className="h-6 w-6 text-orange" />
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Get a Free Study Checklist
        </h2>
        <p className="mt-3 text-white/60 text-base">
          Sign up and we&apos;ll send you a free exam prep checklist + study tips
          for your target exam. No spam, unsubscribe anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-orange flex-1"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-orange hover:bg-orange/90 text-white cursor-pointer whitespace-nowrap"
          >
            {loading ? "Sending…" : "Get Free Checklist"}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>

        <p className="mt-3 text-xs text-white/30">
          Your info is safe. We never sell or share your email.
        </p>
      </div>
    </section>
  );
}
