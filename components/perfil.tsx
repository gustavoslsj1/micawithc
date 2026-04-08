"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  Home,
  Trophy,
  Search,
  Star,
  Heart,
  Settings,
  Edit3,
  Calendar,
  Play,
  Eye,
  Clock,
  CheckCircle2,
  List,
  MessageCircle,
  TrendingUp,
  Bookmark,
  LogOut,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { insertContent } from "@/actions/content";

const userData = {
  username: "Mikawithk",
  displayName: "Mika",
  bio: "Otaku desde 2010. Amante de animes de ação e isekai. Sempre em busca da próxima grande aventura!",
  joinDate: "Março 2022",
  location: "São Paulo, Brasil",
  favoriteGenres: ["Ação", "Isekai", "Romance", "Fantasia"],
  stats: {
    reviews: 47,
    animesWatched: 156,
    episodesWatched: 2847,
    favorites: 23,
    followers: 1234,
    following: 89,
  },
};

const animeList = {
  watching: [
    {
      id: 1,
      title: "Solo Leveling",
      image: "https://cdn.myanimelist.net/images/anime/1908/142261.jpg",
      progress: 8,
      total: 12,
      rating: null,
    },
    {
      id: 2,
      title: "Frieren",
      image: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
      progress: 20,
      total: 28,
      rating: null,
    },
  ],
  completed: [
    {
      id: 3,
      title: "Akame ga Kill",
      image: "https://cdn.myanimelist.net/images/anime/1429/95946.jpg",
      rating: 9,
      type: "anime",
    },
    {
      id: 4,
      title: "Sword Art Online",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HF6foztHzhqf0sQ7luqRtxK9ADRlNZ.png",
      rating: 8.5,
      type: "anime",
    },
    {
      id: 5,
      title: "Attack on Titan",
      image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      rating: 10,
      type: "anime",
    },
  ],
  planToWatch: [
    {
      id: 6,
      title: "Demon Slayer: Hashira Training",
      image: "https://cdn.myanimelist.net/images/anime/1908/142261.jpg",
      type: "anime",
    },
    {
      id: 7,
      title: "One Piece",
      image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
      type: "anime",
    },
  ],
};

const recentActivity = [
  {
    id: 1,
    type: "review",
    anime: "Akame ga Kill",
    content: "Adicionou uma review",
    date: "2 dias atrás",
  },
  {
    id: 2,
    type: "completed",
    anime: "Sword Art Online",
    content: "Completou o anime",
    date: "5 dias atrás",
  },
  {
    id: 3,
    type: "rating",
    anime: "Attack on Titan",
    content: "Deu nota 10",
    date: "1 semana atrás",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("watching");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [generos, setGenre] = useState<string[]>([]);
  const [idade, setIdade] = useState("");
  // async function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();

  //   try {
  //     await InsertContent({
  //       name,
  //       type,
  //       idade,
  //       generos: genero.join(", "),
  //     });

  //     alert("Criado com sucesso 🚀");
  //     setName("");
  //     setType("");
  //     setIdade("");
  //     setGenre([]);
  //   } catch (err) {
  //     console.error(err);
  //     alert("Erro ao criar");
  //   }
  // }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <main className="container mx-auto px-4 py-8">
        {/* Profile Header Section */}
        <div className="relative mb-8">
          {/* Banner Background */}
          <div className="h-48 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--neon-cyan)_0%,_transparent_70%)] opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_var(--neon-pink)_0%,_transparent_50%)] opacity-20" />
          </div>

          {/* Profile Info Card */}
          <Card className="relative -mt-24 mx-4 md:mx-12 border-2 neon-border-cyan bg-card/95 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Avatar */}
                <div className="relative -mt-16 md:-mt-20">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-60 animate-pulse" />
                  <Avatar className="relative h-28 w-28 md:h-36 md:w-36 border-4 border-background">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-background text-4xl font-bold">
                      M
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* User Info */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h1 className="text-3xl md:text-4xl font-bold">
                          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {userData.displayName}
                          </span>
                        </h1>
                        <Badge className="bg-primary/20 text-primary border border-primary/50">
                          Pro Reviewer
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">
                        @{userData.username}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        Editar Perfil
                      </Button>
                      <Button
                        variant="outline"
                        className="border-border hover:border-primary"
                      >
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-foreground/80 mt-4 max-w-2xl">
                    {userData.bio}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      Membro desde {userData.joinDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-secondary" />
                      {userData.location}
                    </span>
                  </div>

                  {/* Favorite Genres */}
                  <div className="flex  justify-between   flex-wrap gap-2 mt-4">
                    <div>
                      {userData.favoriteGenres.map((genre) => (
                        <Badge
                          key={genre}
                          variant="outline"
                          className="border-secondary/50 text-secondary hover:bg-secondary/10"
                        >
                          {genre}
                        </Badge>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">novo conteudo</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-sm">
                        <form>
                          <DialogHeader>
                            <DialogTitle>Adicionar novo conteúdo</DialogTitle>
                            <DialogDescription>
                              Quer adicionar um novo anime ou filme? Preencha os
                              detalhes abaixo e clique em salvar!
                            </DialogDescription>
                          </DialogHeader>
                          <FieldGroup>
                            <Field>
                              <Label htmlFor="name-1">Nome</Label>
                              <Input name="name" defaultValue="Naruto" />
                            </Field>
                            <Field>
                              <Label htmlFor="username-1">tipo</Label>
                              <Input name="type" defaultValue="Anime" />
                            </Field>
                            {/* <Field>
                              <Label htmlFor="username-1">genero</Label>
                              <Input
                                name="generos"
                                value={generos.join(", ")}
                                onChange={(e) =>
                                  setGenre(
                                    e.target.value
                                      .split(",")
                                      .map((g) => g.trim()),
                                  )
                                }
                                type="generos"
                                defaultValue="Shonen"
                              />
                            </Field> */}
                            {/* <Field>
                              <Label htmlFor="username-1">
                                idade recomendada
                              </Label>
                              <Input
                                id="username-1"
                                name="username"
                                defaultValue="@peduarte"
                              />
                            </Field>
                            <Field>
                              <Label htmlFor="username-1">descrição</Label>
                              <Input
                                id="username-1"
                                name="username"
                                defaultValue="@peduarte"
                              />
                            </Field>
                            <Field>
                              <Label htmlFor="username-1">Imagem - link</Label>
                              <Input
                                id="username-1"
                                name="username"
                                defaultValue="@peduarte"
                              />
                            </Field> */}
                          </FieldGroup>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <Button formAction={insertContent}>Salvar</Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="border neon-border-cyan bg-card/50 backdrop-blur hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <MessageCircle className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-primary neon-text-cyan">
                {userData.stats.reviews}
              </p>
              <p className="text-xs text-muted-foreground">Reviews</p>
            </CardContent>
          </Card>
          <Card className="border neon-border-pink bg-card/50 backdrop-blur hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <Eye className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold text-secondary neon-text-pink">
                {userData.stats.animesWatched}
              </p>
              <p className="text-xs text-muted-foreground">Assistidos</p>
            </CardContent>
          </Card>
          <Card className="border neon-border-cyan bg-card/50 backdrop-blur hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <Play className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-primary neon-text-cyan">
                {userData.stats.episodesWatched}
              </p>
              <p className="text-xs text-muted-foreground">Episódios</p>
            </CardContent>
          </Card>
          <Card className="border neon-border-pink bg-card/50 backdrop-blur hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <Heart className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold text-secondary neon-text-pink">
                {userData.stats.favorites}
              </p>
              <p className="text-xs text-muted-foreground">Favoritos</p>
            </CardContent>
          </Card>
          <Card className="border neon-border-cyan bg-card/50 backdrop-blur hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-primary neon-text-cyan">
                {userData.stats.followers}
              </p>
              <p className="text-xs text-muted-foreground">Seguidores</p>
            </CardContent>
          </Card>
          <Card className="border neon-border-pink bg-card/50 backdrop-blur hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <Star className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold text-secondary neon-text-pink">
                {userData.stats.following}
              </p>
              <p className="text-xs text-muted-foreground">Seguindo</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Anime Lists */}
          <div className="lg:col-span-2">
            <Card className="border-2 neon-border-cyan">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary neon-text-cyan">
                  <List className="w-5 h-5" />
                  Minha Lista de Animes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="watching" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-muted/50 mb-6">
                    <TabsTrigger
                      value="watching"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Assistindo
                    </TabsTrigger>
                    <TabsTrigger
                      value="completed"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Completados
                    </TabsTrigger>
                    <TabsTrigger
                      value="planToWatch"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Planejo Ver
                    </TabsTrigger>
                  </TabsList>

                  {/* Watching Tab */}
                  <TabsContent value="watching" className="space-y-4">
                    {animeList.watching.map((anime) => (
                      <Card
                        key={anime.id}
                        className="border border-border/50 bg-muted/20 hover:border-primary/50 transition-colors"
                      >
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                              <img
                                src={anime.image}
                                alt={anime.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-2">
                                {anime.title}
                              </h3>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">
                                    Progresso
                                  </span>
                                  <span className="text-primary font-medium">
                                    {anime.progress}/{anime.total} episódios
                                  </span>
                                </div>
                                <Progress
                                  value={(anime.progress / anime.total) * 100}
                                  className="h-2 bg-muted"
                                />
                              </div>
                              <Button
                                size="sm"
                                className="mt-3 bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/50"
                              >
                                <Play className="w-3 h-3 mr-1" />
                                Continuar
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  {/* Completed Tab */}
                  <TabsContent value="completed" className="space-y-4">
                    {animeList.completed.map((anime) => (
                      <Card
                        key={anime.id}
                        className="border border-border/50 bg-muted/20 hover:border-secondary/50 transition-colors"
                      >
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                              <img
                                src={anime.image}
                                alt={anime.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-foreground">
                                  {anime.title}
                                </h3>
                                <Badge className="bg-secondary/20 text-secondary border border-secondary/50">
                                  {anime.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 mt-3">
                                <span className="text-muted-foreground text-sm">
                                  Sua nota:
                                </span>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                                  <span className="text-secondary font-bold">
                                    {anime.rating}
                                  </span>
                                </div>
                              </div>
                              <div className="flex gap-2 mt-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-primary/50 text-primary hover:bg-primary/10"
                                >
                                  Ver Detalhes
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-secondary/50 text-secondary hover:bg-secondary/10"
                                >
                                  <Edit3 className="w-3 h-3 mr-1" />
                                  Review
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  {/* Plan to Watch Tab */}
                  <TabsContent value="planToWatch" className="space-y-4">
                    {animeList.planToWatch.map((anime) => (
                      <Card
                        key={anime.id}
                        className="border border-border/50 bg-muted/20 hover:border-primary/50 transition-colors"
                      >
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                              <img
                                src={anime.image}
                                alt={anime.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-foreground">
                                  {anime.title}
                                </h3>
                                <Badge
                                  variant="outline"
                                  className="border-muted-foreground/50 text-muted-foreground"
                                >
                                  {anime.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">
                                Na sua lista de espera
                              </p>
                              <div className="flex gap-2 mt-3">
                                <Button
                                  size="sm"
                                  className="bg-primary text-primary-foreground hover:bg-primary/80"
                                >
                                  <Play className="w-3 h-3 mr-1" />
                                  Começar a Assistir
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                >
                                  Remover
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Activity & Favorites */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="border-2 neon-border-pink">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary neon-text-pink">
                  <TrendingUp className="w-5 h-5" />
                  Atividade Recente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 pb-4 border-b border-border/30 last:border-0 last:pb-0"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === "review"
                          ? "bg-primary/20 text-primary"
                          : activity.type === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {activity.type === "review" ? (
                        <MessageCircle className="w-4 h-4" />
                      ) : activity.type === "completed" ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Star className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">
                        {activity.content}{" "}
                        <span className="text-primary font-medium">
                          {activity.anime}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Favorite Anime */}
            <Card className="border-2 neon-border-cyan">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary neon-text-cyan">
                  <Heart className="w-5 h-5" />
                  Anime Favorito
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HF6foztHzhqf0sQ7luqRtxK9ADRlNZ.png"
                      alt="Sword Art Online"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4">
                      <h3 className="font-bold text-foreground">
                        Sword Art Online
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-4 h-4 fill-secondary text-secondary" />
                        <span className="text-secondary font-medium">9.0</span>
                        <span className="text-muted-foreground text-sm">
                          Minha nota
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">
                  Ações Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
                >
                  <Bookmark className="w-4 h-4 mr-2 text-primary" />
                  Ver Salvos
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-secondary/30 hover:border-secondary hover:bg-secondary/10 text-foreground"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-secondary" />
                  Minhas Reviews
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-border hover:border-primary hover:bg-primary/10 text-foreground"
                >
                  <Settings className="w-4 h-4 mr-2 text-muted-foreground" />
                  Configurações
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="neon-text-cyan text-primary font-bold">CyberReview</p>
          <p className="text-sm mt-2">O melhor lugar para reviews de anime</p>
        </div>
      </footer>
    </div>
  );
}
