"use server";

import { auth0 } from "@/lib/auth0";
import { createClient } from "@/lib/supabase/server";

export async function favoriteAction(contentId: number) {
  const session = await auth0.getSession();
  const supabase = await createClient();

  const userId = session?.user.sub;

  const { data: existing } = await supabase
    .from("favoritos")
    .select("*")
    .eq("user_id", userId)
    .eq("content_id", contentId)
    .maybeSingle();

  if (existing) {
    const newValue = !existing.favoritado;

    await supabase
      .from("favoritos")
      .update({ favoritado: newValue })
      .eq("user_id", userId)
      .eq("content_id", contentId);

    return { favorited: newValue }; // 🔥 IMPORTANTE
  } else {
    await supabase.from("favoritos").insert({
      user_id: userId,
      content_id: contentId,
      favoritado: true,
    });

    return { favorited: true }; // 🔥 IMPORTANTE
  }
}
export async function editNota(contentId: number, nota: number) {
  const session = await auth0.getSession();
  const supabase = await createClient();
  const userId = session?.user.sub;

  const { data: existing } = await supabase
    .from("favoritos")
    .select("nota")
    .eq("user_id", userId)
    .eq("content_id", contentId)
    .maybeSingle();

  if (existing) {
    // update
    await supabase
      .from("favoritos")
      .update({ nota })
      .eq("user_id", userId)
      .eq("content_id", contentId);
  } else {
    // insert
    await supabase.from("favoritos").insert({
      user_id: userId,
      content_id: contentId,
      nota,
    });
  }

  // 🔥 chama função centralizada
  await supabase.rpc("rate_content", {
    p_content_id: contentId,
    p_old_nota: existing?.nota ?? null,
    p_new_nota: nota,
  });
}
