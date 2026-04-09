import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import CategoryTiles from "@/components/home/CategoryTiles";
import TrustBar from "@/components/home/TrustBar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BundlesSection from "@/components/home/BundlesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import MethodSection from "@/components/home/MethodSection";
import StatsStrip from "@/components/home/StatsStrip";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <CategoryTiles />
      <MethodSection />
      <FeaturedProducts />
      <StatsStrip />
      <BundlesSection />
      <ReviewsSection />
      <FaqSection />
      <NewsletterSection />
    </SiteLayout>
  );
}
