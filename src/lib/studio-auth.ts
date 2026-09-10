import { NextRequest } from "next/server";
import { supabaseServer } from "@/lib/supabase";

/**
 * Check if a request is authenticated via Supabase Auth.
 * Checks the sb-access-token cookie first, then falls back to Bearer token,
 * then falls back to the static STUDIO_TOKEN for dev backwards-compat.
 */
export async function isAuthorized(req: NextRequest): Promise<boolean> {
  // 1. Check Supabase auth cookie
  const cookieToken = req.cookies.get("sb-access-token")?.value;
  if (cookieToken) {
    const { data, error } = await supabaseServer.auth.getUser(cookieToken);
    if (!error && data.user) return true;
  }

  // 2. Check Bearer token (Supabase access token)
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) {
    const token = auth.slice(7);
    if (token.startsWith("eyJ")) {
      const { data, error } = await supabaseServer.auth.getUser(token);
      if (!error && data.user) return true;
    }
    // 3. Fall back to static token for dev backwards-compat
    const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";
    if (token === STUDIO_TOKEN) return true;
  }

  // 4. Check cookie-based static token (old method)
  const cookie = req.headers.get("cookie") ?? "";
  const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";
  if (cookie.includes(`studio_token=${STUDIO_TOKEN}`)) return true;

  return false;
}
