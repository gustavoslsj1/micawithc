import { createClient } from "@/lib/supabase/server";
export async function GetContents() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("content").select();
  return { data: instruments };
}

export async function InsertContent() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("content").insert({
    name: "Sample Content",
    type: "This is a sample content item.",
  });
}
