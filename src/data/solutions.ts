import type { LucideIcon } from "lucide-react";
import { BarChart3, CalendarCheck, FileSignature, KanbanSquare } from "lucide-react";

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const solutions: Solution[] = [
  {
    title: "Posting & Pipeline",
    description: "Job posting, formulir lamaran, dan Kanban pipeline kandidat yang terstruktur.",
    icon: KanbanSquare,
  },
  {
    title: "Interview Scheduling",
    description: "Jadwal otomatis, undangan terintegrasi, dan scorecard standar per posisi.",
    icon: CalendarCheck,
  },
  {
    title: "Evaluasi Berbasis Data",
    description: "Rating per kategori, feedback terstruktur, dan rekomendasi Hire / No Hire.",
    icon: BarChart3,
  },
  {
    title: "Offer & Onboarding",
    description: "Generate offer letter, e-signature, dan checklist onboarding new hire.",
    icon: FileSignature,
  },
];
