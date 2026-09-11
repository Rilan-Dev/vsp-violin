import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { restCreateEnquiry } from "@/lib/supabase-data";
import { notifyNewEnquiry } from "@/lib/notify";

const EnquirySchema = z
  .object({
    name: z.string().min(1, "Name is required").max(120),
    email: z.string().email("A valid email is required").optional().or(z.literal("")),
    phone: z.string().max(40).optional().or(z.literal("")),
    city: z.string().max(120).optional().or(z.literal("")),
    intent: z.enum(["lesson", "booking", "collaboration"]),
    instrument: z.string().max(60).optional().or(z.literal("")),
    level: z.string().max(60).optional().or(z.literal("")),
    whoFor: z.string().max(120).optional().or(z.literal("")),
    message: z.string().max(4000).optional().or(z.literal("")),
  })
  // Email was required and phone optional, which loses leads from students who
  // only share a WhatsApp number. Either one is now enough — but not neither,
  // or there is no way to reply.
  .refine((d) => (d.email && d.email.length > 0) || (d.phone && d.phone.length > 0), {
    message: "Please leave either an email address or a phone number so we can reply",
    path: ["email"],
  });

/**
 * POST /api/enquiries — public route for the enrol form.
 * No GET route — enquiries contain personal data, accessible only via /api/studio/enquiries.
 *
 * This is the only conversion path on the site, so it must not fail when
 * Prisma cannot reach Supabase Postgres (the documented production failure
 * mode). Writes go: Prisma → Supabase REST. Only if BOTH fail does the
 * visitor see an error, and that response then points them at a direct
 * contact channel rather than a dead end.
 */
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = EnquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const d = parsed.data;
  const row = {
    name: d.name,
    email: d.email || "",
    phone: d.phone || null,
    city: d.city || null,
    intent: d.intent,
    instrument: d.instrument || null,
    level: d.level || null,
    whoFor: d.whoFor || null,
    message: d.message || "",
    status: "new",
  };

  let id: string | null = null;

  // 1. Prisma.
  try {
    const created = await db.enquiry.create({ data: row });
    id = created.id;
  } catch (prismaErr) {
    console.warn("[enquiries] Prisma write failed, falling back to Supabase REST:", prismaErr);
    // 2. Supabase REST — a different transport that doesn't need a pooled connection.
    try {
      const created = await restCreateEnquiry(row);
      id = created.id;
    } catch (restErr) {
      console.error("[enquiries] Supabase REST write ALSO failed:", restErr);
    }
  }

  if (!id) {
    // Both transports are down. Tell the visitor how to reach us directly
    // instead of silently losing the lead.
    return NextResponse.json(
      {
        error:
          "We could not save your enquiry just now. Please email sukapavalan@gmail.com " +
          "or WhatsApp +91 98656 44345 — your message matters and we want to hear it.",
      },
      { status: 503 }
    );
  }

  // Saved. Notification is best-effort and must never fail the request.
  await notifyNewEnquiry({ ...row, id });

  return NextResponse.json(
    {
      ok: true,
      id,
      message: "Your message was sent successfully! We will be in touch as soon as we can.",
    },
    { status: 201 }
  );
}
