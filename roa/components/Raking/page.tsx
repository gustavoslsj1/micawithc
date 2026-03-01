"use client";
import { useState } from "react";

import {
  Trophy,
  BadgeCheckIcon,
  Star,
  MessageSquare,
  Briefcase,
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
} from "../ui/select";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { rankingLista } from "@/lib/ranking-list";

type TipoConteudo = "todos" | "anime" | "filme" | "serie";

const lista = rankingLista.map((item, index) => ({
  id: index + 1,
  title: item.title,
  type: item.type,
  startDate: item.startDate,
  duration: item.duration,
  genero: item.generos ?? [],
  lastDate: item.lastDate,
  Image: item.Image,
  NotaGugu: item.NotaGugu,
  NotaMika: item.NotaMika,
  Idade: item.Idade ?? "0",
  postedDays: item.postedDays,
}));

export default function Ranking() {
  const [filter, setfilter] = useState<TipoConteudo>("todos");
  const [temporada, setTemporada] = useState<string>("temporadas");

  const listaOrdenadaGeral = [...lista].sort((a, b) => {
    const notaA = ((a.NotaGugu || 0) + (a.NotaMika || 0)) / 2;
    const notaB = ((b.NotaGugu || 0) + (b.NotaMika || 0)) / 2;
    return notaB - notaA;
  });

  const getRankingCategoria = (item: (typeof lista)[0]) => {
    const mesmaCategoria = listaOrdenadaGeral.filter(
      (i) => i.type === item.type,
    );
    return mesmaCategoria.findIndex((i) => i.title === item.title) + 1;
  };

  const getRankingGeral = (item: (typeof lista)[0]) => {
    return listaOrdenadaGeral.findIndex((i) => i.title === item.title) + 1;
  };

  const conteudosFiltrados =
    filter === "todos"
      ? listaOrdenadaGeral
      : listaOrdenadaGeral.filter((item) => item.type === filter);

  const getCategoriaLabel = (type: string) => {
    const labels: Record<string, string> = {
      anime: "Animes",
      filme: "Filmes",
      serie: "Séries",
    };
    return labels[type] || type;
  };

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
        <div className="flex flex-col border-2 border-black rounded-2xl p-6 ring-2 ring-white shadow-2xl shadow-white">
          <li className="list-none p-0 m-0">
            <h3 className="text-2xl font-bold flex flex-row gap-3 items-center justify-center bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              lista de animes e colocações <Star color="yellow" />
            </h3>

            <div className="flex flex-row gap-4 justify-end my-4">
              <Select
                value={filter}
                onValueChange={(value) => setfilter(value as TipoConteudo)}
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
              {conteudosFiltrados.map((item) => {
                const rankingFinal =
                  item.NotaGugu && item.NotaMika
                    ? (item.NotaGugu + item.NotaMika) / 2
                    : null;

                const rankingGeral = getRankingGeral(item);
                const rankingCategoria = getRankingCategoria(item);

                return (
                  <div
                    key={item.id}
                    className="bg-[#12121a] rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] group"
                  >
                    <div className="grid grid-cols-[200px_1fr_130px] grid-rows-1 justify-center items-center gap-4">
                      {/* Icon */}
                      <div className="w-full  h-45 relative rounded-lg overflow-hidden">
                        <Image
                          src={item.Image ?? "/default-image.jpg"}
                          alt={item.title}
                          fill
                        />{" "}
                      </div>

                      <div className="  w-full">
                        <div className="flex flex-row gap-5">
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </h3>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-bold">
                            #{rankingGeral} Geral
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                          <Building2 className="w-4 h-4 text-fuchsia-400" />
                          <span> {item.type}</span>
                          <span className="text-cyan-500">•</span>
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-50">
                            Idade recomendada: {item.Idade}+
                          </span>
                        </div>

                        {/* Details Grid */}
                        <div className="flex gap-6 mt-4 text-sm w-full">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-cyan-400" />
                            <div>
                              <p className="text-gray-500 text-xs">
                                Start Date
                              </p>
                              <p className="text-white">{item.startDate}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-fuchsia-400" />
                            <div>
                              <p className="text-gray-500 text-xs">Episodios</p>
                              <p className="text-white">{item.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-fuchsia-400" />
                            <div>
                              <p className="text-gray-500 text-xs">
                                Temporadas
                              </p>
                              <p className="text-white">{item.duration}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 w-full">
                            <Calendar className="w-4 h-4 text-fuchsia-400" />
                            <div>
                              <p className="text-gray-500 text-xs">
                                Last Date To Apply
                              </p>
                              <p className="text-white">{item.lastDate}</p>
                            </div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 mt-4">
                          {item.genero
                            ? item.genero.map((tag, index) => (
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
                        <p className=" text-gray-300 text-sm flex flex-row gap-3 pt-5 flex-wrap">
                          Nota: {rankingFinal?.toFixed(1)}
                          <Star width={14} />=
                          <span className="text-purple-700 mx-5  flex flex-row gap-3">
                            Mika: {item.NotaMika} <Star width={14} />
                            <span className="font-bold mx-5">+</span>
                          </span>
                          <span className=" text-cyan-600 flex flex-row gap-3">
                            Gugu: {item.NotaGugu}
                            <Star width={14} />
                          </span>
                        </p>
                      </div>
                      <div className="text-right flex flex-col  h-full justify-between  ">
                        <div></div>
                        <div>
                          <p className="text-xs text-gray-500 mb-4">
                            Posted {item.postedDays} Days Ago
                          </p>
                          <Button className="bg-linear-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-fuchsia-500/25 transition-shadow">
                            View Details →
                          </Button>
                        </div>

                        <div className="flex justify-end gap-5">
                          <Button className="bg-indigo-100 w-7 h-7 rounded-4xl hover:bg-amber-200  text-black mt-4">
                            <Star />
                          </Button>
                          <Button className="bg-indigo-100 w-7 h-7 rounded-4xl hover:bg-indigo-300  text-black mt-4">
                            <MessageSquare />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <ul className="gap-4 flex flex-col">
              {conteudosFiltrados.map((item) => {
                const rankingFinal =
                  item.NotaGugu && item.NotaMika
                    ? (item.NotaGugu + item.NotaMika) / 2
                    : null;

                const rankingGeral = getRankingGeral(item);
                const rankingCategoria = getRankingCategoria(item);

                return (
                  <li
                    className=" border-b m-5 bg-gray-900 rounded-2xl p-3  "
                    key={item.title}
                  >
                    <div className=" flex items-center justify-end mb-2 ">
                      <Select
                        value={temporada}
                        onValueChange={(value) =>
                          setfilter(value as TipoConteudo)
                        }
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Temporadas" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="temporadas">
                            <span className="px-6 font-bold">Temporadas</span>
                          </SelectItem>
                          <SelectItem value="temporada">1 Temporada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="justify-center items-center gap-5 px-2 grid grid-cols-[1fr_4fr]">
                      <div className="w-full h-64 relative rounded-lg overflow-hidden">
                        <Image
                          src={item.Image ?? "/default-image.jpg"}
                          alt={item.title}
                          fill
                        />{" "}
                      </div>
                      <div>
                        <div className="flex flex-row items-center gap-3 flex-wrap mb-2 ">
                          <h1 className="font-bold text-3xl">{item.title}</h1>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-bold">
                            #{rankingGeral} Geral
                          </span>
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-sm font-bold">
                            #{rankingCategoria} em{" "}
                            {getCategoriaLabel(item.type)}
                          </span>
                        </div>
                        {item.checked && (
                          <Badge>
                            <BadgeCheckIcon className="w-4 h-4" />
                            {item.Badge}
                          </Badge>
                        )}
                        <h2 className="text-[#C47BE4]">
                          <span className="text-gray-300  text-xl">
                            {" "}
                            synopsis:
                          </span>{" "}
                          {item.synopsis}
                        </h2>
                        <h3 className=" text-gray-300 text-xl">
                          Temporada: {item.Temporada}
                        </h3>

                        <p className=" text-gray-300 text-xl flex flex-row gap-3 flex-wrap">
                          Nota: {rankingFinal?.toFixed(1)}
                          <Star />=
                          <span className="text-purple-700 mx-5  flex flex-row gap-3">
                            Mika: {item.NotaMika} <Star />
                            <span className="font-bold mx-5">+</span>
                          </span>
                          <span className=" text-cyan-600 flex flex-row gap-3">
                            Gugu: {item.NotaGugu}
                            <Star />
                          </span>
                        </p>
                        
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul> */}
          </li>
        </div>
      </div>
    </div>
  );
}
