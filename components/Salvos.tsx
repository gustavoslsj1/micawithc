"use client";

import { GetContents } from "@/lib/services/content";
import Image from "next/image";

import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { Button } from "./ui/button";
import { createClientBrowser } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { content } from "@/types/content";
import { favoritos } from "@/types/favoritos";
import { Calendar, Clock, Star, Tv } from "lucide-react";
type User = {
  userId: string;
} | null;

export default function SalvosContent({ user }: { user: User }) {
  const [favoritos, setFavoritos] = useState<favoritos[]>([]);
  const [content, setContent] = useState<content[]>([]);
  const userId = user?.userId;

  useEffect(() => {
    const fetchData = async () => {
      const supabase = await createClientBrowser();

      const { data: content } = await GetContents();

      const { data: favoritos } = await supabase
        .from("favoritos")
        .select("*")
        .eq("user_id", userId);

      setContent(content || []);
      setFavoritos(favoritos || []);

      console.log("USER ID:", userId);
      console.log("CONTENT:", content);
      console.log("FAVORITOS:", favoritos);
    };
    fetchData();
  }, [userId]);

  const favoritosIds = new Set(favoritos?.map((fav) => fav.content_id));
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <h2 className="text-3xl font-bold text-white">Meus Salvos</h2>
          </div>
          <p className="text-gray-400">
            Suas séries e filmes favoritos em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favoritos?.map((item) => (
            <div key={item.content_id}>
              {content?.map((contentItem) => {
                if (contentItem.id === item.content_id) {
                  return (
                    <div
                      key={contentItem.id}
                      className="relative rounded-lg overflow-hidden border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group w-full aspect-[2/3]"
                    >
                      {/* Imagem de fundo */}
                      <Image
                        fill
                        src={contentItem.image}
                        alt={contentItem.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Button className="absolute top-3 z-10 left-2 bg-black/80 hover:bg-black/90 text-white  font-bold px-3  rounded-full">
                        <span className="text-yellow-400">
                          {contentItem.nota}
                        </span>
                      </Button>

                      {/* Botão de bookmark sempre visível */}
                      <div className="absolute top-0 right-2 z-10">
                        <FavoriteButton
                          contentId={contentItem.id}
                          isFavorited={favoritosIds.has(contentItem.id)}
                        />
                      </div>

                      {/* Overlay com informações - aparece no hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-semibold text-base mb-2 line-clamp-2">
                          {contentItem.name}
                        </h3>
                        {contentItem.idade && (
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-gray-300 text-xs bg-gray-700/50 px-2 py-0.5 rounded">
                              {contentItem.idade}+
                            </span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2 mb-3 text-xs">
                          {contentItem.year && (
                            <div className="flex items-center gap-1 text-gray-300">
                              <Calendar className="w-3 h-3" />
                              <span>{contentItem.year}</span>
                            </div>
                          )}
                          {contentItem.episodio && (
                            <div className="flex items-center gap-1 text-gray-300">
                              <Tv className="w-3 h-3" />
                              <span>{contentItem.episodio} eps</span>
                            </div>
                          )}
                          {contentItem.temporada && (
                            <div className="flex items-center gap-1 text-gray-300">
                              <Clock className="w-3 h-3" />
                              <span>{contentItem.temporada} temp</span>
                            </div>
                          )}
                        </div>
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-2 rounded text-xs font-semibold transition-all">
                          <Link href={`/ranking/${contentItem.id}`}>
                            View Details →
                          </Link>
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
