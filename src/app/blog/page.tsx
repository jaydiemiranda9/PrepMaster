import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SiteLayout from "@/components/layout/SiteLayout";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Exam Prep Blog",
  description:
    "Study tips, exam strategies, and prep guides for LSAT, CLEP, NCLEX, CPC, PMP, and Insurance licensing exams.",
};

const CATEGORY_COLORS: Record<string, string> = {
  "LSAT": "bg-blue-100 text-blue-700",
  "CLEP": "bg-green-100 text-green-700",
  "NCLEX": "bg-purple-100 text-purple-700",
  "Study Tips": "bg-orange-100 text-orange-700",
  "Professional Cert": "bg-amber-100 text-amber-700",
  "Insurance": "bg-red-100 text-red-700",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-orange/10 mx-auto mb-5">
            <BookOpen className="h-7 w-7 text-orange" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            Exam Prep Blog
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Study strategies, exam breakdowns, and preparation tips from PrepMaster&apos;s team of exam experts.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => {
              const colorClass = CATEGORY_COLORS[post.category] ?? "bg-secondary text-foreground";
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border bg-white hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Category color bar */}
                  <div className="h-1 bg-orange w-full" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
                        <Tag className="inline h-3 w-3 mr-1 -mt-0.5" />
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-navy group-hover:text-orange transition-colors leading-snug mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
