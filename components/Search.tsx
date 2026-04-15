"use client";
import { Key, useEffect, useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Building2,
  Filter,
  X,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { content } from "@/types/content";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FavoriteButton from "./FavoriteButton";
import { createClientBrowser } from "@/lib/supabase/client";
import { favoritos } from "@/types/favoritos";
type SearchPagProps = {
  itens: content[];
  user: {
    userId: string;
  } | null;
};
export default function SearchPag({ itens, user }: SearchPagProps) {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [searchGenere, setSearchGenere] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [favoritos, setFavoritos] = useState<favoritos[]>([]);
  const userId = user?.userId;
  useEffect(() => {
    const fetchData = async () => {
      const supabase = await createClientBrowser();

      const { data: favoritos } = await supabase
        .from("favoritos")
        .select()
        .eq("user_id", userId);
      setFavoritos(favoritos || []);
    };
    fetchData();
  }, [userId]);
  console.log("ASDA ", favoritos);
  const favoritosIds = new Set(favoritos?.map((fav) => fav.content_id));
  const filteredContent = itens.filter((item) => {
    // filtro de texto (nome, tipo, genero)
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      (Array.isArray(item.generos) &&
        item.generos.some((g) =>
          g.toLowerCase().includes(search.toLowerCase()),
        ));

    // filtro tipo
    const matchesType = searchType
      ? item.type.toLowerCase() === searchType
      : true;

    // filtro idade
    const matchesAge = searchAge ? item.idade?.toString() === searchAge : true;

    // filtro genero (input)
    const matchesGenere = searchGenere
      ? Array.isArray(item.generos) &&
        item.generos.some((g) =>
          g.toLowerCase().includes(searchGenere.toLowerCase()),
        )
      : true;

    return matchesSearch && matchesType && matchesAge && matchesGenere;
  });
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-lg blur-xl" />
          <div className="relative flex gap-2">
            <Input
              placeholder="procure por titulo, genero, tipo..."
              className="bg-[#12121a] border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 h-12"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button className="bg-linear-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 h-12 px-6 shadow-lg shadow-cyan-500/25">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="md:hidden mb-4">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-[#12121a] border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 flex items-center justify-center gap-2"
          >
            <Filter className="w-4 h-4" />
            {showFilters ? "Esconder Filtros" : "Mostrar Filtros"}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`w-full md:w-64 shrink-0 ${showFilters ? "block" : "hidden"} md:block`}
          >
            <div className="bg-[#12121a] rounded-xl p-5 border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.1)] relative">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Profile */}

              {/* Internship Type */}
              <div className="mb-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 mb-2 block">
                    Tipos
                  </label>
                  <RadioGroup
                    value={searchType}
                    onValueChange={(value) => setSearchType(value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="anime" id="anime" />
                      <label htmlFor="anime">Anime</label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="filme" id="filme" />
                      <label htmlFor="filme">Filme</label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="serie" id="serie" />
                      <label htmlFor="serie">Série</label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Timing */}
              <div className="mb-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 mb-2 block">
                    Idades
                  </label>
                  <RadioGroup
                    value={searchAge}
                    onValueChange={(value) => setSearchAge(value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="18" id="age18" />
                      <label htmlFor="age18">18+</label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="16" id="age16" />
                      <label htmlFor="age16">16+</label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="14" id="age14" />
                      <label htmlFor="age14">14+</label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-6">
                <Button
                  onClick={() => {
                    setSearchAge("");
                    setSearchType("");
                  }}
                  variant="ghost"
                  className="flex-1 bg-linear-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 shadow-lg shadow-fuchsia-500/25 text-sm"
                >
                  Limpar
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 text-sm text-gray-400 gap-2">
              <span>Showing 1 to 2 of 2 Internships</span>
              <span>Show: 10 • Internships</span>
            </div>

            {/* Internship Cards */}
            <div className="space-y-4">
              {filteredContent.map((internship) => (
                <div
                  key={internship.id}
                  className="bg-[#12121a] rounded-xl p-4 sm:p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_130px] justify-center items-center grid-rows-1 gap-4">
                    {/* Icon */}
                    <Link href={`/ranking/${internship.id}`}>
                      <div className="w-full h-48 md:h-45 relative rounded-lg overflow-hidden">
                        <Image
                          src={internship.image ?? "/default-image.jpg"}
                          alt={internship.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {internship.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1">
                        <Building2 className="w-4 h-4 text-fuchsia-400" />
                        <span> {internship.type}</span>
                        <span className="text-cyan-500 hidden sm:inline">
                          •
                        </span>
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-50">
                          classificação: {internship.idade}+
                        </span>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 mt-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                          <div>
                            <p className="text-gray-500 text-xs">Start Date</p>
                            <p className="text-white">{internship.year}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-fuchsia-400 shrink-0" />
                          <div>
                            <p className="text-gray-500 text-xs">
                              {internship.type === "filme"
                                ? "Duração"
                                : "Episódios"}
                            </p>
                            <p className="text-white">
                              {internship.type === "filme"
                                ? internship.duration
                                : internship.episodio}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-fuchsia-400 shrink-0" />
                          <div>
                            <p className="text-gray-500 text-xs">Temporadas</p>
                            <p className="text-white">{internship.temporada}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-fuchsia-400 shrink-0" />
                          <div>
                            <p className="text-gray-500 text-xs">
                              Last Date To Apply
                            </p>
                            <p className="text-white">{internship.year}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {Array.isArray(internship.generos) &&
                          internship.generos.map(
                            (tag: string, index: Key | null | undefined) => (
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
                            ),
                          )}
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start md:text-right gap-4 mt-4 md:mt-0">
                      <p className="text-xs text-gray-500 md:mb-4">
                        Posted {internship.year} Days Ago
                      </p>
                      <Button className="bg-linear-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-fuchsia-500/25 transition-shadow text-sm">
                        <Link href={`/ranking/${internship.id}`}>
                          View Details →
                        </Link>
                      </Button>
                    </div>
                    <div className="flex justify-end gap-3 sm:gap-5">
                      <FavoriteButton
                        contentId={internship.id}
                        isFavorited={favoritosIds.has(internship.id)}
                      />
                      <Button className="bg-indigo-100 w-7 h-7 rounded-4xl hover:bg-indigo-300 text-black md:mt-4">
                        <MessageSquare />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
