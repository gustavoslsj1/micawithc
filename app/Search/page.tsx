import SearchPag from "@/components/Search";
import { GetContents } from "@/lib/services/content";

export default async function Search() {
  const { data: content } = await GetContents();
  return <SearchPag content={content ?? []} />;
}
