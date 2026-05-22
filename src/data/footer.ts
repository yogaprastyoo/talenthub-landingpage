import { contactMailto } from "@/lib/contact";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContent {
  monogram: string;
  wordmark: string;
  description: string;
  linkGroups: FooterLinkGroup[];
  email: string;
  social: FooterLink[];
  officeTitle: string;
  address: string[];
  copyright: string;
  legalLinks: FooterLink[];
}

export const footerContent: FooterContent = {
  monogram: "T",
  wordmark: "TalentHub",
  description:
    "Platform rekrutmen end-to-end untuk perusahaan Indonesia yang ingin tumbuh lebih cepat.",
  linkGroups: [
    {
      title: "Product",
      links: [
        { label: "Fitur", href: "/#features" },
        { label: "Laporan", href: "/#reports" },
        { label: "Pengguna", href: "/#users" },
        { label: "Tentang", href: "/about" },
        { label: "Hubungi Kami", href: contactMailto },
      ],
    },
    {
      title: "Sindika",
      links: [
        { label: "Tentang Kami", href: "https://sindika.co.id/en/about/" },
        { label: "Product Plans", href: "https://sindika.co.id/en/product-plan/" },
        { label: "Blog", href: "https://sindika.co.id/en/blog/" },
        { label: "Kontak", href: "https://sindika.co.id/en/contact/" },
      ],
    },
  ],
  email: "talenthubpdbl@gmail.com",
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/talenthub.2026/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCMfsL1UmrPxqUnoS5laXXXg",
    },
  ],
  officeTitle: "Politeknik Elektronika Negeri Surabaya (PENS)",
  address: [
    "Jl. Raya ITS, Keputih, Kec. Sukolilo",
    "Kota Surabaya, Jawa Timur 60111",
  ],
  copyright: "© 2026 Tim C4 TalentHub. All rights reserved.",
  legalLinks: [{ label: "Kebijakan Privasi", href: "/privacy" }],
};
