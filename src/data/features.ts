export interface FeatureListItem {
  title: string;
  detail: string;
}

export interface FeatureMockupCard {
  name: string;
  detail: string;
}

export interface FeatureMockupColumn {
  title: string;
  count: number;
  cards: FeatureMockupCard[];
}

export interface ScreeningScore {
  name: string;
  score: number;
}

export interface FeatureTab {
  id: string;
  label: string;
  headline: string;
  description: string;
  items: FeatureListItem[];
  mockupTitle: string;
  columns: FeatureMockupColumn[];
  scores: ScreeningScore[];
  screenshotSrc?: string;
  badge?: string;
}

export const featureTabs: FeatureTab[] = [
  {
    id: "posting-pipeline",
    label: "Posting & Pipeline",
    badge: "Tersedia sekarang",
    screenshotSrc: "/screenshots/beranda.webp",
    headline: "Satu tempat untuk semua kandidat Anda",
    description:
      "Dari lamaran masuk hingga kandidat dipindah antar tahap - semua bisa dikerjakan tim tanpa keluar dari platform.",
    items: [
      {
        title: "Job posting ke career page publik & internal",
        detail: "Buat lowongan sekali, sebar ke career page dan job board pilihan Anda.",
      },
      {
        title: "Formulir lamaran online + upload CV & portofolio",
        detail: "Custom form fields sesuai kebutuhan posisi - dengan validasi otomatis.",
      },
      {
        title: "Pipeline Kanban: Applied → Screening → Interview → Hired",
        detail: "Visualisasi seluruh pipeline secara real-time untuk semua posisi.",
      },
      {
        title: "AI resume screening - scoring otomatis",
        detail: "Prioritaskan kandidat paling relevan sebelum review manual.",
      },
      {
        title: "Drag & drop kandidat antar tahap",
        detail: "Update status kandidat secepat menggeser kartu.",
      },
    ],
    mockupTitle: "Candidate Pipeline - Sr. Frontend Engineer",
    columns: [
      {
        title: "Applied",
        count: 12,
        cards: [
          { name: "Arif Pratama", detail: "6 yrs exp, React" },
          { name: "Dimas K.", detail: "7 yrs exp, Vue · React" },
        ],
      },
      {
        title: "Screening",
        count: 5,
        cards: [{ name: "Putri Andini", detail: "AI score: 88, Rating 4.5" }],
      },
      {
        title: "Interview",
        count: 3,
        cards: [{ name: "Aisyah Rahma", detail: "Tech passed, Rating 5.0" }],
      },
      {
        title: "Hired",
        count: 2,
        cards: [{ name: "Nadia P.", detail: "Start May 5, Signed" }],
      },
    ],
    scores: [
      { name: "Aisyah R.", score: 95 },
      { name: "Putri A.", score: 88 },
      { name: "Arif P.", score: 74 },
    ],
  },
  {
    id: "interview-scoring",
    label: "Interview & Scoring",
    badge: "Roadmap",
    headline: "Interview lebih rapi, evaluasi lebih konsisten",
    description:
      "Jadwalkan sesi, kirim undangan, dan kumpulkan scorecard standar agar setiap keputusan punya dasar yang jelas.",
    items: [
      {
        title: "Interview scheduling terintegrasi",
        detail: "Koordinasikan kandidat dan interviewer dalam satu alur tanpa chat bolak-balik.",
      },
      {
        title: "Scorecard standar per posisi",
        detail: "Gunakan kriteria yang sama untuk semua kandidat agar evaluasi lebih adil.",
      },
      {
        title: "Feedback terstruktur",
        detail: "Catatan interviewer tersimpan di profil kandidat dan mudah dibandingkan.",
      },
      {
        title: "Rekomendasi Hire / No Hire",
        detail: "Gabungkan rating, feedback, dan sinyal pipeline untuk keputusan akhir.",
      },
    ],
    mockupTitle: "Interview Scorecard - Backend Engineer",
    columns: [
      { title: "Skills", count: 4, cards: [{ name: "System Design", detail: "4.5 / 5" }] },
      { title: "Culture", count: 3, cards: [{ name: "Collaboration", detail: "4.0 / 5" }] },
      { title: "Decision", count: 1, cards: [{ name: "Recommendation", detail: "Hire" }] },
    ],
    scores: [
      { name: "Technical", score: 90 },
      { name: "Communication", score: 84 },
      { name: "Culture", score: 80 },
    ],
  },
  {
    id: "reporting-analytics",
    label: "Reporting & Analytics",
    badge: "Roadmap",
    headline: "Laporan recruitment yang siap dipakai",
    description:
      "Pantau funnel, time-to-hire, sumber kandidat, dan performa rekrutmen tanpa membuat spreadsheet manual.",
    items: [
      {
        title: "Dashboard pipeline real-time",
        detail: "Lihat conversion rate dari Applied hingga Hired untuk semua posisi.",
      },
      {
        title: "Time-to-hire per departemen",
        detail: "Temukan bottleneck dan prioritas perbaikan proses rekrutmen.",
      },
      {
        title: "Analisis sumber kandidat",
        detail: "Ukur channel mana yang menghasilkan kandidat terbaik.",
      },
      {
        title: "Export Excel dan PDF",
        detail: "Bagikan laporan ke manajemen tanpa format ulang manual.",
      },
    ],
    mockupTitle: "Recruitment Analytics - Monthly View",
    columns: [
      { title: "Funnel", count: 6, cards: [{ name: "Applied to Hired", detail: "18% conversion" }] },
      { title: "Speed", count: 4, cards: [{ name: "Time-to-Hire", detail: "22 days average" }] },
      { title: "Source", count: 5, cards: [{ name: "Referral", detail: "Highest quality" }] },
    ],
    scores: [
      { name: "Offer rate", score: 86 },
      { name: "Pipeline health", score: 78 },
      { name: "SLA hiring", score: 72 },
    ],
  },
];
