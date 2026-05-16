import type { LucideIcon } from "lucide-react";
import { BadgeDollarSign, ClipboardCheck, Clock, Funnel, ListChecks, Share2 } from "lucide-react";

export type ReportExportType = "Dashboard" | "Excel" | "PDF";

export interface ReportTemplate {
  title: string;
  description: string;
  exportType: ReportExportType;
  icon: LucideIcon;
}

export const reports: ReportTemplate[] = [
  {
    title: "Hiring Pipeline Funnel",
    description: "Visualisasi conversion rate dari Applied hingga Hired, per posisi atau keseluruhan.",
    exportType: "Dashboard",
    icon: Funnel,
  },
  {
    title: "Time-to-Hire",
    description: "Rata-rata durasi rekrutmen per posisi, departemen, dan periode waktu.",
    exportType: "Dashboard",
    icon: Clock,
  },
  {
    title: "Source Analysis",
    description: "Efektivitas setiap channel - Instagram, referral, career page, job board.",
    exportType: "Excel",
    icon: Share2,
  },
  {
    title: "Scorecard Summary",
    description: "Rekap penilaian semua interviewer per kandidat dan per posisi.",
    exportType: "Excel",
    icon: ClipboardCheck,
  },
  {
    title: "Cost-per-Hire",
    description: "Biaya rekrutmen per posisi dan departemen - untuk justifikasi anggaran.",
    exportType: "PDF",
    icon: BadgeDollarSign,
  },
  {
    title: "Onboarding Status",
    description: "Progress checklist onboarding setiap new hire secara real-time.",
    exportType: "Dashboard",
    icon: ListChecks,
  },
];
