import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { supabaseServer } from "@/lib/supabase";
import { isAuthorized } from "@/lib/studio-auth";

/**
 * POST /api/studio/media/upload — upload a photo from the owner's device.
 *
 * The Media tab could only accept a URL that someone had to produce
 * elsewhere first. The site's owner is not technical: they have a photo in
 * their phone's camera roll, not a hosted URL, so in practice no photo could
 * ever be added. This accepts the file itself, stores it in Supabase Storage,
 * and records the resulting public URL in the Media table.
 *
 * The bucket is created on first use so this works against a fresh Supabase
 * project without anyone visiting a dashboard.
 */

const BUCKET = "media";
const MAX_BYTES = 8 * 1024 * 1024; // 8MB — comfortably above a phone photo
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"]);

/** Create the storage bucket if it does not exist yet. Safe to call repeatedly. */
async function ensureBucket(): Promise<void> {
  const { data } = await supabaseServer.storage.getBucket(BUCKET);
  if (data) return;
  await supabaseServer.storage.createBucket(BUCKET, {
    public: true,
    fileSizeLimit: MAX_BYTES,
    allowedMimeTypes: [...ALLOWED],
  });
}

/** "My Photo (2).JPG" -> "my-photo-2.jpg", always with a safe extension. */
function safeName(original: string): string {
  const dot = original.lastIndexOf(".");
  const ext = (dot > -1 ? original.slice(dot + 1) : "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  const base = (dot > -1 ? original.slice(0, dot) : original)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "photo";
  return `${base}-${Date.now().toString(36)}.${ext || "jpg"}`;
}

export async function POST(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Please choose a photo to upload." }, { status: 400 });
  }

  const file = form.get("file");
  const altText = String(form.get("altText") ?? "").trim();
  const category = String(form.get("category") ?? "gallery").trim() || "gallery";

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Please choose a photo to upload." }, { status: 422 });
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json(
      { error: "That file is not a photo. Please choose a JPG, PNG, WebP or GIF image." },
      { status: 422 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      {
        error: `That photo is ${(file.size / 1024 / 1024).toFixed(1)}MB, which is too large. Please choose one under 8MB.`,
      },
      { status: 422 }
    );
  }
  if (!altText) {
    return NextResponse.json(
      { error: "Please add a short description of the photo so it works for screen readers." },
      { status: 422 }
    );
  }

  const path = `${category}/${safeName(file.name)}`;

  try {
    await ensureBucket();
    const { error: uploadError } = await supabaseServer.storage
      .from(BUCKET)
      .upload(path, file, { contentType: file.type, upsert: false });
    if (uploadError) throw uploadError;
  } catch (e) {
    console.error("[media/upload] storage upload failed:", e);
    return NextResponse.json(
      { error: "The photo could not be saved just now. Please try again in a moment." },
      { status: 502 }
    );
  }

  const {
    data: { publicUrl },
  } = supabaseServer.storage.from(BUCKET).getPublicUrl(path);

  try {
    const media = await db.media.create({
      data: { url: publicUrl, altText, category },
    });
    return NextResponse.json({ ok: true, media }, { status: 201 });
  } catch (e) {
    // The file is stored; only the DB row failed. Return the URL so the
    // upload is not silently lost.
    console.error("[media/upload] DB write failed after successful upload:", e);
    return NextResponse.json(
      {
        error: "The photo uploaded but could not be listed. Please reload — if it is missing, upload it again.",
        url: publicUrl,
      },
      { status: 500 }
    );
  }
}
