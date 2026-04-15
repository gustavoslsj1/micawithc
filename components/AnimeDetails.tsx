"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  MessageCircle,
  Play,
  Send,
  Star,
  ThumbsUp,
  Tv,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { createClientBrowser } from "@/lib/supabase/client";
import StarRating from "./star_rating";
import { content } from "@/types/content";
import { editNota } from "@/actions/favorites";
import { SpinnerCustom } from "./spiner";
import { toast } from "sonner";
type Props = {
  id: number;
  user: {
    userId: string;
  } | null;
};
type Comment = {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  date: string;
};

export default function AnimeDetails({ id, user }: Props) {
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState<Comment[]>([]);

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

  const notaMedia = anime
    ? anime.avaliacaos > 0
      ? anime.nota / anime.avaliacaos
      : 0
    : 0;

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

  const handleRating = async (value: number) => {
    setRating(value); // atualiza UI instantaneamente

    try {
      await editNota(id, value);
      toast.success("Nota salva!", {
        description: `Você avaliou com ${value} estrelas ⭐`,
        position: "top-center",
        className: "bg-green-500 text-white border-none",
      });
    } catch (err) {
      console.error("Erro ao salvar nota");
    }
  };

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <SpinnerCustom />
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment) {
      setCommentList([
        {
          id: Date.now(),
          user: "Você",
          avatar: "V",
          content: newComment,
          likes: 0,
          date: "Agora",
        },
        ...commentList,
      ]);
      setNewComment("");
    }
  };

  return (
    <main className=" min-h-screen pt-24 pb-16 container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Anime Image */}
        <div className="lg:col-span-1">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary via-secondary to-primary rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500" />
            <Card className="relative h-[70vh]  border-2 neon-border-cyan">
              <Image
                priority
                fill
                src={anime.image}
                alt={anime.name}
                className="w-full h-auto "
              />
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Card className="border neon-border-cyan bg-card/50 backdrop-blur">
              <CardContent className="p-4 text-center">
                <div className="flex gap-1 flex-row justify-center items-center ">
                  <p className="text-2xl font-bold text-primary ">
                    {notaMedia}
                  </p>
                  <Star className=" text-primary  " />
                </div>

                <p className="text-2xl font-bold text-primary">Nota Media</p>
              </CardContent>
            </Card>
            <div className="p-6">
              <StarRating value={rating} onChange={handleRating} />

              <p className="mt-2 text-sm text-muted-foreground">
                Nota: {rating}
              </p>
            </div>
          </div>
        </div>

        {/* Middle Column - Info & Video */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title & Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              <span className="neon-text-cyan">{anime.name}</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {anime.generos
                ? anime.generos.split("|").map((tag: string, index: number) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tag.includes("Pre Placement")
                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,255,0.2)]"
                          : "bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30"
                      }`}
                    >
                      {tag.trim()}
                    </span>
                  ))
                : null}
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {anime.synopsis}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Ano</p>
                  <p className="font-semibold">{anime.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Tv className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Temporadas</p>
                  <p className="font-semibold">{anime.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Episódios</p>
                  <p className="font-semibold">{anime.episodio}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Idade</p>
                  <p className="font-semibold">+{anime.idade}</p>
                </div>
              </div>
            </div>

            {/* Video Card */}
            <Card className="border-2 neon-border-cyan overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
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

            {/* Comments Section */}
            <Card className=" mt-4 border-2 neon-border-pink">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <MessageCircle className="w-5 h-5" />
                  <p>Comentários </p>({commentList.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add Comment */}
                <div className="flex gap-4">
                  <Avatar className="border-2 border-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      V
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <Textarea
                      placeholder="Adicione um comentário..."
                      value={newComment}
                      onChange={(e: {
                        target: { value: SetStateAction<string> };
                      }) => setNewComment(e.target.value)}
                      className="min-h-20 bg-muted/50 border-border focus:border-primary"
                    />
                    <Button
                      onClick={handleAddComment}
                      className="bg-primary hover:bg-primary/80 text-primary-foreground"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar
                    </Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4 pt-4 border-t border-border">
                  {commentList.map((comment) => (
                    <div key={comment.id} className="flex gap-4 group">
                      <Avatar className="border-2 border-secondary">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {comment.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">
                            {comment.user}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {comment.date}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {comment.content}
                        </p>
                        <button className="flex items-center gap-1 mt-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
