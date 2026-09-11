# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`vsp-violin` — the Next.js 16 (App Router) rebuild of **Violin Suka Pavalan** (sukapavalan.com): a Carnatic violin teacher's site with a free notation/video lesson library, an enquiry funnel, and a password-protected admin portal at `/studio`. It replaces an old Blogger site and an old `vspviolinrainbow.com` site, both of which are 301-redirected from `next.config.ts`.

Runtime: **Bun** (`bun.lock`, no npm/yarn lockfile). Prisma + SQLite locally, Prisma + Supabase Postgres in production.

## Commands

```bash
bun install                       # install (postinstall runs prisma generate)
bun run dev                       # next dev on :3000, tees output to dev.log
bun run build                     # next build (output: standalone) + copies static/public into .next/standalone
bun run start                     # runs the standalone server via bun, tees to server.log
bun run lint                      # eslint . — the only automated check in CI
bun run db:push                   # prisma db push --accept-data-loss
bun run db:generate               # prisma generate
bun run db:migrate / db:reset     # prisma migrate dev / reset

bun run prisma/seed.ts            # seed 19 categories + 23 lessons from prisma/lessons-seed.json
bun run scripts/seed-content.ts   # flatten src/lib/site-content.json into SiteContent key/value rows
bun run scripts/seed-supabase.ts  # seed SiteContent / Media / Enquiry into Supabase via PostgREST
```

There is **no test suite**. `tests/*.sh` are leftover scaffold scripts for the original container image, not project tests. CI (`.github/workflows/ci.yml`, PRs only) runs lint + `db:generate` + `db:push` + `build` against a throwaway SQLite file. Verify work by running `bun run lint`, `bun run build`, and exercising pages in the dev server.

`Caddyfile` (port 81 → localhost:3000) is the local reverse proxy; `.zscripts/` are scaffold-era container helpers and are not part of normal development.

## The dual-transport data layer (most important thing to understand)

Every read path tries **Prisma first, then the Supabase PostgREST REST API**, because Prisma frequently fails to reach Supabase Postgres from a Vercel serverless function (cold start / pool exhaustion / schema-cache mismatch). Without the fallback the production site renders empty lesson lists.

- `src/lib/db.ts` — global Prisma singleton. Deliberately never calls `$connect()`; queries are expected to fail individually and be caught.
- `src/lib/data.ts` — the public read API (`getLessons`, `getCategoriesWithCounts`, `getLessonById`, `getLibraryStats`, `getMegaMenu`, `getPrevNextLessons`, `getRelatedLessons`, `getAllLessonsForStudio`). Each wraps Prisma in `try`/`catch` and falls back to a `restGet*` call.
- `src/lib/supabase-data.ts` — the REST fallbacks. Uses the service-role key (bypasses RLS). **Table names are case-sensitive and capitalized** (`/rest/v1/Lesson`, `/Category`, `/Enquiry`, `/Media`, `/SiteContent`) because the Supabase tables were created with quoted identifiers.
- `src/lib/dynamic-content.ts` — three-tier: Prisma `SiteContent` → `restGetSiteContent()` → the static `src/lib/site-content.json` baseline. DB values win per dot-path key (`home.heroLines`), which is how Studio edits reach the public site. Values are stored as JSON strings so types round-trip.

**When adding a read endpoint or data function, add the REST fallback too.** `POST /api/enquiries` also has one (`restCreateEnquiry`), because it is the site's only conversion path and a lost write is a lost lead. The remaining studio writes (POST/PATCH/DELETE) are still Prisma-only — a known limitation documented at the end of `worklog.md`.

## Two Prisma schemas

`prisma/schema.prisma` is the **SQLite** schema used for local dev and CI. `prisma/schema.postgres.prisma` is identical except for the datasource block (`postgresql`, plus `directUrl`). The deploy workflow copies the Postgres one over `schema.prisma` before `prisma generate`. If you change models, **edit both files**.

`DATABASE_URL` must stay pointed at the local SQLite file (`file:../db/custom.db` — Prisma resolves relative `file:` URLs against `prisma/schema.prisma`, not the repo root). It previously pointed at `file:/home/z/my-project/db/custom.db`, a scaffold path that does not exist here, so **local Prisma failed and every local read and write silently fell through to the production Supabase database**. If you see `PrismaClientInitializationError` plus `falling back to Supabase REST` in the dev log, you are reading and writing production data — stop and fix `DATABASE_URL` first.

## Auth

`/studio` is gated by Supabase Auth. The login route sets an httpOnly `sb-access-token` cookie; `src/app/studio/page.tsx` verifies it client-side via `GET /api/studio/auth`, then renders `StudioDashboard` inside an error boundary.

Server-side checks accept, in order: the `sb-access-token` cookie → a `Bearer` Supabase JWT → the static `STUDIO_TOKEN` env value via Bearer or a `studio_token=` cookie. `src/lib/studio-auth.ts` exports `isAuthorized(req)` and is the single source of truth — every `/api/studio/*` route imports it. Do not reintroduce an inlined copy.

**`STUDIO_TOKEN` has no default and must stay unset in production.** It previously fell back to a hardcoded `"vsp-studio-dev"` in 11 files of this public repo, which granted full admin read/write on the live deployment. A missing value now disables static-token auth entirely rather than enabling a known one, so production accepts only a real Supabase session.

## Rendering and SEO

All content pages declare `export const dynamic = "force-dynamic"` — there is no ISR/caching layer, data is read per request. `src/app/sitemap.ts`, `robots.ts`, `feed.xml/route.ts`, and `opengraph-image.tsx` are generated from the same data layer. Homepage emits JSON-LD (`WebSite` + `Person`). The 301 redirect table in `next.config.ts` maps real URLs still live in YouTube descriptions and Google's index — do not prune entries.

## Styling conventions

Tailwind v4 + shadcn/ui live in `src/components/ui/` (generated, largely untouched). The hand-built site sections in `src/components/site/` follow a different convention on purpose: **inline `style={{}}` objects for the art-directed design, Tailwind classes only for layout utilities**, plus `vsp-*` classes defined in `src/app/globals.css` (`vsp-eyebrow`, `vsp-card-gold`, `vsp-cta-gold`, `vsp-arch`, `vsp-hairline-gold`, `vsp-marquee-track`, `vsp-mega-menu`, `vsp-rise`, `vsp-stagger`, `vsp-lift`…). Match the surrounding file rather than converting styles.

Design tokens (in `globals.css`): ink `#16102A`, violet accents, gold `#E0BC6A`, cream `#F3EDDF`. Rules from the handoff that the code follows: square corners except the arch mask and circular play buttons; gold reserved for earned emphasis; mono eyebrow labels uppercase with wide tracking; 1px hairline borders, no shadows except the nav blur; every animation has a `prefers-reduced-motion` override; gold `focus-visible` rings.

## The Studio admin (`/studio`)

The owner is **non-technical**. Four sections — Home, Enquiries, Lessons, My Website — declared in `STUDIO_SECTIONS` in `studio-dashboard.tsx`; `PanelSwitch` handles sub-panels (Categories inside Lessons, Media inside Website, Analytics inside Enquiries). `StudioHome` is the landing screen and answers "what needs me today".

Two rules when touching this file:
- **Never surface implementation detail in the UI.** A Settings tab once showed Prisma, SQLite, `bun run db:push`, GitHub Actions and env-var status; it was removed for being unusable and alarming to the client. No database names, no env vars, no deploy mechanics, no secrets.
- **Name things after the owner's job, not the schema.** "How they're grouped", not "Categories". "Words on my site", not "SiteContent". Adding a top-level screen per table is what made this unusable the first time — put new surfaces inside the section they support.

## worklog.md

A ~150KB append-only engineering journal. Each entry is `Task ID / Agent / Task / Work Log / Stage Summary`. It is the authoritative record of *why* things are built the way they are, and its tail holds the current list of unresolved risks. Recent commits (`docs: worklog for …`) show the convention: **append an entry when completing a substantial task.** Read the relevant section before reworking an area; it is faster than re-deriving intent from the code.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`: swap in the Postgres schema → `prisma generate` → `vercel pull/build/deploy --prod`. Required secrets: `VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, `VERCEL_ORG_ID`, `SUPABASE_DB_URL`, `SUPABASE_DIRECT_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`. Do **not** set `STUDIO_TOKEN` in production (see Auth).

`NEXT_PUBLIC_SITE_URL` sets the canonical origin for metadata, `sitemap.xml`, `robots.txt` and both RSS feeds, resolved in `src/lib/seo.ts`. It must name the origin actually serving the deployment. While `sukapavalan.com` still points at the old Blogger site, this has to be the Vercel origin — pointing it at the real domain before the DNS cutover tells Google the canonical version of every page lives on someone else's content. Unset, it falls back to Vercel's injected `VERCEL_PROJECT_PRODUCTION_URL`/`VERCEL_URL`, then localhost.

`next.config.ts` sets `typescript.ignoreBuildErrors: true` and `reactStrictMode: false` — type errors will **not** fail the build, so run `bunx tsc --noEmit` yourself when touching types.

## Unused scaffold dependencies

`next-auth`, `next-intl`, `zustand`, `@tanstack/react-query`, and `z-ai-web-dev-sdk` are in `package.json` but have zero imports in `src/`. They are template leftovers — do not assume they are the project's chosen auth/state/i18n solutions. Same for `examples/websocket/`, `mini-services/`, and `db/custom.db`'s scaffold tooling.

## Gotchas worth knowing

- **`bun run lint` is currently broken** in this environment (`SyntaxError: Unexpected token '.'` from ESLint 9.39.2 under Node 22) — it fails the same way on a clean checkout, so it is not a symptom of your change. Use `bunx tsc --noEmit` and `bunx next build` to verify.
- **`bunx tsc --noEmit` reports 8 pre-existing errors** (Prisma `Date` vs declared `string`, a `null`-inferred `let`, a ref variance, and `LessonDetail` missing `status`). `next.config.ts` sets `ignoreBuildErrors: true`, so the build passes regardless. When touching types, diff the error list against a clean worktree rather than expecting zero.
- Custom `vsp-*` CSS in `globals.css` is **unlayered**, and in Tailwind v4 unlayered CSS beats anything in `@layer utilities` regardless of specificity or source order. A bare `.vsp-x { display: … }` will silently defeat `hidden` / `md:hidden` on the same element. Scope such rules to a media query or put them in `@layer components`.
