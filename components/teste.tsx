import FavoriteButton from "@/components/FavoriteButton";
import { auth0 } from "@/lib/auth0";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  const session = await auth0.getSession();
  const userId = session?.user.sub;

  const { data: content, error } = await supabase.from("content").select();

  const { data: dataFavoritos } = await supabase
    .from("favoritos")
    .select()
    .eq("user_id", userId);
  return (
    <div className="min-h-screen pt-40 pb-16">
      {content?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.year}</h2>
          <h2>{item.type}</h2>
        </div>
      ))}
      {dataFavoritos?.map((item) => (
        <div key={item.id}>
          {content?.map((contentItem) => {
            if (contentItem.id === item.content_id) {
              return (
                <div key={contentItem.id}>
                  <h2>{contentItem.name}</h2>
                  <h2>{contentItem.year}</h2>
                  <h2>{contentItem.type}</h2>
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
