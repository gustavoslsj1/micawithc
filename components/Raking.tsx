import {
  Trophy,
  Star,
  MessageSquare,
  Building2,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import { Button } from "./ui/button";

import FavoriteButton from "./FavoriteButton";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { GetUserId } from "@/lib/services/auth0";
import { GetContents } from "@/lib/services/content";

export default async function Ranking() {
  const supabase = await createClient();

  const user = await GetUserId();
  const userId = user?.userId;

  const { data: content } = await GetContents();

  const { data: favoritos } = await supabase
    .from("favoritos")
    .select("content_id")
    .eq("user_id", userId);
  const favoritosIds = new Set(favoritos?.map((fav) => fav.content_id));

  // const [filter, setfilter] = useState<TipoConteudo>("todos");
  // const filter: TipoConteudo = "todos";
  // const listaOrdenadaGeral = [...lista].sort((a, b) => {
  //   const notaA = ((a.NotaGugu || 0) + (a.NotaMika || 0)) / 2;
  //   const notaB = ((b.NotaGugu || 0) + (b.NotaMika || 0)) / 2;
  //   return notaB - notaA;
  // });

  // const getRankingCategoria = (item: (typeof lista)[0]) => {
  //   const mesmaCategoria = listaOrdenadaGeral.filter(
  //     (i) => i.type === item.type,
  //   );
  //   return mesmaCategoria.findIndex((i) => i.title === item.title) + 1;
  // };

  // const getRankingGeral = (item: (typeof lista)[0]) => {
  //   return listaOrdenadaGeral.findIndex((i) => i.title === item.title) + 1;
  // };

  // const conteudosFiltrados =
  //   filter === "todos"
  //     ? listaOrdenadaGeral
  //     : listaOrdenadaGeral.filter((item) => item.type === filter);

  // const getCategoriaLabel = (type: string) => {
  //   const labels: Record<string, string> = {
  //     anime: "Animes",
  //     filme: "Filmes",
  //     serie: "Séries",
  //   };
  //   return labels[type] || type;
  // };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <Trophy className="text-yellow-400" size={20} />
            <span className="text-yellow-400 text-sm font-medium">
              Rankings Neon
            </span>
          </div>

          {/* header card secundario  */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Top Animes e Filmes
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Notas Atualizadas • Destaques da Comunidade
          </p>
        </div>
        <div className="flex flex-col border-2 border-black rounded-2xl p-3 sm:p-6 ring-2 ring-white shadow-2xl shadow-white">
          <li className="list-none p-0 m-0">
            <h3 className="text-xl sm:text-2xl font-bold flex flex-row gap-3 items-center justify-center bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent text-center">
              lista de animes e colocações <Star color="yellow" />
            </h3>

            <div className="flex flex-row gap-4 justify-center sm:justify-end my-4">
              <Select
              // value={filter}
              // onValueChange={(value) => setfilter(value as TipoConteudo)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">
                    <span className=" font-bold">Todos</span>
                  </SelectItem>
                  <SelectItem value="anime">Anime</SelectItem>
                  <SelectItem value="filme">Filme</SelectItem>
                  <SelectItem value="serie">Série</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              {content?.map((item) => {
                const rankingFinal =
                  item.NotaGugu && item.NotaMika
                    ? (item.NotaGugu + item.NotaMika) / 2
                    : null;

                // const rankingGeral = getRankingGeral(item);
                // const rankingCategoria = getRankingCategoria(item);

                return (
                  <div
                    key={item.id}
                    className="bg-[#12121a] rounded-xl p-4 sm:p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_130px] grid-rows-1 justify-center items-center gap-4">
                      {/* Icon */}
                      <div className="w-full h-48 md:h-45 relative rounded-lg overflow-hidden">
                        <Image
                          src={item.image ?? "/default-image.jpg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />{" "}
                      </div>

                      <div className="w-full">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                          <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {item.name}
                          </h3>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-bold w-fit">
                            #Geral
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1">
                          <Building2 className="w-4 h-4 text-fuchsia-400" />
                          <span> {item.type}</span>
                          <span className="text-cyan-500 hidden sm:inline">
                            •
                          </span>
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-50">
                            Idade recomendada: {item.idade}+
                          </span>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 mt-4 text-sm w-full">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                            <div>
                              <p className="text-gray-500 text-xs">
                                Start Date
                              </p>
                              <p className="text-white">{item.year}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-fuchsia-400 shrink-0" />
                            <div>
                              <p className="text-gray-500 text-xs">Episodios</p>
                              <p className="text-white">{item.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-fuchsia-400 shrink-0" />
                            <div>
                              <p className="text-gray-500 text-xs">
                                Temporadas
                              </p>
                              <p className="text-white">{item.temporadas}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-fuchsia-400 shrink-0" />
                            <div>
                              <p className="text-gray-500 text-xs">
                                Last Date To Apply
                              </p>
                              <p className="text-white">{item.lastDate}</p>
                            </div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.generos
                            ?.split("|")
                            .map((tag: string, index: number) => (
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
                            ))}
                        </div>

                        <p className="text-gray-300 text-sm flex flex-row gap-2 sm:gap-3 pt-5 flex-wrap items-center">
                          Nota: {rankingFinal?.toFixed(1)}
                          <Star width={14} />=
                          <span className="text-purple-700 mx-2 sm:mx-5 flex flex-row gap-2 sm:gap-3 items-center">
                            Mika: {item.NotaMika} <Star width={14} />
                            <span className="font-bold mx-2 sm:mx-5">+</span>
                          </span>
                          <span className="text-cyan-600 flex flex-row gap-2 sm:gap-3 items-center">
                            Gugu: {item.NotaGugu}
                            <Star width={14} />
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-between h-full md:text-right gap-4 mt-4 md:mt-0">
                        <div className="hidden md:block"></div>
                        <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-2 sm:gap-4 md:gap-0">
                          <p className="text-xs text-gray-500 md:mb-4">
                            Posted {item.postedDays} Days Ago
                          </p>
                          <Button className="bg-linear-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-fuchsia-500/25 transition-shadow text-sm">
                            <Link href={`/ranking/${item.id}`}>
                              View Details →
                            </Link>
                          </Button>
                        </div>

                        <div className="flex justify-end gap-3 sm:gap-5">
                          <FavoriteButton
                            contentId={item.id}
                            isFavorited={favoritosIds.has(item.id)}
                          />
                          <Button className="bg-indigo-100 w-7 h-7 rounded-4xl hover:bg-indigo-300 text-black md:mt-4">
                            <MessageSquare />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}
