import { trustedCompanies, trustedLabel } from "@/data/content";

export function TrustedBySection() {
  return (
    <section className="bg-brand-tint py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="wrap">
        <p className="mb-[26px] text-center text-xs font-medium uppercase tracking-[0.08em] text-ink-secondary">
          {trustedLabel}
        </p>
        <div className="mx-auto grid max-w-4xl grid-cols-2 items-stretch gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {trustedCompanies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center rounded-lg border border-brand/10 bg-white/55 px-4 text-center text-xs font-medium tracking-normal text-brand/55 no-underline shadow-sm shadow-brand/5 transition-colors duration-200 hover:border-brand/25 hover:bg-white hover:text-brand sm:text-sm"
            >
              {company.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
