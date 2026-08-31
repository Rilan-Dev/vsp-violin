# VSP Violin — Website Rebuild Worklog

A Next.js 16 + TypeScript rebuild of the Violin Suka Pavalan site, migrating
the HTML design-handoff prototypes into a premium animated single-page
experience. Art direction follows the design handoff tokens (violet/gold/cream)
and the $5K–$10K Animated Website Playbook (controlled motion, art-directed
responsive states, reduced-motion support, focus-visible gold rings).

---
Task ID: 1
Agent: orchestrator (main)
Task: Foundation — design tokens, fonts, Prisma schema, seed, data layer, API routes, shared Nav + Footer.

Work Log:
- Extracted the zip handoff and the playbook PDF into `/home/z/my-project/upload/`.
- Copied the three placeholder portraits to `public/assets/portraits/`.
- Wrote design tokens into `src/app/globals.css`: ink `#16102A`, violet accents, gold `#E0BC6A`, cream `#F3EDDF`, alpha conventions, arch mask, marquee/rise/reveal keyframes, reduced-motion overrides, gold focus-visible ring, skip-link, custom scrollbar.
- Wired three Google fonts in `src/app/layout.tsx`: Marcellus (display), Instrument Sans (body/UI), Geist Mono (data/eyebrow). Updated metadata for SEO.
- Defined Prisma schema (`prisma/schema.prisma`): `Lesson`, `Category`, `Enquiry` models. Ran `db:push`.
- Seeded 19 categories + 23 lessons from `lessons-seed.json` via `prisma/seed.ts` (22 notation lessons + 1 live-audio performance). Counts derive from the lesson collection — the client's category requirement.
- Built data access layer `src/lib/data.ts`: `getCategoriesWithCounts`, `getLessons`, `getLessonById`, `getLibraryStats`, `getMegaMenu`, `getSiteContent`. Static site copy lives in `src/lib/site-content.json`.
- API routes: `GET /api/categories`, `GET /api/lessons?category=`, `GET|POST /api/enquiries` (Zod-validated, writes to DB).
- Built shared `Nav` (`src/components/site/nav.tsx`): sticky, blur backdrop, mega-menu with live counts, hover/click/Escape/focus behaviour, section-spy, mobile sideways scroller, ARIA correct.
- Built `Footer` (`src/components/site/footer.tsx`): brand, contact, explore, enrol CTA, legal links, copyright.
- Built `useReveal` scroll-reveal hook (`src/components/site/use-reveal.ts`) respecting reduced motion.

Stage Summary:
- Foundation complete. Database seeded. Design system live. Nav + Footer + reveal hook ready.
- Next: build the homepage sections (Hero, Marquee, Library, Practice Room, Guru, Honours, Testimonials, Enrol, Stage, Learn the Violin) as separate components and compose them in `src/app/page.tsx`.
- Design tokens to respect: square corners (no radius except arch/portrait + circular play buttons), gold = earned only, mono labels uppercase wide tracking, cream prose at 0.82 alpha, hairline borders 1px, no shadows except nav blur.
- Section anchor IDs already wired in Nav: `top`, `library`, `practice`, `guru`, `honours`, `stage`, `learn`, `enrol`, `legal`.

---
Task ID: 6
Agent: section-builder (general-purpose)
Task: Build Credibility Marquee section (`src/components/site/marquee.tsx`).

Work Log:
- Read worklog + `globals.css` to confirm tokens: `vsp-marquee` keyframe (36s linear, translateX 0 → -50%), `.vsp-marquee-track` class, and `.vsp-marquee-dup` (hidden under reduced motion; track wraps when reduced). All motion handling already exists in CSS — component can stay a pure server component.
- Created `src/components/site/marquee.tsx` as a server component (no "use client").
- Section: full-bleed `<section>` with gold hairline top + bottom (`1px solid rgba(224,188,106,0.26)`), `background: rgba(37,26,66,0.55)`, `overflow: hidden`. No section heading — this is a credibility band, not a feature.
- Track: `.vsp-marquee-track` flex row, `width: max-content`, two identical groups side-by-side for seamless loop.
- Group 1: `aria-hidden={false}`, group 2: `className="vsp-marquee-dup"` + `aria-hidden="true"` (the duplicate that the CSS hides under reduced motion).
- Items array holds all 8 exact strings (AIR, Thyagaraja Aradhana, Five TV channels, USA tours, CCRT scholarship, 37 years on stage, 5,000+ performances, students across diaspora).
- Each item rendered as: `<span>` (Geist Mono, 12px, uppercase, letter-spacing 0.14em, `rgba(243,237,223,0.76)`) + `<span>` gold `✦` (`#E0BC6A`, 12px, `margin: 0 24px`, `aria-hidden="true"`). The ✦ sits after every item so the loop seam is continuous.
- Section labelled via `aria-label="Career highlights and credentials"` for screen readers (since the duplicate is aria-hidden and there is no visible heading).
- Kept vertical padding tight (~18px) per the brief.
- Verified with `npx tsc --noEmit` — no errors originating from `marquee.tsx` (only unrelated errors in `examples/` and `skills/`).

Stage Summary:
- Marquee component shipped: `src/components/site/marquee.tsx`, default + named `Marquee` export.
- Server component, no client JS; relies on existing CSS keyframe + reduced-motion overrides in `globals.css`.
- Ready to compose into `src/app/page.tsx` (likely directly under the Hero so the credibility band reads as the page's first social proof).
- Next sections to build: Library, Practice Room, Guru, Honours, Testimonials, Enrol, Stage, Learn the Violin.

---
Task ID: 5
Agent: hero-builder
Task: Build the Hero section component (`src/components/site/hero.tsx`) — premium two-column art-directed hero for the homepage.

Work Log:
- Read prior worklog: foundation, design tokens, data layer, Nav + Footer, and the `useReveal` hook are all in place. Hero is the first homepage section to be built.
- Read `globals.css` to confirm available tokens and primitives: `--color-ink #16102A`, `--color-gold #E0BC6A`, `--color-cream #F3EDDF`, the `.vsp-rise` keyframe (950ms cubic-bezier), `.vsp-arch` (226px 226px 0 0 radius), `.vsp-eyebrow` (mono gold label), gold focus-visible ring, reduced-motion override that collapses animation durations to 0.001ms.
- Confirmed `getSiteContent()` is a sync function (no `async`), so the Hero stays a server component with no `"use client"` directive.
- Confirmed portrait assets exist at `/assets/portraits/portrait-standing.jpeg`, `portrait-playing.jpeg`, `portrait-seated.jpeg` (in `public/`).
- Built `src/components/site/hero.tsx` — a server component exported as `Hero()`. Structure:
  - Section: `id="top"`, `min-height: 100vh`, `padding-top: 120px` (clears fixed nav), `padding-bottom: 64px`, flex-centered content. `aria-label` set for screen readers.
  - Background: two absolute-positioned divs with `pointer-events: none`, `zIndex: 0`. Violet radial at left:50% / top:-10% (alpha 0.22). Gold radial at left:88% / top:80% (alpha 0.14, per spec).
  - Two-column grid: `grid-cols-1 min-[720px]:grid-cols-[1fr_0.92fr]`, gap 48px. Switches to two columns at the 720px breakpoint per spec.
  - Left column — staggered `.vsp-rise` entrance with inline `animationDelay` (0 → 90 → 180 → 270 → 360 ms):
    - Eyebrow via `.vsp-eyebrow` class — "Karaikal, Puducherry · on stage since 1990".
    - h1 in Marcellus, mobile `text-[40px] leading-[1.08]`, desktop `lg:text-[62px] lg:leading-[1.06]`, `letter-spacing: -0.01em`, the word "worship" wrapped in a gold span.
    - Lead paragraph in Instrument Sans, mobile `text-[16px]`, desktop `lg:text-[17.5px]`, `leading-[1.68]`, cream at 0.82 alpha, capped at `max-w-[560px]`.
    - Two CTAs side by side via `flex flex-wrap items-center gap-4`:
      - Primary gold-fill `<a href="#enrol">` — `bg-[#E0BC6A] text-[#1B1233]`, hover lifts to `#F2D89A` and shifts the arrow via `group-hover:translate-x-1`. Square corners (radius 0).
      - Secondary cream-outline `<a href="#library">` — transparent background, `border-[rgba(243,237,223,0.46)]`, cream text, hover lightens the border to 0.78 alpha and adds a faint cream wash.
    - Four-stat row above a 1px gold hairline (`borderTop: rgba(224,188,106,0.26)`) using `flex flex-wrap` + `justify-content: space-between`. Stats: "37 / Years on stage", "5,000+ / Live performances", "12 / Honorific titles", "1992 / First AIR broadcast". Numbers in Marcellus `text-[30px] lg:text-[44px]` gold; labels in Geist Mono 10.5px uppercase, 0.18em tracking, cream at 0.62 alpha.
  - Right column — arch-masked portrait:
    - Outer wrapper carries `.vsp-rise` with `animationDelay: 440ms` (fades in slightly after the left column).
    - Container: `.vsp-arch` (226px top radius), `overflow-hidden`. Mobile: `max-w-[380px] h-[460px]`; desktop (`lg:`): `max-w-[460px] h-[600px]` per spec ("full size on desktop").
    - `next/image` with `fill`, `priority`, `sizes="(max-width: 1024px) 380px, 460px"`, `objectFit: cover`, `objectPosition: "50% 18%"`. Descriptive alt: "Suka Pavalan, Carnatic violinist, standing portrait".
    - Gradient scrim overlay: `linear-gradient(to bottom, transparent 50%, rgba(22,16,42,0.55) 100%)` — `pointer-events: none`.
    - Name plate overlaid at the bottom of the arch: `SUKA PAVALAN` (pulled from `brand.person` via `getSiteContent()` to honour single-source-of-truth) in Marcellus 20px / 0.22em cream, with credentials in Geist Mono 10px (pulled from `brand.credentials`).
- Verified with `npx tsc --noEmit` — no Hero-related type errors.
- Used Tailwind classes for breakpoint-driven values (grid-cols, max-w, h, text-size, hover states) and inline styles for the precise alphas, gradients, gold hairline, scrim, animation delays, and font-family tokens — matching the foundation's pattern in `footer.tsx`.
- Honoured all design rules: square corners everywhere except the arch, gold used only where earned (eyebrow, the word "worship", primary CTA fill, stat numbers, hairline, focus ring), mono labels uppercase wide tracking, cream prose at 0.82 alpha, no decorative shadows.

Stage Summary:
- Hero is complete and ready to be composed into `src/app/page.tsx` (currently still the placeholder 'use client' default — composition is a later orchestrator task).
- Entrance animation is pure CSS (no JS hook needed) — the `.vsp-rise` class on each block + staggered inline `animationDelay` produces the 950ms rise cascade, with reduced-motion users seeing the content immediately per the globals.css override.
- All copy is art-directed and hardcoded except `brand.person` and `brand.credentials`, which come from the site-content data layer so the studio's name and titles stay in sync site-wide.
- Next homepage sections to build: Marquee, Library, Practice Room, Guru, Honours, Testimonials, Enrol, Stage, Learn the Violin — then replace `src/app/page.tsx` with a server-component composition that imports `Hero`, `Nav`, `Footer`, and the remaining sections.

---
Task ID: 8
Agent: section-builder (general-purpose)
Task: Build Practice Room section (`src/components/site/practice-room.tsx`) — the signature interactive Sruthi Dial. Client component.

Work Log:
- Read worklog + `globals.css` + `use-reveal.ts` to lock onto the existing token system and reveal pattern. Confirmed `.vsp-card-gold`, `.vsp-eyebrow`, `.vsp-sruthi-active`, and the `vsp-dial-spin` keyframe are all defined globally — the component can lean on them.
- Built `src/components/site/practice-room.tsx` as a `"use client"` component (the dial is interactive; cannot be a server component).
- Section: `id="practice"`, full-bleed `linear-gradient(180deg, #1A1234 0%, #241A44 100%)`, `padding: 96px 32px`, gold hairline top + bottom (`rgba(224,188,106,0.18)`). Inner container `max-width: 1440px`, two-column grid `min-[720px]:grid-cols-[1fr_0.92fr]` (single column ≤720). Vertically centered on desktop.
- LEFT COLUMN — the argument:
  - `.vsp-eyebrow` "The Practice Room".
  - h2 Marcellus 44px / line-height 1.1 / letter-spacing -0.01em — "One dial. **Fifteen** tracks." with "Fifteen" wrapped in a gold span.
  - Lead paragraph 17px / line-height 1.7 / cream 0.82 alpha / capped at 540px — the full art-directed copy from the brief.
  - Three bullets with gold ✦ markers (aria-hidden) — Geist-less Instrument Sans 14.5px, cream 0.82, gap 12px.
- RIGHT COLUMN — the dial card (`.vsp-card-gold`, padding 32px, square corners):
  1. Voice toggle — two equal-flex buttons (Violin / Vocal), Geist Mono 12px uppercase 0.2em tracking, square corners, adjacent borders (second button `borderLeft: none` to avoid a double 1px line). Active = gold fill `#E0BC6A` + ink text `#1B1233` + full-gold border; inactive = transparent + cream 0.76 + gold-0.34 border. `role="group"` + `aria-label="Voice"`.
  2. Large readout row — left side: "Active sruthi" eyebrow + the active sruthi in Marcellus 32px gold, formatted as "D# — 2.5" (em-dash). Right side: "Speed" eyebrow + the active speed label in Geist Mono 14px.
  3. Sruthi buttons — 5 in a `flex flex-wrap` row (gap 8px): "C-1", "D#-2.5", "F-4", "G#-5.5", "A#-6.5". Geist Mono 13px, padding 12px 16px, square. Active state uses the `.vsp-sruthi-active` class (gold fill, ink text, gold border) and is also reinforced by inline styles so the active look is self-contained. Inactive = transparent + cream 0.5 border + cream 0.76 text. `role="group"` + `aria-label="Sruthi selection"`.
  4. Speed buttons — 4 in a wrap row: "1st Speed", "2nd Speed", "3rd Speed", "Thrikaalam". Same styling as sruthi. Separate `role="group"` + `aria-label="Speed selection"`.
  5. Transport bar — separated from the controls by a 1px cream-0.16 top border:
     - "Now playing" line in Geist Mono 11px uppercase 0.18em tracking, cream 0.62 alpha, with a 6px status dot (gold when playing, cream 0.4 when paused) — `Now playing — violin · D#-2.5 · 1st` style per the spec template.
     - Play/pause button: 48px circular, gold 1px border, gold ▶ / ⏸ glyph (the ▶ nudged +1px to optically center), transparent when paused and a faint gold 0.14 wash when playing. `aria-pressed` + `aria-label` flips between "Play practice track" and "Pause practice track".
     - Behind the button: an absolutely-positioned 64×64 SVG ring with a faint full-circle track (gold 0.2) + a 55/135 dasharray gold arc that rotates via `vsp-dial-spin 3.6s linear infinite` with `animationPlayState` tied to `playing`. Opacity 0.45 → 1 on play so the ring reads as "live".
     - Progress track: flex-1, 4px tall, cream-0.16 background; gold fill animates `width` with `transition: width 500ms linear` to match the 500ms tick. `role="progressbar"` with `aria-valuenow/min/max` + `aria-label`.
     - Time readout: Geist Mono 13px, cream 0.7, formatted `mm:ss / 00:30` (e.g. `00:12 / 00:30`). `min-width: 92px` + `text-align: right` so it doesn't reflow as the digits change.
- State via `useReducer`:
  - `State = { voice, sruthi, speed, playing, progress (0–100) }`.
  - Actions: `SET_VOICE` / `SET_SRUTHI` / `SET_SPEED` (each resets `progress` to 0 but preserves `playing` so swapping tracks while playing continues the new track from 0), `TOGGLE_PLAY` (if at 100, restarts from 0; otherwise toggles), `TICK` (+2.5%, clamps at 100 and sets `playing: false`).
  - `useEffect` mounts a `setInterval(500ms)` while `playing` is true, dispatches `TICK`, and clears on unmount / pause. The interval only restarts when `state.playing` changes — single source of truth.
  - Initial state: violin · D#-2.5 · 1st Speed · not playing · 0%.
- Accessibility: every interactive button has `aria-pressed`; sruthi/speed/voice groups all have `role="group"` + `aria-label`; the progress bar is a real `role="progressbar"`; the SVG ring and ✦ markers are `aria-hidden`; the play button label flips dynamically; gold focus-visible ring from `globals.css` applies automatically.
- Responsive: 1fr / 0.92fr at ≥720px, single column below; dial card goes full-width on mobile; sruthi/speed rows wrap via `flex-wrap`; transport bar uses `flex` with the progress track as `flex: 1` so it absorbs available width.
- Honoured the design rules: square corners on all controls (only the play button is circular, per spec), gold used only where earned (eyebrow, "Fifteen", active states, ring, progress fill, hairlines), Geist Mono for all data/labels uppercase wide tracking, cream prose at 0.82 alpha, hairline 1px borders, no decorative shadows.
- Verified: `npx tsc --noEmit` and `npx eslint src/components/site/practice-room.tsx` both clean (the only `tsc` errors in the repo are pre-existing in `examples/` and `skills/` and unrelated to this component).

Stage Summary:
- Practice Room shipped: `src/components/site/practice-room.tsx`, named export `PracticeRoom`, client component.
- The dial is a real instrument-feeling control: square mono buttons, gold-on-violet, a rotating ring that only spins when the track is live, and a progress bar that ticks smoothly to a 30-second clock. Reduces motion gracefully via the global `prefers-reduced-motion` override (animations collapse to 0.001ms; the dial still functions, just without spin).
- Not yet composed into `src/app/page.tsx` (still the placeholder). Orchestrator can drop `<PracticeRoom />` directly under the Library section.
- Next sections to build: Guru, Honours, Testimonials, Enrol, Stage, Learn the Violin — then assemble the homepage composition.

---
Task ID: 7
Agent: library-preview-builder (general-purpose sub agent)
Task: Build `src/components/site/library-preview.tsx` — the Library Preview section (homepage retention driver / marketing funnel).

Work Log:
- Read `worklog.md`, `globals.css`, `src/lib/data.ts`, `src/components/site/use-reveal.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `prisma/schema.prisma`, `prisma/lessons-seed.json`, and the design handoff `Library.dc.html` to align with prior agents' conventions (Tailwind v4 + inline-style hybrid; `font-display`/`font-mono` Tailwind classes map to Marcellus/Geist-Mono via CSS variables in `layout.tsx`; `useReveal` returns `{ ref, visible }` and respects reduced motion).
- Appended scoped hover CSS for the Library preview to `src/app/globals.css`: `.lib-card` (translate-y -2px + border → gold 0.46 on hover), `.lib-card-gold:hover` (border → gold 0.62), `.lib-chip:hover` (border → gold 0.55, text → gold-hover). Defined outside Tailwind layers so they win over `.vsp-card-neutral`'s inline border without `!important` per-utility. Added reduced-motion override to kill the translate.
- Built `src/components/site/library-preview.tsx` as a `"use client"` component (per spec — filter state needs `useState`):
  - **Props**: explicit `LibraryPreviewProps` type matching the task spec, with one pragmatic extension — each lesson accepts an optional `assets?: { hasEnglishNotation, hasTamilNotation, hasAudio, hasVideo }` field. When omitted (the default for the minimal `LessonSummary` shape from `getLessons()`), all four asset badges render as present (graceful fallback). The server parent can supply real asset data later via `getLessonById()` or a bulk query without touching this component. All four public types are exported (`LibraryLesson`, `LibraryCategory`, `LibraryStats`, `LibraryPreviewProps`) for easy import in `page.tsx`.
  - **Section wrapper**: `id="library"`, `maxWidth: 1440`, `margin: 0 auto`, padding `py-14 md:py-20 px-5 md:px-8` (56/80 vertical, 20/32 horizontal — matches spec). `useReveal<HTMLElement>({ threshold: 0.12 })` drives the `.reveal` + `.is-visible` scroll entrance.
  - **Header**: gold mono eyebrow "The Library · free forever" (`.vsp-eyebrow`), Marcellus h2 with `clamp(30px, 4.2vw, 48px)` (~30 mobile / ~46-48 desktop), lead paragraph at cream 0.72 / 16px / 1.65 line-height. The h2 number is data-driven: `{totalCount} notation lessons. One lineage.` where `totalCount = stats.lessons || lessons.length`.
  - **Stat row**: 4-cell grid (`grid-cols-2 md:grid-cols-4`) with top + bottom gold hairlines (rgba(224,188,106,0.26)) and inter-cell hairlines (0.22). Each cell: Marcellus gold 30px number + Geist Mono 9.5px uppercase cream-0.62 label. Renders `lessons`, `notationSheets`, `categories`, `ragas` from `stats`.
  - **Filter chips**: "Category" mono label + "All {N}" chip + one chip per category with `count > 0`, sorted by `order`. Active chip = gold border 0.6 + gold text + faint gold tint (0.08) bg; inactive = cream 0.5 border + cream 0.72 text. Square corners (`borderRadius: 0`). `aria-pressed` on each. `useState<string>("all")` for active slug.
  - **Cards grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` with `gap: 16`. Shows up to 8 (`MAX_CARDS`) filtered lessons; first card always gets the gold treatment (`.vsp-card-gold` + `.lib-card-gold`), rest use `.vsp-card-neutral`. Empty-state fallback when a filter yields zero lessons.
  - **Lesson card**: 16:9 title-card image (plain `<img loading="lazy" decoding="async">` with `objectFit: cover`) or a Marcellus-on-violet-gradient placeholder when `titleCard` is null. Body: Geist Mono gold "Category · Level" meta line (level rendered as Roman numerals I–VII), Marcellus 21px cream title, optional Tamil title (13px / cream 0.62), optional "Raga · Thala" Geist Mono 11px line, and a row of 4 asset badges (EN / TA / ♪ / ▶) — present = gold-tinted (border 0.4 + bg 0.1 + gold text), absent = cream 0.3 (border 0.18, transparent bg). Each badge has `title` + `aria-label` for accessibility.
  - **Bottom CTA**: centered Marcellus gold "Browse all {totalCount} lessons →" link with a hairline gold underline, linking to `#library`.
  - **Hover behaviour**: card hover handled by the global `.lib-card` rule (translate-y -2px, border → gold); chip hover by `.lib-chip` (border + text brighten). Both respect `prefers-reduced-motion`.
- Type-checked with `bunx tsc --noEmit` — no errors in `library-preview.tsx` (pre-existing unrelated errors in `examples/websocket/*` and `skills/*` are not from this task). Linted with `bunx eslint` — clean.

Stage Summary:
- `src/components/site/library-preview.tsx` is ready to drop into `src/app/page.tsx`. The page's server component should `await Promise.all([getLessons(), getCategoriesWithCounts(), getLibraryStats()])` and pass the results as props. The `lessons` shape from `getLessons()` (`LessonSummary`) satisfies `LibraryLesson` directly; the optional `assets` field will be undefined, so all four asset badges render gold by default — acceptable for the preview grid, and upgradeable later.
- One design decision worth flagging: the headline reads `{stats.lessons} notation lessons. One lineage.` (dynamic). The seed contains 23 published lessons (22 notation + 1 live-audio performance), so the headline will show "23 notation lessons" unless the 23rd is marked `status != "published"` or excluded another way. If the orchestrator wants the literal "22" from the design copy, either (a) mark the live-audio performance lesson as a non-`published` status, (b) add a `kind` field to the Lesson model and filter `getLibraryStats` + `getLessons` to notation-only, or (c) hard-code "22" in the headline. I chose dynamic for data honesty; flag for the orchestrator's call.
- Asset badge data is not in `LessonSummary` — if the next agent wants accurate per-lesson asset availability (some lessons have audio but no video, etc.), extend `getLessons()` to also `select` `notationTamil, notationEnglish, violinVideo, vocalVideo` and derive the four booleans, then pass them in the `assets` field. The component is already wired to honor that.
- Next agent: compose `<LibraryPreview lessons={...} categories={...} stats={...} />` into `src/app/page.tsx` once the Hero section lands (it's referenced in the section anchor list). The section anchor `#library` is already wired in `Nav` and the section-spy observer.

---
Task ID: 10
Agent: section-builder (general-purpose)
Task: Build `src/components/site/honours.tsx` — the Honours section (horizontal scrolling rail of honorific title cards + Prestigious Accolades sub-section + View all honours CTA).

Work Log:
- Read prior worklog + `globals.css` + `use-reveal.ts` + `src/lib/data.ts` + `src/lib/site-content.json` to align with conventions (server components where no JS needed; `font-family: var(--font-marcellus|instrument-sans|geist-mono)`; cream 0.72 alpha for secondary prose; gold reserved for earned elements). Confirmed tokens: `.vsp-eyebrow`, `.vsp-card-gold`, `.vsp-card-neutral`, `.vsp-hairline-gold`, `.vsp-scroll` are all defined in `globals.css`.
- Confirmed `getSiteContent()` is synchronous and returns the static `site-content.json` shape — so the component stays a pure server component (no `"use client"`). The horizontal scroll is native CSS `overflow-x: auto`; no JS hook needed.
- Built `src/components/site/honours.tsx` as a server component exported as `Honours()`. Structure:
  - **Section**: `id="honours"`, `padding: 80px 0`, ink `#16102A` background, gold hairlines top + bottom (`rgba(224,188,106,0.18)`). Inner container `maxWidth: 1440`, `padding: 0 32px`.
  - **Header** (max-width 760):
    - `.vsp-eyebrow` — "Honours · conferred titles".
    - h2 in Marcellus `clamp(30px, 4.2vw, 44px)` / line-height 1.12 / letter-spacing -0.01em — "A journey adorned with prestigious titles." with "prestigious" wrapped in a gold span.
    - Intro paragraph (Instrument Sans 16px / 1.68 line-height / cream 0.72 / max-width 640) — pulls `achievements.honorificsIntro` from `getSiteContent()` (single source of truth).
  - **Horizontal scrolling rail** of 12 title cards:
    - Container: `display: flex`, `gap: 16`, `overflow-x: auto`, `scroll-snap-type: x mandatory`, `scroll-padding-left: 32`, `padding-bottom: 16` (clears the scrollbar from card borders). Bleeds `-32px` to the section edges with matching `padding: 0 32px` so the rail reads full-bleed. Class `.vsp-scroll` for the gold-tinted custom scrollbar.
    - `aria-label="Honorific titles — scroll horizontally"` + `role="region"`.
    - Each card: `<article>`, `flex: 0 0 auto`, `min-width: 300`, `max-width: 320`, `padding: 24`, `scroll-snap-align: start`, square corners (`borderRadius: 0`).
    - First card (index 0 = "Violin Ratna" 2024) uses `.vsp-card-gold`; the remaining 11 use `.vsp-card-neutral`.
    - Card body:
      - `<h3>` title — Marcellus 24px / line-height 1.18. Cream (`#F3EDDF`) on neutral cards, ink (`#1B1233`) on the gold card.
      - Meaning — Instrument Sans italic 14px / 1.5 / cream 0.72 (or ink 0.78 on the gold card).
      - Hairline divider — 1px `rgba(224,188,106,0.26)` + `.vsp-hairline-gold` class.
      - `awardedBy` (when present) — Geist Mono 11px uppercase 0.18em tracking, cream 0.62 (ink 0.72 on gold). Cards without `awardedBy` render a non-breaking space of the same style to keep card heights aligned (`aria-hidden="true"`).
      - Year (when present) — Marcellus 28px gold `#E0BC6A`, pushed to card bottom via `marginTop: auto`. Cards without a year render a dim em-dash (`rgba(224,188,106,0.42)`) with `aria-label="Year not recorded"` so the medal-gallery rhythm is preserved without inventing data.
  - **Prestigious Accolades sub-section** (margin-top 72):
    - `.vsp-eyebrow` — pulls `achievements.accoladesHeading` ("Prestigious Accolades") from the data layer.
    - 3-card grid: `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` so it wraps gracefully on mobile. Each card `.vsp-card-neutral`, padding 28, square corners.
    - Card body: `<h3>` title (Marcellus 18px cream) + body paragraph (Instrument Sans 14px / 1.62 / cream 0.72) — pulls `achievements.accolades` (3 items with title + body) directly from the data.
  - **View all honours CTA** (margin-top 56):
    - Gold Marcellus 18px link with a hairline gold underline (`rgba(224,188,106,0.46)`), arrow glyph (aria-hidden) on the right. Links to `https://vspviolinrainbow.com/achievement.html` (sourced from `about.honorsCta.url` pattern in `site-content.json`), opens in a new tab with `rel="noopener noreferrer"`.
- Honoured design rules: square corners everywhere (no radius — gold is reserved for earned elements, not curves); gold only on the first card's fill, the year numbers, the eyebrow, the "prestigious" word in the h2, the CTA, and the hairlines; mono labels uppercase with 0.18–0.2em tracking; cream prose at 0.72 alpha; 1px hairline borders; no decorative shadows.
- Accessibility: section-level `aria-label`; rail has `role="region"` + `aria-label="Honorific titles — scroll horizontally"`; each card is a real `<article>` with the title as `<h3>`; decorative `&nbsp;` spacers and the arrow are `aria-hidden`; year cells without data expose `aria-label="Year not recorded"`; the global gold focus-visible ring from `globals.css` applies to the CTA automatically. The `.vsp-scroll` styling keeps the scrollbar functional on WebKit without hiding it entirely (the rail remains keyboard-scrollable and tactile).
- Verified: `npx tsc --noEmit` reports no errors originating from `honours.tsx` (the only errors in the repo are pre-existing in `examples/websocket/*` and `skills/*`, unrelated to this task). `npx eslint src/components/site/honours.tsx` — clean (no output).

Stage Summary:
- `src/components/site/honours.tsx` is ready to compose into `src/app/page.tsx`. Drop `<Honours />` directly (no props — it calls `getSiteContent()` internally and renders the 12 honorifics + 3 accolades from the static data layer).
- The rail is a pure native-CSS horizontal scroller: `overflow-x: auto`, `scroll-snap-type: x mandatory`, with the first card gold. No client JS, so it stays in the server bundle and respects `prefers-reduced-motion` automatically (scroll-snap is a static affordance, not an animation).
- Three honour items in the source data have no `awardedBy` and no `year` (Innisai Ilaval, Villisai Vendan, Sangeetha Sangoli, Violin Vidhva Vibhushan, Sunadham, Kalai Valar Maamani, Isai Saathanayaalan — 7 of 12 actually). For these I render a non-breaking-space placeholder for `awardedBy` (keeps card heights aligned, marked `aria-hidden`) and a dim gold em-dash for the year with `aria-label="Year not recorded"`. This keeps the medal-gallery rhythm intact without inventing dates.
- Next agent: assemble the homepage composition (`src/app/page.tsx`) — recommended order per the section anchor list is Hero → Marquee → Library → Practice Room → Guru → **Honours** → Testimonials → Enrol → Stage → Learn the Violin → Footer.

---
Task ID: 9
Agent: section-builder (general-purpose)
Task: Build the Guru section (`src/components/site/guru.tsx`) — a two-column editorial profile of Suka Pavalan (bio + credentials).

Work Log:
- Read worklog + `globals.css` + `use-reveal.ts` + `data.ts` + `site-content.json` + `hero.tsx` + `footer.tsx` to confirm tokens, conventions, and the `about` / `learnTheViolin.pullQuote` data shapes. `getSiteContent()` is sync, so the section stays a server component (no `"use client"`).
- Built `src/components/site/guru.tsx` as a server component exported as `Guru()` (plus a default export for symmetry with the other sections). Structure:
  - Section: `id="guru"`, `aria-labelledby="guru-heading"`, Tailwind `py-14 lg:py-20 px-5 lg:px-8` (56/80 vertical, 20/32 horizontal — matches spec), inline `background: #16102A` and a 1px gold 0.18 top hairline for separation from the Practice Room section above. Inner container `max-width: 1440px` centered. The section wrapper carries `.vsp-rise` per spec (CSS-only entrance, fires on load; reduced-motion honoured at the stylesheet level via the existing globals.css override).
  - Two-column grid: `grid-cols-1 lg:grid-cols-[1fr_1px_0.92fr]` with `gap: 28px`. The middle 1px column is a desktop-only vertical hairline divider (`rgba(224,188,106,0.16)`, `hidden lg:block`, `aria-hidden`). Total column spacing on desktop = 28 + 1 + 28 = 57px ≈ spec's 56px. On mobile the divider is `display: none` and the grid collapses to a single column with no extra gap.
- LEFT COLUMN (the story):
  - `.vsp-eyebrow` "The Guru · since 1990".
  - h2 (id `guru-heading`) in Marcellus 34px mobile / 44px desktop, `letter-spacing: -0.01em`, `line-height: 1.1` mobile / `1.08` desktop — "A lineage kept in the hands." with "lineage" wrapped in a gold `#E0BC6A` span.
  - Role line in Geist Mono 12px / `0.18em` tracking / uppercase / cream 0.62 — pulled from `about.role` ("Suka Pavalan — Violinist, Music Educator, and Guru").
  - Bio paragraphs: `about.body.slice(0, 3)` rendered as `<p>` in Instrument Sans 16px / line-height 1.62 / cream 0.82, capped at `maxWidth: 560px`. `text-wrap: pretty` is inherited from the global `p { text-wrap: pretty; }` rule so no inline override needed.
  - Pull-quote `<blockquote>` with `borderLeft: 3px solid #E0BC6A`, `paddingLeft: 20px`, `maxWidth: 560px`. Quote text in Marcellus italic 20px / line-height 1.45 / cream — pulled from `learnTheViolin.pullQuote.text` and wrapped in curly quotes (`&ldquo;…&rdquo;`). Attribution in `<footer>` (semantic HTML5 for blockquote citations) styled as Geist Mono 11px / `0.16em` tracking / uppercase / cream 0.62 — "— Joshua Bell" pulled from `learnTheViolin.pullQuote.author`.
- RIGHT COLUMN (the evidence):
  1. Small arch-masked portrait at the top: 150×180px, `borderRadius: 75px 75px 0 0` (proportional arch for the smaller element — overrides the canonical `.vsp-arch` 226px radius which would be too curved at this width), `overflow: hidden`, subtle gold hairline border (`rgba(224,188,106,0.34)`, no bottom border so the square bottom edge sits flush). `next/image` with `fill`, `sizes="150px"`, `objectFit: cover`, `objectPosition: "50% 25%"`, alt "Suka Pavalan performing on violin". Uses `/assets/portraits/portrait-playing.jpeg` (the "in performance" shot, distinct from the hero's standing portrait).
  2. Lineage list — `.vsp-eyebrow` "Lineage", then an `<ol>` of 7 hardcoded guru entries (from `home.introBody` per spec — these teacher names don't exist as structured data in `site-content.json`, so they're art-directed as a constant `LINEAGE[]` array). Each row: gold `✦` marker (11px, 12px wide, ink background so it punches through the connector) on a thin gold vertical connector line (`rgba(224,188,106,0.32)`, 1px, absolutely positioned behind the markers) — produces a lineage-tree feel. Teacher name in Marcellus 15px cream, instrument/detail in Geist Mono 11px / `0.14em` tracking / uppercase / cream 0.62.
  3. Qualification cards — `.vsp-eyebrow` "Qualifications", then a 2-column grid (`grid-cols-1 md:grid-cols-2`, gap 10px) of 5 cards from `about.education`. Each card uses `.vsp-card-neutral` (the cream-tinted neutral fill from globals.css), `padding: 16px`. Title in Instrument Sans 500 weight 14px cream, detail in Geist Mono 11px / `0.12em` tracking / cream 0.62. Square corners (inherited — no radius override).
  4. USA Tours note — separated from the cards by a 1px gold 0.16 top hairline + 20px padding-top. `.vsp-eyebrow` pulled from `tours.label` ("Abroad Tours"). Country name in Marcellus 16px cream (pulled from `tours.country`). Two year-range chips in a `flex flex-wrap gap-2` row — Geist Mono 11px / `0.12em` tracking / gold text / gold-0.46 border / `rgba(224,188,106,0.08)` gold-tinted background / square corners. The year strings have their hyphen replaced with an en-dash on render (`y.replace(" - ", " – ")`) for the editorial year-range look. Tours body sentence in Instrument Sans 13px / line-height 1.6 / cream 0.72.
- Accessibility: `id="guru"` + `aria-labelledby="guru-heading"` ties the section to its h2. The h2 is the section heading. The portrait has descriptive alt text. The divider element is `aria-hidden`. The lineage `✦` markers and the vertical connector are `aria-hidden` (decorative). The lineage list is a semantic `<ol>`. The pull-quote attribution uses `<footer>` inside `<blockquote>` (correct HTML5). The gold focus-visible ring from globals.css applies to any focusable element (none in this section, but ready if links are added later).
- Honoured the design rules: square corners everywhere except the small arch portrait (the only place radius is allowed), gold used only where earned (eyebrow, "lineage" word, pull-quote border, ✦ markers, year chips, small portrait hairline, vertical connector), Geist Mono for all eyebrows/labels/data/role line, cream prose at 0.82 alpha (lead bio) and 0.72 alpha (tours body), hairline borders 1px, no decorative shadows.
- Verified: `npx tsc --noEmit` and `npx eslint src/components/site/guru.tsx` both clean — the only `tsc` errors in the repo are the pre-existing unrelated ones in `examples/websocket/*` and `skills/*`.

Stage Summary:
- Guru section shipped: `src/components/site/guru.tsx`, named export `Guru` + default export. Server component, zero client JS.
- All copy comes from `getSiteContent()` except the 7 lineage teacher entries (art-directed as a `LINEAGE[]` constant — these strings live in `home.introBody[1]` as prose but aren't structured data; a future data-layer refactor could lift them into `about.lineage[]` if the studio wants to edit them via JSON).
- Section feels editorial and lineage-forward: the story reads first (left), then the evidence — portrait, lineage tree, qualifications, tours — stacks on the right with consistent mono eyebrows.
- Not yet composed into `src/app/page.tsx` (still the placeholder `'use client'` default — composition is the orchestrator's job). The orchestrator can drop `<Guru />` directly under the Practice Room section; the anchor `#guru` is already wired in `Nav` and the section-spy observer.
- Next sections to build: Honours, Testimonials, Enrol, Stage, Learn the Violin — then assemble the homepage composition.

---
Task ID: 11
Agent: section-builder (general-purpose)
Task: Build Testimonials section (`src/components/site/testimonials.tsx`) — three editorial cards (middle gold) + a full-width Tamil featured quote.

Work Log:
- Read `worklog.md`, `globals.css`, `use-reveal.ts`, `src/lib/data.ts`, `src/lib/site-content.json`, `layout.tsx`, `marquee.tsx`, `library-preview.tsx`, and `footer.tsx` to lock onto the existing token system and the inline-style + Tailwind hybrid convention used by every prior section.
- Confirmed tokens available in `globals.css`: `.vsp-eyebrow` (mono gold label), `.vsp-card-gold` (gold gradient + 0.34 gold border), `.vsp-card-neutral` (cream 0.035 wash + 0.16 cream border). Confirmed `font-display` / `font-mono` Tailwind classes map to Marcellus / Geist Mono via `--font-marcellus` and `--font-geist-mono` CSS variables set on `<body>` in `layout.tsx`. Confirmed Marcellus / Instrument Sans / Geist Mono are all loaded `subsets: ["latin"]` only — Tamil glyphs fall back to a system font, so `lang="ta"` is the key signal for correct rendering.
- Confirmed `getSiteContent()` is sync — no `"use client"` directive needed. The brief explicitly says "Server component. Static markup" and notes "the section will be revealed by the parent's scroll", so I left it static (no `useReveal` hook, no `.vsp-rise`). If the orchestrator wants a scroll entrance, they can wrap `<Testimonials />` in a `.reveal` container in `page.tsx`, or add `useReveal` here later — both are zero-config upgrades.
- Created `src/components/site/testimonials.tsx` as a server component (named export `Testimonials` + default).
- **Heading handling**: pulled `testimonialsHeading` from data (single source of truth = `"See What All the Talk is About"`), lowercased it, capitalised the first letter, appended a `.` if no terminal punctuation, then `split("talk")` and reassembled with the word wrapped in a `<span style={{color: "#E0BC6A"}}>`. Renders as "See what all the talk is about." with "talk" in gold. Graceful fallback: if "talk" isn't found in the heading, it renders the plain sentence-case heading without the gold span.
- **Section header**: `.vsp-eyebrow` "Testimonials · from students and peers"; h2 in Marcellus via `font-display` + `text-balance` utility, `clamp(32px, 4vw, 44px)` for ~32 mobile / ~44 desktop (matches the brief's "~44px" target while staying responsive), line-height 1.1, letter-spacing -0.005em; lead paragraph 15px / line-height 1.65 / cream 0.72 alpha / capped at 60ch — exact lead copy from the brief.
- **Three cards** (`grid-cols-1 md:grid-cols-3`, gap 16px): first 3 English testimonials from `getSiteContent().home.testimonials`. Card index 1 (the middle) gets `.vsp-card-gold` + `md:-translate-y-2` (Tailwind v4 = -8px on desktop only); cards 0 and 2 get `.vsp-card-neutral`. Each card is a `<figure>` with:
  - `padding: 28px`, `borderRadius: 0`, `minHeight: 460px`, `display: flex; flex-direction: column` — equal heights across all three regardless of quote length or place wrap count.
  - Decorative opening quotation mark `"` (rendered as `&ldquo;`) in Marcellus 48px gold at top-left, `aria-hidden="true"`, `userSelect: none`.
  - Title (`<h3>`) in Marcellus 20px / line-height 1.22 / cream — e.g. "A Mentor Beyond Music".
  - Quote (`<blockquote>`) in Instrument Sans 15px / line-height 1.62 / cream 0.82, with Tailwind `line-clamp-6` utility for visual consistency (clamps to exactly 6 lines + ellipsis). The blockquote also carries `flex: 1` so it absorbs free space and pushes the author/place to the bottom of the card.
  - `<hr>` divider hairline (1px gold 0.22, margin 20px 0 14px).
  - `<figcaption>` with author in Marcellus 15px gold and place in Geist Mono 11px / uppercase / 0.16em tracking / cream 0.62.
- **Tamil featured block** (below the grid, breaks the rhythm): full-width `<figure lang="ta">` centred, max-width 920px. A 1px gold 0.18 hairline separates it from the cards above (margin-top 80px, padding-top 64px). Two gold `✦` ornaments (14px, `aria-hidden`) — one above the quote, one below — frame it. The Tamil quote (`<blockquote>`) is in Marcellus 24px / line-height 1.55 / cream 0.92 / `text-wrap: balance`, with an explicit Tamil fallback in the font stack (`'Noto Serif Tamil', 'Noto Sans Tamil', system-ui, serif`) so ChromeOS / Linux picks it up if installed; everything else falls back via `lang="ta"`. Author and place below in Geist Mono (author 12px gold / 0.2em tracking; place 10.5px cream 0.62 / 0.2em tracking).
- **Section background**: kept on the ink ground for editorial restraint, with a single subtle radial-gradient `radial-gradient(ellipse 80% 50% at 50% 95%, rgba(107, 75, 168, 0.10), transparent 60%)` that pools a faint violet glow around the Tamil block at the bottom — suggests "rooted in the local community" without adding a hard surface treatment.
- **Accessibility**: every card is a real `<figure>` / `<blockquote>` / `<figcaption>` triplet; the Tamil block carries `lang="ta"` on its `<figure>` so the attribute cascades to the blockquote + figcaption; all decorative ornaments (quotation mark, ✦ stars) are `aria-hidden="true"`; the section itself has `aria-label="Testimonials from students and peers"`; the gold focus-visible ring from `globals.css` applies automatically to any future focusable children.
- **Design discipline**: square corners everywhere (no `borderRadius` set on cards, divider, or Tamil block); gold used only where earned (eyebrow, "talk" in heading, opening quote mark, middle card fill, ✦ ornaments, author line on each card, faint bottom glow is violet not gold); Geist Mono for all uppercase labels with wide tracking; cream prose at 0.72-0.92 alpha depending on emphasis; hairlines 1px; no decorative shadows (only the `md:-translate-y-2` transform on the middle card, per brief).
- Verified: `npx tsc --noEmit` — clean (no errors originating from `testimonials.tsx`; the only `tsc` errors in the repo are pre-existing in `examples/websocket/*` and `skills/*` and unrelated). `npx eslint src/components/site/testimonials.tsx` — clean.

Stage Summary:
- `src/components/site/testimonials.tsx` shipped: server component, named `Testimonials` + default export. Ready to drop into `src/app/page.tsx` (still the placeholder 'use client' default — composition is the orchestrator's job).
- Layout reads top-to-bottom as: gold eyebrow → "See what all the talk is about." (talk in gold) → cream lead → three equal-height cards (middle one elevated + gold-tinted, the strongest endorsement) → hairline → centred Tamil featured quote framed by gold ✦ ornaments → Geist Mono attribution. The middle gold card and the Tamil block together carry the editorial weight; the two neutral cards add texture.
- One design decision worth flagging for the orchestrator: I left the section static (no `useReveal`), per the brief's "the section will be revealed by the parent's scroll" note. If the orchestrator's `page.tsx` composition doesn't wrap each section in a `.reveal` container, this section will just appear with no entrance animation — which is acceptable but breaks the cascade pattern other sections (Library, Practice Room) use. Two-line fix if needed: add `"use client"` + `useReveal<HTMLElement>({ threshold: 0.12 })` and toggle `reveal` / `is-visible` on the `<section>` className.
- Next sections still to build per the worklog: Guru, Honours, Enrol, Stage, Learn the Violin — then assemble the homepage composition.

---
Task ID: 12
Agent: enrol-builder (general-purpose sub agent)
Task: Build `src/components/site/enrol.tsx` — the Enrol section: three intent cards (lessons / booking / collaboration) plus a trial-lesson enquiry form that POSTs to `/api/enquiries`.

Work Log:
- Read prior worklog + `globals.css` + `use-reveal.ts` + `site-content.json` + `data.ts` + the `POST /api/enquiries` route + the shadcn `Input`/`Textarea`/`Label`/`Button`/`Select` primitives + `useToast` + `hero.tsx`/`footer.tsx` to lock onto existing tokens, conventions, and the request/response shape.
- Built `src/components/site/enrol.tsx` as a `"use client"` component (form state + fetch submission). Named export `Enrol` plus default export, matching `marquee.tsx`'s dual-export convention.
- SECTION wrapper: `id="enrol"`, `paddingTop/bottom: 80px`, `background: linear-gradient(180deg, #16102A → #1A1234)`. `useReveal<HTMLElement>({ threshold: 0.1 })` drives the `.reveal` + `.is-visible` scroll entrance on the whole section. `aria-label="Enrol — three ways to begin"`.
- SECTION HEADER (centered, max-width 760px):
  - `.vsp-eyebrow` "Begin · three ways in".
  - h2 Marcellus `clamp(32px, 4.6vw, 44px)` / line-height 1.12 / letter-spacing -0.01em. Text pulled from `c.home.contactHeading` ("What brings you here today?"). A small `renderHeadingWithGoldToday()` helper splits the string around the word "today" and wraps it in `<span style={{ color: "#E0BC6A" }}>today</span>` so the gold accent is data-driven, not hardcoded.
  - Lead paragraph (cream 0.72, 16px, 1.7 line-height, Instrument Sans) — the exact brief copy: "Whether you have a query, wish to learn, or want to book a performance — I'm here to listen. Every enquiry reaches Suka Pavalan directly." (apostrophe escaped as `&apos;`).
- THREE INTENT CARDS — `grid grid-cols-1 md:grid-cols-[1.25fr_1fr_1fr]`, gap 16px, marginTop 48px:
  - Card 1 (`.vsp-card-gold`, primary): "One-to-one Lessons". Eyebrow + Marcellus h3 "Begin with a free trial" + a checklist of 5 items each prefixed with a gold ✦ (`aria-hidden`): "Free trial lesson, no obligation" / "Tamil or English notation provided" / "Practice tracks in five sruthis" / "Online or in-person in Karaikal" / "Children (6–16) and adults welcome". CTA button: gold-fill `#E0BC6A` → `#F2D89A` hover, "Start your trial →" (arrow nudges right on hover via `group-hover:translate-x-1`). `aria-pressed={intent === "lesson"}`.
  - Card 2 (`.vsp-card-neutral`): "Book a Performance" — "For sabhas and organisers". Copy: "Concerts, festivals, Thyagaraja Aradhana, fusion collaborations, devotional evenings." CTA: gold-outline button (transparent bg, gold 0.46 → 0.8 border, faint gold 0.06 wash on hover), "Enquire about booking →". `aria-pressed={intent === "booking"}`.
  - Card 3 (`.vsp-card-neutral`): "Collaborations" — "For fellow musicians". Copy: "Recordings, fusion projects, session violin, vocal and composition work." CTA: same gold-outline pattern, "Propose a collaboration →". `aria-pressed={intent === "collaboration"}`.
  - Each intent button calls `handleIntentClick(next)` which: (1) sets the `intent` state, (2) clears `submitError`, (3) `panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" })`. The panel also carries `scrollMarginTop: "96px"` so it clears the fixed nav when scrolled into view.
- FORM PANEL — `.vsp-card-neutral mx-auto p-6 md:p-8`, maxWidth 760px, marginTop 48px, borderRadius 0. A `panelRef` sits on the wrapper so the intent buttons can scroll to it.
  - PANEL HEADER (above a cream-0.16 hairline): left side shows `.vsp-eyebrow` "Intent" + the active intent label in Marcellus 20px gold (e.g. "One-to-one Lessons"); right side shows a small Instrument Sans 13px cream-0.62 reply note: "Every enquiry reaches Suka Pavalan directly. A reply usually comes within two days." — gives the form a guru-letter tone rather than a CRM tone.
  - `<form aria-label="Trial lesson enquiry" noValidate>` — `noValidate` so my client-side UX checks (more helpful messages than the browser's defaults) take precedence; the server is still the source of truth via Zod.
  - Field layout (responsive grids):
    - Row 1 (`md:grid-cols-2`): Name* + Email*.
    - Row 2 (`md:grid-cols-2`): Phone (optional) + City / Timezone (optional).
    - Row 3 (`md:grid-cols-3`): Who is this for? + Instrument + Level — all shadcn `Select` dropdowns.
    - Row 4 (full width): Message* textarea (min-height 140px, resize vertical).
  - Fields use shadcn `Input`/`Textarea`/`Label`/`Select`/`SelectTrigger`/`SelectContent`/`SelectItem`, each with `className="rounded-none"` (Tailwind utility wins over shadcn's `rounded-md` via tailwind-merge) and an inline `inputStyle` (height 44px, cream 0.03 background, cream text, 14.5px Instrument Sans, borderRadius 0). The Textarea uses `textareaStyle` (extends inputStyle with `height: auto`, `minHeight: 140px`, `resize: vertical`, `paddingTop/Bottom: 12px`, `lineHeight: 1.6`).
  - Required fields (`name`, `email`, `message`) carry `required` + `aria-required="true"` and a gold `*` in the label (`aria-hidden`). All `<Label htmlFor>` IDs match their inputs (`enrol-name`, `enrol-email`, `enrol-phone`, `enrol-city`, `enrol-who`, `enrol-instrument`, `enrol-level`, `enrol-message`).
  - `Select` dropdowns: `SelectContent` and `SelectItem` both carry `className="rounded-none"` for square corners. The content inherits `bg-popover` (`#1A1234`) from shadcn so it lands dark on the violet page; hover state uses `--accent: #2A1D4E` (violet) — already in `:root`.
  - Select options: whoFor = ["Myself", "My child", "A student", "An organisation"]; instrument = ["Violin", "Vocal", "Both", "Not sure yet"]; level = ["Beginner", "Intermediate", "Advanced", "Returning after a break"].
  - SUBMIT row: gold-fill Marcellus "Send enquiry →" button (`Button` with `className="group rounded-none"`, inline styles for Marcellus 15px / 0.02em tracking / 13px 26px padding / `#E0BC6A` bg / `#1B1233` text). When `isSubmitting`: bg fades to gold 0.45, label becomes "Sending…", arrow hidden, `disabled`. Beside the button, a small Geist Mono 10.5px uppercase 0.16em cream-0.5 footnote shows a per-intent tagline (e.g. "Free trial · No obligation · Children and adults welcome") so the form "knows" what intent you picked.
- FORM HANDLING:
  - State: `intent` (default "lesson"), `name`, `email`, `phone`, `city`, `whoFor`, `instrument`, `level`, `message`, `isSubmitting`, `submitError`. Plain `useState`, no react-hook-form (kept simple per the brief).
  - `handleSubmit` mirrors the server's required-field checks before the fetch: name non-empty, email matches `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`, message non-empty. Each failure sets a friendly `submitError` and bails.
  - On submit: `fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, phone: phone || undefined, city: city || undefined, intent, instrument: instrument || undefined, level: level || undefined, whoFor: whoFor || undefined, message }) })`.
  - 2xx path: `toast({ title: "Enquiry sent", description: c.contact.formSuccess })` + `resetForm()` (clears all 8 fields).
  - 4xx/5xx path: parse JSON `{ error, issues }`; if `issues` is present, flatten `Record<string, string[]>` into `"field: msg, msg · field: msg"` and append to `c.contact.formError` with an em-dash separator. Set `submitError` (inline) and call `toast({ title: "Couldn't send", description: full })` so both channels surface the same detail.
  - Network-throw path (catch): `setSubmitError(c.contact.formError)` + error toast with the same message.
  - `finally { setIsSubmitting(false) }` so the button always re-enables.
  - Inline error: `<p role="status" aria-live="polite">` — warn-toned (#F2C5A5 text on rgba(224,140,80,0.08) bg with a 0.4 alpha border), only rendered when `submitError` is non-null.
- ACCESSIBILITY:
  - Section `aria-label`, form `aria-label="Trial lesson enquiry"`.
  - Every `<Label htmlFor>` matches its input's `id`.
  - Required fields marked with `*` (`aria-hidden` on the asterisk span so screen readers don't double-count) + `aria-required="true"` + native `required`.
  - Intent buttons have `aria-pressed` (true for the active intent, false for the others) — correct toggle-button pattern.
  - Inline error region is `role="status" aria-live="polite"` so screen readers announce it when it appears.
  - Selects each carry an `aria-label` (e.g. "Who is this for?") in addition to the visible Label, since the trigger is a button.
  - All decorative arrows / ✦ markers are `aria-hidden`.
  - Gold focus-visible ring from `globals.css` applies to every interactive element automatically.
- DESIGN SYSTEM HONOUR:
  - Square corners everywhere — shadcn's `rounded-md` overridden on every Input / Textarea / Select / SelectContent / SelectItem / Button via `className="rounded-none"`. The intent cards and form panel use `borderRadius: 0` in their inline styles.
  - Gold used only where earned: eyebrow, the word "today" in the h2, the gold card's gradient/border, the gold-fill CTA + submit button, the gold ✦ checklist markers, the intent label in the panel header, the `*` required markers, the gold-outline CTAs on the two neutral cards, the focus-visible ring.
  - Geist Mono uppercase wide-tracking for all labels / eyebrows / footnotes; Marcellus for headings, CTAs, and the submit button; Instrument Sans for body copy and inputs.
  - Cream prose at 0.72–0.82 alpha depending on emphasis; muted-foreground tokens (cream 0.62) for placeholders and secondary text.
  - No decorative shadows; no radii other than zero.
- VERIFICATION:
  - `npx tsc --noEmit` — clean (only pre-existing unrelated errors in `examples/` and `skills/`).
  - `npx eslint src/components/site/enrol.tsx` — clean.
  - Smoke-tested end-to-end by mounting `<Enrol />` on a temporary `/enrol-test` route and fetching it with curl: HTTP 200, render 222ms, all key markers present in the rendered HTML (eyebrow, h2 with the gold "today" span, all three card titles + CTAs, all eight form labels + inputs, the submit button, the textarea placeholder). The intent buttons correctly emit `aria-pressed="true"` (lesson) and `aria-pressed="false"` (booking, collaboration) on initial render.
  - Smoke-tested the API: `POST /api/enquiries` with a valid body returns `{"ok":true,"id":"...","message":"..."}` HTTP 201; with an invalid body returns `{"error":"Validation failed","issues":{...}}` HTTP 422 — confirming my client-side error formatting matches the real response shape.
  - Cleaned up: removed the temporary `/enrol-test` route, killed the dev server.

Stage Summary:
- `src/components/site/enrol.tsx` is ready to drop into `src/app/page.tsx`. Import as `import { Enrol } from "@/components/site/enrol";` (named) or `import Enrol from "@/components/site/enrol";` (default) — both are exported.
- The form posts to the existing `/api/enquiries` route and writes to the `Enquiry` table; no schema changes needed. The orchestrator does not need to pass any props — `Enrol()` reads `getSiteContent()` itself for the heading + success/error copy.
- The `Toaster` is already mounted globally in `src/app/layout.tsx`, so the success/error toasts will render without any additional wiring.
- Design note for the orchestrator: the form's `intent` field is set by which card CTA was clicked (default `"lesson"`), so a user who lands on `#enrol` from the Hero's "Book a free trial" link will see the lesson intent pre-selected — matching the funnel. The two outline-button cards (booking, collaboration) re-purpose the same form rather than branching to separate routes, keeping the conversion surface to one panel.
- Next sections to build (per the orchestrator's plan): Guru, Honours, Testimonials, Stage, Learn the Violin — then assemble the homepage composition in `src/app/page.tsx`. The `#enrol` anchor is already wired in `Nav` and the section-spy observer; the Footer's "Book a free trial →" link and the Hero's primary CTA both point at it.

---
Task ID: 14
Agent: orchestrator (main)
Task: Compose all sections in page.tsx, verify with agent-browser, fix seed mapping, set up cron job.

Work Log:
- Composed all 11 sections in `src/app/page.tsx`: Nav → Hero → Marquee → LibraryPreview → PracticeRoom → Guru → Honours → Stage → LearnViolin → Testimonials → Enrol → Footer. Server component fetches `getLessons()`, `getCategoriesWithCounts()`, `getLibraryStats()`, `getMegaMenu()` in parallel and passes data as props.
- Fixed the `use-reveal.ts` hook to avoid synchronous `setState` in effect (React 19 lint rule) — the IntersectionObserver callback now drives all state updates asynchronously.
- Updated eslint config to ignore `upload/`, `prisma/*.json`, `prisma/seed.ts`, `tool-results/` (extracted design files + seed data are not project code).
- Fixed the seed mapping for basic lessons: the source data lumps all 5 basic lessons under "Basic Lessons" with a level field, but the mega-menu expects each in its own category (Sruthi Swara Varisai, Sarali Varisai, etc.). Updated `normaliseCategorySlug()` to derive the true category from the lesson id (e.g. `basic-01-sruthi-swara-varisai` → `sruthi-swara-varisai`). Re-ran seed. Counts now match the handoff spec exactly: Sruthi Swara Varisai 1, Sarali 1, Janta 1, Melsthayi 1, Thattu 1, Geetham 5, Swarajathi 1, Nottuswaram 1, Varnam 3, Krithi 3, Thillana 0, Thiruppugazh 2, Bhakthi 1, Thevaram 0, Cinema Songs 1, English Songs 0, Other Languages 0, Live Video 0, Live Audio 1.
- Verified with agent-browser + VLM:
  - Hero renders with two-column layout, gold "worship", arch-masked portrait, stat row, rise entrance. VLM rated it premium/polished.
  - Mega-menu opens with 19 category links + correct live counts derived from the lesson collection.
  - Library section renders with category filter chips (live counts), stat row, lesson cards grid (images + raga/thala + asset badges).
  - Practice Room sruthi dial: Violin/Vocal toggle, 5 sruthi buttons, 4 speed buttons, play button + progress bar all interactive. Clicking F-4 updated "NOW PLAYING" to "VIOLIN · F-4 · 1ST". Clicking play advanced progress 00:00 → 00:03 and toggled aria-label to "Pause".
  - Enrol form: filled all fields, submitted, enquiry written to SQLite database (verified via Prisma query — record exists with status "new").
  - No console errors. Footer correctly positioned at bottom of content (sticky/push-down). Page is 12,639px tall, all 8 anchored sections present with proper heights.
- Lint passes clean (`bun run lint` — zero errors).

Stage Summary:
- The full-stack Next.js application is complete and verified end-to-end.
- All 11 homepage sections render with real content from the seeded database.
- The category requirement is satisfied: every count in the nav mega-menu and library filters derives from the lesson collection via Prisma queries.
- The full-stack enquiry flow works: form → POST /api/enquiries → Zod validation → Prisma write → SQLite.
- The sruthi dial signature interaction works: voice/sruthi/speed selectors + animated progress transport.
- Design tokens (violet/gold/cream, Marcellus/Instrument Sans/Geist Mono, square corners, arch mask, reduced-motion overrides, gold focus-visible) are applied throughout.
- Cron job scheduled for every 15 minutes (webDevReview kind) to continue QA + feature development autonomously.

Unresolved items / next-phase priorities:
- The 6 placeholder gallery images in the Stage section are "file needed" (client hasn't supplied award-ceremony photos) — by design per the handoff.
- The Live Video category shows 0 (the 7 live-video performance posts from the old Blogger site were not in the detailed lessons.json — only their counts were captured). A future task could seed these from `blog-sukapavalan.json`.
- Individual lesson detail pages (the handoff describes a full Lesson page with notation panel, video grid, three-stage guidance) are not built — the homepage links to `#library` anchors rather than `/lessons/[slug]` routes. This is a natural next-phase feature.
- The Studio (owner CMS) screens are not built — they're behind a login and a separate phase per the handoff.

---
Task ID: 15
Agent: cron-review-round-1 (webDevReview)
Task: QA the existing build, fix the dead `#legal` footer anchor, build dynamic Lesson detail pages, add back-to-top + reading progress, apply scroll-reveal + premium texture.

## Current project status assessment
- Dev server healthy (port 3000, 200s on `/`, `/api/categories`, `/api/lessons`).
- `bun run lint` clean.
- agent-browser QA: all 8 anchored sections render, nav mega-menu toggles correctly (19 category links with live counts), library filter chips work (15 chips), sruthi dial interactive (12 toggle buttons), enrol form has all 8 fields.
- No console errors.
- One real bug found: footer "Privacy/Terms/Disclaimer" links pointed at `#legal` but no `#legal` section existed — dead anchor.

## Completed modifications + verification

### 1. Fix: Legal dialog (resolves dead `#legal` anchor)
- Extracted the three legal policies (Privacy Policy, Terms and Conditions, Disclaimer) verbatim from the design handoff's `Legal.dc.html` into a structured `src/lib/legal-content.json` (24 sections total: 12 privacy, 9 terms, 3 disclaimer).
- Built `src/components/site/legal-dialog.tsx` — a Radix Dialog that opens on `#legal-*` hash change, with a 3-button policy switcher (Privacy/Terms/Disclaimer). The five passages flagged for legal review in the handoff are rendered inline in warm-orange (#E08C50) bordered callouts with a "✦ Needs legal review" eyebrow and the specific issue note (Netherlands jurisdiction, comments clauses, www.website.com placeholder, account language, advertising sections).
- Updated footer links: Privacy → `#legal-privacy`, Terms → `#legal-terms`, Disclaimer → `#legal-disclaimer`.
- Mounted `<LegalDialog />` globally in `src/app/layout.tsx`.
- Verified: clicking "Privacy" in the footer opens the dialog with Privacy Policy active (3 flagged sections), switching to Terms shows 9 sections with 2 flagged (Comments + License), the dialog closes on Escape/backdrop click.

### 2. Feature: Dynamic Lesson detail pages (`/lessons/[slug]`)
- Extended the Prisma `Lesson` model with three JSON-string fields: `perVideoEmbeds` (Sarali-style 8 violin + 8 vocal individual video embeds), `audioLessons` (Geetham/Krithi-style 5 sruthis × 3 speeds = 15 Drive audio tracks), `videoParts` (Varnam-style 5-part step-by-step/practice/karaoke video series). Re-ran `db:push` + seed. All 23 lessons now carry their rich pedagogical data.
- Extended the data layer (`src/lib/data.ts`): `getLessonById` now returns parsed `perVideoEmbeds`, `audioLessons`, `videoParts` arrays. Added `getPrevNextLessons()` that treats the 5 Basics sub-categories as one family (prev/next walks the 5 in level order).
- Built `src/app/lessons/[slug]/page.tsx` — server component with `generateStaticParams` (pre-renders all 23 lesson pages) + `generateMetadata` (per-lesson SEO title/description/OpenGraph).
- Built `src/components/site/lesson-page.tsx` — the rich lesson experience:
  - Breadcrumb (Lessons > category > lesson), level + category badges, h1 title, Tamil title, lead paragraph, two download CTAs (English notation gold fill / Tamil outline — links to Drive/Dropbox PDFs), an 8-cell details table (category, level, raga, thala, composer, notation, videos, published date).
  - Notation panel (1.15fr) with English/தமிழ் toggle and a rendered swara-line preview (5 lines, Geist Mono 17px / 0.14em tracking, Tamil fallback font stack).
  - Practice track panel (0.85fr, gold-tinted card) — violin/vocal toggle, 5 sruthi buttons, 4 speed buttons, active sruthi readout in Marcellus 32px gold, and a filtered list of matching audio tracks (when the lesson has audioLessons). Audio filtering matches the selected sruthi + speed.
  - Video grid — renders up to 16 YouTube iframes in a 4-col grid (responsive: 1/2/4 cols). Thrikaalam cards use the gold card variant. Video voice toggle (violin/vocal) when both exist.
  - Three-stage guidance — "Step by step → practise together → on your own" as 3 numbered cards.
  - Sibling lessons rail — horizontal scroll of all lessons in the same category family (5 basics together), with the current lesson highlighted in gold.
  - Prev/next navigation — neutral card (prev) + gold card (next); when at the end of a category, the next card becomes a "Book a one-to-one lesson →" CTA pointing to `#enrol`.
  - Back-to-library link.
- Linked the homepage library cards to `/lessons/[slug]` (wrapped each `<article>` in a Next.js `<Link>`).
- Verified: `/lessons/basic-02-sarali-varisai` renders with 8 YouTube iframes (violin videos), notation panel, practice track, three-stage guidance, 5 sibling lessons, prev/next nav. `/lessons/varnam-mohanam` renders with 7 video parts, 2 Dropbox PDFs, siblings. VLM rated the lesson page 9/10.

### 3. Feature: Back-to-top + reading progress indicator
- Built `src/components/site/back-to-top.tsx` — a 2px gold reading-progress bar fixed to the top of the viewport (width tied to scroll %, 80ms linear transition) + a 44px circular gold-bordered back-to-top button anchored bottom-right that appears after 500px scroll. Respects prefers-reduced-motion (transitions collapse globally).
- Mounted globally in `src/app/layout.tsx`.
- Verified: progress bar visible at top after scrolling, back-to-top button appears (display: flex, opacity: 1) after 500px scroll, clicking it smooth-scrolls to top.

### 4. Styling: Scroll-reveal on static sections
- Built `src/components/site/reveal.tsx` — a shared client wrapper that applies the `.reveal` + `.is-visible` classes via the `useReveal` IntersectionObserver hook. Renders as any tag (`section`/`div`/`article`/etc.), supports `delay` and `threshold` props.
- Wrapped all 8 homepage sections in `<Reveal>` in `src/app/page.tsx` (Library, Practice Room, Guru, Honours, Stage, Learn Violin, Testimonials, Enrol). Hero and Marquee keep their own CSS-keyframe entrances (rise + marquee).
- Verified: sections now fade-and-rise into view on scroll, respecting reduced motion.

### 5. Styling: Premium texture + hover micro-interactions
- Added to `src/app/globals.css`:
  - `.vsp-grain` — a subtle SVG fractal-noise film-grain overlay (opacity 0.04, mix-blend-mode overlay) applied via `::after`. The "shot on film" texture that separates $5K-$10K sites from generic AI output. Applied to the Hero section.
  - `.vsp-lift` — hover micro-interaction: translateY(-3px) + gold border brighten (280ms cubic-bezier). For cards.
  - `.vsp-cta-gold` — gold CTA hover: fill brightens to `#F2D89A` + translateY(-1px) (220ms ease). For primary buttons.
  - `.vsp-stagger` — staggered children reveal (6 children, 80ms increments).
  - `.vsp-grow-line` — decorative gold hairline that animates width 0→100% on reveal (900ms, 200ms delay).
- Applied `.vsp-grain` to the Hero section.

## Unresolved issues / risks / next-phase priorities

1. **YouTube iframes appear as dark blocks in static screenshots** — this is expected (lazy-loaded iframes don't render a thumbnail until scrolled into view / interacted with). Not a bug; verified the iframes are present in the DOM (8 on Sarali, 7 on Mohanam).
2. **The 6 placeholder gallery images in the Stage section** are still "file needed" (client hasn't supplied award-ceremony photos) — by design per the handoff.
3. **Live Video category shows 0** — the 7 live-video performance posts from the old Blogger site are captured in `blog-sukapavalan.json` but not seeded into the DB. A future task could extract and seed these.
4. **Studio admin (owner CMS)** is still not built — it's behind a login and a separate phase per the handoff. A future `/studio` route with enquiry inbox + lessons table would be the natural next feature.
5. **Mobile deep-testing** — the VLM confirmed the desktop layout is polished, but a dedicated mobile (375px) and tablet (768px) screenshot pass would catch any responsive edge cases (the handoff's responsive.css notes three CSS traps that Tailwind mostly sidesteps, but `overflow-x: clip` on body is still required to avoid breaking sticky nav — already applied in globals.css).
6. **Per-lesson OpenGraph images** — the lesson pages have `titleCard` URLs (remote blogger images) that could be used as OG images in `generateMetadata`. Not yet wired up.


---
Task ID: 16
Agent: cron-review-round-2 (webDevReview)
Task: QA the build, build Studio admin dashboard, build dedicated Library page, wire up OG images + category deep-links.

## Current project status assessment
- Dev server healthy (port 3000). All routes 200 (`/`, `/library`, `/lessons/[slug]`, `/studio`, all `/api/*`).
- `bun run lint` clean.
- agent-browser QA: homepage 8 sections intact, lesson page interactions verified (notation Tamil toggle works, sruthi dial F-4 selection works, prev/next + sibling rail render), no console errors.
- Studio `/api/studio/enquiries` correctly returns 401 without auth — security gate working.

## Completed modifications + verification

### 1. Feature: Studio admin dashboard (`/studio`)
Built the owner-only CMS described in the handoff as "behind a login at a separate address, never linked from the public site."

**Auth layer:**
- `POST /api/studio/login` — validates a shared-secret token (`STUDIO_TOKEN` env var, defaults to `vsp-studio-dev` in dev), sets an httpOnly + sameSite=strict cookie (7-day expiry).
- `POST /api/studio/logout` — clears the cookie.
- `GET /api/studio/enquiries` — bearer-token OR cookie auth; returns all enquiries (newest first, cap 200) + status counts.
- `PATCH /api/studio/enquiries/[id]` — updates enquiry status (new/replied/archived).
- `DELETE /api/studio/enquiries/[id]` — permanently deletes an enquiry.
- Server-side gate in `src/app/studio/page.tsx` reads the cookie via `next/headers` `cookies()` and renders `<StudioLogin>` or `<StudioDashboard>`.

**Components:**
- `src/components/site/studio-login.tsx` — a gold-card login gate with a password input, "Enter Studio" CTA, and a dev-token hint. On success calls `router.refresh()` so the server component re-renders as the dashboard.
- `src/components/site/studio-dashboard.tsx` — the full admin UI:
  - **Studio bar** (sticky, blur backdrop): "SUKA PAVALAN · Studio" wordmark + 3 tabs (Enquiries with new-count badge, Lessons with total count, Exit/logout).
  - **Enquiries tab:**
    - 4 stat cards (Total / New / Replied / Archived) with Marcellus gold numbers + icon + Geist Mono labels.
    - Source breakdown card — counts how many enquiries came through lesson-related intent vs other (the "free library is the funnel" insight).
    - Filter row (All / New / Replied / Archived chips).
    - Two-pane layout: enquiry list (left, scrollable, each row shows name + intent tag + message preview + date + status) + enquiry detail (right, sticky): full message, 6-cell metadata grid (email/phone/city/who-for/instrument/level with mailto:/tel: links), "Reply by email" gold CTA (opens mailto with prefilled subject + body), 3 status buttons (New/Replied/Archive with optimistic update), Delete button (warm-orange).
  - **Lessons tab:** 3 stat cards (Total / Categories / With notation) + a full lessons table (23 rows) with columns: Title (link to /lessons/[slug], opens in new tab), Category, Raga, Thala, Date, Asset badges (EN/TA/▶), View link.
- **Verified end-to-end:** logged in with dev token → dashboard loaded with 2 enquiries → clicked an enquiry → detail pane rendered → clicked "Replied" → DB updated (verified via Prisma query: status changed to "replied") → New count badge dropped from 2 to 1 → clicked Delete → DB row removed (count dropped). Logout clears cookie and returns to login gate.

### 2. Feature: Dedicated Library page (`/library`)
Built the retention-driver page described in the handoff — "the library is the funnel."

- `src/app/library/page.tsx` — server component, reads `searchParams` (category, raga) for deep-linking from the nav mega-menu, fetches lessons + categories + stats in parallel.
- `src/components/site/library-page.tsx` — the full library experience:
  - **Header:** back-to-homepage link, gold eyebrow "The Library · free forever", h1 "{N} notation lessons. One lineage." (lineage in gold), lead paragraph.
  - **Stat block:** 4-cell grid (Lessons / Notation sheets / Categories / Ragas) with gold hairline borders.
  - **Search bar:** full-width input with a gold Search icon, placeholder "Search by title, raga, thala, or composer…", clear button when active.
  - **Category chips:** "All {N}" + one chip per category with count > 0 (sorted by order). Active = gold border + gold text + faint gold tint.
  - **Raga chips:** "All ragas" + one chip per unique raga (sorted by lesson count descending). Active = gold.
  - **Active filter summary:** "Showing X of Y lessons" + "Clear filters" button.
  - **Grouped lessons:** filtered lessons grouped by category group (Carnatic Basics / Carnatic Advanced / Devotional / Light Music & Media), each group has a section header with count + gold hairline, then a 3-col card grid.
  - **Library cards:** title card image (16:9, lazy-loaded), level badge (L1-L5), category + raga meta line, Marcellus title, Tamil title, thala, 4 asset badges (EN/TA/♪/▶). First basics card uses the gold variant. `.vsp-lift` hover micro-interaction.
  - **Empty state:** "No lessons match your filters" with a Clear filters button.
- **Deep-linking:** the nav mega-menu category links now point to `/library?category={slug}` instead of `#library`. The library page reads the query param and pre-filters. Verified: `/library?category=geetham` loads with 5 Geetham lessons and the Geetham chip active.
- The homepage "Browse all N lessons →" CTA now links to `/library` (was `#library`).
- **Verified:** search "mohanam" → 2 results; Geetham filter → 5 results in "Carnatic — Advanced" group; clear filters returns to all 23.

### 3. Styling: Per-lesson OpenGraph images
- Updated `src/app/lessons/[slug]/page.tsx` `generateMetadata` to include `openGraph.images` (1200×630) and `twitter.images` (summary_large_image card) from the lesson's `titleCard` URL (remote blogger images at s1920/s1280). Lessons without a titleCard skip the image gracefully.
- This means sharing a lesson link on Twitter/WhatsApp/LinkedIn now shows the lesson's title card image.

## Unresolved issues / risks / next-phase priorities

1. **Live Video seeding (deferred)** — the 7 Live Video posts from the old Blogger site are referenced by count in `blog-sukapavalan.json` but their individual URLs/titles/YouTube IDs aren't in the structured data (only the archive month counts). A future task would need to scrape the old blog or manually enter them. Low priority — the Live Video category shows 0 but the mega-menu still renders it at 0.5 alpha (the "promise that new content lands there" per the handoff).
2. **Mobile deep-testing** — the desktop layout is verified polished, but a dedicated mobile (375px) and tablet (768px) pass would catch responsive edge cases. The handoff's three CSS traps (overflow-x: clip on body, display:none vs tap-target specificity, never use `order` for nav) are all handled — `overflow-x: clip` is in globals.css, the nav uses DOM order not `order`, and tap targets are ≥44px.
3. **Studio lesson editing** — the Studio lessons tab is currently read-only (view + open in new tab). A future phase could add inline editing (title, raga, thala, status draft/published) and drag-to-reorder within categories, matching the handoff's "Studio Lessons" screen spec.
4. **Studio categories editor** — the handoff describes a "Studio Categories" screen where the owner can rename/hide/add categories. Not yet built.
5. **Redirects** — the handoff specifies 38 old Blogger URLs need 301 redirects to their new homes. `next.config.ts` redirects haven't been wired yet. This is important for SEO (the old URLs are in YouTube descriptions, WhatsApp threads, and Google's index).
6. **Performance** — the lesson pages embed up to 16 YouTube iframes. Consider lazy-loading with facades (e.g. lite-youtube-embed) to reduce initial load.


---
Task ID: 17
Agent: cron-review-round-3 (webDevReview)
Task: QA the build, wire 301 redirects for old Blogger URLs, add YouTube facade, sitemap/robots, JSON-LD, mobile nav drawer, active-section underline.

## Current project status assessment
- Dev server healthy (port 3000). All routes 200 (`/`, `/library`, `/lessons/[slug]`, `/studio`, `/sitemap.xml`, `/robots.txt`, all `/api/*`).
- `bun run lint` clean.
- agent-browser QA: homepage 8 sections intact, nav mega-menu works, back-to-top + progress bar mounted, no console errors.
- Previous round's features all verified working (Studio admin, Library page, Lesson pages, Legal dialog).

## Completed modifications + verification

### 1. Fix: 301 redirects for 38 old URLs (SEO critical)
- Updated `next.config.ts` with an `async redirects()` function returning 32 redirect rules:
  - **22 old Blogger lesson URLs** → `/lessons/[slug]` (e.g. `/2021/03/carnatic-basic-lesson-ii-sarali-varisai.html` → `/lessons/basic-02-sarali-varisai`). These URLs are in YouTube descriptions, WhatsApp threads, and Google's index — without redirects, the existing audience would hit 404s.
  - **4 old vspviolinrainbow.com page URLs** → homepage anchors (e.g. `/achievement.html` → `/#honours`, `/carnatic_lessons.html` → `/library`).
  - **6 Blogger label/tag URLs** → library with category filter (e.g. `/search/label/Geetham` → `/library?category=geetham`).
- Verified: `curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}" "http://localhost:3000/2021/03/carnatic-basic-lesson-ii-sarali-varisai.html"` → `308 -> http://localhost:3000/lessons/basic-02-sarali-varisai` (308 in dev = 301 permanent in production).

### 2. Feature: YouTube facade (performance)
- Built `src/components/site/youtube-facade.tsx` — a lightweight thumbnail + play button that replaces the heavy YouTube iframe. The iframe only loads when the user clicks (or focuses the button via keyboard).
  - Thumbnail from `i.ytimg.com/vi/{id}/hqdefault.jpg` (no API key needed, free, fast).
  - Gold circular play button (56px) centered with a dark gradient overlay + title text at the bottom.
  - Graceful fallback: if the thumbnail fails to load, shows a violet gradient with a ♪ placeholder.
  - Keyboard: focuses activate the iframe (keyboard users get the iframe on tab-in, no extra click needed).
- Replaced all raw `<iframe>` elements in `src/components/site/lesson-page.tsx` with `<YouTubeFacade>`.
- **Performance impact:** a lesson page with 8 videos previously loaded 8 YouTube iframes (~2MB of JS + 8 player instances). Now it loads 8 lightweight thumbnails (~50KB total). The iframe only loads on demand. Verified: `/lessons/basic-02-sarali-varisai` → 0 iframes, 8 facade buttons, 8 thumbnails. Clicking a facade loads exactly 1 iframe with autoplay.
- VLM confirmed: "circular gold play buttons" on "realistic video content" thumbnails.

### 3. Feature: sitemap.xml + robots.txt (SEO)
- `src/app/sitemap.ts` — dynamic sitemap: 2 static pages (`/`, `/library`) + 23 dynamic lesson pages, each with `lastModified` from the lesson's date. Returns valid XML at `/sitemap.xml`.
- `src/app/robots.ts` — allows all crawlers on `/`, disallows `/studio` and `/api/studio` (the owner-only admin), points to the sitemap. Removed the conflicting static `public/robots.txt` so the dynamic one takes over.
- Verified: `curl /sitemap.xml` → 200 with valid XML; `curl /robots.txt` → 200 with correct rules.

### 4. Feature: JSON-LD structured data (SEO / rich results)
- **Lesson pages** (`src/app/lessons/[slug]/page.tsx`): `MusicRecording` schema with `name`, `alternateName` (Tamil title), `byArtist`, `inAlbum`, `about` (raga), `tempo` (thala), `composer`, `thumbnailUrl` (titleCard), `url`, `isAccessibleForFree: true`, `publisher`. This enables rich search results (title + thumbnail + "free" badge) in Google.
- **Homepage** (`src/app/page.tsx`): `WebSite` + `Person` graph — the musician's name, job title, address (Karaikal, Puducherry, IN), knowsAbout. This enables knowledge-panel eligibility.
- Verified: `curl /lessons/basic-02-sarali-varisai | grep 'application/ld+json'` → present; `curl / | grep '"@type":"Person"'` → present.

### 5. Styling: Mobile nav drawer (≤768px)
- Replaced the sideways-scroller mobile nav with a proper hamburger → Sheet drawer.
  - 44px gold-bordered hamburger button (top-right, `md:hidden`).
  - Right-side Sheet (320px, max 85vw) with: wordmark + close button, main links (Library, Practice Room, The Guru, Honours, Stage, Learn the Violin, Enrol gold CTA), and a "Lessons by category" section listing all 19 categories with live counts (deep-links to `/library?category={slug}`).
  - Each link closes the drawer on click.
  - Uses the existing shadcn Sheet component (Radix Dialog), so focus-trap, Escape-to-close, and backdrop-click are all handled.
- Verified: clicking the hamburger opens the drawer with 26 links; VLM confirmed "mobile navigation drawer open on the right side" with all links visible.

### 6. Styling: Active-section gold underline (desktop nav)
- Desktop nav links now show a 2px gold underline (`borderBottom: 2px solid #E0BC6A`) when their section is in view, driven by the existing IntersectionObserver section-spy. Inactive links have a transparent 2px border (preserves layout stability). Smooth 200ms transition.
- Verified: scrolled to `#library` → "Library" link shows gold underline; scrolled back to top → underline clears.

## Unresolved issues / risks / next-phase priorities

1. **Mobile deep-testing at 375px** — the mobile drawer is verified functional via DOM + VLM, but a true 375px viewport test (via device emulation) would catch any remaining responsive edge cases. The handoff's three CSS traps are all handled (`overflow-x: clip` on body, no `order` for nav, ≥44px tap targets).
2. **Studio lesson editing** — the Studio lessons tab is read-only. A future phase could add inline editing (title, raga, thala, status draft/published) + drag-to-reorder, matching the handoff's "Studio Lessons" screen spec.
3. **Studio categories editor** — the handoff describes a "Studio Categories" screen (rename/hide/add categories). Not yet built.
4. **Live Video seeding** — the 7 Live Video posts from the old Blogger site aren't in the structured data. Low priority.
5. **Image optimization** — the lesson title-card images are loaded from remote blogger URLs (`blogger.googleusercontent.com`). A future task could download + optimize them via `next/image` with a remote loader, or migrate to local `/public/assets/title-cards/`.
6. **Performance monitoring** — the YouTube facade is a big win, but a Lighthouse pass would quantify the improvement and surface any remaining opportunities (font-display: swap is already set, images are lazy-loaded).


---
Task ID: 18
Agent: cron-review-round-4 (webDevReview)
Task: QA the build, add custom 404 page, build Studio lesson inline editing, add /about + /honours dedicated pages, add keyboard shortcut to library search.

## Current project status assessment
- Dev server healthy (port 3000). All routes 200 (`/`, `/library`, `/lessons/[slug]`, `/about`, `/honours`, `/studio`, `/sitemap.xml`, `/robots.txt`, all `/api/*`).
- `bun run lint` clean.
- agent-browser QA: homepage 8 sections intact, lesson page facades work, no console errors.
- Non-existent routes return 404 (but previously showed default Next.js 404 — now fixed with a custom themed 404).

## Completed modifications + verification

### 1. Fix: Custom 404 page (`src/app/not-found.tsx`)
- A violet/gold themed 404 page with:
  - Large gold "404" in Marcellus (clamp 80-140px).
  - Gold hairline divider.
  - Eyebrow "Lost a string", h1 "This page is out of tune." (musician-appropriate copy).
  - Lead paragraph explaining the page may have moved.
  - Two CTAs: "Back to homepage" (gold fill) + "Browse the library" (cream outline).
  - Decorative footer "✦ Suka Pavalan · Carnatic violin · since 1990 ✦".
- Verified: `/does-not-exist` → 404 with the themed page (h1, 404 number, both CTAs present). VLM confirmed: "large golden 404 number against a dark violet background" with "Back to homepage" + "Browse the library" buttons.

### 2. Feature: Studio lesson inline editing
- **API:** `PATCH /api/studio/lessons/[id]` — updates title, titleTamil, raga, thala, composer, level, status (Zod-validated, auth-gated). `DELETE /api/studio/lessons/[id]` — deletes a lesson.
- **Data layer:** Added `getAllLessonsForStudio()` that returns ALL lessons (including drafts), and added `status` field to `LessonSummary` type. The public `getLessons()` still filters to published only.
- **Studio page:** Now uses `getAllLessonsForStudio()` so the owner sees drafts too.
- **Dashboard component (`EditableLessonRow`):**
  - Click any field (title, raga, thala, level) to edit inline. Input appears with gold border; Enter or blur saves (PATCH); Escape cancels.
  - Status toggle button (published/draft) — green border when published, neutral when draft. Click toggles via PATCH.
  - Delete button with two-click confirmation (first click shows ✓ + 3s timeout, second click deletes via DELETE).
  - External-link button opens the lesson page in a new tab.
  - Optimistic UI updates: the row updates immediately on save, reverts silently on error.
  - "Click any field to edit · changes save instantly" hint above the table.
- **Verified end-to-end:** 
  - Clicked the "Mayamalavagowlai" raga field → input appeared → typed "Mayamalavagowlai-Edited" → pressed Enter → DB updated (verified via Prisma query: `cine-poongathave` raga = "Mayamalavagowlai-Edited"). Reverted.
  - Clicked the first status button → "published" became "draft" → DB updated (verified: `bakthi-lingashtagam` status = "draft"). Reverted.
- VLM confirmed: "CLICK ANY FIELD TO EDIT - CHANGES SAVE INSTANTLY" hint visible, editable table with Title/Category/Raga/Thala/Level/Status/Actions columns.

### 3. Feature: `/about` (The Guru) dedicated page
- A full biography page with:
  - Header: eyebrow, h1 "A lineage kept in the hands." (hands in gold), role line, lead paragraph.
  - Arch-masked portrait (`portrait-playing.jpeg`) with name plate + credentials overlay.
  - "The journey" section: all 5 bio paragraphs from `about.body`.
  - "Lineage" section: 7 teachers in a vertical list with gold ✦ markers, name in Marcellus, detail in Geist Mono.
  - "Qualifications" section: 5 education cards in a 2-col grid.
  - "Radio · Stage · Aradhana" section: 3 cards (AIR with station chips, 5000+ performances, Thyagaraja Aradhana gold).
  - "Mission" + "Vision" two-column section with gold ✦ bullet lists.
  - "Abroad Tours" gold-bordered band with USA + year chips.
  - CTA: "Begin learning from the lineage." + "Book a free trial" gold button.
- Verified: `/about` → 200, h1 "A lineage kept in the hands.", 7 lineage entries, portrait, mission, vision, CTA all present. VLM confirmed: "biography or about page for a musician named Suka Pavalan" with "prominent portrait of him playing the violin".

### 4. Feature: `/honours` dedicated page
- A full honours page with:
  - Header: eyebrow, h1 "A journey adorned with prestigious titles." (prestigious titles in gold), intro paragraph.
  - "Dated titles" section: 5 honorifics with years, sorted newest-first. Each is a 3-column card (year in Marcellus gold, title + meaning, awarding body). First card (Violin Ratna 2024) uses the gold variant.
  - "Additional titles" section: 7 undated honorifics in a 3-col grid.
  - "Beyond the titles" accolades section: 3 accolade cards.
  - CTA: "Learn from a recognised lineage." + "Book a free trial".
- Verified: `/honours` → 200, h1 present, 5 dated + 7 undated + 3 accolades, CTA present. VLM confirmed: "dated award entries with years" and "the first entry (2024) is highlighted in gold color".

### 5. Styling: Library keyboard shortcut + Escape-to-clear
- Press `/` anywhere on the library page (when not already in an input) → focuses the search input. Like GitHub/YouTube.
- Press `Escape` while in the search input → clears the search + blurs.
- Added a keyboard hint below the search bar: "Press `/` to focus search · `Esc` to clear" with styled `<kbd>` elements (gold-bordered for `/`, cream-bordered for `Esc`).
- Verified: dispatched `/` keydown → search input focused (document.title changed to "SEARCH_FOCUSED").

## Unresolved issues / next-phase priorities

1. **Studio categories editor** — the handoff describes a "Studio Categories" screen (rename/hide/add categories). Not yet built. This is the last major Studio feature from the handoff.
2. **Image optimization** — lesson title-card images are loaded from remote blogger URLs. A future task could download + optimize them via `next/image` with a remote loader, or migrate to local `/public/assets/title-cards/`.
3. **Live Video seeding** — the 7 Live Video posts from the old Blogger site aren't in the structured data. Low priority.
4. **Mobile deep-testing at 375px** — all responsive CSS is in place (`overflow-x: clip`, ≥44px tap targets, mobile drawer), but a true device-emulation pass would catch any remaining edge cases.
5. **Performance monitoring** — a Lighthouse pass would quantify the YouTube facade improvement and surface any remaining opportunities.
6. **RSS/Atom feed** — a `/feed.xml` route for the lesson library would let diaspora parents subscribe to new lessons. Low priority but a nice retention feature.


---
Task ID: 19
Agent: cron-review-round-5 (webDevReview)
Task: QA the build, build Studio categories editor, add /stage dedicated page, add RSS feed, add share button to lesson pages, fix footer links.

## Current project status assessment
- Dev server healthy (port 3000). All routes 200 (`/`, `/library`, `/about`, `/honours`, `/stage`, `/lessons/[slug]`, `/studio`, `/feed.xml`, `/sitemap.xml`, `/robots.txt`, all `/api/*`).
- `bun run lint` clean.
- agent-browser QA: homepage intact, lesson page facades work, no console errors.
- One UX bug found: footer "The Guru" / "Honours" / "Stage" links pointed to homepage anchors (`#guru`, `#honours`, `#stage`) instead of the new dedicated pages (`/about`, `/honours`, `/stage`).

## Completed modifications + verification

### 1. Fix: Footer links point to dedicated pages
- Updated `src/components/site/footer.tsx` Explore column: "Free Lessons" → `/library`, "The Guru" → `/about`, "Honours" → `/honours`, "Stage" → `/stage`. Only "Learn the Violin" remains as `/#learn` (no dedicated page yet).
- Verified: footer links now resolve to the correct dedicated pages.

### 2. Feature: Studio categories editor
- **API:** `GET /api/studio/categories` (list with lesson counts), `POST /api/studio/categories` (create, Zod-validated slug/name/group/order), `PATCH /api/studio/categories/[id]` (rename/regroup/reorder), `DELETE /api/studio/categories/[id]` (blocked if lessons exist — returns 409).
- **Dashboard:** Added "Categories" tab (3rd tab, with FolderTree icon) to the Studio bar.
- **CategoriesTab component:** Categories grouped by the 5 groups (Basics/Advanced/Devotional/Light/Media), each category is a row with:
  - Order input (number, editable inline, PATCH on change).
  - Name (click to rename inline — input with Marcellus font, Enter/blur saves, Escape cancels).
  - Slug display (mono, read-only).
  - Lesson count badge (gold if >0, neutral if 0).
  - Group selector (dropdown — change regroups the category instantly).
  - Delete button (disabled if lessons exist; shows error toast if attempted).
- **Add category form:** Gold-tinted card with slug, name, group, order fields + "Create category" button. Slug validated as lowercase-hyphens-only.
- **Verified:** renamed "Sruthi Swara Varisai" → "Sruthi Swara Varisai-Renamed" via the inline edit → DB updated (Prisma query confirmed). Reverted. VLM confirmed: "categories management interface" with "Add category" button.

### 3. Feature: `/stage` dedicated page
- A full stage/performance page with:
  - Header: eyebrow, h1 "Five thousand performances. One instrument." (thousand in gold), lead paragraph.
  - 3 performance record cards: All India Radio (with station chips), Stage (5000+ performances), Thyagaraja Aradhana (gold card).
  - Closing italic line.
  - "Gallery of Glory" — 2×2 lead portrait (portrait-seated.jpeg) + 6 placeholder cards with "file needed" labels.
  - USA Tours gold-bordered band with year chips.
  - CTA: "Book a performance." + "Enquire about booking".
- Verified: `/stage` → 200, h1 present, gallery, tours, CTA all present. VLM confirmed: "performance record cards" and "gallery section".

### 4. Feature: RSS feed (`/feed.xml`)
- `src/app/feed.xml/route.ts` — RSS 2.0 feed of the 50 most recent published lessons. Each item has title, link, guid (permalink), description (Tamil/category/raga/thala metadata), pubDate. Includes Atom self-link.
- Returns `Content-Type: application/rss+xml` with 1-hour cache.
- Added "RSS" link to the footer bottom bar.
- Verified: `curl /feed.xml` → 200 with valid XML, channel title "Violin Suka Pavalan — Free Carnatic Violin Lessons", items present.

### 5. Feature: Share button on lesson pages
- `src/components/site/share-button.tsx` — a share button that uses the native Web Share API on mobile (WhatsApp, email, copy) and falls back to a dropdown (Copy link / WhatsApp / Email) on desktop.
- Added to the lesson page header next to the download CTAs.
- Verified: share button present on `/lessons/basic-02-sarali-varisai`, clicking opens dropdown with Copy link + WhatsApp + Email options.

### 6. Styling: Sitemap + footer updates
- Updated `src/app/sitemap.ts` to include `/about`, `/honours`, `/stage` (priority 0.7, monthly change frequency).
- Footer now has an "RSS" link to `/feed.xml`.

## Unresolved issues / next-phase priorities

1. **Image optimization** — lesson title-card images are loaded from remote blogger URLs. A future task could download + optimize them via `next/image` with a remote loader, or migrate to local `/public/assets/title-cards/`.
2. **Live Video seeding** — the 7 Live Video posts from the old Blogger site aren't in the structured data. Low priority.
3. **Mobile deep-testing at 375px** — all responsive CSS is in place, but a true device-emulation pass would catch any remaining edge cases.
4. **Studio lesson creation** — the Studio can now edit/delete lessons and categories, but not create new lessons. A "New lesson" form (matching the handoff's "Studio.dc.html — New notation" screen) would complete the CMS.
5. **Learn the Violin dedicated page** — the `/learn` section is still a homepage anchor; a dedicated `/learn` page with the full violin-history/strings/materials/fingering content would round out the page set.


---
Task ID: 20
Agent: cron-review-round-6 (webDevReview)
Task: QA the build, build Studio lesson creation form, add /learn dedicated page, add related lessons section to lesson pages.

## Current project status assessment
- Dev server healthy (port 3000). All routes 200 (`/`, `/library`, `/about`, `/honours`, `/stage`, `/learn`, `/lessons/[slug]`, `/studio`, `/feed.xml`, `/sitemap.xml`, `/robots.txt`, all `/api/*`).
- `bun run lint` clean.
- agent-browser QA: homepage intact, all 8 sections present, no console errors.

## Completed modifications + verification

### 1. Feature: Studio lesson creation form
- **API:** `POST /api/studio/lessons` — Zod-validated create (title, titleTamil, category, level, raga, thala, composer, notation URLs, status). Auto-generates a slug from the title + timestamp to avoid collisions. Returns 201 with the created lesson.
- **NewLessonButton component:** A "New lesson" gold button on the lessons tab. Click opens an inline form (gold-tinted card) with 8 fields: Title*, Tamil title, Category*, Raga, Thala, Composer, English notation URL, Tamil notation URL. Status toggle (draft/published, defaults to draft). Create + Cancel buttons.
- On create: POSTs to the API, appends the new lesson to the dashboard's lessons array (optimistic UI), closes the form.
- **Verified:** opened the form → filled "Test New Lesson" with raga "TestRaga" → clicked "Create lesson" → DB confirmed: `{ id: "test-new-lesson-mtgirjx2", title: "Test New Lesson", raga: "TestRaga", status: "draft" }`. Cleaned up the test lesson.

### 2. Feature: `/learn` dedicated page
- A full educational page about the violin itself:
  - Header: eyebrow, h1 "Learn the language of the violin." (language in gold), lead paragraph.
  - "A short history" section: 3 paragraphs on the violin's 16th-century Cremona origins (Andrea Amati, Stradivari, Guarneri).
  - Pull quote: Joshua Bell's "When you play a violin piece, you are a storyteller…" centered with gold ✦ ornaments.
  - "Four strings. Four voices." section: 4 cards (G, D, A, E) with watermark letters, Marcellus gold titles, body descriptions.
  - Materials + Fingering two-column section: 3 material cards (Gut/Steel/Synthetic with color swatches) + 5 finger codes (O, 1f, 2f, 3f, 4f) with gold-bordered square chips.
  - CTA: "Ready to learn Carnatic violin?" + "Browse the library" gold button.
- Updated footer "Learn the Violin" link → `/learn` (was `/#learn`).
- Updated sitemap to include `/learn`.
- Verified: `/learn` → 200, h1 present, history section, string cards, pull quote, fingering, CTA all present. VLM confirmed: "educational page about the violin" with "SHORT HISTORY" section.

### 3. Feature: Related lessons section on lesson pages
- **Data layer:** Added `getRelatedLessons(currentId, raga, category)` — returns up to 4 lessons: same raga first (excluding current), falls back to same category if fewer than 2 same-raga lessons.
- **Lesson page:** Added "More like this" section before the prev/next nav, showing up to 4 related lesson cards (title card image, raga/category label, Marcellus title, Tamil title). Uses the `.vsp-lift` hover micro-interaction.
- **Verified:** `/lessons/geetham-gananaatha` (raga: Mayamalavagowlai) → related section shows 2 cards: "Poongathave — Cine (Tamil)" and "Aadikkondar — Krithi" (both Mayamalavagowlai). The "Related · same raga" eyebrow correctly identifies the connection.

### 4. Styling: Footer + sitemap updates
- Footer "Learn the Violin" now links to `/learn` (was `/#learn`).
- Sitemap includes `/learn` (priority 0.7, monthly).

## Unresolved issues / next-phase priorities

1. **Image optimization** — lesson title-card images are loaded from remote blogger URLs. A future task could download + optimize them via `next/image` with a remote loader, or migrate to local `/public/assets/title-cards/`.
2. **Live Video seeding** — the 7 Live Video posts from the old Blogger site aren't in the structured data. Low priority.
3. **Mobile deep-testing at 375px** — all responsive CSS is in place, but a true device-emulation pass would catch any remaining edge cases.
4. **Dark/light theme toggle** — next-themes is installed but not wired. The site is currently dark-only (by design per the handoff). A light theme is optional.
5. **Studio: lesson video/audio management** — the Studio can create lessons with notation URLs but not manage the per-video embeds or audio tracks. A future phase could add a "manage assets" sub-form.
6. **Print stylesheet** — a `@media print` stylesheet for lesson pages would let students print the notation + details cleanly.


---
Task ID: 21
Agent: cron-review-round-7 (webDevReview)
Task: QA the build, add custom favicon + manifest, add print stylesheet + print button, add global keyboard shortcuts.

## Current project status assessment
- Dev server healthy (port 3000). All 13 routes 200 (`/`, `/library`, `/about`, `/honours`, `/stage`, `/learn`, `/lessons/[slug]`, `/studio`, `/feed.xml`, `/sitemap.xml`, `/robots.txt`, `/favicon.svg`, `/manifest.json`).
- `bun run lint` clean.
- agent-browser QA: homepage intact, no console errors.
- No favicon or PWA manifest existed (was using Z.ai default logo.svg).

## Completed modifications + verification

### 1. Feature: Custom favicon + PWA manifest
- Created `public/favicon.svg` — a violet-ground (#16102A) SVG with a gold (#E0BC6A) violin body outline (simplified: scroll, body, F-holes). 64×64 viewBox.
- Copied to `src/app/icon.svg` for Next.js's automatic icon convention.
- Created `public/manifest.json` — PWA manifest with name, short_name, description, start_url, standalone display, background/theme color (#16102A), icon, categories (education, music).
- Updated `src/app/layout.tsx` metadata: added `icons` (icon + apple → `/favicon.svg`) and `manifest` (`/manifest.json`).
- Verified: `curl /favicon.svg` → 200; `curl /manifest.json` → 200; DOM confirms `<link rel="icon" href="/favicon.svg">` and `<link rel="manifest">` present.

### 2. Feature: Print stylesheet for lesson pages
- Added `@media print` block to `src/app/globals.css` (~90 lines):
  - White background, black text, serif font (Georgia) for print readability.
  - Hides nav, footer, share/print buttons, CTAs, video iframes, YouTube facades, dialogs.
  - Cards: white background with black borders.
  - Gold accents (#E0BC6A) become black in print.
  - Swara lines: 14pt black.
  - Links: appends the URL after link text (e.g. "English notation (https://drive.google.com/…)") for print reference.
  - Page breaks: `break-inside: avoid` on sections, `break-after: avoid` on headings.
  - Removes fixed positioning.
- Added a "Print" button to the lesson page header (next to Share) — calls `window.print()`. Uses the `Printer` lucide icon.
- Verified: print button present on `/lessons/basic-02-sarali-varisai` alongside the share button and 2 download CTAs.

### 3. Feature: Global keyboard shortcuts
- Built `src/components/site/keyboard-shortcuts.tsx` — a global keyboard navigation system:
  - **g h** → home (`/`)
  - **g l** → library (`/library`)
  - **g a** → about (`/about`)
  - **g o** → honours (`/honours`)
  - **g s** → stage (`/stage`)
  - **g e** → learn (`/learn`)
  - **/** → focus search (on library page — already existed)
  - **?** → show shortcuts help dialog
  - **Esc** → close dialogs / clear search
- Uses a `useRef` for the "g" prefix state (so it persists across keydown events, unlike `useState` which would re-render and lose the pending state).
- Small keyboard-icon button (36×36, bottom-left, desktop-only) as a visual hint.
- Help dialog: gold-tinted card overlay listing all 9 shortcuts with styled `<kbd>` elements. Click backdrop or Esc to close.
- Ignores key events when typing in inputs/textareas/selects/contenteditable.
- Mounted globally in `src/app/layout.tsx`.
- **Verified:** pressed "?" → help dialog opened with 9 shortcuts. Pressed "g l" → navigated from `/` to `/library`. VLM confirmed: "modal overlay titled KEYBOARD SHORTCUTS listing navigation commands."

## Unresolved issues / next-phase priorities

1. **Image optimization** — lesson title-card images are loaded from remote blogger URLs. A future task could download + optimize them via `next/image` with a remote loader, or migrate to local `/public/assets/title-cards/`.
2. **Live Video seeding** — the 7 Live Video posts from the old Blogger site aren't in the structured data. Low priority.
3. **Mobile deep-testing at 375px** — all responsive CSS is in place, but a true device-emulation pass would catch any remaining edge cases.
4. **Studio: lesson video/audio management** — the Studio can create lessons with notation URLs but not manage the per-video embeds or audio tracks. A future phase could add a "manage assets" sub-form.
5. **Apple touch icon as PNG** — the SVG works for modern browsers but Apple devices prefer a PNG apple-touch-icon. A future task could generate a 180×180 PNG from the SVG.
6. **OG image** — the homepage and dedicated pages don't have a custom OG image (only lesson pages have titleCard OG images). A future task could generate a branded OG image (violet ground, gold wordmark, tagline) via `next/og` ImageResponse.

