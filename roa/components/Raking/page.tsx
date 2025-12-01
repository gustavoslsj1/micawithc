"use client";
import { useEffect, useState } from "react";
import { Trophy, Star, TrendingUp } from "lucide-react";

export default function Raking() {
  //   const [reviews, setReviews] = useState<Review[]>([]);
  //   const [loading, setLoading] = useState(true);
  //   const [filter, setFilter] = useState<'all' | 'anime' | 'movie'>('all');

  //   useEffect(() => {
  //     loadReviews();
  //   }, [filter]);

  const lista = [
    {
      title: "uzumaki",
      type: "anime",
      Temporada: "1",
      NotaG: 5.5,
      NotaC: 5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Akame ga kill",
      type: "anime",
      Temporada: "1",
      NotaG: 7.5,
      NotaC: 7.5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "You",
      type: "Serie",
      Temporada: "1",
      NotaG: 9.5,
      NotaC: 9,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Re Life",
      type: "anime",
      Temporada: "1",
      NotaG: 8,
      NotaC: 8.5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Chainsaw Man",
      type: "anime",
      Temporada: "1",
      NotaG: 9,
      NotaC: 8,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Grand Blue",
      type: "anime",
      Temporada: "1",
      NotaG: 7.5,
      NotaC: 8.5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Cyberpunk Edgerunners",
      type: "anime",
      Temporada: "1",
      NotaG: 10,
      NotaC: 9,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Exterminio 2",
      type: "filme",
      Temporada: "1",
      NotaG: 7.5,
      NotaC: 7,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Metal Lords",
      type: "filme",
      Temporada: "1",
      NotaG: 7,
      NotaC: 9.5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "O serviço de entregas da kiki",
      type: "filme",
      Temporada: "1",
      NotaG: 6,
      NotaC: 10,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    // {
    //   title: "Black Mirror",
    //   type: "serie",
    //   Temporada: "1",
    //   NotaG: 8,
    //   NotaC: 8,
    //   synopsis:
    //     "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    // },
    {
      title: "Jogo da Morte",
      type: "serie",
      Temporada: "1",
      NotaG: 6.5,
      NotaC: 8,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Cães de caça",
      type: "serie",
      Temporada: "1",
      NotaG: 6,
      NotaC: 8,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "A noiva-cadáver ",
      type: "filme",
      Temporada: "1",
      NotaG: 7,
      NotaC: 10,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Premonição 1",
      type: "filme",
      Temporada: "1",
      NotaG: 8,
      NotaC: 7,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Premonição 3",
      type: "filme",
      Temporada: "1",
      NotaG: 8.5,
      NotaC: 8.5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Premonição 6",
      type: "filme",
      Temporada: "1",
      NotaG: 8,
      NotaC: 8,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Paranorman",
      type: "filme",
      Temporada: "1",
      NotaG: 6,
      NotaC: 9,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Inatividade Paranormal",
      type: "filme",
      Temporada: "1",
      NotaG: 9.5,
      NotaC: 9,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Inatividade Paranormal 2",
      type: "filme",
      Temporada: "1",
      NotaG: 9,
      NotaC: 9,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Sword art online",
      type: "anime",
      Temporada: "1",
      NotaG: 9,
      NotaC: 8.5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "To be hero",
      type: "anime",
      Temporada: "1",
      NotaG: 9.5,
      NotaC: 8.75,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Erased",
      type: "anime",
      Temporada: "1",
      NotaG: 10,
      NotaC: 8.75,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Uma fazenda maluca",
      type: "serie",
      Temporada: "1",
      NotaG: 1,
      NotaC: 7,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "[Rec] 1",
      type: "filme",
      Temporada: "1",
      NotaG: 8.9,
      NotaC: 7,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Dandadan",
      type: "serie",
      Temporada: "1",
      NotaG: 7.9,
      NotaC: 9,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "O cemiterio das almas perdidas",
      type: "filme",
      Temporada: "1",
      NotaG: 6.9,
      NotaC: 5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
    {
      title: "Invocação do mal 4",
      type: "filme",
      Temporada: "1",
      NotaG: 6,
      NotaC: 7.5,
      synopsis:
        "Em uma cidade assombrada por uma maldição de espirais, uma jovem luta para sobreviver",
    },
  ];

  //   async function loadReviews() {
  //     setLoading(true);
  //     try {
  //       let query = supabase
  //         .from('reviews')
  //         .select('*')
  //         .order('rating', { ascending: false });

  //       if (filter !== 'all') {
  //         query = query.eq('type', filter);
  //       }

  //       const { data, error } = await query;

  //       if (error) throw error;
  //       setReviews(data || []);
  //     } catch (error) {
  //       console.error('Error loading reviews:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  const getRankColor = (index: number) => {
    if (index === 0) return "from-yellow-400 to-yellow-600";
    if (index === 1) return "from-gray-300 to-gray-500";
    if (index === 2) return "from-orange-400 to-orange-600";
    return "from-cyan-400 to-cyan-600";
  };

  const getRankGlow = (index: number) => {
    if (index === 0) return "shadow-[0_0_20px_rgba(250,204,21,0.5)]";
    if (index === 1) return "shadow-[0_0_20px_rgba(209,213,219,0.5)]";
    if (index === 2) return "shadow-[0_0_20px_rgba(251,146,60,0.5)]";
    return "shadow-[0_0_15px_rgba(6,182,212,0.3)]";
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Top Animes e Filmes
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Notas Atualizadas • Destaques da Comunidade
          </p>
        </div>
        <div className="flex flex-col border-2 border-black rounded-2xl p-6">
          <li>
            lista de animes e colocações
            <ul className=" gap-4 flex flex-col ">
              {lista
                ?.sort((a, b) => {
                  // Calcula o ranking de cada item
                  const rankingA =
                    a.NotaG && a.NotaC ? (a.NotaG + a.NotaC) / 2 : a.NotaG;
                  const rankingB =
                    b.NotaG && b.NotaC ? (b.NotaG + b.NotaC) / 2 : a.NotaC;

                  // Ordena do maior para o menor
                  return rankingB - rankingA;
                })
                .map((item, index) => {
                  const rankingFinal =
                    item.NotaG && item.NotaC
                      ? (item.NotaG + item.NotaC) / 2
                      : null;

                  return (
                    <li className="border-b-1 m-5" key={index}>
                      <h1 className="font-bold text-2xl">{item.title}</h1>
                      <h2 className="text-[#C47BE4]">{item.synopsis}</h2>
                      <h3 className="font-bold">Temporada: {item.Temporada}</h3>
                      <p className="font-bold text-gray-500">
                        Ranking:
                        <span className="text-yellow-500 font-bold mx-1 ">
                          {rankingFinal?.toFixed(1)}
                          <span className="text-purple-900 mx-5 font-bold">
                            Nota C: {item.NotaC}{" "}
                            <span className="font-bold mx-5">+</span>
                          </span>
                          <span className=" font-bold text-cyan-600">
                            Nota G: {item.NotaG}
                          </span>
                        </span>
                      </p>
                    </li>
                  );
                })}
            </ul>
          </li>
        </div>
        {/* <div className="flex justify-center space-x-4 mb-8">
          {[
            { value: 'all', label: 'Todos' },
            { value: 'anime', label: 'Animes' },
            { value: 'movie', label: 'Filmes' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value as typeof filter)}
              className={`
                px-6 py-2 rounded-lg font-medium transition-all
                ${filter === option.value
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div> */}

        {/* {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl h-24 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`
                  group relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all cursor-pointer
                  ${index < 3 ? getRankGlow(index) : ''}
                `}
              >
                <div className="flex items-center space-x-6">
                  <div className={`
                    flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-white
                    bg-gradient-to-br ${getRankColor(index)}
                    ${index < 3 ? 'shadow-lg' : ''}
                  `}>
                    {index < 3 ? <Trophy size={28} /> : index + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {review.title}
                      </h3>
                      <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs font-medium rounded">
                        {review.type === 'anime' ? 'ANIME' : 'MOVIE'}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mb-2 line-clamp-1">
                      {review.synopsis}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {review.genres.slice(0, 3).map((genre, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded"
                        >
                          {genre}
                        </span>
                      ))}
                      <span className="text-gray-500 text-xs">
                        {review.release_year}
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < Math.floor(review.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-600'
                          }
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-end space-x-2">
                      <TrendingUp className="text-green-400" size={16} />
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {review.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
}
