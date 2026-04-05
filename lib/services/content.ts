import { createClient } from "@/lib/supabase/server";
type Content = {
  id: number;
  name: string;
  type: string;
  idade: string;
  genero: string[];
};
export async function GetContents() {
  const supabase = await createClient();
  const { data: content } = await supabase.from("content").select();
  return { data: content };
}

export async function InsertContent() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("content").insert({
    name: "Sample Content",
    type: "This is a sample content item.",
  });
}
