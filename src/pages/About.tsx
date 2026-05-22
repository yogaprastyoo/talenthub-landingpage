import { Helmet } from "react-helmet-async";
import {
  BarChart3,
  Building2,
  GraduationCap,
  Kanban,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { contactMailto, playStoreUrl } from "@/lib/contact";

const missions = [
  {
    title: "Satukan seluruh siklus rekrutmen",
    description:
      "Menggantikan email, spreadsheet, dan WhatsApp dengan satu sumber kebenaran untuk job posting, pipeline kandidat, interview, hingga offer.",
  },
  {
    title: "Bawa keputusan hiring ke ranah data",
    description:
      "Scorecard terstandarisasi, AI Resume Score, dan dashboard real-time memastikan keputusan didasari bukti, bukan intuisi.",
  },
  {
    title: "Permudah HR Indonesia lewat mobile",
    description:
      "Dirancang mobile-first dengan Flutter agar tim HR dan hiring manager dapat memproses kandidat dari mana saja.",
  },
];

const advantages = [
  {
    icon: Kanban,
    title: "Kanban Pipeline 6 Stage",
    description:
      "Visual pipeline dari Applied hingga Hired dengan drag-and-drop, catatan internal, dan bulk action untuk efisiensi screening.",
  },
  {
    icon: Sparkles,
    title: "AI Resume Score",
    description:
      "Analisis kesesuaian CV dengan job description secara otomatis menggunakan Gemini 2.5 Flash, membantu shortlist lebih cepat.",
  },
  {
    icon: Target,
    title: "Scorecard Interview Kustom",
    description:
      "Buat scorecard berbeda per sesi interview dengan kontrol visibilitas catatan dan rekomendasi otomatis berbasis nilai akhir.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Real-Time",
    description:
      "Time-to-Hire, Conversion Funnel, Source Effectiveness, Cost-per-Hire, dan Diversity Metrics dengan ekspor PDF & Excel.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Native",
    description:
      "Aplikasi Flutter untuk Android (iOS menyusul) — pelamar, HR, dan hiring manager bekerja dari perangkat masing-masing.",
  },
  {
    icon: Building2,
    title: "Aman dan Terpusat",
    description:
      "Otentikasi JWT dengan refresh token rotation, RBAC tiga role, dan penyimpanan token via Keystore/Keychain perangkat.",
  },
];

const team = [
  { name: "Yeremia", role: "Product Owner" },
  { name: "Yoga", role: "Scrum Master" },
  { name: "Rafif", role: "Developer" },
  { name: "Rosa", role: "Developer" },
  { name: "Rakha", role: "Developer" },
  { name: "Amalia", role: "Developer" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Tentang Kami - TalentHub</title>
        <meta
          name="description"
          content="TalentHub adalah platform ATS mobile yang dikembangkan Tim PBL Politeknik Elektronika Negeri Surabaya bersama mitra industri Sindika untuk menyederhanakan rekrutmen end-to-end."
        />
        <link rel="canonical" href="https://talenthub.labs.it.pens.ac.id/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://talenthub.labs.it.pens.ac.id/about" />
        <meta property="og:title" content="Tentang Kami - TalentHub" />
        <meta
          property="og:description"
          content="TalentHub adalah platform ATS mobile yang dikembangkan Tim PBL Politeknik Elektronika Negeri Surabaya bersama mitra industri Sindika."
        />
        <meta property="og:image" content="https://talenthub.labs.it.pens.ac.id/og-image.jpg" />
        <meta name="twitter:title" content="Tentang Kami - TalentHub" />
        <meta
          name="twitter:description"
          content="TalentHub adalah platform ATS mobile yang dikembangkan Tim PBL Politeknik Elektronika Negeri Surabaya bersama mitra industri Sindika."
        />
        <meta name="twitter:image" content="https://talenthub.labs.it.pens.ac.id/og-image.jpg" />
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://talenthub.labs.it.pens.ac.id/"},
    {"@type": "ListItem", "position": 2, "name": "Tentang Kami", "item": "https://talenthub.labs.it.pens.ac.id/about"}
  ]
}`}</script>
      </Helmet>
      <Navigation />
      <main id="main" tabIndex={-1} className="bg-surface-page focus:outline-none">
        <section className="bg-hero-bg px-6 py-20 text-center md:py-24">
          <div className="wrap mx-auto max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-hero-text/15 bg-hero-text/5 px-4 py-1.5 text-xs font-medium tracking-wide text-hero-muted">
              Tentang Kami
            </span>
            <h1 className="mb-5 text-4xl font-medium leading-tight tracking-tight text-hero-text md:text-5xl">
              Menyederhanakan rekrutmen Indonesia, dari satu aplikasi.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-hero-muted md:text-lg">
              TalentHub adalah Applicant Tracking System (ATS) berbasis mobile
              yang dikembangkan oleh Tim PBL Politeknik Elektronika Negeri
              Surabaya bersama mitra industri Sindika.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-ink-primary md:text-3xl">
            Latar Belakang
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-ink-secondary">
            <p>
              Proses rekrutmen yang tidak terstruktur menjadi hambatan utama
              bagi banyak tim HR. Lamaran kandidat tersebar di email, WhatsApp,
              dan spreadsheet; tidak ada satu sumber kebenaran untuk status
              kandidat; dan keputusan hiring sering didasarkan pada intuisi
              tanpa data yang dapat diverifikasi.
            </p>
            <p>
              TalentHub hadir sebagai solusi: satu platform ATS internal
              berbasis mobile yang menyatukan seluruh siklus rekrutmen — dari
              job posting dibuka hingga kandidat dinyatakan hired — dalam satu
              aplikasi yang terpusat, terstandarisasi, dan berbasis data.
            </p>
          </div>
        </section>

        <section className="bg-brand-tint px-6 py-16 md:py-20">
          <div className="wrap mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
              <div>
                <span className="section-pill">Visi &amp; Misi</span>
                <h2 className="mt-2 text-2xl font-medium tracking-tight text-ink-primary md:text-3xl">
                  Rekrutmen yang berbasis data, bukan intuisi.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-secondary">
                  Mewujudkan proses rekrutmen internal yang terstruktur,
                  efisien, dan berbasis data — dengan target <strong>time-to-hire
                  di bawah 25 hari</strong>, <strong>offer acceptance rate di
                  atas 85%</strong>, dan nihil defect kritikal pada fitur utama
                  dalam 6 bulan pertama penggunaan.
                </p>
              </div>
              <ul className="space-y-5">
                {missions.map((mission, idx) => (
                  <li
                    key={mission.title}
                    className="rounded-2xl border border-brand/15 bg-surface-card p-6"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-medium text-white">
                        {idx + 1}
                      </span>
                      <h3 className="text-base font-medium text-ink-primary">
                        {mission.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-secondary">
                      {mission.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="text-center">
            <span className="section-pill">Kolaborasi</span>
            <h2 className="mt-2 text-2xl font-medium tracking-tight text-ink-primary md:text-3xl">
              PBL Agile PENS &times; Sindika
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-ink-primary/10 bg-surface-card p-6">
              <GraduationCap
                className="mb-4 h-7 w-7 text-brand"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-lg font-medium text-ink-primary">
                Project-Based Learning PENS
              </h3>
              <p className="text-sm leading-relaxed text-ink-secondary">
                TalentHub dikerjakan dalam framework Project-Based Learning
                Agile yang diterapkan di Politeknik Elektronika Negeri
                Surabaya — mensimulasikan ritme sprint, peran Scrum, dan
                pengembangan iteratif khas industri perangkat lunak.
              </p>
            </div>
            <div className="rounded-2xl border border-ink-primary/10 bg-surface-card p-6">
              <Building2
                className="mb-4 h-7 w-7 text-brand"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-lg font-medium text-ink-primary">
                Sindika sebagai Mitra Industri
              </h3>
              <p className="text-sm leading-relaxed text-ink-secondary">
                Sindika adalah mitra industri yang menyediakan product plan
                TalentHub serta rutin mengadakan kuliah tamu seputar standar
                industri di sisi backend, frontend, dan cara kerja tim
                produk profesional.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-card px-6 py-16 md:py-20">
          <div className="wrap mx-auto max-w-5xl">
            <div className="text-center">
              <span className="section-pill">Keunggulan</span>
              <h2 className="mt-2 text-2xl font-medium tracking-tight text-ink-primary md:text-3xl">
                Dirancang untuk siklus rekrutmen modern
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-ink-secondary">
                Fitur-fitur inti yang membuat TalentHub menjadi ATS yang siap
                dipakai sehari-hari, bukan sekadar demo.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-ink-primary/10 bg-surface-page p-6 transition-colors hover:border-brand/30"
                  >
                    <Icon
                      className="mb-4 h-7 w-7 text-brand"
                      strokeWidth={1.5}
                    />
                    <h3 className="mb-2 text-base font-medium text-ink-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-secondary">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center">
            <span className="section-pill">Tim</span>
            <h2 className="mt-2 text-2xl font-medium tracking-tight text-ink-primary md:text-3xl">
              Enam mahasiswa, satu produk
            </h2>
            <p className="mx-auto mt-3 flex items-center justify-center gap-2 text-base text-ink-secondary">
              <Users className="h-4 w-4 text-brand" strokeWidth={1.75} />
              Tim PBL TalentHub - Politeknik Elektronika Negeri Surabaya
            </p>
          </div>
          <ul className="mt-10 grid list-none grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member) => (
              <li
                key={member.name}
                className="rounded-2xl border border-ink-primary/10 bg-surface-card p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-base font-medium text-brand">
                  {member.name.charAt(0)}
                </div>
                <div className="text-sm font-medium text-ink-primary">
                  {member.name}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-ink-secondary">
                  {member.role}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-brand-tint px-6 py-16 text-center md:py-20">
          <div className="wrap mx-auto max-w-2xl">
            <h2 className="text-2xl font-medium tracking-tight text-ink-primary md:text-3xl">
              Coba TalentHub sekarang
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base text-ink-secondary">
              Aplikasi tersedia di Google Play. Untuk demo, kerja sama, atau
              pertanyaan, hubungi tim kami.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="xl" className="min-h-11 w-full sm:w-auto">
                <a href={playStoreUrl} target="_blank" rel="noreferrer">
                  Unduh di Google Play
                </a>
              </Button>
              <a
                href={contactMailto}
                className="inline-flex h-14 min-w-[200px] items-center justify-center rounded-full border border-brand/30 bg-transparent px-10 text-base font-medium text-brand transition-colors hover:border-brand hover:bg-brand/5"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
