import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const EnquirySchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("A valid email is required"),
  phone: z.string().max(40).optional().or(z.literal("")),
  city: z.string().max(120).optional().or(z.literal("")),
  intent: z.enum(["lesson", "booking", "collaboration"]),
  instrument: z.string().max(60).optional().or(z.literal("")),
  level: z.string().max(60).optional().or(z.literal("")),
  whoFor: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(1, "Message is required").max(4000),
});

export async function GET() {
  const enquiries = await db.enquiry.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  return NextResponse.json({ enquiries });
}

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
  const enquiry = await db.enquiry.create({
    data: {
      name: d.name,
      email: d.email,
      phone: d.phone || null,
      city: d.city || null,
      intent: d.intent,
      instrument: d.instrument || null,
      level: d.level || null,
      whoFor: d.whoFor || null,
      message: d.message,
      status: "new",
    },
  });

  return NextResponse.json(
    {
      ok: true,
      id: enquiry.id,
      message: "Your message was sent successfully! We will be in touch as soon as we can.",
    },
    { status: 201 }
  );
}
