"use server";

import { auth0 } from "@/lib/auth0";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function favoriteAction(contentId: number) {
  const session = await auth0.getSession();
  const supabase = await createClient();

  const userId = session?.user.sub;

  // 🔍 verifica se já existe
  const { data: existing } = await supabase
    .from("favoritos")
    .select("*")
    .eq("user_id", userId)
    .eq("content_id", contentId)
    .maybeSingle();

  if (existing) {
    // 💔 REMOVE
    const { error } = await supabase
      .from("favoritos")
      .delete()
      .eq("user_id", userId)
      .eq("content_id", contentId);

    console.log("REMOVED:", contentId, error);
  } else {
    // ❤️ ADICIONA
    const { error } = await supabase.from("favoritos").insert({
      user_id: userId,
      content_id: contentId,
    });

    console.log("ADDED:", contentId, error);
  }

  // 🔄 atualiza UI
  revalidatePath("/"); // ou a rota do ranking
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
