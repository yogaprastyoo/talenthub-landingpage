import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { footerContent, type FooterLink } from "@/data/footer";
import { contactMailto } from "@/lib/contact";

function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function FooterLinkItem({
  link,
  className,
}: {
  link: FooterLink;
  className: string;
}) {
  if (isInternalRoute(link.href)) {
    return (
      <Link to={link.href} className={className}>
        {link.label}
      </Link>
    );
  }

  if (isExternalUrl(link.href)) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-hero-text/10 bg-hero-bg py-12 sm:py-14"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Informasi Footer
      </h2>
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:gap-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-white no-underline"
            >
              <img
                src="/talenthub-logo.svg"
                alt=""
                width="40"
                height="40"
                className="h-10 w-10"
              />
              <span className="text-base font-medium tracking-normal">
                {footerContent.wordmark}
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-[1.65] text-hero-muted">
              {footerContent.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:contents">
            {footerContent.linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-sm font-medium text-white">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <FooterLinkItem
                        link={link}
                        className="text-[13px] text-hero-muted no-underline transition-colors duration-200 hover:text-hero-text"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Kontak</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={contactMailto}
                  className="inline-flex items-start gap-2 text-[13px] text-hero-muted no-underline transition-colors hover:text-hero-text"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-light"
                    strokeWidth={1.5}
                  />
                  <span className="break-all">{footerContent.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-[13px] leading-[1.6] text-hero-muted">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-light"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-medium text-hero-text">
                      {footerContent.officeTitle}
                    </p>
                    {footerContent.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {footerContent.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] text-hero-muted no-underline transition-colors duration-200 hover:text-hero-text"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-hero-text/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] leading-relaxed text-ink-secondary sm:text-[13px]">
            {footerContent.copyright}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {footerContent.legalLinks.map((link) => (
              <FooterLinkItem
                key={link.label}
                link={link}
                className="text-xs text-hero-muted no-underline transition-colors duration-200 hover:text-hero-text"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
