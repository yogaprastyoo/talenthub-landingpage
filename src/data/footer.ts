export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export interface FooterContent {
  monogram: string;
  wordmark: string;
  description: string;
  linkGroups: FooterLinkGroup[];
  email: string;
  social: Array<{
    label: string;
    href: string;
  }>;
  officeTitle: string;
  address: string[];
  copyright: string;
  legalLinks: string[];
}

export const footerContent: FooterContent = {
  monogram: "T",
  wordmark: "TalentHub",
  description: "Platform rekrutmen end-to-end untuk perusahaan Indonesia yang ingin tumbuh lebih cepat.",
  linkGroups: [
    {
      title: "Product",
      links: ["Fitur", "Laporan", "Pengguna", "Hubungi Kami"],
    },
    {
      title: "Sindika",
      links: ["Tentang Kami", "Product Plans", "Blog", "Karir", "Kontak"],
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
  address: ["Jl. Raya ITS, Keputih, Kec. Sukolilo", "Kota Surabaya, Jawa Timur 60111"],
  copyright: "© 2026 Tim C4 TalentHub. All rights reserved.",
  legalLinks: ["Kebijakan Privasi", "Syarat & Ketentuan"],
};
