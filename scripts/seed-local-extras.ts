/**
 * Seed the local SQLite DB with:
 *   - Media (gallery images)
 *   - Enquiry (sample enquiries so the Studio dashboard has data)
 *
 * Run via: `bun run scripts/seed-local-extras.ts`
 */

import siteContentData from "../src/lib/site-content.json";
import { db } from "../src/lib/db";

async function seedMedia() {
  const images = (siteContentData as { gallery?: { images?: string[] } }).gallery?.images ?? [];
  console.log(`[seed-local-extras] Media: ${images.length} gallery images to upsert`);
  for (let i = 0; i < images.length; i++) {
    const url = images[i];
    const id = `gallery-${i + 1}`;
    try {
      await db.media.upsert({
        where: { id },
        update: { url, altText: `Gallery image ${i + 1}`, category: "gallery" },
        create: { id, url, altText: `Gallery image ${i + 1}`, category: "gallery" },
      });
    } catch (e) {
      console.error(`  ✗ ${id}:`, (e as Error).message);
    }
  }
  console.log(`[seed-local-extras] Media: done`);
}

async function seedEnquiries() {
  const now = new Date();
  const daysAgo = (n: number) => new Date(now.getTime() - n * 24 * 60 * 60 * 1000).toISOString();

  const samples = [
    {
      name: "Arun Kumar",
      email: "arun.kumar@example.com",
      phone: "98765 43210",
      city: "Chennai",
      intent: "lesson",
      instrument: "Violin",
      level: "Beginner",
      whoFor: "Myself",
      message: "I'd like to start Carnatic violin lessons for my 9-year-old son. Could you share your schedule and fees?",
      status: "new",
      createdAt: daysAgo(2),
      updatedAt: daysAgo(2),
    },
    {
      name: "Lakshmi Venkat",
      email: "lakshmi.v@example.com",
      phone: "91234 56789",
      city: "Bengaluru",
      intent: "lesson",
      instrument: "Violin",
      level: "Intermediate",
      whoFor: "My daughter (12)",
      message: "Saw your free notation library — your Carnatic Basic Lesson I is amazing. We'd like to book a free trial.",
      status: "new",
      createdAt: daysAgo(4),
      updatedAt: daysAgo(4),
    },
    {
      name: "Dr. Ravindran",
      email: "ravindran.iyer@example.com",
      phone: null,
      city: "Coimbatore",
      intent: "booking",
      instrument: null,
      level: null,
      whoFor: null,
      message: "Looking for a Carnatic violinist for our daughter's wedding reception on Dec 14 in Coimbatore. Are you available?",
      status: "replied",
      createdAt: daysAgo(9),
      updatedAt: daysAgo(7),
    },
    {
      name: "Saavi Arts Academy",
      email: "saavi.arts@example.com",
      phone: "99887 76655",
      city: "Madurai",
      intent: "collaboration",
      instrument: null,
      level: null,
      whoFor: null,
      message: "We run a music school in Madurai and would love to host a workshop with you. Open to dates in Jan-Feb 2026.",
      status: "new",
      createdAt: daysAgo(12),
      updatedAt: daysAgo(12),
    },
    {
      name: "Priya Senthil",
      email: "priya.s@example.com",
      phone: "90000 11111",
      city: "Karaikal",
      intent: "lesson",
      instrument: "Violin",
      level: "Advanced",
      whoFor: "Myself",
      message: "I've completed Level III — Sarali Varisai and want to move to Janta Varisai. Can I book a one-to-one session?",
      status: "archived",
      createdAt: daysAgo(35),
      updatedAt: daysAgo(28),
    },
  ];

  console.log(`[seed-local-extras] Enquiry: ${samples.length} sample enquiries to upsert`);
  for (const s of samples) {
    try {
      // Use email+createdAt as uniqueness — Prisma `id` is auto-cuid()
      // For upsert by email, we'd need a unique constraint; instead, just
      // check if a similar enquiry exists and skip if so.
      const existing = await db.enquiry.findFirst({
        where: { email: s.email, message: s.message },
      });
      if (existing) {
        continue;
      }
      await db.enquiry.create({ data: s });
    } catch (e) {
      console.error(`  ✗ ${s.email}:`, (e as Error).message);
    }
  }
  console.log(`[seed-local-extras] Enquiry: done`);
}

async function main() {
  await seedMedia();
  await seedEnquiries();
  await db.$disconnect();
  console.log("[seed-local-extras] Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
