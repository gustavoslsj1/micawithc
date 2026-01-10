"use client";
import { useEffect, useState } from "react";
import { Trophy, Star, TrendingUp, BadgeCheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "@/components/ui/badge";
export default function Ranking() {
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
      NotaGugu: 5.5,
      NotaMika: 5,
      synopsis:
        "Ekirie tenta escapar de sua cidade, Kurouzu-cho, onde os moradores ficam obcecados por espirais devido a uma maldição inexplicável.",
    },
    {
      title: "Akame ga kill",
      type: "anime",
      Temporada: "1",
      NotaGugu: 7.5,
      NotaMika: 7.5,
      synopsis:
        "O jovem Tatsumi viaja para a capital do Império para ganhar dinheiro para seu povo faminto e acaba se envolvendo com a Night Raid, um grupo de assassinos que luta contra a corrupção do governo.",
    },
    {
      title: "You",
      type: "Serie",
      Temporada: "1",
      checked: true,
      Ranking: 9,
      Badge: "verificado",
      NotaGugu: 9.5,
      NotaMika: 9,
      synopsis:
        "Série de suspense psicológico que acompanha Joe Goldberg, um homem aparentemente gentil que se torna perigosamente obcecado pelas pessoas que ama.",
    },
    {
      title: "Re Life",
      type: "anime",
      Temporada: "1",
      NotaGugu: 8,
      NotaMika: 8.5,
      synopsis:
        "Arata Kaizaki recebe a chance de refazer a vida ao voltar ao ensino médio por um ano, enfrentando amadurecimento, amizades e escolhas difíceis.",
    },
    {
      title: "Chainsaw Man",
      type: "anime",
      Temporada: "1",
      NotaGugu: 9,
      NotaMika: 8,
      synopsis:
        "Denji se funde ao demônio Pochita e passa a caçar demônios como uma arma humana em um mundo violento e cruel.",
    },
    {
      title: "Grand Blue",
      type: "anime",
      Temporada: "1",
      NotaGugu: 7.5,
      NotaMika: 8.5,
      synopsis:
        "Iori Kitahara entra para um clube de mergulho e acaba vivendo situações caóticas cheias de festas, exageros e amizade.",
    },
    {
      title: "Cyberpunk Edgerunners",
      type: "anime",
      Temporada: "1",
      NotaGugu: 10,
      NotaMika: 9,
      synopsis:
        "David Martinez tenta sobreviver em Night City e se envolve com mercenários em uma história trágica sobre ambição, perda e humanidade.",
    },
    {
      title: "Exterminio 2",
      type: "filme",
      Temporada: "1",
      NotaGugu: 7.5,
      NotaMika: 7,
      synopsis:
        "Após o suposto controle do vírus da raiva, uma falha humana provoca um novo surto que mergulha Londres novamente no caos.",
    },
    {
      title: "Metal Lords",
      type: "filme",
      Temporada: "1",
      NotaGugu: 7,
      NotaMika: 9.5,
      synopsis:
        "Dois adolescentes formam uma banda de heavy metal para competir em um festival escolar, lidando com amizade e identidade.",
    },
    {
      title: "O serviço de entregas da kiki",
      type: "filme",
      Temporada: "1",
      NotaGugu: 6,
      NotaMika: 10,
      synopsis:
        "Kiki, uma jovem bruxa, cria um serviço de entregas enquanto aprende a viver sozinha e a confiar em si mesma.",
    },
    // {
    //   title: "Black Mirror",
    //   type: "serie",
    //   Temporada: "1",
    //   NotaGugu: 8,
    //   NotaMika: 8,
    //   synopsis: "Série antológica que explora os impactos sombrios da tecnologia na sociedade moderna."
    // },
    {
      title: "Jogo da Morte",
      type: "serie",
      Temporada: "1",
      NotaGugu: 6.5,
      NotaMika: 8,
      synopsis:
        "Após tirar a própria vida, um homem é condenado a viver várias mortes em corpos diferentes, refletindo sobre culpa e redenção.",
    },
    {
      title: "Cães de caça",
      type: "serie",
      Temporada: "1",
      NotaGugu: 6,
      NotaMika: 8,
      synopsis:
        "Dois jovens lutadores enfrentam agiotas violentos no submundo do crime, unidos por lealdade e justiça.",
    },
    {
      title: "A noiva-cadáver",
      type: "filme",
      Temporada: "1",
      NotaGugu: 7,
      NotaMika: 10,
      synopsis:
        "Victor se vê dividido entre o mundo dos vivos e dos mortos após se casar acidentalmente com uma noiva do além.",
    },
    {
      title: "Premonição 1",
      type: "filme",
      Temporada: "1",
      NotaGugu: 8,
      NotaMika: 7,
      synopsis:
        "Um grupo de jovens escapa da morte após uma premonição, mas passa a ser perseguido por um destino inevitável.",
    },
    {
      title: "Premonição 3",
      type: "filme",
      Temporada: "1",
      NotaGugu: 8.5,
      NotaMika: 8.5,
      synopsis:
        "Uma adolescente tenta enganar a morte após prever um acidente, mas eventos trágicos seguem um padrão mortal.",
    },
    {
      title: "Premonição 6",
      type: "filme",
      Temporada: "1",
      NotaGugu: 8,
      NotaMika: 8,
      synopsis:
        "Uma nova história mostra que interferir no destino pode ter consequências fatais que atravessam gerações.",
    },
    {
      title: "Paranorman",
      type: "filme",
      Temporada: "1",
      NotaGugu: 6,
      NotaMika: 9,
      synopsis:
        "Norman, um garoto que fala com os mortos, precisa salvar sua cidade enfrentando fantasmas e preconceitos.",
    },
    {
      title: "Inatividade Paranormal",
      type: "filme",
      Temporada: "1",
      NotaGugu: 9.5,
      NotaMika: 9,
      synopsis:
        "Uma paródia de terror que acompanha um casal vivendo eventos sobrenaturais absurdos em sua casa, misturando sustos com humor escrachado.",
    },
    {
      title: "Inatividade Paranormal 2",
      type: "filme",
      Temporada: "1",
      NotaGugu: 9,
      NotaMika: 9,
      synopsis:
        "Continuação da paródia que exagera ainda mais os clichês de filmes de terror, com novas situações bizarras e humor irreverente.",
    },
    {
      title: "Sword Art Online",
      type: "anime",
      Temporada: "1",
      NotaGugu: 9,
      NotaMika: 8.5,
      synopsis:
        "Jogadores ficam presos em um jogo de realidade virtual onde morrer no game significa morrer na vida real, e precisam lutar para escapar.",
    },
    {
      title: "To Be Hero",
      type: "anime",
      Temporada: "1",
      NotaGugu: 9.5,
      NotaMika: 8.75,
      synopsis:
        "Um designer fracassado se torna um herói improvável após um evento bizarro, enfrentando monstros enquanto lida com situações absurdas e emocionais.",
    },
    {
      title: "Erased",
      type: "anime",
      Temporada: "1",
      NotaGugu: 10,
      NotaMika: 8.75,
      synopsis:
        "Um homem volta no tempo para sua infância com o objetivo de impedir crimes trágicos e salvar pessoas importantes de seu passado.",
    },
    {
      title: "Uma Fazenda Maluca",
      type: "serie",
      Temporada: "1",
      NotaGugu: 1,
      NotaMika: 7,
      synopsis:
        "Série infantil animada que acompanha animais de uma fazenda vivendo situações caóticas e cômicas no dia a dia.",
    },
    {
      title: "[Rec] 1",
      type: "filme",
      Temporada: "1",
      NotaGugu: 8.9,
      NotaMika: 7,
      synopsis:
        "Uma repórter e seu cinegrafista ficam presos em um prédio durante uma quarentena causada por uma infecção aterrorizante.",
    },
    {
      title: "Dandadan",
      type: "serie",
      Temporada: "1",
      NotaGugu: 7.9,
      NotaMika: 9,
      synopsis:
        "Dois adolescentes se envolvem em batalhas caóticas contra espíritos e alienígenas, misturando ação, humor e romance sobrenatural.",
    },
    {
      title: "O Cemitério das Almas Perdidas",
      type: "filme",
      Temporada: "1",
      NotaGugu: 6.9,
      NotaMika: 5,
      synopsis:
        "Um grupo enfrenta forças malignas ligadas a um antigo cemitério, despertando espíritos e horrores enterrados no passado.",
    },
    {
      title: "Invocação do Mal 4",
      type: "filme",
      Temporada: "1",
      NotaGugu: 6,
      NotaMika: 7.5,
      synopsis:
        "Os investigadores paranormais Ed e Lorraine Warren enfrentam um novo caso demoníaco que desafia sua fé e limites.",
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
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <Trophy className="text-yellow-400" size={20} />
            <span className="text-yellow-400 text-sm font-medium">
              Rankings Neon
            </span>
          </div>

          {/* header card secundario  */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Top Animes e Filmes
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Notas Atualizadas • Destaques da Comunidade
          </p>
        </div>
        <div className="flex flex-col border-2 border-black rounded-2xl p-6  ring-2 ring-white shadow-2xl shadow-white">
          <li className="list-none">
            <h3 className="text-2xl font-bold flex flex-row gap-3 items-center justify-center ">
              lista de animes e colocações <Star color="yellow" />
            </h3>

            <div className="flex flex-row gap-4 justify-end my-4 bg-gra">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="serie">serie</SelectItem>
                  <SelectItem value="filme">filme</SelectItem>
                  <SelectItem value="anime">anime</SelectItem>
                  <SelectItem value="all">todos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ul className=" gap-4 flex flex-col ">
              {lista
                ?.sort((a, b) => {
                  // Calcula o ranking de cada item
                  const rankingA =
                    a.NotaGugu && a.NotaMika
                      ? (a.NotaGugu + a.NotaMika) / 2
                      : a.NotaGugu;
                  const rankingB =
                    b.NotaGugu && b.NotaMika
                      ? (b.NotaGugu + b.NotaMika) / 2
                      : b.NotaMika;

                  // Ordena do maior para o menor
                  return rankingB - rankingA;
                })
                .map((item, index) => {
                  const rankingFinal =
                    item.NotaGugu && item.NotaMika
                      ? (item.NotaGugu + item.NotaMika) / 2
                      : null;

                  return (
                    <li className="border-b-1 m-5" key={index}>
                      <div className="flex flex-row items-center gap-3">
                        <h1 className="font-bold text-2xl">{item.title}</h1>
                        <p className="mt-2 font-bold">raking: {item.Ranking}</p>
                      </div>
                      <h2 className="text-[#C47BE4]">{item.synopsis}</h2>
                      <h3 className="font-bold">Temporada: {item.Temporada}</h3>
                      {item.checked && (
                        <Badge>
                          <BadgeCheckIcon className="w-4 h-4" />
                          {item.Badge}
                        </Badge>
                      )}
                      <p className="font-bold text-gray-500 flex flex-row gap-3">
                        Nota: {rankingFinal?.toFixed(1)}
                        <Star />
                        <span className="text-purple-900 mx-5 font-bold flex flex-row gap-3">
                          Mika: {item.NotaMika} <Star />{" "}
                          <span className="font-bold mx-5">+</span>
                        </span>
                        <span className=" font-bold text-cyan-600 flex flex-row gap-3">
                          Gugu: {item.NotaGugu}
                          <Star />
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
