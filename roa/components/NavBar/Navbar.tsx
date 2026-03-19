import NavbarClient from "./navbarclient";
import { auth0 } from "@/lib/auth0";

export default async function Navbar() {
  const session = await auth0.getSession();

  return <NavbarClient user={session?.user} />;
}