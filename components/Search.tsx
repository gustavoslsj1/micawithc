"use client";
import { Key, useEffect, useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  Building2,
  Filter,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import Link from "next/link";
import { GetContents } from "@/lib/services/content";

export default function SearchPag({ content }: { content: any[] }) {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [searchGenere, setSearchGenere] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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
                  className="flex-1 text-gray-400 hover:text-white hover:bg-white/5 text-sm"
                >
                  Clear all
                </Button>
                <Button className="flex-1 bg-linear-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 shadow-lg shadow-fuchsia-500/25 text-sm">
                  Apply
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
              {content.map((internship) => (
                <div
                  key={internship.id}
                  className="bg-[#12121a] rounded-xl p-4 sm:p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_130px] justify-center items-center grid-rows-1 gap-4">
                    {/* Icon */}
                    <div className="w-full h-48 md:h-45 relative rounded-lg overflow-hidden">
                      <Image
                        src={internship.image ?? "/default-image.jpg"}
                        alt={internship.name}
                        fill
                        className="object-cover"
                      />{" "}
                    </div>

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
                            <p className="text-white">{internship.lastDate}</p>
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
