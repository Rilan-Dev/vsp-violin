# Extraction status — Violin Suka Pavalan

Sources: vspviolinrainbow.com (current marketing site), sukapavalan.com (Blogger lesson archive).

## Captured (in data/)
- site-content.json — all verbatim copy: home, about, achievements, gallery, carnatic lessons, learn the violin, contact, testimonials (4, incl. one Tamil).
- blog-sukapavalan.json — Blogger taxonomy: 13 labels w/ counts (~38 posts), 7 archive months, 5 recent posts w/ images, lesson taxonomy from nav.
- assets.json — full remote asset inventory: 15 gallery photos, 12 award photos, 11 violin diagrams, 3 AIR station marks, 22 icons, 2 logos, hero + section photography.

## Complete
All 7 pages of vspviolinrainbow.com captured (home, about, achievements, gallery, carnatic lessons, light music lessons, learn the violin, contact) plus the sukapavalan.com homepage, its full label/archive taxonomy and 5 recent posts.

## Blog archive — now complete
Full post index captured: all 38 posts across 7 archive months, with title, Tamil title, label, raga/thala where stated, date, URL and thumbnail. Profile page (incl. a Television Programs section that appears nowhere on the new site), Contact page (embedded Google Form), and 3 visitor comments also captured.

Lesson-post anatomy verified from a sample: notation ships as two Google Drive PDFs (Tamil + English) plus a title card; Basic Lessons also carry Violin Video and Vocal Video embeds. The per-lesson Drive/YouTube ids sit on the ~25 individual post pages — retrievable one page per fetch, or instantly via a Blogger export.

Not retrievable here: label listing pages and the JSON feed (blocked); binary media (upload originals or hotlink, per your choice).


## Lesson detail (data/lessons.json)
All 22 notation lessons extracted with real asset URLs — every Basic Lesson, Geetham, Swarajathi, NottuSwaram, Varnam, Krithi, Thiruppugazh, Bakthi and Cine Song in the archive. Per lesson: Tamil + English notation PDF, violin/vocal YouTube playlists or individual video ids, Drive audio practice tracks by sruthi and speed, high-res title card, raga, thala, composer where stated, plus visitor comments.

Content model that fell out of it: notation in two languages; audio practice in 5 sruthis (D#-2.5, G#-5.5, A#-6.5, F-4, C-1) x up to 3 speeds — 15 tracks on the fuller Geethams; video in a step-by-step → practice-together → karaoke progression (Amma Aanandadayni is the fullest example, 5 parts) for violin and vocal separately. The new lesson page needs a language switch, a sruthi + speed selector, and violin/vocal video tabs.

Still open: the 14 media-only posts (Live Video 7, Live Audio 2, Photo 5) — titles, labels and thumbnails are captured; only their YouTube ids and photo captions need one more pass.


## Content gaps / defects on the live site
- Placeholder text shipped in production: "Strings of Tradition**Loreip** Notes of Passion", "Learn the Language **Lorem,ip** of the Violin".
- Carnatic lessons page renders "Loading..." x9 — lesson list never populates.
- Broken nav hrefs on Blogger site ("htttps://") for Video-Audio, Carnatic Lessons, Thevaram, Thillana, Light Music Lessons, Devotions/English/Other Language Songs.
- Mission/Vision blocks duplicated in markup (desktop + mobile copies).
- Email address obfuscated (Cloudflare) — need owner to confirm.
- "37 years of experience" (home) vs "over 30 years" (about) vs "25 ஆண்டுகள்" (Tamil testimonial) — inconsistent.
- Award meaning typo: "Jewel of Ghonorifics-rowing Art" → "Jewel of Growing Art".
- Two disconnected properties: marketing site has no lessons, blog has the lessons but old template. Revamp should unify them.
- Images cannot be copied into the project programmatically — you'll need to upload originals (or we hotlink from the current host).

## Facts worth designing around
Karaikal, Puducherry · 37 years playing · performing since age 8 · learning since age 6 · teaching since 2000 · 5,000+ live performances · AIR broadcasts since 1992 · Thyagaraja Aradhana annually since 1992 · 12 honorific titles · US tours 2013–15, 2017–19 · students across India, USA · invented multi-language Carnatic notation system used in universities.
