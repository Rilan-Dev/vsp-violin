import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { restGetSiteContent, restUpsert } from "@/lib/supabase-data";
import { isAuthorized } from "@/lib/studio-auth";

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
  try {
    await db.siteContent.upsert({ where: { key }, update: { value }, create: { key, value } });
  } catch (prismaErr) {
    console.warn("[studio/content] Prisma upsert failed, falling back to REST:", prismaErr);
    try {
      await restUpsert("SiteContent", { key, value, updatedAt: new Date().toISOString() });
    } catch (restErr) {
      console.error("[studio/content] REST upsert ALSO failed:", restErr);
      return NextResponse.json(
        { error: "That text could not be saved just now. Please try again in a moment." },
        { status: 503 }
      );
    }
  }
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
  const failed: string[] = [];
  for (const item of parsed.data.items) {
    try {
      await db.siteContent.upsert({
        where: { key: item.key },
        update: { value: item.value },
        create: { key: item.key, value: item.value },
      });
    } catch {
      try {
        await restUpsert("SiteContent", {
          key: item.key,
          value: item.value,
          updatedAt: new Date().toISOString(),
        });
      } catch (restErr) {
        console.error(`[studio/content] both transports failed for ${item.key}:`, restErr);
        failed.push(item.key);
      }
    }
  }
  if (failed.length > 0) {
    // Name what did not save. Reporting a blanket success here would let the
    // owner close the tab believing an edit landed when it did not.
    return NextResponse.json(
      {
        error: `${failed.length} of ${parsed.data.items.length} changes could not be saved. Please try again.`,
        failedKeys: failed,
        updated: parsed.data.items.length - failed.length,
      },
      { status: 503 }
    );
  }
  return NextResponse.json({ ok: true, updated: parsed.data.items.length });
}
