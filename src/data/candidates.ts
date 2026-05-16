export type CandidateColumn = "applied" | "screening" | "interview" | "offer" | "hired";
export type CandidatePriority = "high" | "medium" | "low";

export interface Candidate {
  id: string;
  name: string;
  initials: string;
  role: string;
  tags: string[];
  aiScore: number;
  priority: CandidatePriority;
  status: string;
  assignee: string;
  dateAdded: string;
  column: CandidateColumn;
}

export interface KanbanColumn {
  id: CandidateColumn;
  title: string;
}

export interface HeroPreviewCandidate {
  name: string;
  role: string;
  meta: string[];
}

export interface HeroPreviewColumn {
  id: CandidateColumn;
  title: string;
  count: number;
  candidates: HeroPreviewCandidate[];
}

export const kanbanColumns: KanbanColumn[] = [
  { id: "applied", title: "Applied" },
  { id: "screening", title: "Screening" },
  { id: "interview", title: "Interview" },
  { id: "offer", title: "Offer" },
  { id: "hired", title: "Hired" },
];

export const candidates: Candidate[] = [
  {
    id: "1",
    name: "Arif Pratama",
    initials: "AP",
    role: "Sr. Frontend Eng.",
    tags: ["React", "6 yrs"],
    aiScore: 74,
    priority: "medium",
    status: "Awaiting review",
    assignee: "HR",
    dateAdded: "2 May",
    column: "applied",
  },
  {
    id: "2",
    name: "Siti Nurhaliza",
    initials: "SN",
    role: "Product Designer",
    tags: ["Figma"],
    aiScore: 81,
    priority: "high",
    status: "New application",
    assignee: "HR",
    dateAdded: "3 May",
    column: "applied",
  },
  {
    id: "3",
    name: "Dimas Kurniawan",
    initials: "DK",
    role: "Backend Engineer",
    tags: ["Node.js"],
    aiScore: 66,
    priority: "low",
    status: "Under review",
    assignee: "HR",
    dateAdded: "3 May",
    column: "applied",
  },
  {
    id: "4",
    name: "Rizky Ramadhan",
    initials: "RR",
    role: "Product Manager",
    tags: ["Fintech"],
    aiScore: 78,
    priority: "medium",
    status: "In screening",
    assignee: "HR",
    dateAdded: "1 May",
    column: "screening",
  },
  {
    id: "5",
    name: "Putri Andini",
    initials: "PA",
    role: "Backend Engineer",
    tags: ["Go", "★ 4.5"],
    aiScore: 88,
    priority: "high",
    status: "Phone screen done",
    assignee: "HR",
    dateAdded: "1 May",
    column: "screening",
  },
  {
    id: "6",
    name: "Aisyah Rahma",
    initials: "AR",
    role: "Sr. Frontend Eng.",
    tags: ["Tech ✓", "★ 5.0"],
    aiScore: 95,
    priority: "high",
    status: "Interview scheduled",
    assignee: "RY",
    dateAdded: "28 Apr",
    column: "interview",
  },
  {
    id: "7",
    name: "Bayu Saputra",
    initials: "BS",
    role: "DevOps Engineer",
    tags: ["K8s", "AWS"],
    aiScore: 84,
    priority: "medium",
    status: "Tech interview done",
    assignee: "RY",
    dateAdded: "29 Apr",
    column: "interview",
  },
  {
    id: "8",
    name: "Reza Mahendra",
    initials: "RM",
    role: "Data Analyst",
    tags: ["SQL", "Python"],
    aiScore: 86,
    priority: "high",
    status: "Awaiting signature",
    assignee: "YM",
    dateAdded: "25 Apr",
    column: "offer",
  },
  {
    id: "9",
    name: "Nadia Permata",
    initials: "NP",
    role: "Marketing Manager",
    tags: ["✓ Start May 5"],
    aiScore: 83,
    priority: "medium",
    status: "Hired — onboarding",
    assignee: "YM",
    dateAdded: "20 Apr",
    column: "hired",
  },
];

export const heroPreviewLabel = "talenthub.labs.it.pens.ac.id — Candidate Pipeline";

export const heroPreviewColumns: HeroPreviewColumn[] = [
  {
    id: "applied",
    title: "Applied",
    count: 12,
    candidates: [
      { name: "Arif Pratama", role: "Sr. Frontend Eng.", meta: ["React", "6 yrs"] },
      { name: "Siti Nurhaliza", role: "Product Designer", meta: ["Figma"] },
      { name: "Dimas Kurniawan", role: "Backend Engineer", meta: [] },
    ],
  },
  {
    id: "screening",
    title: "Screening",
    count: 8,
    candidates: [
      { name: "Putri Andini", role: "Backend Engineer", meta: ["Go", "Rating 4.5"] },
      { name: "Rizky Ramadhan", role: "Product Manager", meta: ["Fintech"] },
    ],
  },
  {
    id: "interview",
    title: "Interview",
    count: 5,
    candidates: [
      { name: "Aisyah Rahma", role: "Sr. Frontend Eng.", meta: ["Rating 5.0", "Tech passed"] },
      { name: "Bayu Saputra", role: "DevOps Engineer", meta: ["K8s", "AWS"] },
    ],
  },
  {
    id: "offer",
    title: "Offer",
    count: 2,
    candidates: [{ name: "Reza Mahendra", role: "Data Analyst", meta: ["Awaiting sig."] }],
  },
  {
    id: "hired",
    title: "Hired",
    count: 7,
    candidates: [{ name: "Nadia Permata", role: "Marketing Manager", meta: ["Signed", "Start May 5"] }],
  },
];
