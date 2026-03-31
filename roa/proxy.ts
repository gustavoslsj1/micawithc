import { auth0 } from "@/lib/auth0";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const authResponse = await auth0.middleware(request);
  const session = await auth0.getSession(request);
  const isLoggedIn = !!session;
  const pathname = request.nextUrl.pathname;
  const protectedRoutes = ["/ranking", "/review", "/Search", "/teste"]; // rotas que exigem autenticação
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return authResponse;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
