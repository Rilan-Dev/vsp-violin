import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

async function isAuthorized(req: NextRequest): Promise<boolean> {
  // Check Supabase auth cookie
  const sbToken = req.cookies.get("sb-access-token")?.value;
  if (sbToken) {
    try {
      const { supabaseServer } = await import("@/lib/supabase");
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

const UpdateSchema = z.object({
  status: z.enum(["new", "replied", "archived"]),
});

/** PATCH /api/studio/enquiries/[id] — update enquiry status. */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = UpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid status", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const updated = await db.enquiry.update({
    where: { id },
    data: { status: parsed.data.status },
  });
  return NextResponse.json({ ok: true, enquiry: updated });
}

/** DELETE /api/studio/enquiries/[id] — permanently delete an enquiry. */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  await db.enquiry.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
