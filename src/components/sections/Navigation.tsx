import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactMailto } from "@/lib/contact";

const links = [
  { href: "#features", label: "Solusi" },
  { href: "#pipeline", label: "Kandidat" },
  { href: "#users", label: "Pengguna" },
  { href: "#reports", label: "Analitik" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-hero-text/10 bg-hero-bg">
      <div className="wrap flex h-16 items-center">
        <a href="#" className="flex shrink-0 items-center gap-2 text-base font-medium tracking-tight text-white no-underline" onClick={closeMenu}>
          <img src="/talenthub-logo.png" alt="TalentHub" className="h-9 w-9 rounded-lg" />
          <span>TalentHub</span>
        </a>
        <ul className="mx-auto hidden list-none gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a className="text-sm text-hero-muted no-underline transition-colors duration-200 hover:text-hero-text" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild size="nav" className="hidden lg:inline-flex">
          <a href={contactMailto}>Hubungi Kami</a>
        </Button>
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full text-hero-text transition-colors hover:bg-hero-text/5 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-hero-text/10 bg-hero-bg lg:hidden">
          <ul className="list-none">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="block w-full border-b border-hero-text/10 px-6 py-3 text-sm text-hero-muted no-underline transition-colors hover:text-hero-text"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="block min-h-11 w-full border-b border-hero-text/10 px-6 py-3 text-sm font-medium text-white no-underline"
                href={contactMailto}
                onClick={closeMenu}
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
