import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactMailto } from "@/lib/contact";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  function closeMenu() {
    setIsOpen(false);
  }

  function isActive(link: NavLink) {
    return location.pathname === link.href;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-hero-text/10 bg-hero-bg">
      <div className="wrap flex h-16 items-center">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 text-base font-medium tracking-tight text-white no-underline"
          onClick={closeMenu}
        >
          <img src="/talenthub-logo.svg" alt="" width="36" height="36" className="h-9 w-9" />
          <span>TalentHub</span>
        </Link>
        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.label}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center px-3 py-2 text-sm no-underline transition-colors duration-200",
                  active
                    ? "text-hero-text"
                    : "text-hero-muted hover:text-hero-text",
                )}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-brand-light"
                  />
                )}
              </Link>
            );
          })}
          <Button asChild size="nav" className="ml-2">
            <a href={contactMailto}>Hubungi Kami</a>
          </Button>
        </div>
        <button
          type="button"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full text-hero-text transition-colors hover:bg-hero-text/5 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <X className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-hero-text/10 bg-hero-bg lg:hidden">
          <ul className="list-none">
            {links.map((link) => {
              const active = isActive(link);
              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                    className={cn(
                      "block w-full border-b border-hero-text/10 px-6 py-3 text-sm no-underline transition-colors",
                      active
                        ? "border-l-2 border-l-brand-light bg-hero-text/[0.03] text-hero-text"
                        : "text-hero-muted hover:text-hero-text",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
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
