import type { LucideIcon } from "lucide-react";
import { BarChart3, CalendarClock, FileX, KanbanSquare, MessageCircleDashed, SlidersHorizontal } from "lucide-react";

export interface PainPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const painPoints: PainPoint[] = [
  {
    title: "CV Tercecer",
    description: "Lamaran masuk via email, WhatsApp, job portal - sulit dilacak dan mudah terlewat.",
    icon: FileX,
  },
  {
    title: "Komunikasi Lambat",
    description: "Pelamar menunggu berminggu-minggu tanpa kabar - merusak employer brand Anda.",
    icon: MessageCircleDashed,
  },
  {
    title: "Evaluasi Tidak Konsisten",
    description: "Setiap interviewer punya standar berbeda - keputusan hire/no-hire jadi bias.",
    icon: SlidersHorizontal,
  },
  {
    title: "Pipeline Tidak Terlihat",
    description: "HR tidak tahu berapa pelamar di tahap mana - bottleneck tidak terdeteksi.",
    icon: KanbanSquare,
  },
  {
    title: "Scheduling Kacau",
    description: "Koordinasi jadwal interview via chat - sering bentrok, kandidat frustrasi.",
    icon: CalendarClock,
  },
  {
    title: "Data Tidak Terstruktur",
    description: "Sulit mengukur time-to-hire dan cost-per-hire untuk keputusan strategis.",
    icon: BarChart3,
  },
];
