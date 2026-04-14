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

export async function editNota(contentId: string, nota: number) {
  const session = await auth0.getSession();
  const supabase = await createClient();

  const userId = session?.user.sub;

  const { data: existing } = await supabase
    .from("favoritos")
    .select("id")
    .eq("user_id", userId)
    .eq("content_id", contentId)
    .single();

  if (existing) {
    // só atualiza nota
    await supabase
      .from("favoritos")
      .update({ nota })
      .eq("user_id", userId)
      .eq("content_id", contentId);
    await supabase.from("content").update({ nota }).eq("id", contentId);
  } else {
    // primeira vez
    await supabase.from("favoritos").insert({
      user_id: userId,
      content_id: contentId,
      nota,
    });
    await supabase.from("content").update({ nota }).eq("id", contentId);
  }

  if (!existing) {
    await supabase.rpc("increment_avaliacoes", {
      p_content_id: contentId,
    });
  }
}
