import AnimeDetails from "@/components/Raking/AnimeDetails.tsx/page";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <AnimeDetails slug={id} />;
}
