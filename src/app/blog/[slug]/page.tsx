import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import SiteLayout from "@/components/layout/SiteLayout";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-orange/10 text-orange px-2.5 py-1 rounded-full">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-5">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-5">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
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
        </header>

        {/* MDX Content */}
        <article className="prose prose-slate max-w-none prose-headings:text-navy prose-a:text-orange prose-a:no-underline hover:prose-a:underline prose-strong:text-navy prose-li:marker:text-orange">
          <MDXRemote source={post.content} />
        </article>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-navy text-white p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Start Preparing?</h2>
          <p className="text-white/60 text-sm mb-5">
            Browse our premium study guides and pass your exam on the first try.
          </p>
          <Link href="/shop" className={cn(buttonVariants(), "bg-orange hover:bg-orange/90 text-white cursor-pointer")}>
            Browse Study Guides
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
