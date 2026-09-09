module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const db = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [
        'error',
        'warn'
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
}),
"[project]/src/lib/site-content.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"brand\":{\"name\":\"Violin Suka Pavalan\",\"shortName\":\"VSP\",\"tagline\":\"Soulful Strings, Timeless Melodies.\",\"greeting\":\"VANAKAM!\",\"person\":\"SUKA PAVALAN\",\"credentials\":\"(M.A. ThamizhIsai, D. C. Tech, D.T.T)\",\"copyright\":\"© 2025 Violin Suka Pavalan. All rights reserved\",\"domains\":[\"https://vspviolinrainbow.com/\",\"https://www.sukapavalan.com/\"],\"experienceYears\":\"37 years (owner-confirmed figure to use site-wide)\",\"mediaPolicy\":\"Hotlink images from the current hosts for now; swap to uploaded originals later.\",\"revampGoals\":[\"Enroll new students\",\"Get booked for performances\",\"Showcase honours and credibility\",\"Publish the free lesson library\",\"Build a following / audience\"],\"unify\":\"Single site — vspviolinrainbow.com pages plus the full sukapavalan.com lesson library.\"},\"contact\":{\"address\":\"58, Main St, Asiriyar Nagar, Karaikal, Puducherry 609602\",\"phone\":\"98656 44345\",\"email\":\"sukapavalan@gmail.com\",\"social\":{\"youtube\":\"https://www.youtube.com/channel/UCwtXQIbtIvtGXEXnGU0pL7w\",\"facebook\":\"https://www.facebook.com/ViolinSukaPavalan\",\"instagram\":\"https://www.instagram.com/sukapavalan/\",\"twitter\":\"https://twitter.com/suka_pavalan\"},\"formIntent\":[\"Booking Inquiries\",\"Music Lessons\",\"Collaborations\"],\"formFields\":[\"NAME\",\"EMAIL*\",\"Phone Number\",\"YOUR MESSAGE*\"],\"formSuccess\":\"Your message was sent successfully! We will be in touch as soon as we can.\",\"formError\":\"Something went wrong, try refreshing and submitting the form again.\",\"heroLine\":\"Connect. Collaborate. Create.\",\"heroSub\":[\"Whether you have a query,\",\"wish to learn, or\",\"want to book a performance\",\"I'm here to listen.\"],\"directionCta\":\"Direction\",\"addressLines\":[\"58, Main St, Asiriyar Nagar, Karaikal,\",\"Puducherry 609602\"]},\"nav\":{\"primary\":[\"Home\",\"About\",\"Learning\",\"Achievements\",\"Gallery\",\"Contact\"],\"learningSub\":[{\"label\":\"Carnatic Lessons\",\"url\":\"https://vspviolinrainbow.com/carnatic_lessons.html\"},{\"label\":\"Light Music Lessons\",\"url\":\"https://vspviolinrainbow.com/light_music_lessons.html\"},{\"label\":\"Learn the Violin\",\"url\":\"https://vspviolinrainbow.com/learn_the_violin.html\"}]},\"home\":{\"heroLines\":[\"Soulful Strings,\",\"Timeless Melodies.\"],\"introHeading\":[\"VANAKAM!\",\"I'm SUKA PAVALAN\"],\"introBody\":[\"A passionate violinist with a deep love for bringing music to life. With 37 years of experience, I specialize in classical and film music, performing as a soloist and collaborating with ensembles. My journey with the violin has taken me to notable performances, competitions, or achievements and I'm always exploring new ways to connect with audiences through music. Whether on stage or in the studio, my goal is to inspire and create unforgettable musical moments. Connecting with students across the globe and imparting knowledge of violin, makes me complete as a guru.\",\"I was fortunate enough to start learning Music (Violin and Vocal) Lessons from the age of 6 from Music Legends Thiruvarur Shri S. Santhanam, Nellai Shri E. Shanmuganathan and Mayavaram Shri S. Sivaswamy Iyer. I had the opportunity of learning advanced violin lessons from Shri V. L. Sudharsan and Shri Kumaresh (Ganesh Kumaresh) Learnt Western Music from Porayar Shri Adisayam Arumairaj. Credits for learning Harmonium goes to my dear Father, Shri. S. Subramaniyan. Then with a strong foundation, I started performing on the stage from the age of 8.\"],\"mission\":[\"To share the joy of violin playing with students of all ages, nurturing their skills, creativity, and love for music.\",\"To continuously grow as a musician, refining my technique and expression while staying true to my passion for music.\",\"To inspire and move audiences through the beauty of violin music, bringing emotion, storytelling, and artistry to every performance.\",\"To use the power of music to connect cultures, promote peace, and bring hope to communities through performances and outreach.\"],\"vision\":[\"To redefine the possibilities of violin music, blending tradition with innovation to create transformative musical experiences that touch the soul.\",\"To use the violin as a tool for cultural exchange, healing, and unity, bringing music to communities that need it most.\",\"To build a world where music education is accessible to all, inspiring future generations of violinists to develop their talent and passion for the arts.\",\"To continuously evolve as an artist, pushing creative boundaries while honoring the rich heritage of violin music.\"],\"testimonialsHeading\":\"See What All the Talk is About\",\"testimonials\":[{\"title\":\"A Mentor Beyond Music\",\"author\":\"Arun Family\",\"place\":\"Los Angeles - USA\",\"quote\":\"Pavalan Sir's influence extends beyond the realm of music; he embodies values of humility, generosity, and devotion to family and community. We consider ourselves profoundly fortunate to have him as both a teacher and a role model for our children. It is our sincere prayer that the Almighty blesses him and his family with enduring health, success, and recognition for the light they bring to the world through their artistry and kindness.\"},{\"title\":\"The Art of Masterful Music\",\"author\":\"Sri Babu Parameshwaran\",\"place\":\"Director Of Keerthana School Of Indian Music, California\",\"quote\":\"What sets Mr. Pavalan apart is not only his mastery of the violin but also his extraordinary versatility. He plays a wide range of Indian musical genres with equal ease and brilliance, and his command of the Western musical system is equally impressive. His deep knowledge and ongoing commitment to learning—especially in the area of audio technology—allow him to deliver a sound quality that is truly exceptional. His violin tone is distinctive, rich, and refined, often standing out in a way that captures the attention of even the most discerning listeners.\"},{\"title\":\"Fostering Passion Through Music\",\"author\":\"Suba & Karthik\",\"place\":\"St. Augustine USA\",\"quote\":\"Your passion and dedication for teaching has made him learn more and try new music. You inspire him to be his best and make him love to play his violin. You have a special way of teaching by making him introduce the song first by reciting Swaram, Sahithyam and then playing the violin which makes him learn easier as he has not listened to most of the songs. He really enjoys your class because of the fun and engaging learning experiences. Thank you so much for being an amazing teacher for Kavin !!\"},{\"title\":\"காரைக்காலின் பெருமைகளில் இவரும் ஒன்று\",\"author\":\"வ. சவரிராஜன்\",\"place\":\"ASI காவல்துறை.\",\"quote\":\"மதிப்பிற்குரிய சுகபாவலன் ஐயா அவர்கள் காரைக்காலுக்கு பெருமை. இசையில் ஆர்வமுள்ளவர்களை அவரின் வயலின் இசையால் கவர்ந்திழுக்க கூடிய மகத்தான திறைமை பெற்றவர். அதுமட்டுமல்லாது அவரது 25 ஆண்டுகளை கடந்த வயலின் இசை பயிற்ச்சியில் அவரைபோன்றே திறமையான இளம் வயலின் இசை கலைஞர்களை உருவாக்குவதிலும் வல்லமை பெற்றவர். காரைக்காலின் பெருமைகளில் இவரும் ஒன்று. இறைவன் அருளால் ஐயா அவர்களின் இசை பயணம் இனிதாய் தொடர எனது மகிழ்ச்சியான வாழ்த்துகள்.\"}],\"contactHeading\":\"What brings you here today?\"},\"about\":{\"heroLine\":\"Weaving melodies  inspiring generations.\",\"role\":\"Suka Pavalan — Violinist, Music Educator, and Guru\",\"body\":[\"A highly skilled and passionate Violinist with over 30 years of experience, I have had the privilege of performing and teaching across various musical genres, including Classical, Light Music, and both Carnatic and Western styles. As a performer, I have organized, coordinated, and participated in numerous live and televised concerts, both nationally and internationally.\",\"I am honored to have received several prestigious awards and titles throughout my career, celebrating my contributions to the world of music. My extensive expertise in composing music spans both Carnatic and Western traditions, and I take pride in collaborating with other artists to create exceptional performances that resonate with diverse audiences.\",\"One of my proudest achievements is the development of a unique method to convert Carnatic notation into multiple languages. This system is now widely used in universities and colleges, helping students around the world access this invaluable knowledge in a more inclusive and comprehensible way.\",\"Since 2000, I have been dedicated to teaching violin and vocal classes to students of all ages and backgrounds, both in person and online. My work as a mentor has been especially rewarding, as I have guided many students to successfully complete their Arangetrams—an important milestone in their musical journey. Today, many of my students continue to perform and share their musical talents across India and beyond.\",\"My mission is to continue passing on this beautiful art form to future generations, fostering a deep appreciation for music and its transformative power.\"],\"tours\":{\"label\":\"Abroad Tours\",\"country\":\"United States of America\",\"body\":\"Performed in prestigious venues and events across the USA, captivating audiences with mesmerizing musical performances. These international tours highlight a global presence and a dedication to sharing the richness of music across cultures.\",\"years\":[\"2013 - 2015\",\"2017 - 2019\"]},\"honorsTeaser\":[\"A journey adorned with prestigious titles,\",\"unwavering dedication, and musical mastery\"],\"honorsCta\":{\"label\":\"Discover Honor\",\"url\":\"https://vspviolinrainbow.com/achievement.html\"},\"performance\":{\"heading\":\"Radio and Stage performance\",\"body\":\"As an artist, it always gives pleasure while performing on any platform. I have an opportunity to perform in various Radio programmes and also on different stages to create good vibrations and contribute to divine music.\",\"radio\":{\"since\":\"Since 1992\",\"body\":\"Regularly featured in numerous broadcasts on All India Radio (AIR) stations, including:\",\"stations\":[\"AIR Trichy\",\"AIR Puducherry\",\"AIR Karaikal\"]},\"stage\":[{\"since\":\"Since 1990\",\"body\":\"Over 5,000 live performances across various prestigious platforms.\"},{\"since\":\"Since 1992\",\"body\":\"Annual participation in the Thyagaraja Aradhana Utsavam, Thiruvaiyaru, paying homage to the legendary saint-composer.\"}],\"closing\":\"With an extensive career spanning decades, these performances reflect a deep-rooted passion for music and an unwavering commitment to artistic excellence.\"},\"education\":[{\"title\":\"Diploma In Computer Technology (D.C. Tech)\",\"detail\":\"Karaikal Polytechnic (1997-2000)\"},{\"title\":\"Bachelor of Music - Violin (B. Music - Violin)\",\"detail\":\"Annamalai University (2005-2008)\"},{\"title\":\"Higher Grade in Indian Music\",\"detail\":\"2007\"},{\"title\":\"Diploma Teacher Training Course (Music)\",\"detail\":\"Tamil University (2007-2008)\"},{\"title\":\"M.A. Thamizhisai\",\"detail\":\"Tamil University (2008-2010)\"}],\"interests\":[{\"title\":\"Music Education for All\",\"body\":\"Conducting free coaching classes for economically disadvantaged students, nurturing the next generation of musicians.\",\"icon\":\"icons/music_ic.svg\"},{\"title\":\"Carnatic Music Made Easy\",\"body\":\"Developing a comprehensive book to simplify Carnatic music learning in multiple languages.\",\"icon\":\"icons/carnatic_ic.svg\"},{\"title\":\"Fusion & Creative Composition\",\"body\":\"Experimenting with diverse musical styles, including jingles and innovative compositions\",\"icon\":\"icons/fusion_ic.svg\"},{\"title\":\"Background Scores for Short Films\",\"body\":\"Composing expressive and dynamic scores for visual storytelling.\",\"icon\":\"icons/bg_ic.svg\"},{\"title\":\"Home Studio Recording\",\"body\":\"Exploring sound production and recording music in a professional home studio setup.\",\"icon\":\"icons/homestudio_ic.svg\"},{\"title\":\"Playback Singing\",\"body\":\"Contributing vocals for light music albums, blending classical depth with contemporary styles.\",\"icon\":\"icons/playback_ic.svg\"}]},\"achievements\":{\"heroLine\":\"A Journey of Excellence, One Note at a Time.\",\"honorificsIntro\":\"With the blessings of the Almighty, over the years, I have been honored with prestigious titles that reflect my mastery, dedication, and contribution to the world of Music, especially violin. These honorifics serve as a testament to my excellence and lasting impact.\",\"honorifics\":[{\"title\":\"Violin Ratna\",\"meaning\":\"Jewel of Violin Artistry\",\"image\":\"images/honors/Violin Rathna District Collectorate Karaikal Govt Of Puducherry 2024.jpg\",\"awardedBy\":\"District Collectorate Karaikal, Govt of Puducherry\",\"year\":2024},{\"title\":\"Vallalar\",\"meaning\":\"Vallalar Excellence Award\",\"image\":\"images/honors/Karaikal Arutpa Innisai Maamamni - Samara Sanmarga Sangam Niravi 2017.jpg\",\"awardedBy\":\"Samara Sanmarga Sangam, Niravi\",\"year\":2017},{\"title\":\"Violin Chakravarthy\",\"meaning\":\"Emperor of Violin\",\"image\":\"images/honors/Violin Chakravarthi - Agila India Samuga Amaippu - Pondy 2019.jpg\",\"awardedBy\":\"Agila India Samuga Amaippu, Pondy\",\"year\":2019},{\"title\":\"Innisai Ilaval\",\"meaning\":\"Prince of Sweet Music\",\"image\":\"images/honors/honor (1).jpg\"},{\"title\":\"Villisai Vendan\",\"meaning\":\"King of Violin Music\",\"image\":\"images/honors/honor (1).webp\"},{\"title\":\"Sangeetha Sangoli\",\"meaning\":\"Resonating Voice of Music\",\"image\":\"images/honors/honor (2).jpg\"},{\"title\":\"Violin Vidhva Vibhushan\",\"meaning\":\"Ornament of Violin Expertise\",\"image\":\"images/honors/violin_vithya_vibushanam.jpg\"},{\"title\":\"Sunadham\",\"meaning\":\"Melodious Sound\",\"image\":\"images/honors/honor (2).webp\"},{\"title\":\"Kalai Valar Maamani\",\"meaning\":\"Jewel of Growing Art [source typo: 'Ghonorifics-rowing Art']\",\"image\":\"images/honors/kalaivaalar_maamani.jpg\"},{\"title\":\"Kalai Seer Kaavalar\",\"meaning\":\"Guardian of Artistic Excellence\",\"image\":\"images/honors/Kalaiseer Kavalar - Kaapiya Kazhagam Karaikal 2012.jpg\",\"awardedBy\":\"Kaapiya Kazhagam Karaikal\",\"year\":2012},{\"title\":\"Isai Saathanayaalan\",\"meaning\":\"Master of Music\",\"image\":\"images/honors/honor (3).webp\"},{\"title\":\"Sapthaswara Maamani\",\"meaning\":\"Jewel of the Seven Musical Notes\",\"image\":\"images/honors/Sapthaswara Maamani - Sapthaswaram Music Academy Karaikal 2009.jpg\",\"awardedBy\":\"Sapthaswaram Music Academy Karaikal\",\"year\":2009}],\"accoladesHeading\":\"Prestigious Accolades\",\"accolades\":[{\"title\":\"Cultural Talent Search Scholarship (1994 – 2000)\",\"body\":\"Awarded by the Center for Cultural Resources and Training (CCRT), New Delhi, in recognition of exceptional talent and dedication to cultural arts.\"},{\"title\":\"First Prize Winner in Numerous Competitions:\",\"body\":\"Consistently secured top honors in various prestigious competitions, showcasing unparalleled skill and artistry.\"},{\"title\":\"Thamizhisai Sangam, Chennai:\",\"body\":\"Awarded First Prize and honored with a violin as a special recognition for outstanding musical excellence.\"}]},\"gallery\":{\"heading\":\"Gallery of Glory\",\"images\":[\"images/gallery/gallery-img (12).webp\",\"images/gallery/gallery-img (10).webp\",\"images/gallery/gallery-img (9).webp\",\"images/gallery/gallery-img (11).webp\",\"images/gallery/gallery-img (7).webp\",\"images/gallery/gallery-img (6).webp\",\"images/gallery/gallery-img (3).webp\",\"images/gallery/gallery-img (8).webp\",\"images/gallery/gallery-img (4).webp\",\"images/gallery/gallery-img (5).webp\",\"images/gallery/gallery-img (15).webp\",\"images/gallery/gallery-img (14).webp\",\"images/gallery/gallery-img (2).webp\",\"images/gallery/gallery-img (1).webp\",\"images/gallery/gallery-img (13).webp\"]},\"carnaticLessons\":{\"heroLine\":\"Strings of Tradition / Notes of Passion  [NOTE: live site contains 'Loreip' placeholder text — needs real copy]\",\"categories\":[\"Basic Lessons\",\"Geetham\",\"Swarajathi\",\"Nottuswaram\",\"Varnam\",\"Krithi\",\"Thirupugazh\"],\"note\":\"Lesson content on the live site loads async and rendered as 'Loading...' — actual lesson items live on sukapavalan.com blog labels.\"},\"learnTheViolin\":{\"heroLine\":\"Learn the Language of the Violin  [NOTE: live site contains 'Lorem,ip' placeholder text]\",\"intro\":\"Music is a universal language that transcends boundaries, emotions, and cultures. It has the power to inspire, heal, and bring people together. Instrumental music speaks beyond words, evoking emotions and telling stories through melody, harmony, and rhythm. From the soaring notes of a violin to the deep resonance of a piano, each instrument brings a unique voice to the symphony of sound. Whether in classical compositions, jazz improvisations, or modern cinematic scores, instrumental music has the power to inspire, heal, and transport listeners to new worlds. Its timeless beauty connects cultures and generations, making it an essential part of human expression.\",\"violinHistory\":[\"The modern violin was developed in the early 16th century in Italy, with Andrea Amati of Cremona often credited as its inventor. Amati refined the design of earlier stringed instruments like the rebec, lira da braccio, and vihuela, creating the foundation for the violin as we know it today.\",\"His work influenced later master luthiers such as Antonio Stradivari and Giuseppe Guarneri, whose violins remain some of the most prized instruments in the world. While bowed string instruments existed long before Amati's time, his craftsmanship set the standard for the modern violin's structure, tone, and playability.\",\"The violin is a timeless instrument known for its rich, expressive sound and versatility across musical genres. From classical concertos to contemporary compositions, the violin captivates audiences with its emotional depth and technical brilliance. Mastering the violin requires dedication, precision, and passion, making it a rewarding pursuit for musicians of all levels. Whether played solo, in an orchestra, or as part of an ensemble, the violin remains a symbol of elegance and artistic excellence.\"],\"pullQuote\":{\"text\":\"When you play a violin piece, you are a storyteller, and you're telling a story.\",\"author\":\"Joshua Bell\"},\"strings\":{\"heading\":\"Violin Strings\",\"intro\":\"The violin has four strings, each tuned to a specific pitch:\",\"items\":[{\"name\":\"G String (G3)\",\"body\":\"The lowest and thickest string, producing a deep, warm, and rich tone.\"},{\"name\":\"A String (A4)\",\"body\":\"A bright and expressive middle string, often used for melodies.\"},{\"name\":\"D String (D4)\",\"body\":\"Slightly higher in pitch, offering a balanced and mellow sound.\"},{\"name\":\"E String (E5)\",\"body\":\"The highest and thinnest string, delivering a sharp, brilliant, and resonant tone.\"}]},\"materials\":{\"heading\":\"Materials & Types\",\"intro\":\"Violin strings are made from different materials, affecting their tone and playability:\",\"closing\":\"Violinists choose strings based on their playing style, genre, and personal preference to achieve the perfect tone.\",\"items\":[{\"name\":\"Gut Strings\",\"body\":\"Made from sheep intestines, they offer a warm, complex sound but require frequent tuning.\",\"image\":\"images/violin-materials (2).png\"},{\"name\":\"Steel Strings\",\"body\":\"Provide a bright, focused tone with excellent durability and stability.\",\"image\":\"images/violin-materials (3).png\"},{\"name\":\"Synthetic Strings\",\"body\":\"Made from nylon or composite materials, they balance warmth and stability, offering a sound similar to gut strings.\",\"image\":\"images/violin-materials (1).png\"}]},\"fingering\":{\"heading\":\"Finger Placement on Violin\",\"intro\":\"Placement of the finger while playing violin is extremely important to produce the right sound or the intended sound.\",\"items\":[{\"code\":\"O – Open String\",\"body\":\"Play the string without pressing it down with any finger.\",\"image\":\"images/openfinger.png\"},{\"code\":\"1f – Index Finger\",\"body\":\"Press the string down using the index finger.\",\"image\":\"images/indexfinger.png\"},{\"code\":\"2f – Middle Finger\",\"body\":\"Press the string down using the middle finger.\",\"image\":\"images/middle finger.png\"},{\"code\":\"3f – Ring Finger\",\"body\":\"Press the string down using the ring finger.\",\"image\":\"images/3f – Ring Finger.png\"},{\"code\":\"4f – Little Finger\",\"body\":\"Press the string down using the pinky finger.\",\"image\":\"images/4f – Little Finger.png\"}]}},\"lightMusicLessons\":{\"heroLine\":\"Strings of soul, notes of freedom  [NOTE: live site contains 'Loreip' placeholder text]\",\"categories\":[\"Cine Songs\"],\"note\":\"Only one category tab on the live site; list renders 'Loading...' — content never populates. Blogger nav implies intended categories: Devotions Songs, Cine Songs, English Songs, Other Language Songs.\"},\"lessonModel\":{\"perLesson\":[\"Notation in Tamil\",\"Notation in English\",\"YouTube video\",\"Audio track\",\"Downloadable PDF\",\"Raga / thala metadata\",\"Difficulty level\"]}}"));}),
"[project]/src/lib/data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllLessonsForStudio",
    ()=>getAllLessonsForStudio,
    "getCategoriesWithCounts",
    ()=>getCategoriesWithCounts,
    "getLessonById",
    ()=>getLessonById,
    "getLessons",
    ()=>getLessons,
    "getLibraryStats",
    ()=>getLibraryStats,
    "getMegaMenu",
    ()=>getMegaMenu,
    "getPrevNextLessons",
    ()=>getPrevNextLessons,
    "getRelatedLessons",
    ()=>getRelatedLessons,
    "getSiteContent",
    ()=>getSiteContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/site-content.json (json)");
;
;
async function getCategoriesWithCounts() {
    const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].category.findMany({
        orderBy: [
            {
                group: "asc"
            },
            {
                order: "asc"
            }
        ]
    });
    const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        where: {
            status: "published"
        },
        select: {
            category: true
        }
    });
    const countMap = new Map();
    for (const l of lessons){
        countMap.set(l.category, (countMap.get(l.category) ?? 0) + 1);
    }
    return categories.map((c)=>({
            slug: c.slug,
            name: c.name,
            group: c.group,
            order: c.order,
            count: countMap.get(c.slug) ?? 0
        }));
}
async function getLessons(categorySlug) {
    const where = {
        status: "published",
        ...categorySlug ? {
            category: categorySlug
        } : {}
    };
    const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        where,
        orderBy: [
            {
                level: "asc"
            },
            {
                date: "desc"
            }
        ]
    });
    return lessons.map((l)=>({
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
            status: l.status
        }));
}
async function getAllLessonsForStudio() {
    const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        orderBy: [
            {
                category: "asc"
            },
            {
                level: "asc"
            },
            {
                date: "desc"
            }
        ]
    });
    return lessons.map((l)=>({
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
            status: l.status
        }));
}
async function getLessonById(id) {
    const l = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findUnique({
        where: {
            id
        }
    });
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
        perVideoEmbeds: l.perVideoEmbeds ? JSON.parse(l.perVideoEmbeds) : null,
        audioLessons: l.audioLessons ? JSON.parse(l.audioLessons) : null,
        videoParts: l.videoParts ? JSON.parse(l.videoParts) : null
    };
}
/**
 * Prev/next navigation for the lesson page.
 * Basics (5 lessons across 5 sub-categories) are treated as one family —
 * prev/next walks the 5 in level order. Other categories order by date.
 */ const BASICS_SLUGS = [
    "sruthi-swara-varisai",
    "sarali-varisai",
    "janta-varisai",
    "melsthayi-varisai",
    "thattu-varisai"
];
async function getPrevNextLessons(currentId, category) {
    const isBasics = BASICS_SLUGS.includes(category);
    const where = isBasics ? {
        status: "published",
        category: {
            in: BASICS_SLUGS
        }
    } : {
        status: "published",
        category
    };
    const orderBy = isBasics ? [
        {
            level: "asc"
        },
        {
            date: "asc"
        }
    ] : [
        {
            date: "asc"
        }
    ];
    const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        where,
        orderBy,
        select: {
            id: true,
            title: true,
            titleTamil: true,
            category: true,
            level: true
        }
    });
    const idx = lessons.findIndex((l)=>l.id === currentId);
    return {
        prev: idx > 0 ? lessons[idx - 1] : null,
        next: idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null,
        siblings: lessons,
        currentIndex: idx
    };
}
async function getRelatedLessons(currentId, raga, category) {
    if (raga) {
        const byRaga = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                raga,
                id: {
                    not: currentId
                }
            },
            orderBy: {
                date: "desc"
            },
            take: 4,
            select: {
                id: true,
                title: true,
                titleTamil: true,
                category: true,
                raga: true,
                titleCard: true
            }
        });
        if (byRaga.length >= 2) return byRaga;
        // Fall back to filling with same-category lessons
        const byCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                category,
                id: {
                    not: currentId,
                    notIn: byRaga.map((l)=>l.id)
                }
            },
            orderBy: {
                date: "desc"
            },
            take: 4 - byRaga.length,
            select: {
                id: true,
                title: true,
                titleTamil: true,
                category: true,
                raga: true,
                titleCard: true
            }
        });
        return [
            ...byRaga,
            ...byCategory
        ];
    }
    // No raga — check if this is a basic lesson, then look across all 5 basics
    if (BASICS_SLUGS.includes(category)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                category: {
                    in: BASICS_SLUGS
                },
                id: {
                    not: currentId
                }
            },
            orderBy: [
                {
                    level: "asc"
                },
                {
                    date: "desc"
                }
            ],
            take: 4,
            select: {
                id: true,
                title: true,
                titleTamil: true,
                category: true,
                raga: true,
                titleCard: true
            }
        });
    }
    // No raga, not basics — just same category
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        where: {
            status: "published",
            category,
            id: {
                not: currentId
            }
        },
        orderBy: {
            date: "desc"
        },
        take: 4,
        select: {
            id: true,
            title: true,
            titleTamil: true,
            category: true,
            raga: true,
            titleCard: true
        }
    });
}
async function getLibraryStats() {
    const [lessonCount, categoryCount, lessonsWithRaga, lessonsWithNotation] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.count({
            where: {
                status: "published"
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].category.count(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                raga: {
                    not: null
                }
            },
            select: {
                raga: true
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                notationTamil: {
                    not: null
                }
            },
            select: {
                id: true
            }
        })
    ]);
    const ragaSet = new Set(lessonsWithRaga.map((l)=>l.raga).filter(Boolean));
    return {
        lessons: lessonCount,
        notationSheets: lessonsWithNotation.length * 2,
        categories: categoryCount,
        ragas: ragaSet.size
    };
}
function getSiteContent() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$json__$28$json$29$__["default"];
}
async function getMegaMenu() {
    const cats = await getCategoriesWithCounts();
    const groups = {
        basics: {
            label: "Carnatic — Basics",
            items: []
        },
        advanced: {
            label: "Carnatic — Advanced",
            items: []
        },
        devotional: {
            label: "Devotional",
            items: []
        },
        light: {
            label: "Light Music & Media",
            items: cats.filter((c)=>c.group === "light")
        },
        media: {
            label: "",
            items: cats.filter((c)=>c.group === "media")
        }
    };
    for (const c of cats){
        if (c.group === "light" || c.group === "media") continue;
        groups[c.group].items.push(c);
    }
    // Merge light + media into one visual column but keep group labels clear.
    const lightMedia = {
        label: "Light Music & Media",
        items: [
            ...groups.light.items,
            ...groups.media.items
        ]
    };
    return [
        groups.basics,
        groups.advanced,
        groups.devotional,
        lightMedia
    ];
}
}),
"[project]/src/app/api/lessons/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-route] (ecmascript)");
;
;
async function GET(req) {
    const category = req.nextUrl.searchParams.get("category");
    const lessons = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLessons"])(category ?? undefined);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        lessons
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d2e3d5f7._.js.map