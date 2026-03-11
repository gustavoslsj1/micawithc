"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { rankingLista } from "@/lib/ranking-list";
import { SetStateAction, useState } from "react";
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

type Props = {
  slug: string;
};

const comments = [
  {
    id: 1,
    user: "KiritoFan2024",
    avatar: "K",
    content:
      "Um dos melhores animes de todos os tempos! A história do Kirito e Asuna é incrível.",
    likes: 234,
    date: "2 dias atrás",
  },
  {
    id: 2,
    user: "AnimeLover",
    avatar: "A",
    content:
      "As lutas são épicas, principalmente na primeira temporada. Recomendo muito!",
    likes: 189,
    date: "5 dias atrás",
  },
  {
    id: 3,
    user: "OtakuMaster",
    avatar: "O",
    content:
      "A trilha sonora é simplesmente perfeita. Yuki Kajiura arrasou mais uma vez!",
    likes: 156,
    date: "1 semana atrás",
  },
];
export default function AnimeDetails({ slug }: Props) {
  const anime = rankingLista.find((item) => item.id === Number(slug));
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = () => {
    if (newComment.trim()) {
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
  if (!anime) return notFound();

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
                src={anime.Image}
                alt={anime.title}
                className="w-full h-auto "
              />
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Card className="border neon-border-cyan bg-card/50 backdrop-blur">
              <CardContent className="p-4 text-center">
                <Star className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold text-primary neon-text-cyan">
                  {(anime.NotaGugu + anime.NotaMika) / 2}
                </p>
                <p className="text-sm text-muted-foreground">Nota Média</p>
              </CardContent>
            </Card>
            <Card className="border neon-border-pink bg-card/50 backdrop-blur">
              <CardContent className="p-4 text-center">
                <Tv className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="text-2xl font-bold text-secondary neon-text-pink">
                  {anime.episodes}
                </p>
                <p className="text-sm text-muted-foreground">Episódios</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Middle Column - Info & Video */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title & Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              <span className="neon-text-cyan">{anime.title}</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {anime.generos
                ? anime.generos.map((tag, index) => (
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
                  <p className="font-semibold">{anime.lastDate}</p>
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
                  <p className="font-semibold">{anime.episodes}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Idade</p>
                  <p className="font-semibold">+{anime.Idade}</p>
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
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/6ohYYtxfDCg"
                    title="Sword Art Online Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="border-2 neon-border-pink">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <MessageCircle className="w-5 h-5" />
                  Comentários ({commentList.length})
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
