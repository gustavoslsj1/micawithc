import SalvosContent from "@/components/Salvos";
import { GetUserId } from "@/lib/services/auth0";

export default async function Salvos() {
  const user = await GetUserId();
  return <SalvosContent user={user} />;
}
