export interface Persona {
  role: string;
  tagline: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const personas: Persona[] = [
  {
    role: "Kandidat / Pelamar",
    tagline: "Proses lamaran yang transparan",
    description:
      "Lihat semua lowongan terbuka, apply dengan mudah, dan pantau status lamaran Anda secara real-time - tanpa perlu menunggu kabar via email.",
    features: [
      "Formulir lamaran online yang simpel",
      "Status tracking real-time",
      "Notifikasi otomatis setiap tahap",
      "Konfirmasi jadwal interview instan",
    ],
  },
  {
    role: "HR / Recruiter",
    tagline: "Rekrutmen terpusat & efisien",
    description:
      "Kelola semua posisi, screening otomatis dengan AI, jadwalkan interview, dan pantau seluruh pipeline dari satu dashboard tanpa tab browser yang berantakan.",
    features: [
      "Pipeline Kanban semua posisi",
      "AI screening & auto-scoring CV",
      "Scheduling & calendar terintegrasi",
      "Laporan recruitment analytics",
    ],
    highlighted: true,
  },
  {
    role: "Hiring Manager",
    tagline: "Keputusan hire yang lebih baik",
    description:
      "Review shortlist kandidat yang sudah discreen, isi scorecard standar, dan buat keputusan hire berbasis data - bukan intuisi sesaat.",
    features: [
      "Shortlist pre-screened dari HR",
      "Scorecard standar per posisi",
      "Perbandingan kandidat side-by-side",
      "Approval offer letter digital",
    ],
  },
];
