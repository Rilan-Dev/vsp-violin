import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // 301 redirects — 22 old Blogger URLs + 4 old vspviolinrainbow.com URLs.
  // The old lesson URLs are in YouTube descriptions, WhatsApp threads, and
  // Google's index. Every one needs a 301 to its new home or the existing
  // audience is lost (handoff §"Redirects").
  async redirects() {
    return [
      // --- Old sukapavalan.com Blogger lesson URLs → new /lessons/[slug] ---
      { source: "/2023/02/blog-post.html", destination: "/lessons/bakthi-lingashtagam", permanent: true },
      { source: "/2021/03/carnatic-basic-lesson-i-sruthi-swara.html", destination: "/lessons/basic-01-sruthi-swara-varisai", permanent: true },
      { source: "/2021/03/carnatic-basic-lesson-ii-sarali-varisai.html", destination: "/lessons/basic-02-sarali-varisai", permanent: true },
      { source: "/2021/03/carnatic-basic-lesson-iii-janta-varisai.html", destination: "/lessons/basic-03-janta-varisai", permanent: true },
      { source: "/2021/03/carnatic-basic-lesson-iv-melsthaye.html", destination: "/lessons/basic-04-melsthayi-varisai", permanent: true },
      { source: "/2021/03/carnatic-basic-lesson-v-thattu-varisai.html", destination: "/lessons/basic-05-thattu-varisai", permanent: true },
      { source: "/2021/07/youtube-video-player.html", destination: "/lessons/cine-poongathave", permanent: true },
      { source: "/2021/04/gananaatha-geetham-mayamalavagowlai.html", destination: "/lessons/geetham-gananaatha", permanent: true },
      { source: "/2021/04/kereya-neeranu-malahari-geetham-lesson.html", destination: "/lessons/geetham-kereya-neeranu", permanent: true },
      { source: "/2021/04/kumara-murugaaudio-lesson-geetham.html", destination: "/lessons/geetham-kumara-muruga", permanent: true },
      { source: "/2021/04/sree-gananatha-lambothara-geetham-ragam.html", destination: "/lessons/geetham-sree-gananatha", permanent: true },
      { source: "/2021/04/varaveena-geetham-mohanam-lesson.html", destination: "/lessons/geetham-varaveena", permanent: true },
      { source: "/2021/07/aadikkondar-krithi-mayamalavagowlai.html", destination: "/lessons/krithi-aadikkondar", permanent: true },
      { source: "/2023/08/blog-post_4.html", destination: "/lessons/krithi-enna-thavam", permanent: true },
      { source: "/2023/08/blog-post.html", destination: "/lessons/krithi-maha-ganapathim", permanent: true },
      { source: "/2021/04/raama-janaardana-shankarabharanam.html", destination: "/lessons/nottuswaram-raama-janaardana", permanent: true },
      { source: "/2021/04/raaravenu-swarajathi-bilahari-lesson.html", destination: "/lessons/swarajathi-raaravenu", permanent: true },
      { source: "/2021/06/kaithala-niraikani-thiruppugazh-lesson-1.html", destination: "/lessons/thiruppugazh-01-kaithala-niraikani", permanent: true },
      { source: "/2021/06/muththai-tharu-thiruppugazh-lesson-2.html", destination: "/lessons/thiruppugazh-02-muththai-tharu", permanent: true },
      { source: "/2021/11/varnam-amma-aanandadayini-gambheera.html", destination: "/lessons/varnam-amma-aanandadayini", permanent: true },
      { source: "/2021/11/hamsadhvani-varanam-jalajaaksha.html", destination: "/lessons/varnam-jalajaaksha", permanent: true },
      { source: "/2023/08/blog-post_61.html", destination: "/lessons/varnam-mohanam", permanent: true },

      // --- Old vspviolinrainbow.com page URLs → homepage anchors ---
      { source: "/achievement.html", destination: "/#honours", permanent: true },
      { source: "/carnatic_lessons.html", destination: "/library", permanent: true },
      { source: "/learn_the_violin.html", destination: "/#learn", permanent: true },
      { source: "/light_music_lessons.html", destination: "/library?category=cine-songs", permanent: true },

      // --- Blogger label/tag URLs → library ---
      { source: "/search/label/Live%20Video", destination: "/library?category=live-video", permanent: true },
      { source: "/search/label/Live%20Audio", destination: "/library?category=live-audio", permanent: true },
      { source: "/search/label/Geetham", destination: "/library?category=geetham", permanent: true },
      { source: "/search/label/Varnam", destination: "/library?category=varnam", permanent: true },
      { source: "/search/label/Krithi", destination: "/library?category=krithi", permanent: true },
      { source: "/search/label/Thiruppugazh", destination: "/library?category=thiruppugazh", permanent: true },

      // --- Canonical domain: vspviolinrainbow.com → sukapavalan.com (handled at DNS/Caddy level, but include www → non-www) ---
      // Note: domain-level redirects are handled by Caddy, not Next.js.
    ];
  },
};

export default nextConfig;
