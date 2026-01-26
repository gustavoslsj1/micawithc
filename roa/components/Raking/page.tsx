"use client";
import { useState } from "react";
import { Trophy, Star, BadgeCheckIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "@/components/ui/badge";

type TipoConteudo = "todos" | "anime" | "filme" | "serie";

export default function Ranking() {
  const [filter, setfilter] = useState<TipoConteudo>("todos");

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
      type: "anime",
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

  const listaOrdenadaGeral = [...lista].sort((a, b) => {
    const notaA = ((a.NotaGugu || 0) + (a.NotaMika || 0)) / 2;
    const notaB = ((b.NotaGugu || 0) + (b.NotaMika || 0)) / 2;
    return notaB - notaA;
  });

  const getRankingCategoria = (item: (typeof lista)[0]) => {
    const mesmaCategoria = listaOrdenadaGeral.filter(
      (i) => i.type === item.type
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
          <li className="list-none">
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
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="anime">Anime</SelectItem>
                  <SelectItem value="filme">Filme</SelectItem>
                  <SelectItem value="serie">Série</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ul className="gap-4 flex flex-col">
              {conteudosFiltrados.map((item) => {
                const rankingFinal =
                  item.NotaGugu && item.NotaMika
                    ? (item.NotaGugu + item.NotaMika) / 2
                    : null;

                const rankingGeral = getRankingGeral(item);
                const rankingCategoria = getRankingCategoria(item);

                return (
                  <li
                    className="border-b m-5 bg-gray-900 rounded-2xl p-3"
                    key={item.title}
                  >
                    <div className="flex flex-row items-center gap-3 flex-wrap mb-2 ">
                      <h1 className="font-bold text-3xl">{item.title}</h1>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-bold">
                        #{rankingGeral} Geral
                      </span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-sm font-bold">
                        #{rankingCategoria} em {getCategoriaLabel(item.type)}
                      </span>
                    </div>
                    {item.checked && (
                      <Badge>
                        <BadgeCheckIcon className="w-4 h-4" />
                        {item.Badge}
                      </Badge>
                    )}
                    <h2 className="text-[#C47BE4]">
                      <span className="text-gray-300  text-xl"> synopsis:</span>{" "}
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
                  </li>
                );
              })}
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}
