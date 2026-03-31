"use client";

import { favoriteAction } from "@/actions/favorites";
import { Star, StarOff } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";

export default function FavoriteButton({
  contentId,
  isFavorited,
}: {
  contentId: number;
  isFavorited: boolean;
}) {
  const [favorite, setFavorite] = useState(isFavorited);

  async function handleClick() {
    await favoriteAction(contentId);

    setFavorite(!favorite); // otimista
  }
  return (
    <Button
      className={` ${favorite ? "bg-amber-200 hover:bg-indigo-300" : "bg-indigo-100 hover:bg-indigo-300"} w-7 h-7 rounded-4xl  text-black mt-4`}
      onClick={() => handleClick()}
    >
      {favorite ? <Star width={14} /> : <StarOff width={14} />}
    </Button>
  );
}
