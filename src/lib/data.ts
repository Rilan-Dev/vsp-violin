import { db } from "@/lib/db";
import siteContent from "@/lib/site-content.json";

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
};

export type LessonDetail = LessonSummary & {
  notationTamil: string | null;
  notationEnglish: string | null;
  violinVideo: string | null;
  vocalVideo: string | null;
  sourceUrl: string | null;
};

export type SiteContent = typeof siteContent;

/**
 * The category requirement (handoff §"The category requirement"):
 * every count is derived from the lesson collection, never hardcoded.
 */
export async function getCategoriesWithCounts(): Promise<CategoryWithCount[]> {
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
}

export async function getLessons(categorySlug?: string): Promise<LessonSummary[]> {
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
  }));
}

export async function getLessonById(id: string): Promise<LessonDetail | null> {
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
  };
}

export async function getLibraryStats() {
  const [lessonCount, categoryCount, lessonsWithRaga, lessonsWithNotation] = await Promise.all([
    db.lesson.count({ where: { status: "published" } }),
    db.category.count(),
    db.lesson.findMany({ where: { status: "published", raga: { not: null } }, select: { raga: true } }),
    db.lesson.findMany({ where: { status: "published", notationTamil: { not: null } }, select: { id: true } }),
  ]);
  const ragaSet = new Set(lessonsWithRaga.map((l) => l.raga).filter(Boolean));
  return {
    lessons: lessonCount,
    notationSheets: lessonsWithNotation.length * 2, // Tamil + English per lesson
    categories: categoryCount,
    ragas: ragaSet.size,
  };
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
  const cats = await getCategoriesWithCounts();
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
