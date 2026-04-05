import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import CategoryTiles from "@/components/home/CategoryTiles";
import TrustBar from "@/components/home/TrustBar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BundlesSection from "@/components/home/BundlesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <CategoryTiles />
      <TrustBar />
      <FeaturedProducts />
      <BundlesSection />
      <ReviewsSection />
      <NewsletterSection />
    </SiteLayout>
  );
}
