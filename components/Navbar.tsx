import NavbarClient from "./navbarclient";
import { auth0 } from "@/lib/auth0";

export default async function Navbar() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <div className="flex flex-row gap-10 font-bold items-end justify-end p-4">
        {/* Redirects to Auth0 to sign up */}
        <a
          className="ring-1 ring-cyan-500 rounded-xl px-5 bg-cyan-500/10 py-2 hover:ring-cyan-400"
          href="/auth/login?screen_hint=signup"
        >
          Signup
        </a>

        {/* Redirects to Auth0 to log in */}
        <a
          className="ring-1 ring-cyan-500 rounded-xl px-5 bg-cyan-500/10 py-2 hover:ring-cyan-400"
          href="/api/auth/login"
        >
          Login
        </a>
      </div>
    );
  }
  return <NavbarClient user={session?.user} />;
}
