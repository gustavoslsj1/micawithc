import Image from "next/image";
import { notFound } from "next/navigation";
import { rankingLista } from "@/lib/ranking-list";

type Props = {
  slug: string;
};

export default function AnimeDetails({ slug }: Props) {
  const anime = rankingLista.find((item) => item.id === Number(slug));

  if (!anime) return notFound();

  return (
    <div className="container mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">{anime.title}</h1>

      <Image
        src={anime.Image}
        alt={anime.title}
        width={320}
        height={400}
        className="w-80 rounded-lg mb-6"
      />

      <p>Idade recomendada: {anime.Idade}</p>
      <p>Episódios: {anime.episodes}</p>
      <p>Temporadas: {anime.Temporada}</p>
      <p>Nota Gugu: {anime.NotaGugu}</p>
      <p>Nota Mika: {anime.NotaMika}</p>
    </div>
  );
}
