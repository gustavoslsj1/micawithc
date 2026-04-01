"use client";

import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  Building2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { rankingLista } from "@/lib/ranking-list";
import Image from "next/image";
import Link from "next/link";

const internships = rankingLista.map((item, index) => ({
  ids: index + 1,

  title: item.title,
  type: item.type,
  Image: item.Image ?? null,
  temporada: item.Temporada,
  startDate: item.startDate,
  duration: item.duration ?? null, // só filmes
  episodes: item.episodes ?? null, // anime e série
  genero: item.generos ?? [],
  lastDate: item.lastDate,
  Idade: item.Idade ?? "0",
  postedDays: item.postedDays,
}));

export default function SearchPag() {
  const [stipendRange, setStipendRange] = useState([0]);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [searchGenere, setSearchGenere] = useState("");
  const filteredList = useMemo(() => {
    return internships.filter((item) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchType = item.type.includes(searchType);
      const matchAge = item.Idade.includes(searchAge);
      const matchGenere =
        searchGenere === "" ||
        item.genero.some((g) =>
          g.toLowerCase().includes(searchGenere.toLowerCase()),
        );

      return matchSearch && matchType && matchAge && matchGenere;
    });
  }, [search, searchType, searchAge, searchGenere]);
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

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 shrink-0">
            <div className="bg-[#12121a] rounded-xl p-5 border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
              <h2 className="text-lg font-semibold mb-5 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                Filters
              </h2>

              {/* Profile */}
              <div className="mb-5">
                <label className="text-sm text-gray-400 mb-2 block">
                  Genero
                </label>
                <Input
                  placeholder="Search Profile"
                  className="bg-[#0a0a0f] border-fuchsia-500/30 text-white text-sm focus:border-fuchsia-400"
                  value={searchGenere}
                  onChange={(e) => setSearchGenere(e.target.value)}
                />
              </div>

              {/* Internship Type */}
              <div className="mb-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 mb-2 block">
                    Tipos
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors">
                    <Checkbox
                      className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                      value={searchType}
                      onCheckedChange={(checked) =>
                        setSearchType(checked ? "anime" : "")
                      }
                    />
                    Anime
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors">
                    <Checkbox
                      className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                      value={searchType}
                      onCheckedChange={(checked) =>
                        setSearchType(checked ? "filme" : "")
                      }
                    />
                    Filme
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors">
                    <Checkbox
                      className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                      value={searchType}
                      onCheckedChange={(checked) =>
                        setSearchType(checked ? "serie" : "")
                      }
                    />
                    Serie
                  </label>
                </div>
              </div>

              {/* Timing */}
              <div className="mb-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 mb-2 block">
                    Idades
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-fuchsia-400 transition-colors">
                    <Checkbox
                      className="border-fuchsia-500/50 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500"
                      value={searchAge}
                      onCheckedChange={(checked) =>
                        setSearchAge(checked ? "18" : "")
                      }
                    />
                    18+
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-fuchsia-400 transition-colors">
                    <Checkbox
                      className="border-fuchsia-500/50 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500"
                      value={searchAge}
                      onCheckedChange={(checked) =>
                        setSearchAge(checked ? "16" : "")
                      }
                    />
                    16+
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-fuchsia-400 transition-colors">
                    <Checkbox
                      className="border-fuchsia-500/50 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500"
                      value={searchAge}
                      onCheckedChange={(checked) =>
                        setSearchAge(checked ? "14" : "")
                      }
                    />
                    14+
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-6">
                <Button
                  variant="ghost"
                  className="flex-1 text-gray-400 hover:text-white hover:bg-white/5"
                >
                  Clear all
                </Button>
                <Button className="flex-1 bg-linear-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 shadow-lg shadow-fuchsia-500/25">
                  Apply
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
              <span>Showing 1 to 2 of 2 Internships</span>
              <span>Show: 10 • Internships</span>
            </div>

            {/* Internship Cards */}
            <div className="space-y-4">
              {filteredList.map((internship) => (
                <div
                  key={internship.ids}
                  className="bg-[#12121a] rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] group"
                >
                  <div className="grid grid-cols-[200px_1fr_130px] justify-center items-center grid-rows-1 gap-4">
                    {/* Icon */}
                    <div className="w-full h-45 relative rounded-lg overflow-hidden">
                      <Image
                        src={internship.Image ?? "/default-image.jpg"}
                        alt={internship.title}
                        fill
                      />{" "}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {internship.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                        <Building2 className="w-4 h-4 text-fuchsia-400" />
                        <span> {internship.type}</span>
                        <span className="text-cyan-500">•</span>
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-50">
                          classificação: {internship.Idade}+
                        </span>
                      </div>

                      {/* Details Grid */}
                      <div className="flex gap-6 mt-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <div>
                            <p className="text-gray-500 text-xs">Start Date</p>
                            <p className="text-white">{internship.startDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-fuchsia-400" />
                          <div>
                            <div className="flex items-center gap-2">
                              <div>
                                <p className="text-gray-500 text-xs">
                                  {internship.type === "filme"
                                    ? "Duração"
                                    : "Episódios"}
                                </p>
                                <p className="text-white">
                                  {internship.type === "filme"
                                    ? internship.duration
                                    : internship.episodes}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-fuchsia-400" />
                          <div>
                            <p className="text-gray-500 text-xs">Temporadas</p>
                            <p className="text-white">{internship.temporada}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-fuchsia-400" />
                          <div>
                            <p className="text-gray-500 text-xs">
                              Last Date To Apply
                            </p>
                            <p className="text-white">{internship.lastDate}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 mt-4">
                        {internship.genero
                          ? internship.genero.map((tag, index) => (
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
                    </div>
                    <div className="text-right flex flex-col   ">
                      <p className="text-xs text-gray-500 mb-4">
                        Posted {internship.postedDays} Days Ago
                      </p>
                      <Button className="bg-linear-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-fuchsia-500/25 transition-shadow">
                        <Link href={`/ranking/`}>View Details</Link>
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
