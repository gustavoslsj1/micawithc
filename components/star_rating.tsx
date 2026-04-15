"use client";

import { useState } from "react";
import { Star } from "lucide-react";

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
  const current = hover ?? value;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;

        return (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              const { left, width } = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - left;

              const isHalf = clickX < width / 2;
              const newValue = isHalf ? starValue - 0.5 : starValue;

              onChange?.(newValue);
            }}
            onMouseMove={(e) => {
              const { left, width } = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - left;

              const isHalf = x < width / 2;
              const value = isHalf ? starValue - 0.5 : starValue;

              setHover(value);
            }}
            onMouseLeave={() => setHover(null)}
            className="transition-transform hover:scale-110"
          >
            <div className="relative">
              {/* Estrela base */}
              <Star size={size} className="text-gray-300" />

              {/* Estrela preenchida */}
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{
                  width:
                    current >= starValue
                      ? "100%"
                      : current >= starValue - 0.5
                        ? "50%"
                        : "0%",
                }}
              >
                <Star size={size} className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
