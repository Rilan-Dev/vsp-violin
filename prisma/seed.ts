import { PrismaClient } from "@prisma/client";
import lessonsData from "./lessons-seed.json";
import siteContent from "./site-content-seed.json";

const prisma = new PrismaClient();

// Category catalogue — matches the nav mega-menu structure from the handoff.
// Group drives the menu column; order drives sort within column.
const CATEGORIES: { slug: string; name: string; group: string; order: number }[] = [
  // Carnatic — Basics
  { slug: "sruthi-swara-varisai", name: "Sruthi Swara Varisai", group: "basics", order: 1 },
  { slug: "sarali-varisai", name: "Sarali Varisai", group: "basics", order: 2 },
  { slug: "janta-varisai", name: "Janta Varisai", group: "basics", order: 3 },
  { slug: "melsthayi-varisai", name: "Melsthayi Varisai", group: "basics", order: 4 },
  { slug: "thattu-varisai", name: "Thattu Varisai", group: "basics", order: 5 },
  // Carnatic — Advanced
  { slug: "geetham", name: "Geetham", group: "advanced", order: 1 },
  { slug: "swarajathi", name: "Swarajathi", group: "advanced", order: 2 },
  { slug: "nottuswaram", name: "Nottuswaram", group: "advanced", order: 3 },
  { slug: "varnam", name: "Varnam", group: "advanced", order: 4 },
  { slug: "krithi", name: "Krithi", group: "advanced", order: 5 },
  { slug: "thillana", name: "Thillana", group: "advanced", order: 6 },
  // Devotional
  { slug: "thiruppugazh", name: "Thiruppugazh", group: "devotional", order: 1 },
  { slug: "bakthi", name: "Bhakthi", group: "devotional", order: 2 },
  { slug: "thevaram", name: "Thevaram", group: "devotional", order: 3 },
  // Light Music & Media
  { slug: "cine-songs", name: "Cinema Songs", group: "light", order: 1 },
  { slug: "english-songs", name: "English Songs", group: "light", order: 2 },
  { slug: "other-languages", name: "Other Languages", group: "light", order: 3 },
  { slug: "live-video", name: "Live Video", group: "media", order: 1 },
  { slug: "live-audio", name: "Live Audio", group: "media", order: 2 },
];

// Map the raw lesson `category` string (from the source data) into our canonical slug.
// The source data uses various forms; normalise them here.
// For basic lessons, the source lumps them as "Basic Lessons" with a level 1–5,
// but each lesson's id carries the true sub-category (e.g. basic-01-sruthi-swara-varisai).
function normaliseCategorySlug(raw: string, lessonId?: string): string {
  const k = raw.toLowerCase().trim();
  // Basic lessons: derive the true category from the lesson id.
  if (k === "basic lessons" && lessonId) {
    if (lessonId.includes("sruthi-swara")) return "sruthi-swara-varisai";
    if (lessonId.includes("sarali")) return "sarali-varisai";
    if (lessonId.includes("janta")) return "janta-varisai";
    if (lessonId.includes("melsthayi")) return "melsthayi-varisai";
    if (lessonId.includes("thattu")) return "thattu-varisai";
    return "sarali-varisai";
  }
  if (k === "geetham") return "geetham";
  if (k === "swarajathi") return "swarajathi";
  if (k === "nottuswaram") return "nottuswaram";
  if (k === "varnam") return "varnam";
  if (k === "krithi") return "krithi";
  if (k === "thiruppugazh") return "thiruppugazh";
  if (k === "bakthi") return "bakthi";
  if (k === "cine songs") return "cine-songs";
  if (k === "live audio") return "live-audio";
  if (k === "live video") return "live-video";
  return k.replace(/\s+/g, "-");
}

async function main() {
  console.log("Seeding categories…");
  await prisma.category.deleteMany({});
  for (const c of CATEGORIES) {
    await prisma.category.create({ data: c });
  }

  console.log("Seeding lessons…");
  await prisma.lesson.deleteMany({});

  type RawLesson = {
    id: string;
    title: string;
    titleTamil?: string;
    category: string;
    level?: number;
    raga?: string;
    thala?: string;
    composer?: string;
    date: string;
    notationPdfTamil?: string;
    notationPdfEnglish?: string;
    violinVideo?: string;
    vocalVideo?: string;
    titleCard?: string;
    sourceUrl?: string;
  };

  const items = (lessonsData as { items: RawLesson[] }).items;
  for (const l of items) {
    const slug = normaliseCategorySlug(l.category, l.id);
    await prisma.lesson.create({
      data: {
        id: l.id,
        title: l.title,
        titleTamil: l.titleTamil ?? null,
        category: slug,
        level: l.level ?? null,
        raga: l.raga ?? null,
        thala: l.thala ?? null,
        composer: l.composer ?? null,
        date: l.date,
        notationTamil: l.notationPdfTamil ?? null,
        notationEnglish: l.notationPdfEnglish ?? null,
        violinVideo: l.violinVideo ?? null,
        vocalVideo: l.vocalVideo ?? null,
        titleCard: l.titleCard ?? null,
        sourceUrl: l.sourceUrl ?? null,
        status: "published",
      },
    });
  }

  // Also seed the live-audio performance as a lesson entry in its category.
  const performances = (lessonsData as { performances?: { id: string; title: string; category: string; date: string; sourceUrl?: string }[] }).performances ?? [];
  for (const p of performances) {
    const slug = normaliseCategorySlug(p.category);
    const exists = await prisma.lesson.findUnique({ where: { id: p.id } });
    if (!exists) {
      await prisma.lesson.create({
        data: {
          id: p.id,
          title: p.title,
          category: slug,
          date: p.date,
          sourceUrl: p.sourceUrl ?? null,
          status: "published",
        },
      });
    }
  }

  console.log("Seed complete.");
  console.log("Categories:", await prisma.category.count());
  console.log("Lessons:", await prisma.lesson.count());
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
