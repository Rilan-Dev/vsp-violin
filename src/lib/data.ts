import { db } from "@/lib/db";
import siteContent from "@/lib/site-content.json";
import {
  restGetLessons,
  restGetAllLessonsForStudio,
  restGetCategoriesWithCounts,
  restGetLibraryStats,
  restGetLessonById,
} from "@/lib/supabase-data";

export type CategoryGroup = "basics" | "advanced" | "devotional" | "light" | "media";

export type CategoryWithCount = {
  slug: string;
  name: string;
  group: CategoryGroup;
  order: number;
  count: number;
};

export type LessonSummary = {
  id: string;
  title: string;
  titleTamil: string | null;
  category: string;
  level: number | null;
  raga: string | null;
  thala: string | null;
  composer: string | null;
  date: string;
  titleCard: string | null;
  status: string;
};

export type LessonVideoEmbed = { label: string; youtubeId: string };
export type PerVideoEmbeds = { violin: LessonVideoEmbed[]; vocal: LessonVideoEmbed[] };
export type AudioLesson = { label: string; audio: string };
export type VideoPart = { label: string; embed: string };

export type LessonDetail = LessonSummary & {
  notationTamil: string | null;
  notationEnglish: string | null;
  violinVideo: string | null;
  vocalVideo: string | null;
  sourceUrl: string | null;
  perVideoEmbeds: PerVideoEmbeds | null;
  audioLessons: AudioLesson[] | null;
  videoParts: VideoPart[] | null;
};

export type SiteContent = typeof siteContent;

/**
 * The category requirement (handoff §"The category requirement"):
 * every count is derived from the lesson collection, never hardcoded.
 *
 * Falls back to the Supabase REST API if the Prisma DB connection fails
 * (e.g. cold serverless function, Postgres pool exhaustion).
 */
export async function getCategoriesWithCounts(): Promise<CategoryWithCount[]> {
  try {
    const categories = await db.category.findMany({ orderBy: [{ group: "asc" }, { order: "asc" }] });
    const lessons = await db.lesson.findMany({ where: { status: "published" }, select: { category: true } });

    const countMap = new Map<string, number>();
    for (const l of lessons) {
      countMap.set(l.category, (countMap.get(l.category) ?? 0) + 1);
    }

    return categories.map((c) => ({
      slug: c.slug,
      name: c.name,
      group: c.group as CategoryGroup,
      order: c.order,
      count: countMap.get(c.slug) ?? 0,
    }));
  } catch (e) {
    console.warn("[data] Prisma getCategoriesWithCounts failed, falling back to Supabase REST:", e);
    return restGetCategoriesWithCounts();
  }
}

export async function getLessons(categorySlug?: string): Promise<LessonSummary[]> {
  try {
    const where = { status: "published" as const, ...(categorySlug ? { category: categorySlug } : {}) };
    const lessons = await db.lesson.findMany({
      where,
      orderBy: [{ level: "asc" }, { date: "desc" }],
    });
    return lessons.map((l) => ({
      id: l.id,
      title: l.title,
      titleTamil: l.titleTamil,
      category: l.category,
      level: l.level,
      raga: l.raga,
      thala: l.thala,
      composer: l.composer,
      date: l.date,
      titleCard: l.titleCard,
      status: l.status,
    }));
  } catch (e) {
    console.warn("[data] Prisma getLessons failed, falling back to Supabase REST:", e);
    const rows = await restGetLessons(categorySlug);
    return rows.map((l) => ({
      id: l.id,
      title: l.title,
      titleTamil: l.titleTamil,
      category: l.category,
      level: l.level,
      raga: l.raga,
      thala: l.thala,
      composer: l.composer,
      date: l.date,
      titleCard: l.titleCard,
      status: l.status,
    }));
  }
}

/**
 * Studio-only: returns ALL lessons including drafts, for the owner dashboard.
 * The public `getLessons` filters to published only.
 */
export async function getAllLessonsForStudio(): Promise<LessonSummary[]> {
  try {
    const lessons = await db.lesson.findMany({
      orderBy: [{ category: "asc" }, { level: "asc" }, { date: "desc" }],
    });
    return lessons.map((l) => ({
      id: l.id,
      title: l.title,
      titleTamil: l.titleTamil,
      category: l.category,
      level: l.level,
      raga: l.raga,
      thala: l.thala,
      composer: l.composer,
      date: l.date,
      titleCard: l.titleCard,
      status: l.status,
    }));
  } catch (e) {
    console.warn("[data] Prisma getAllLessonsForStudio failed, falling back to Supabase REST:", e);
    const rows = await restGetAllLessonsForStudio();
    return rows.map((l) => ({
      id: l.id,
      title: l.title,
      titleTamil: l.titleTamil,
      category: l.category,
      level: l.level,
      raga: l.raga,
      thala: l.thala,
      composer: l.composer,
      date: l.date,
      titleCard: l.titleCard,
      status: l.status,
    }));
  }
}

export async function getLessonById(id: string): Promise<LessonDetail | null> {
  try {
    const l = await db.lesson.findUnique({ where: { id } });
    if (!l) return null;
    return {
      id: l.id,
      title: l.title,
      titleTamil: l.titleTamil,
      category: l.category,
      level: l.level,
      raga: l.raga,
      thala: l.thala,
      composer: l.composer,
      date: l.date,
      titleCard: l.titleCard,
      notationTamil: l.notationTamil,
      notationEnglish: l.notationEnglish,
      violinVideo: l.violinVideo,
      vocalVideo: l.vocalVideo,
      sourceUrl: l.sourceUrl,
      perVideoEmbeds: l.perVideoEmbeds ? (JSON.parse(l.perVideoEmbeds) as PerVideoEmbeds) : null,
      audioLessons: l.audioLessons ? (JSON.parse(l.audioLessons) as AudioLesson[]) : null,
      videoParts: l.videoParts ? (JSON.parse(l.videoParts) as VideoPart[]) : null,
    };
  } catch (e) {
    console.warn("[data] Prisma getLessonById failed, falling back to Supabase REST:", e);
    const row = await restGetLessonById(id);
    if (!row) return null;
    return {
      id: row.id,
      title: row.title,
      titleTamil: row.titleTamil,
      category: row.category,
      level: row.level,
      raga: row.raga,
      thala: row.thala,
      composer: row.composer,
      date: row.date,
      titleCard: row.titleCard,
      notationTamil: row.notationTamil,
      notationEnglish: row.notationEnglish,
      violinVideo: row.violinVideo,
      vocalVideo: row.vocalVideo,
      sourceUrl: row.sourceUrl,
      perVideoEmbeds: row.perVideoEmbeds ? (JSON.parse(row.perVideoEmbeds) as PerVideoEmbeds) : null,
      audioLessons: row.audioLessons ? (JSON.parse(row.audioLessons) as AudioLesson[]) : null,
      videoParts: row.videoParts ? (JSON.parse(row.videoParts) as VideoPart[]) : null,
    };
  }
}

/**
 * Prev/next navigation for the lesson page.
 * Basics (5 lessons across 5 sub-categories) are treated as one family —
 * prev/next walks the 5 in level order. Other categories order by date.
 */
const BASICS_SLUGS = ["sruthi-swara-varisai", "sarali-varisai", "janta-varisai", "melsthayi-varisai", "thattu-varisai"];

export async function getPrevNextLessons(currentId: string, category: string) {
  const isBasics = BASICS_SLUGS.includes(category);
  const where = isBasics
    ? { status: "published" as const, category: { in: BASICS_SLUGS } }
    : { status: "published" as const, category };
  const orderBy = isBasics
    ? [{ level: "asc" as const }, { date: "asc" as const }]
    : [{ date: "asc" as const }];
  const lessons = await db.lesson.findMany({
    where,
    orderBy,
    select: { id: true, title: true, titleTamil: true, category: true, level: true },
  });
  const idx = lessons.findIndex((l) => l.id === currentId);
  return {
    prev: idx > 0 ? lessons[idx - 1] : null,
    next: idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null,
    siblings: lessons,
    currentIndex: idx,
  };
}

/**
 * Related lessons — same raga first, then same category, excluding the current lesson.
 * Returns up to 4 lessons for the "related" section on the lesson page.
 */
export async function getRelatedLessons(currentId: string, raga: string | null, category: string) {
  if (raga) {
    const byRaga = await db.lesson.findMany({
      where: { status: "published", raga, id: { not: currentId } },
      orderBy: { date: "desc" },
      take: 4,
      select: { id: true, title: true, titleTamil: true, category: true, raga: true, titleCard: true },
    });
    if (byRaga.length >= 2) return byRaga;
    // Fall back to filling with same-category lessons
    const byCategory = await db.lesson.findMany({
      where: { status: "published", category, id: { not: currentId, notIn: byRaga.map((l) => l.id) } },
      orderBy: { date: "desc" },
      take: 4 - byRaga.length,
      select: { id: true, title: true, titleTamil: true, category: true, raga: true, titleCard: true },
    });
    return [...byRaga, ...byCategory];
  }
  // No raga — check if this is a basic lesson, then look across all 5 basics
  if (BASICS_SLUGS.includes(category)) {
    return db.lesson.findMany({
      where: { status: "published", category: { in: BASICS_SLUGS }, id: { not: currentId } },
      orderBy: [{ level: "asc" }, { date: "desc" }],
      take: 4,
      select: { id: true, title: true, titleTamil: true, category: true, raga: true, titleCard: true },
    });
  }
  // No raga, not basics — just same category
  return db.lesson.findMany({
    where: { status: "published", category, id: { not: currentId } },
    orderBy: { date: "desc" },
    take: 4,
    select: { id: true, title: true, titleTamil: true, category: true, raga: true, titleCard: true },
  });
}

export async function getLibraryStats() {
  try {
    const [lessonCount, categoryCount, lessonsWithRaga, lessonsWithNotation] = await Promise.all([
      db.lesson.count({ where: { status: "published" } }),
      db.category.count(),
      db.lesson.findMany({ where: { status: "published", raga: { not: null } }, select: { raga: true } }),
      db.lesson.findMany({ where: { status: "published", notationTamil: { not: null } }, select: { id: true } }),
    ]);
    const ragaSet = new Set(lessonsWithRaga.map((l) => l.raga).filter(Boolean));
    return {
      lessons: lessonCount,
      // Lessons that actually ship notation. Not every published lesson does
      // (live recordings do not), so this is deliberately distinct from
      // `lessons` — copy that says "N notation lessons" must use this one.
      notationLessons: lessonsWithNotation.length,
      notationSheets: lessonsWithNotation.length * 2, // Tamil + English per lesson
      categories: categoryCount,
      ragas: ragaSet.size,
    };
  } catch (e) {
    console.warn("[data] Prisma getLibraryStats failed, falling back to Supabase REST:", e);
    return restGetLibraryStats();
  }
}

export function getSiteContent(): SiteContent {
  return siteContent;
}

/**
 * Mega-menu shape: grouped columns with live counts.
 * This is the single source of truth that drives the nav panel,
 * library filters, library groupings, and breadcrumbs.
 */
export async function getMegaMenu() {
  const all = await getCategoriesWithCounts();
  // Only surface categories that actually have published lessons. Five of the
  // nineteen (Thillana, Thevaram, English Songs, Other Languages, Live Video)
  // are empty, and linking to them from the nav sent visitors — including
  // traffic arriving on the /search/label/* redirects from the old Blogger
  // site — to a "No lessons match your filters." dead end.
  const cats = all.filter((c) => c.count > 0);
  const groups: Record<CategoryGroup, { label: string; items: CategoryWithCount[] }> = {
    basics: { label: "Carnatic — Basics", items: [] },
    advanced: { label: "Carnatic — Advanced", items: [] },
    devotional: { label: "Devotional", items: [] },
    light: { label: "Light Music & Media", items: cats.filter((c) => c.group === "light") },
    media: { label: "", items: cats.filter((c) => c.group === "media") },
  };
  for (const c of cats) {
    if (c.group === "light" || c.group === "media") continue;
    groups[c.group].items.push(c);
  }
  // Merge light + media into one visual column but keep group labels clear.
  const lightMedia = {
    label: "Light Music & Media",
    items: [...groups.light.items, ...groups.media.items],
  };
  return [
    groups.basics,
    groups.advanced,
    groups.devotional,
    lightMedia,
  ];
}
