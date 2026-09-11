# Launch runbook — sukapavalan.com

Cutover from the existing Blogger site to this build. Written to be followed in
order on the day.

## Where things stand

`sukapavalan.com` currently redirects to `www.sukapavalan.com`, which Blogger
serves (`ghs.googlehosted.com`). **Every URL Google has indexed is on the `www`
host**, which is why `www` is the primary domain below — it keeps existing
traffic on a single hop instead of two.

This build runs at `vsp-violin.vercel.app` and is not yet reachable from the
real domain.

## Before the day

- [ ] Merge the release branch to `main`. Pushing to `main` deploys to
      production automatically (`.github/workflows/deploy.yml`).
- [ ] **Rotate the Supabase service-role key and the Studio password, and
      delete `STUDIO_TOKEN` from the Vercel project.** These values are in the
      public git history. This is not optional and nothing else here depends on
      it, so do it first.
- [ ] Confirm the Vercel project has these environment variables for
      Production: `DATABASE_URL`, `DIRECT_URL`, `NEXT_PUBLIC_SUPABASE_URL`,
      `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`.
- [ ] Optional but worth it: set `RESEND_API_KEY` and `ENQUIRY_NOTIFY_TO` so
      new enquiries are emailed rather than only stored.
- [ ] Run the preflight against the Vercel origin and expect a clean pass:

      bun run scripts/preflight-launch.ts https://vsp-violin.vercel.app

## Cutover

Order matters. The site must know its own address *before* it answers on it.

1. **Add both domains in Vercel** → Project → Settings → Domains:
   add `www.sukapavalan.com` and `sukapavalan.com`. Set **`www.sukapavalan.com`
   as primary** and let Vercel redirect the apex to it. Vercel will show the
   DNS records it wants.

2. **Set `NEXT_PUBLIC_SITE_URL` to `https://www.sukapavalan.com`** in the
   Vercel project (Production scope) and **redeploy**.

   Do this *before* DNS propagates. Canonical tags, `og:url`, `sitemap.xml` and
   the `robots.txt` sitemap line all derive from this one variable
   (`src/lib/seo.ts`). Set it too early and the live site points search engines
   at Blogger; forget it and they keep pointing at the Vercel origin.

3. **Point DNS at Vercel** at the registrar, using the records from step 1.
   This is the moment the switch happens. Blogger's `ghs.googlehosted.com`
   records for the host are replaced.

4. **Wait for propagation**, then verify against the real domain:

      bun run scripts/preflight-launch.ts https://www.sukapavalan.com

   It must report 0 failures. It checks that every redirect resolves to a live
   page, that canonical/og:url/sitemap/robots all name the real host, and that
   the key pages return 200.

## After

- [ ] Google Search Console: add `www.sukapavalan.com`, submit
      `https://www.sukapavalan.com/sitemap.xml`, and use Change of Address if
      the Blogger property is verified separately.
- [ ] Spot-check a few old URLs in a browser — they should land on real pages:
      - `/2021/03/carnatic-basic-lesson-ii-sarali-varisai.html` → the Sarali Varisai lesson
      - `/2023/08/blog-post_5.html` → the Ilayaraja live audio lesson
      - `/2021/03/contact.html` → the contact section
      - `/search/label/Geetham` → the Geetham shelf of the library
- [ ] Watch Search Console coverage for a week. A temporary ranking dip during
      a migration is normal; pages disappearing is not.

## Redirects

`next.config.ts` holds **48 rules**, covering **all 38 URLs** in the live
Blogger sitemap plus the old `vspviolinrainbow.com` pages and Blogger label
URLs. They were verified against the old site by fetching each page's title, so
each one lands somewhere that makes sense rather than just somewhere that
exists.

They only take effect once DNS points at Vercel — until then they are
unreachable, because nothing links to the Vercel origin.

If a URL is discovered later that 404s, add a rule to the `redirects()` array
and redeploy. `scripts/preflight-launch.ts` will verify it.

## Rollback

Repoint DNS back to Blogger's records. Blogger content is untouched by any of
this, so the old site returns as soon as DNS propagates. Then set
`NEXT_PUBLIC_SITE_URL` back to `https://vsp-violin.vercel.app` and redeploy so
this build stops claiming a domain it is not serving.

## Adding sections later

The homepage composes independent section components in `src/app/page.tsx`; a
new one is a component plus a line there. Copy belongs in the `SiteContent`
table via the Studio's **My Website** tab rather than hardcoded, so the owner
can edit it without a deploy — add the keys to `src/lib/site-content.json` as
the baseline and to the `SECTIONS` list in `studio-dashboard.tsx` so they
become editable, including the plain-language `where` describing the spot on
the page.

Two sections are anticipated:

- **Trust / Foundation registration details** — a content-only section. Add the
  keys, build the component, drop it into `page.tsx`.
- **Downloadable podcast lessons** — the `Lesson` model already has
  `audioLessons`, and `src/components/site/practice-room.tsx` is intact behind
  a comment in `page.tsx`. That component is the starting point when the audio
  copyright hold lifts; re-enabling it and the per-lesson panel is described in
  `src/components/site/lesson-page.tsx`.
