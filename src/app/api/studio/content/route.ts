import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7) === STUDIO_TOKEN;
  const cookie = req.headers.get("cookie") ?? "";
  return cookie.includes(`studio_token=${STUDIO_TOKEN}`);
}

/** GET /api/studio/content — list all site content key/values */
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const items = await db.siteContent.findMany({ orderBy: { key: "asc" } });
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
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
