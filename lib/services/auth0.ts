import { auth0 } from "../auth0";

export async function GetUserId() {
  const session = await auth0.getSession();

  if (!session) return null;

  return {
    user: session.user,
    userId: session.user.sub,
  };
}
