import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Bestselling Study Guides
            </h2>
            <p className="mt-2 text-muted-foreground">
              The most popular exam prep books chosen by thousands of students
            </p>
          </div>
          <Link
            href="/shop"
            className={cn(buttonVariants({ variant: "ghost" }), "hidden sm:flex text-orange hover:text-orange/80 cursor-pointer")}
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/shop"
            className={cn(buttonVariants({ variant: "outline" }), "border-navy text-navy cursor-pointer")}
          >
            View all 14 guides <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
