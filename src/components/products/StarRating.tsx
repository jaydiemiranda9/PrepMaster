import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const SIZE_CLASSES = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showValue = false,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          className={cn(
            SIZE_CLASSES[size],
            i < Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted-foreground/30"
          )}
        />
      ))}
      {showValue && (
        <span className="ml-1 text-sm font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
