import { auth0 } from "@/lib/auth0";
import { createClient } from "@/lib/supabase/server";
import { Bookmark, Star } from "lucide-react";

export default async function SalvosContent() {
  const supabase = await createClient();

  const session = await auth0.getSession();
  const userId = session?.user.sub;
  const { data: content, error } = await supabase.from("content").select();
  const { data: dataFavoritos } = await supabase
    .from("favoritos")
    .select()
    .eq("user_id", userId);

  const favoritosIds = new Set(dataFavoritos?.map((fav) => fav.content_id));
  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-cyan-400">Cyber</span>
            <span className="text-white">Review</span>
          </h1>
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              Home
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Ranking
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Search
            </button>
            <button className="text-cyan-400 font-semibold flex items-center gap-2">
              <Star className="w-5 h-5 fill-cyan-400" />
              Salvos
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <h2 className="text-3xl font-bold text-white">Meus Salvos</h2>
          </div>
          <p className="text-gray-400">
            Suas séries e filmes favoritos em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {dataFavoritos?.map((item) => (
            <div key={item.id}>
              {content?.map((contentItem) => {
                if (contentItem.id === item.content_id) {
                  return (
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group w-full aspect-square flex flex-col">
                      <div className="relative h-2/5 overflow-hidden">
                        {/* <img
                          src={imageUrl}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        /> */}
                        <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                          {/* #{ranking} {category} */}
                        </div>
                        <div className="absolute top-2 right-2">
                          <button className="bg-black/50 hover:bg-cyan-500/80 p-1.5 rounded-full transition-colors">
                            <Bookmark className="w-4 h-4 text-white fill-white" />
                          </button>
                        </div>
                      </div>

                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                            {contentItem.name}
                          </h3>
                          {/* 
                          {ageRating && (
                            <div className="flex items-center gap-1 mb-2">
                              <span className="text-gray-400 text-xs">
                                {ageRating}
                              </span>
                            </div>
                          )} */}

                          <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                            {/* {startDate && (
                              <div className="flex items-center gap-1 text-gray-400">
                                <Calendar className="w-3 h-3" />
                                <span className="truncate">{startDate}</span>
                              </div>
                            )}
                            {episodes && (
                              <div className="flex items-center gap-1 text-gray-400">
                                <Tv className="w-3 h-3" />
                                <span>{episodes} eps</span>
                              </div>
                            )}
                            {seasons && (
                              <div className="flex items-center gap-1 text-gray-400">
                                <Clock className="w-3 h-3" />
                                <span>{seasons} temp</span>
                              </div>
                            )} */}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-xs">Nota:</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-yellow-500 font-semibold text-sm">
                                {/* {nota.toFixed(1)} */}
                              </span>
                            </div>
                          </div>

                          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-1.5 rounded text-xs font-semibold transition-all">
                            Ver Detalhes →
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
