import { createClientBrowser } from "../supabase/client";

export async function GetContents() {
  const supabase = await createClientBrowser();
  const { data: content } = await supabase.from("content").select();
  return { data: content };
}

// export async function InsertContent(content: Omit<Content, "id">) {
//   const supabase = await createClient();
//   const { data, error } = await supabase
//     .from("content")
//     .insert(content)
//     .select();
//   if (error) {
//     console.error(error);
//     throw new Error("Erro ao inserir");
//   }

//   return data;
// }
