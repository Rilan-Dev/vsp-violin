# Handoff: Violin Suka Pavalan — website rebuild

## Overview

A complete frontend design for the rebuild of two existing websites into one: **vspviolinrainbow.com** (a marketing brochure) and **sukapavalan.com** (a Blogger site holding the actual product — 22 free Carnatic violin notation lessons). The new site unifies them.

The business is a 37-year Carnatic violinist and teacher in Karaikal, Puducherry, who teaches one-to-one online and in person, performs, and gives his entire notation library away free. The free library is the marketing funnel; paid one-to-one lessons are the revenue.

**Three audiences, in priority order:**
1. **Diaspora parents** (US, Canada, UK, Australia, Gulf) buying a serious guru for a child aged 6–16. Highest willingness to pay. They buy *lineage*.
2. **Adult self-learners** who found him on YouTube. Low cost to acquire, self-serve. They need the library.
3. **Organisers and sabhas** booking a performance. Few, large per booking, and their bookings are what make the teaching credible.

Full reasoning, market sizing with sources, and the positioning argument are in `strategy/Design Ideology.dc.html`.

## About the design files

**The files in `design/` are design references, not production code.** They are HTML prototypes showing intended look, content, and behaviour. Do not port them directly.

They are authored in a proprietary "Design Component" format (`.dc.html` + `support.js` runtime) that exists only in the authoring tool. `support.js` is that runtime — **do not read, port, or reuse it**. Each file's markup sits between `<x-dc>` and `</x-dc>`; a `<script data-dc-script>` block at the end holds a small logic class where one exists.

Your task is to **rebuild these designs in Next.js + TypeScript**, which is the right choice here (reasoning under "Recommended stack"). Every value you need — colours, type, spacing, copy, data — is documented below or extractable from the files.

Open any file in a browser to see it render.

## Fidelity

**High fidelity.** Final colours, typography, spacing, copy and interaction design. Recreate faithfully.

Two exceptions, both marked in the files:
- **Photography** is three placeholder portraits in `assets/`. The client is sending a new session. Award-ceremony photographs (12) and archive gallery images (15) exist on the old site but were never supplied as files — cards are built and marked "file needed".
- **The Studio screen** is one screen of four. It is a design of the publish flow, not a working editor.

## Recommended stack

**Next.js (App Router) + TypeScript.** Specifically:

- **App Router with static generation.** Every public page is content, not application state. Pre-render all of it. `generateStaticParams` over the lesson list gives you 22 static lesson pages.
- **Why Next.js specifically:** the entire business case rests on organic discovery — diaspora parents Googling "Carnatic violin lessons online", adult learners finding notation via YouTube. SEO and per-lesson metadata are load-bearing, which rules out a client-only SPA. Also: 38 old URLs must redirect (see "Redirects"), and `next.config.js` redirects handle that in one file.
- **Tailwind CSS** for styling. The designs are currently inline styles (an authoring-format constraint, not a design decision). Map the tokens below into `tailwind.config.ts` and use utility classes. Do not preserve the inline styles.
- **MDX or a headless CMS for lessons** — depends on the client's pending backend decision (see "Open decisions"). Start with typed content files; the schema below is designed so a CMS swap doesn't change components.
- **`next/image`** for all photography. The hero portraits are large; they need optimising.
- **No state library.** The only client state on the public site is the nav dropdown (`useState`) and the lesson page's notation/sruthi/video selectors (`useState`, or `useReducer` for the lesson player).

## Design tokens

### Colour

| Token | Hex | Role |
|---|---|---|
| `ink` | `#16102A` | Page ground. Deep violet, never black. |
| `ink-raised` | `#1A1234` | Section band, darker end of gradient |
| `violet-800` | `#241A44` | Section band, lighter end |
| `violet-700` | `#251A42` | Image placeholder ground |
| `violet-600` | `#2A1D4E` | CTA band top |
| `violet-accent` | `#6B4BA8` | Gradient washes only (used at 0.14–0.5 alpha) |
| `violet-light` | `#C9AEF5` | Secondary accent — Vision column, one lesson card |
| `gold` | `#E0BC6A` | **Primary accent.** Earned things, CTAs, labels, active states |
| `gold-hover` | `#F2D89A` | Link hover |
| `cream` | `#F3EDDF` | All body text |
| `cream-dark` | `#1B1233` | Text on gold surfaces |
| `success` | `#78DCAA` | Studio: uploaded-file confirmation only |
| `warn` | `#E08C50` | Audit/plan docs: "needs correcting" only |

**Alpha conventions** — these carry the whole visual system, so keep them exact:
- Text: `rgba(243,237,223,0.82)` body prose · `0.76` secondary · `0.72` tertiary · `0.62` mono labels · `0.5` disabled/empty categories
- Borders: `rgba(224,188,106,0.26)` gold hairline (section dividers) · `rgba(224,188,106,0.34)` gold card · `rgba(224,188,106,0.46)` gold emphasis · `rgba(243,237,223,0.16)` neutral card · `rgba(243,237,223,0.2)` form field
- Card fills: `rgba(243,237,223,0.035)` neutral · gold cards use `linear-gradient(155deg, rgba(224,188,106,0.13), rgba(107,75,168,0.16))`
- Nav: `rgba(22,16,42,0.92)` + `backdrop-filter: blur(22px)`

**Accent discipline:** gold marks what was *earned* — titles, years, awarding bodies, active state, primary CTA. Never decorative. Minimum contrast pass at AA: don't drop cream text below 0.5 alpha or gold below 0.6 on the violet ground.

### Typography

Three families, from Google Fonts:

| Family | Weights | Role |
|---|---|---|
| **Marcellus** | 400 | Display — all headings, lesson titles, honorific titles, stat numbers, CTA button labels |
| **Instrument Sans** | 400/500/600/700 | Body, UI, form labels, card body copy |
| **Geist Mono** | 400/500 | Technical data — raga, thala, sruthi, years, eyebrow labels, counts, awarding bodies |

The mono/serif split is semantic: Marcellus for anything human, Geist Mono for anything a musician would read as data. Preserve it.

**Scale (desktop → ≤720px):**

| Element | Desktop | Phone |
|---|---|---|
| h1 | 62px / 1.06 | 40px / 1.08 |
| h2 section | 44–50px / 1.08 | 30px / 1.12 |
| h3 card | 21–27px / 1.15–1.2 | 21px |
| Body lead | 17.5px / 1.68 | 16px |
| Body | 15–16.5px / 1.6–1.62 | 15px |
| Mono eyebrow | 10–10.5px, `letter-spacing: 0.2–0.22em`, uppercase | 10px |
| Mono data | 10.5–12px, `letter-spacing: 0.08–0.14em` | same |
| Stat number | 30–46px Marcellus | 26px |

Marcellus headings carry no negative tracking; the display hero uses `letter-spacing: -0.01em` only where noted. Mono labels always uppercase with wide tracking. Body prose uses `text-wrap: pretty`.

### Spacing

Multiples of 2 throughout. Common values: section vertical padding `62–92px` (desktop) → `44px` (phone); page gutter `32px` → `20px`; grid gap `14–16px`; card padding `24–38px`; stack gap `10–26px`.

### Geometry

**Square corners everywhere** — no border radius on cards, buttons, or fields. The only exceptions:
- Nav pill and category chips: `border-radius: 999px` (homepage bento variant only — the violet/gold design uses squares)
- Hero arch mask: `border-radius: 226px 226px 0 0` (desktop) / `215px 215px 0 0` (Guru page), scaled to `max-width: 380px; height: 460px` at ≤1024
- Play buttons: `border-radius: 50%`

Hairline borders at 1px. No shadows anywhere except the nav's backdrop blur.

## Screens

Nine screens. Each public page shares a sticky nav with the category mega-menu and a footer.

### Shared: Nav (all pages)

`position: sticky; top: 0; z-index: 50`. Background `rgba(22,16,42,0.92)` + `blur(22px)`, bottom border gold at 0.24.

Row: wordmark "SUKA PAVALAN" (Marcellus 21px, `letter-spacing: 0.07em`, gold) · links container `[data-nav="links"]` · Enrol button (gold border, gold text, Marcellus 14px).

Links: **Lessons** (a toggle, not a link) · Learn the Violin · The Guru · Honours · Stage. Current page's link is full-opacity cream; others 0.72.

**The Lessons dropdown** is the most important shared component. It is a five-column panel, absolutely positioned against the nav, holding every category with a live count:

| Group | Items (count) |
|---|---|
| Carnatic — Basics | Sruthi Swara Varisai (1), Sarali Varisai (1), Janta Varisai (1), Melsthayi Varisai (1), Thattu Varisai (1) |
| Carnatic — Advanced | Geetham (5), Swarajathi (1), Nottuswaram (1), Varnam (3), Krithi (3), Thillana (0) |
| Devotional | Thiruppugazh (2), Bhakthi (1), Thevaram (0) |
| Light Music & Media | Cinema Songs (1), English Songs (0), Other Languages (0), Live Video (7), Live Audio (3) |
| Pages | Learn the Violin, The Guru, Honours, Stage |

Empty categories render at 0.5/0.6 alpha but stay visible — they are the promise that new content lands there. **The counts must be derived from the lesson data, never hardcoded.** This is the client's core requirement (see "The category requirement").

Behaviour: opens on hover (desktop), click/Enter/Space (all), closes on Escape, on mouse leaving the nav, and on focus leaving the nav. Transition `max-height 340ms cubic-bezier(.16,1,.3,1), opacity 240ms ease, padding 340ms, visibility 340ms`. Closed state must be `visibility: hidden` + `aria-hidden` so the 23 links leave the tab order; `aria-expanded` and `aria-controls` on the trigger.

### 1. Homepage (`Homepage Violet Gold.dc.html`)

Nine sections. Each does one job; no two share a layout.

1. **Hero** — two columns (1fr / 0.92fr). Left: gold mono eyebrow "Karaikal, Puducherry · on stage since 1990", h1 "Music, kept as **worship**" (second line gold), lead paragraph, two CTAs (gold fill "Book a free trial", cream outline "Browse 22 free lessons"), then a four-stat row (37 / 5,000+ / 12 / 1992) above a gold hairline. Right: the arch-masked portrait with a gradient scrim and name plate. Radial gradient washes: violet at 50%/-10%, gold at 88%/80%.
2. **Credibility marquee** — full-bleed band, gold hairlines top and bottom, `rgba(37,26,66,0.55)` fill. Infinite horizontal scroll, 36s linear, content duplicated for the loop with the second copy `aria-hidden`. Items separated by gold `✦`: AIR stations · Thyagaraja Aradhana since 1992 · five TV channels · USA tours 2013–15, 2017–19 · CCRT scholarship 1994–2000. **Must be static and wrapped under `prefers-reduced-motion`.**
3. **Library preview** — six lesson cards in a 4-column grid with 2-col spans, plus category filter chips.
4. **Practice room** — full-bleed violet band. Two columns: left the argument, right the **sruthi dial** (see Lesson page).
5. **Studio** — the publish flow, two columns: the form left, "what happens on publish" right.
6. **The Guru** — two columns: bio left, six-teacher lineage list and two qualification cards right.
7. **Honours** — horizontal scrolling rail of title cards, first one gold.
8. **Testimonials** — three cards, middle one gold.
9. **Enrol** — three intents in a 1.25/1/1 grid; the first (one-to-one lessons) is gold and carries the checklist.

### 2. Library (`Library.dc.html`)

The retention driver. Header with a 2×2 stat block (22 lessons / 44 notation sheets / 9 categories / 13 ragas), then two filter rows (category chips with counts, raga chips), then lessons grouped by category as section blocks: Carnatic Basics (5, levelled 1–5) · Geetham (5) · Swarajathi/Nottuswaram/Varnam (5) · Krithi & Devotional (6) · Light Music (1 + an empty-category note). Cards carry raga, thala, composer, and asset badges.

### 3. Lesson (`Lesson.dc.html`) — the product

Sarali Varisai is the built exemplar. Structure:

- Breadcrumb (Lessons / category / title), category + level badges, h1, lead, two download CTAs (English notation gold, Tamil outline), and a details table (category, level, exercises, videos, notation, published).
- **Notation panel** (1.15fr) with an English/Tamil toggle, the swara lines in Geist Mono 17px / `letter-spacing: 0.14em`, and an exercise pager 1–14.
- **Practice track panel** (0.85fr, gold) — the **sruthi dial**: violin/vocal toggle, five sruthi buttons (C, D#, F, G#, A#), four speed buttons (1st, 2nd, 3rd, Thrikaalam), transport with progress. This is the signature interaction: one control replacing 15 files.
- **Video grid** — 16 videos in a 4-col grid, violin/vocal tabbed, thrikaalam cards gold.
- **Three-stage guidance** — step by step → practise together → on your own.
- Prev/next lesson, then the enrol CTA.

### 4–8. The Guru · Honours · Learn the Violin · Stage · Enquire

Content pages, all built. See the files. Notable: **Honours** has 5 dated titles (with awarding bodies) + 7 undated + 3 accolades; **Stage** has 10 performance videos, the radio/TV/tours record, and a gallery with placeholder cards; **Enquire** has a three-intent switcher and a trial-lesson form (name, email\*, phone, city/timezone, who for, instrument, level, message).

### 9. Legal (`Legal.dc.html`)

Privacy Policy, Terms and Conditions, and Disclaimer on one page with anchor navigation, all three carried **verbatim** from sukapavalan.com. Linked from every public footer.

**Five passages need a lawyer's eye before launch** — each is called out inline on the page in a red-bordered block, and listed in `data/legal-source.json`:

1. **Terms name the wrong jurisdiction** — "prevailing law of Netherlands", a generator default. The business operates from Karaikal, Puducherry.
2. **The Comments clauses no longer apply** — five paragraphs plus four warranties govern user comments. The new site has none; enquiries go through a private form. Cut, or rewrite to cover form submissions.
3. **"www.website.com"** appears in the DART cookie section — a template placeholder.
4. **Account language** in the Privacy Policy describes registering an account. There are no visitor accounts.
5. **Advertising sections** assume ad serving. If the new site runs no ads, they can go entirely.

Do not silently "fix" these in implementation — they are the client's legal text and the corrections are his call. Reproduce as-is and hand him the list.

### 10–13. Studio — owner only

Private, behind a login at a separate address, never linked from the public site. Shared top bar labelled "Studio bar" with four tabs. All four screens are built:

- **`Studio.dc.html` — New notation.** The publish flow: title, category chips, raga, thala, PDF uploads, video links. Beside it, exactly what publishing does (menu count, library card, generated lesson page, sitemap).
- **`Studio Enquiries.dc.html` — Enquiries.** Oldest-unanswered-first inbox with intent tags (lesson / booking / collaboration), student context chips (instrument, level, city and timezone), saved-reply templates, and a source breakdown showing two in three enquiries start on a free lesson page. Unanswered count badges in the bar.
- **`Studio Lessons.dc.html` — All lessons.** Table with drag handles for reordering within a category, status (Live / Draft), asset badges per lesson, an inline "needs attention" block for the six untitled 2023 imports, and a housekeeping prompt to consolidate the Drive/Dropbox split.
- **`Studio Categories.dc.html` — Categories.** The menu, editable. Four groups matching the four menu columns, drag to reorder, rename (old URL keeps working), hide, and add. States plainly which four surfaces a change propagates to, and blocks deleting a category that still holds lessons.

**Note on counts:** every count on these screens is hardcoded in the design. In implementation they must all derive from the lesson collection — see "The category requirement".

## The category requirement

This is the client's own stated priority, in his words: *"if I add a notation under Krithi, it should get added right to that menu."*

**Design implication:** categories and their counts are data, never markup. The nav panel, library filters, library section groupings, raga index, breadcrumbs and sitemap all derive from one lesson collection. Adding a lesson with `category: "Thillana"` must make Thillana's count go from 0 to 1 everywhere, with no code change.

**Current state of the designs:** the menu and filters are presentational. All 19 category links point at the library, unfiltered; the counts are hardcoded. This was deliberate — routing depends on the backend decision the client hasn't made. **Wiring this up is the first real implementation task.**

Suggested shape:

```ts
type Notation = { language: 'en' | 'ta'; url: string };
type PracticeTrack = { sruthi: 'C-1'|'D#-2.5'|'F-4'|'G#-5.5'|'A#-6.5'; speed: 1|2|3|'thrikaalam'; voice: 'violin'|'vocal'; url: string };
type LessonVideo = { label: string; youtubeId: string; voice: 'violin'|'vocal'; playlist?: string };

type Lesson = {
  slug: string;
  title: string;
  titleTamil?: string;
  category: CategorySlug;      // drives every menu, filter and count
  level?: number;              // Basics only, 1–5
  raga?: string;
  thala?: string;
  composer?: string;
  notation: Notation[];
  tracks: PracticeTrack[];
  videos: LessonVideo[];
  titleCard?: string;
  publishedAt: string;
  status: 'draft' | 'published';
};

type Category = { slug: string; name: string; group: 'basics'|'advanced'|'devotional'|'light'|'media'; order: number };
```

Counts come from `lessons.filter(l => l.category === c.slug && l.status === 'published').length`. Nothing else.

## Data

`data/` holds everything extracted from both live sites. Use it as the seed — **all copy is verbatim from the client's sites; do not rewrite it.**

- **`site-content.json`** — every page's copy: hero lines, the five-paragraph bio, mission (4) and vision (4), 4 testimonials, 12 honorific titles with meanings/bodies/years, 3 accolades, 5 qualifications, radio/stage/TV record, the complete Learn-the-Violin content, contact details.
- **`lessons.json`** — **all 22 lessons with real asset URLs.** Tamil + English notation PDFs, violin/vocal YouTube playlists and individual video ids, Drive audio tracks by sruthi and speed, high-res title cards, raga, thala, composer. This is your seed data.
- **`blog-sukapavalan.json`** — the old Blogger site: full 38-post index, taxonomy, the profile page (which carries a Television Programs section that appears nowhere on the newer site), and visitor comments.
- **`assets.json`** — 68-item remote media inventory, all hotlinkable from the current hosts.
- **`EXTRACTION-NOTES.md`** — content model findings and every defect found on the live sites.

**Notation hosting is currently split** — lessons up to 2021 use Google Drive, the 2023 batch uses Dropbox. Consolidate onto storage the site controls. Note that all current PDFs are public share links, so the library is effectively unprotected; that is fine while free, but it must change before any paid tier.

## Assets

- `assets/portrait-standing.jpeg` — homepage hero (object-position `50% 18%`)
- `assets/portrait-playing.jpeg` — Guru hero, Stage feature card
- `assets/portrait-seated.jpeg` — Stage gallery lead
- Client is supplying a replacement session. Awaited: 12 award-ceremony photographs, 15 archive gallery images, finger-position diagrams, and **the logo as vector** (only raster PNG exists).

## Interactions

- **Nav dropdown** — as specified above. The one piece of real interactivity on the public site.
- **Marquee** — 36s linear infinite, duplicated content, `will-change: transform`, disabled under reduced motion.
- **Hero entrance** — `rise` keyframe, 950ms `cubic-bezier(.16,1,.3,1)`, opacity + 24px translateY.
- **Lesson selectors** — notation language, sruthi, speed, violin/vocal. Local state; each swaps the active source.
- **Reduced motion** — a `prefers-reduced-motion` block already kills animations and makes the marquee static and wrapping. Preserve this.

## Responsive

`design/responsive.css` is the reference. Four bands, and the reasoning behind each matters more than the declarations:

| Band | Behaviour |
|---|---|
| **≤1024** | Multi-column grids collapse to 2 or 1. Sticky side rails go static. Hero arch caps at 380×460 and centres. Nav links become a nowrap sideways scroller. Dropdown goes 2-column and scrolls at `70vh` when open. |
| **≤830** | Nav becomes **one row**: the four secondary anchors hide (`[data-nav="links"] > a { display: none }`) because the dropdown panel already carries them as its fifth group. Wordmark drops to 17px. 44px tap floor on the trigger and wordmark. `overflow-x: clip` on html/body. |
| **≤720** | Everything single-column. Type steps down. Gutters 20px. Rails get phone-sized cards. 44px tap floor on the trigger, wordmark, and all panel links. |
| **≤380** | Nav gap 10px, wordmark 15px — the row measures ~342px intrinsic and needs the room. |

**Three traps in that file, all of which bit during design — worth knowing before you rewrite it in Tailwind:**

1. **`overflow-x: hidden` on `body` breaks the sticky nav.** `hidden` makes body a scroll container; a sticky element whose container never scrolls stops sticking. Use `clip`.
2. **`display: none` on the secondary anchors at ≤830 was silently cancelled** by a later `!important` tap-target rule with a byte-identical selector — media queries add no specificity, so source order won. Keep those anchors out of any tap-target selector list.
3. **Never use `order` to fix nav layout.** `order` does not affect tab order, so it desynchronises visual and focus order. Change DOM order or use a column stack instead.

In Tailwind these become ordinary responsive variants and most of the specificity risk disappears — but trap 1 is a browser behaviour, not a CSS-architecture problem, and still applies.

## Accessibility

Built in, worth preserving: `aria-expanded` / `aria-controls` / `aria-hidden` on the dropdown; keyboard operation (Enter, Space, Escape) on the trigger; `visibility: hidden` when closed so links leave the tab order; 44px minimum tap targets; AA contrast on all text; `aria-hidden` on the duplicated marquee content; DOM order matching visual order at every breakpoint.

Not yet done: focus-visible styling (the design has no focus ring — add one in gold), skip-to-content link, and a proper `<form>` with labels on the Enquire page (currently styled divs).

## Redirects

**Do not skip this.** The 38 old lesson URLs are on YouTube, in WhatsApp threads, and in Google's index. Every one needs a 301 to its new home or the existing audience is lost. `blog-sukapavalan.json` has the complete old-URL list with titles; map each to its new slug in `next.config.js`.

The client also needs to pick a canonical domain — recommendation is `sukapavalan.com` (his name, carries the search history), with `vspviolinrainbow.com` redirecting to it.

## Pending

**Design work not done:**
- **No rendered verification.** Roughly 17 attempts to screenshot or run JS in the preview timed out — a harness limitation, confirmed by isolating a page with no logic class and no stylesheet, which failed identically. Everything responsive is source-verified only. **Check the homepage and lesson page on a real phone and a small tablet before building on the responsive layer.**

**Client decisions still open** (detail in `strategy/Migration Plan.dc.html`):
1. **Self-publishing or not.** The Studio needs a login, a lessons database and file storage — a real second phase with a monthly cost, and full independence for him. The alternative is typed content files in the repo and he sends new lessons to a developer. This decision determines whether you build a CMS at all.
2. **Are fees published?** The design currently says "free trial" and names no price.
3. **Canonical domain.**
4. **Six 2023 lessons have no titles on the live site** — Mohanam Varnam, Enna Thavam, Maha Ganapathim, Lingashtagam, Poongathave, Ilayaraja Hits. Titles in the data were inferred from notation filenames and need confirming.

**Content defects to fix in transit** (all logged in `EXTRACTION-NOTES.md`): `Loreip` placeholder text sits in two live headlines; Kereya Neeranu shows the wrong lesson name in its body; Muththai Tharu carries Lesson 1's Tamil subheading; the experience figure appears as 37, 30+ and 25 years in different places (client confirmed **37**).

**One correction to a common assumption:** there is no admin panel on either existing site today. sukapavalan.com is Blogger, so "admin" means Google's dashboard; vspviolinrainbow.com has no admin at all, which is why its lesson lists render "Loading…" forever. The Studio is new work, not a migration. Also worth knowing: Blogger comments are currently open, and one visitor enquiry from July sits unanswered in a comment thread — the new site routes that to the enquiry form instead.

## Files

```
design/          9 page designs + responsive.css (+ support.js, the authoring runtime — ignore)
data/            All extracted content: site-content, lessons, blog index, assets, extraction notes
assets/          3 placeholder portraits
strategy/        Design Ideology (business case, audience, art direction)
                 Migration Plan (roles, workflows, migration decisions)
                 Build Audit (page-by-page status)
```

Suggested build order: content model and category derivation → Library and Lesson (the product) → shared nav and footer → remaining content pages → redirects → Studio, if the client says yes to self-publishing.
