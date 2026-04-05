import { BookOpen, HelpCircle, Download, Shield } from "lucide-react";

const STATS = [
  {
    icon: BookOpen,
    value: "14",
    label: "Study Guides",
  },
  {
    icon: HelpCircle,
    value: "1,500+",
    label: "Practice Questions",
  },
  {
    icon: Download,
    value: "Instant",
    label: "PDF Download",
  },
  {
    icon: Shield,
    value: "Stripe",
    label: "Secure Checkout",
  },
];

export default function TrustBar() {
  return (
    <section className="py-10 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
                <Icon className="h-5 w-5 text-orange" />
              </span>
              <div>
                <p className="text-xl font-bold text-white">{value}</p>
                <p className="text-sm text-white/60">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
