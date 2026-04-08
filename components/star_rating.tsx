"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils"; // padrão do shadcn

type StarRatingProps = {
  totalStars?: number;
  value?: number;
  onChange?: (rating: number) => void;
  size?: number;
};

export default function StarRating({
  totalStars = 5,
  value = 0,
  onChange,
  size = 24,
}: StarRatingProps) {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange?.(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
            className="transition-transform hover:scale-110"
          >
            <Star
              size={size}
              className={cn(
                "transition-colors",
                (hover ?? value) >= starValue
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
