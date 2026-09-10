import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";

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

/** GET /api/studio/auth — check if authenticated */
export async function GET(req: NextRequest) {
  const token = req.cookies.get("sb-access-token")?.value;
  if (!token) return NextResponse.json({ authenticated: false }, { status: 401 });

  const { data, error } = await supabaseServer.auth.getUser(token);
  if (error || !data.user) return NextResponse.json({ authenticated: false }, { status: 401 });

  return NextResponse.json({ authenticated: true, user: { id: data.user.id, email: data.user.email } });
}
