import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { supabaseServer } from "@/lib/supabase";
import { restGetSiteContent } from "@/lib/supabase-data";

async function isAuthorized(req: NextRequest): Promise<boolean> {
  // Check Supabase auth cookie
  const sbToken = req.cookies.get("sb-access-token")?.value;
  if (sbToken) {
    try {
      const { data, error } = await supabaseServer.auth.getUser(sbToken);
      if (!error && data.user) return true;
    } catch {}
  }
  // Fall back to static token (dev backwards-compat)
  const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ") && auth.slice(7) === STUDIO_TOKEN) return true;
  const cookie = req.headers.get("cookie") ?? "";
  return cookie.includes(`studio_token=${STUDIO_TOKEN}`);
}

/**
 * GET /api/studio/content — list all site content key/values.
 * Falls back to the Supabase REST API if Prisma can't connect.
 */
export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let items: Array<{ key: string; value: string }> = [];
  try {
    items = await db.siteContent.findMany({ orderBy: { key: "asc" } });
  } catch (e) {
    console.warn("[studio/content] Prisma failed, falling back to Supabase REST:", e);
    try {
      items = await restGetSiteContent();
    } catch (restErr) {
      console.error("[studio/content] Supabase REST also failed:", restErr);
      items = [];
    }
  }
  const content: Record<string, string> = {};
  for (const item of items) content[item.key] = item.value;
  return NextResponse.json({ content });
}

const UpdateSchema = z.object({
  key: z.string().min(1).max(100),
  value: z.string().max(10000),
});

/** PUT /api/studio/content — update a single content key */
export async function PUT(req: NextRequest) {
  if (!(await isAuthorized(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  const parsed = UpdateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid", issues: parsed.error.flatten() }, { status: 422 });
  const { key, value } = parsed.data;
  await db.siteContent.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
  return NextResponse.json({ ok: true, key, value });
}

const BatchSchema = z.object({
  items: z.array(z.object({ key: z.string(), value: z.string() })),
});

/** POST /api/studio/content — batch update multiple content keys */
export async function POST(req: NextRequest) {
  if (!(await isAuthorized(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  const parsed = BatchSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid", issues: parsed.error.flatten() }, { status: 422 });
  for (const item of parsed.data.items) {
    await db.siteContent.upsert({
      where: { key: item.key },
      update: { value: item.value },
      create: { key: item.key, value: item.value },
    });
  }
  return NextResponse.json({ ok: true, updated: parsed.data.items.length });
}
