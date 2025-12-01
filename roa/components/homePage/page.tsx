"use client";
import { useEffect, useState } from "react";
import { Star, Sparkles, ArrowRight } from "lucide-react";
// import { supabase, Review } from '../lib/supabase';

interface HomeProps {
  onNavigate: (page: string) => void;
}
// { onNavigate }: HomeProps props homePage
export default function HomePage() {
  //   const [featuredReviews, setFeaturedReviews] = useState<Review[]>([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     loadFeaturedReviews();
  //   }, []);

  //   async function loadFeaturedReviews() {
  //     try {
  //       const { data, error } = await supabase
  //         .from('reviews')
  //         .select('*')
  //         .eq('featured', true)
  //         .order('rating', { ascending: false })
  //         .limit(6);

  //       if (error) throw error;
  //       setFeaturedReviews(data || []);
  //     } catch (error) {
  //       console.error('Error loading featured reviews:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  return (
    <div className="min-h-screen relative overflow-hidden pt-10 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        {/* Cyan glow - top left */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px]" />

        {/* Purple glow - top right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]" />

        {/* Pink glow - center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-pink-500/25 rounded-full blur-[100px]" />

        {/* Additional cyan accent - bottom left */}
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/10 rounded-full">
          <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium">
            O Futuro dos Reviews
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CyberReview
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Bem-vindo ao CyberReview — onde animes e filmes ganham vida em luz
          neon
        </p>
        <p className="text-cyan-400 text-lg mb-8">
          Avaliações Neon • Rankings Futuristas • Cultura Otaku & Cinema Sci-Fi
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            //   onClick={() => onNavigate("animes")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all"
          >
            Roleta Animes/Series e Filmes
          </button>
          <button
            //   onClick={() => onNavigate("movies")}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all"
          >
            Assistir depois
          </button>
        </div>
        <div className=" mt-36  flex justify-baseline items-baseline">
          <h1 className="text-white font-bold text-2xl">
            Ultimos episodios assistidos
          </h1>
        </div>

        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

            <div className="relative p-6 h-full flex flex-col justify-end">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs font-medium rounded-full">
                  anime ? movie ? serie ?
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                titulo
              </h3>

              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                sinopsis
              </p>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center space-x-1">
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

              <button className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Ver Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
