import SearchPag from "@/components/Search";
import { GetUserId } from "@/lib/services/auth0";
import { GetContents } from "@/lib/services/content";

export default async function Search() {
  const { data: content } = await GetContents();
  const user = await GetUserId();

  return <SearchPag itens={content ?? []} user={user} />;
}
