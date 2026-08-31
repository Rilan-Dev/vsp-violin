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
    status: l.status,
  }));
}

/**
 * Studio-only: returns ALL lessons including drafts, for the owner dashboard.
 * The public `getLessons` filters to published only.
 */
export async function getAllLessonsForStudio(): Promise<LessonSummary[]> {
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
    perVideoEmbeds: l.perVideoEmbeds ? (JSON.parse(l.perVideoEmbeds) as PerVideoEmbeds) : null,
    audioLessons: l.audioLessons ? (JSON.parse(l.audioLessons) as AudioLesson[]) : null,
    videoParts: l.videoParts ? (JSON.parse(l.videoParts) as VideoPart[]) : null,
  };
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
  // No raga — just same category
  return db.lesson.findMany({
    where: { status: "published", category, id: { not: currentId } },
    orderBy: { date: "desc" },
    take: 4,
    select: { id: true, title: true, titleTamil: true, category: true, raga: true, titleCard: true },
  });
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
