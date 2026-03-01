"use client";

import { Sparkles, ArrowRight, ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-linear-to-b from-black via-purple-900/20 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjeWFuIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <Sparkles className="text-cyan-400" size={20} />
            <span className="text-cyan-400 text-sm font-medium">
              As melhores reviews ou não
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mikawithk
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Bem-vindo ao Mikawithk — onde animes e filmes ganham vida em luz
            neon
          </p>

          <p className="text-cyan-400 text-lg mb-8">
            Reviews • Rankings • Cultura Otaku & Cinema
            
          </p>

          <div className="flex justify-center">
            <Link href="/Search">
              <button className="px-8 cursor-pointer flex flex-row gap-5 py-3 bg-linear-to-r text-xl justify-center items-center from-purple-500 to-pink-500 text-white rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all hover:translate-x-1">
                Escolha o Que Assistir Hoje
                <ArrowBigRight size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Destaques da Semana
            </h2>
            <p className="text-gray-400">
              Explore críticas, rankings e análises em um universo visual
              ciberpunk
            </p>
          </div>
          <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all">
            <Link href="/Ranking"> Ver Rankings</Link>
            <ArrowRight size={18} />
          </button>
        </div>
        <div className=" mt-36  flex justify-baseline items-baseline">
          <h1 className="text-white font-bold text-2xl">
            Ultimos episodios assistidos
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-800/50 rounded-xl h-96 animate-pulse"
            ></div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {featuredReviews.map((review) => (
              <div
                key={review.id}
                className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                <div className="relative p-6 h-full flex flex-col justify-end">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs font-medium rounded-full">
                      {review.type === 'anime' ? 'ANIME' : 'MOVIE'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {review.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {review.synopsis}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(review.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-600'
                          }
                        />
                      ))}
                      <span className="ml-2 text-cyan-400 font-bold">
                       
                      </span>
                    </div> */}
          <span className="text-gray-500 text-sm"></span>
        </div>

        {/* <div className="mt-3 flex flex-wrap gap-1">
                    {review.genres.slice(0, 3).map((genre, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded"
                      >
                        {genre}
                      </span>
                    ))}
                  </div> */}

        {/* <button className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver Review
                  </button>
                </div>
              </div>
            ))} */}
      </div>
    </div>
  );
}
