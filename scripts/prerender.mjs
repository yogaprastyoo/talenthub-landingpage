// Lightweight per-route metadata prerender for SPA.
// Generates dist/<route>/index.html for each configured page,
// rewriting meta tags so social scrapers see correct OG/Twitter data.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const SITE = "https://talenthub.labs.it.pens.ac.id";

const routes = [
  {
    path: "/",
    title: "TalentHub - Platform ATS Rekrutmen Indonesia",
    description:
      "TalentHub adalah platform ATS end-to-end untuk tim HR Indonesia. Kelola job posting, pipeline kandidat, interview scheduling, hingga onboarding dalam satu sistem yang terhubung.",
    ogTitle: "TalentHub - Platform ATS Rekrutmen Indonesia",
    ogDescription:
      "Dari job posting, pipeline kandidat, interview scheduling, hingga offer dan onboarding — semua dalam satu sistem yang terhubung.",
    ogImage: "/og-image.jpg",
  },
  {
    path: "/about",
    title: "Tentang Kami - TalentHub",
    description:
      "TalentHub adalah platform ATS mobile yang dikembangkan Tim PBL Politeknik Elektronika Negeri Surabaya bersama mitra industri Sindika untuk menyederhanakan rekrutmen end-to-end.",
    ogTitle: "Tentang Kami - TalentHub",
    ogDescription:
      "Platform ATS mobile yang dikembangkan Tim PBL Politeknik Elektronika Negeri Surabaya bersama mitra industri Sindika.",
    ogImage: "/og-image.jpg",
  },
  {
    path: "/privacy",
    title: "Kebijakan Privasi - TalentHub",
    description:
      "Kebijakan Privasi TalentHub menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda saat menggunakan aplikasi TalentHub.",
    ogTitle: "Kebijakan Privasi - TalentHub",
    ogDescription:
      "Kebijakan Privasi TalentHub menjelaskan pengumpulan, penggunaan, dan perlindungan data pribadi Anda.",
    ogImage: "/og-image.jpg",
  },
];

const baseHtml = await readFile(join(distDir, "index.html"), "utf8");

function rewriteMeta(html, route) {
  let out = html;
  const canonical = `${SITE}${route.path}`;
  const ogImageAbs = `${SITE}${route.ogImage}`;

  out = out.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`,
  );
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${route.description}" />`,
  );
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${route.ogTitle}" />`,
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${route.ogDescription}" />`,
  );
  out = out.replace(
    /<meta property="og:image" content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${ogImageAbs}" />`,
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${route.ogTitle}" />`,
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${route.ogDescription}" />`,
  );
  out = out.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${ogImageAbs}" />`,
  );

  return out;
}

let generated = 0;
for (const route of routes) {
  const html = rewriteMeta(baseHtml, route);
  if (route.path === "/") {
    await writeFile(join(distDir, "index.html"), html, "utf8");
  } else {
    const dir = join(distDir, route.path);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, "index.html"), html, "utf8");
  }
  generated++;
}

console.log(`✓ Prerender selesai: ${generated} halaman dengan meta per-route.`);
