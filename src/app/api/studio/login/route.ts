import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";

const LoginSchema = z.object({ token: z.string().min(1) });

/** POST /api/studio/login — validate the studio token, set a cookie. */
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Token required" }, { status: 422 });
  }

  if (parsed.data.token !== STUDIO_TOKEN) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("studio_token", STUDIO_TOKEN, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
