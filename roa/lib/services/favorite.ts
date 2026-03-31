"use server";
import { createClient } from "@/lib/supabase/server";
import { auth0 } from "../auth0";

export async function getFavorites() {
  const session = await auth0.getSession();
  const supabase = await createClient();

  return await supabase
    .from("favoritos")
    .select("content_id")
    .eq("user_id", session!.user.sub);
}

export async function addFavorite(contentId: string) {
  const session = await auth0.getSession();
  const supabase = await createClient();

  return await supabase.from("favoritos").insert({
    user_id: session!.user.sub,
    content_id: contentId,
  });
}
