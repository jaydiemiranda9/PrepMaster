"use client";

import { useState } from "react";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SiteLayout from "@/components/layout/SiteLayout";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // In production, wire this to an email API or n8n webhook
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
    toast.success("Message sent! We'll reply within 24 hours.");
  }

  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">Contact Us</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Have a question about an order, a download issue, or just want to say
            hello? We&apos;re happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-orange" />
              </div>
              <div>
                <p className="font-semibold text-navy">Email</p>
                <p className="text-sm text-muted-foreground">support@prepmaster.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-orange" />
              </div>
              <div>
                <p className="font-semibold text-navy">Response Time</p>
                <p className="text-sm text-muted-foreground">Within 24 hours, Mon–Fri</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-orange" />
              </div>
              <div>
                <p className="font-semibold text-navy">Common Questions</p>
                <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                  <li>• Expired download links</li>
                  <li>• Order confirmation issues</li>
                  <li>• Refund requests</li>
                  <li>• Bulk/team orders</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-navy mb-2">Message Sent!</h2>
                <p className="text-muted-foreground">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="e.g. Download link expired"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    required
                    placeholder="Tell us how we can help…"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-orange hover:bg-orange/90 text-white cursor-pointer"
                >
                  {loading ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
