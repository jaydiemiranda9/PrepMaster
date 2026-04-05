import { StarRating } from "@/components/products/StarRating";
import { HOMEPAGE_REVIEWS } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Students Who Passed
          </h2>
          <p className="mt-2 text-muted-foreground">
            Real results from real students who used PrepMaster guides
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRating rating={5} size="lg" />
            <span className="font-semibold text-navy">4.9 / 5.0</span>
            <span className="text-muted-foreground text-sm">average rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOMEPAGE_REVIEWS.map((review) => (
            <figure
              key={review.id}
              className="flex flex-col bg-secondary/40 rounded-xl p-5 border border-border"
            >
              <StarRating rating={review.rating} size="sm" />
              <blockquote className="mt-3 text-sm text-foreground/80 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-border">
                <p className="font-semibold text-sm text-navy">{review.author}</p>
                {review.examPassed && (
                  <p className="text-xs text-green-700 font-medium mt-0.5">
                    ✓ {review.examPassed}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-0.5">
                  {review.productTitle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
