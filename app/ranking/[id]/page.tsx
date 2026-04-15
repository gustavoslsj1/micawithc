import AnimeDetails from "@/components/AnimeDetails";
import { GetUserId } from "@/lib/services/auth0";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const user = await GetUserId();
  const { id } = await params;
  console.log(id);

  return <AnimeDetails id={id} user={user} />;
}
