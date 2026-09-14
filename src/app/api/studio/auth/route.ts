import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";
import { isAuthorized } from "@/lib/studio-auth";

/** POST /api/studio/auth — login with email/password via Supabase Auth */
export async function POST(req: NextRequest) {
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const { email, password } = body as { email?: string; password?: string };
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 422 });
  }

  // Sign in with Supabase Auth
  const { data, error } = await supabaseServer.auth.signInWithPassword({ email, password });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  // Set the access token as an httpOnly cookie
  const res = NextResponse.json({
    ok: true,
    user: { id: data.user?.id, email: data.user?.email },
    session: data.session?.access_token,
  });
  res.cookies.set("sb-access-token", data.session?.access_token ?? "", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}

/** DELETE /api/studio/auth — logout */
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("sb-access-token");
  return res;
}

/**
 * GET /api/studio/auth — does this request get into the dashboard?
 *
 * Delegates to the same `isAuthorized` every /api/studio/* route uses, rather
 * than checking the Supabase cookie alone as it did before. That difference
 * was not extra safety: the static STUDIO_TOKEN already grants full read and
 * write on every data route, so a gate that refused it only meant the UI could
 * not be opened by a credential that could already change everything behind
 * it. In practice it made local development and end-to-end testing impossible
 * without the owner's real password.
 *
 * This grants nothing new in production, where STUDIO_TOKEN is unset and
 * `isAuthorized` falls through to requiring a genuine Supabase session.
 */
export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  // Report the real identity when there is one; a token session has no user.
  const token = req.cookies.get("sb-access-token")?.value;
  if (token) {
    const { data } = await supabaseServer.auth.getUser(token);
    if (data?.user) {
      return NextResponse.json({
        authenticated: true,
        user: { id: data.user.id, email: data.user.email },
      });
    }
  }
  return NextResponse.json({ authenticated: true, user: null });
}
