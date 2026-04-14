"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  MessageCircle,
  Play,
  Send,
  Star,
  Tv,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClientBrowser } from "@/lib/supabase/client";
import StarRating from "./star_rating";
import { content } from "@/types/content";
import { editNota } from "@/actions/favorites";

type Props = {
  id: number;
  user: {
    userId: string;
  } | null;
};

export default function AnimeDetails({ id, user }: Props) {
  const [rating, setRating] = useState(0);
  const [anime, setanime] = useState<content>();
  const userId = user?.userId;

  useEffect(() => {
    const fetchAnime = async () => {
      const supabase = await createClientBrowser();

      const { data: anime } = await supabase
        .from("content")
        .select()
        .eq("id", id)
        .single();

      setanime(anime);
    };

    const favorito = async () => {
      const supabase = await createClientBrowser();

      const { data: favoritos } = await supabase
        .from("favoritos")
        .select("nota")
        .eq("user_id", userId)
        .eq("content_id", id)
        .single();

      setRating(favoritos?.nota ?? 0);
    };

    fetchAnime();
    favorito();
  }, [id, userId]);

  const handleRating = async (value: number) => {
    setRating(value);
    try {
      await editNota(id, value);
    } catch (err) {
      console.error("Erro ao salvar nota");
    }
  };

  // FUNÇÃO PRA CONVERTER LINK DO YOUTUBE
  function getEmbedUrl(url: string) {
    if (!url) return "";

    if (url.includes("youtu.be")) {
      const id = url.split("/").pop();
      return `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes("youtube.com/watch")) {
      const id = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  }

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p>Carregando</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16 container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT */}
        <div className="lg:col-span-1">
          <Card className="relative h-[70vh] border-2 neon-border-cyan">
            <Image
              priority
              fill
              src={anime.image}
              alt={anime.name}
              className="w-full h-auto"
            />
          </Card>

          <div className="mt-6">
            <StarRating value={rating} onChange={handleRating} />
            <p className="mt-2 text-sm text-muted-foreground">
              Nota: {rating}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold">
            {anime.name}
          </h1>

          <p className="text-muted-foreground">
            {anime.synopsis}
          </p>

          {/* VIDEO */}
          <Card className="border-2 neon-border-cyan overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Trailer Oficial
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted">

                {anime.url_video ? (
                  <iframe
                    className="w-full h-full"
                    src={getEmbedUrl(anime.url_video)}
                    title={anime.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Sem trailer disponível
                  </div>
                )}

              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
}