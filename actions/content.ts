"use server";

import { createClient } from "@/lib/supabase/server";

export async function insertContent(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  //   const idade = formData.get("idade") as string;
  //   const genero = formData.get("genero") as string;

  //   const generos = genero.split(",").map((g) => g.trim());

  const { data, error } = await supabase
    .from("content")
    .insert({ name, type })
    .select();

  if (error) {
    console.error(error); // 👈 MOSTRA O ERRO REAL
    throw new Error(error.message);
  }
}
