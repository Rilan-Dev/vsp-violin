import { timingSafeEqual } from "node:crypto";
import { NextRequest } from "next/server";
import { supabaseServer } from "@/lib/supabase";

/**
 * Studio API authorisation — the single source of truth.
 *
 * Every `/api/studio/*` route must call this. Previously each route carried
 * its own inlined copy that fell back to a hardcoded `"vsp-studio-dev"` token
 * when `STUDIO_TOKEN` was unset. That default shipped in a public repo and
 * granted full admin access (read AND write) to any production deployment
 * that hadn't set the env var. There is now no default: a missing or empty
 * `STUDIO_TOKEN` disables static-token auth entirely rather than enabling a
 * known one — auth fails closed.
 *
 * Accepted credentials, in order:
 *   1. `sb-access-token` httpOnly cookie (set by POST /api/studio/auth)
 *   2. `Authorization: Bearer <supabase-jwt>`
 *   3. `Authorization: Bearer <STUDIO_TOKEN>`   — only if STUDIO_TOKEN is set
 *   4. `studio_token=<STUDIO_TOKEN>` cookie      — only if STUDIO_TOKEN is set
 *
 * (3) and (4) exist for local development and scripted seeding. Leave
 * STUDIO_TOKEN unset in production so only a real Supabase session works.
 */

/** Constant-time string compare — avoids leaking the token via response timing. */
export function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  // timingSafeEqual throws on length mismatch, which would itself be a leak.
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** The configured static token, or null when none is set (the production case). */
function staticToken(): string | null {
  const t = process.env.STUDIO_TOKEN;
  return t && t.length > 0 ? t : null;
}

async function isValidSupabaseToken(token: string): Promise<boolean> {
  try {
    const { data, error } = await supabaseServer.auth.getUser(token);
    return !error && !!data.user;
  } catch {
    return false;
  }
}

export async function isAuthorized(req: NextRequest): Promise<boolean> {
  // 1. Supabase session cookie — the normal path for a signed-in admin.
  const cookieToken = req.cookies.get("sb-access-token")?.value;
  if (cookieToken && (await isValidSupabaseToken(cookieToken))) return true;

  const configured = staticToken();
  const auth = req.headers.get("authorization");

  if (auth?.startsWith("Bearer ")) {
    const bearer = auth.slice(7);
    // 2. A Supabase JWT passed as a bearer token.
    if (bearer.startsWith("eyJ") && (await isValidSupabaseToken(bearer))) return true;
    // 3. The static dev token, only when one is actually configured.
    if (configured && safeEqual(bearer, configured)) return true;
  }

  // 4. The static dev token as a cookie.
  if (configured) {
    const studioCookie = req.cookies.get("studio_token")?.value;
    if (studioCookie && safeEqual(studioCookie, configured)) return true;
  }

  return false;
}
