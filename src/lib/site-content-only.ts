// This file imports ONLY the static site content JSON.
// It does NOT import Prisma/db — safe to use in client components.

import siteContent from "./site-content.json";

export type SiteContent = typeof siteContent;

export function getSiteContent(): SiteContent {
  return siteContent;
}

// Type re-exports (types don't pull in runtime code)
export type CategoryWithCount = {
  slug: string;
  name: string;
  group: string;
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

export type LessonDetail = LessonSummary & {
  notationTamil: string | null;
  notationEnglish: string | null;
  violinVideo: string | null;
  vocalVideo: string | null;
  sourceUrl: string | null;
  perVideoEmbeds: any;
  audioLessons: any;
  videoParts: any;
};
