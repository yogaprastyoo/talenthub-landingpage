import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ctaContent } from "@/data/cta";
import { ctaStats } from "@/data/stats";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { contactMailto } from "@/lib/contact";

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <section ref={ref} className="bg-brand-tint px-4 py-16 text-center sm:px-0 sm:py-16 lg:py-20 xl:py-24">
      <div className="wrap">
        <div className="scroll-reveal">
          <span className="section-pill">{ctaContent.label}</span>
          <h2 className="mb-3 text-2xl font-medium leading-[1.2] tracking-tight text-ink-primary sm:text-3xl lg:text-[42px]">
            {ctaContent.headline}
          </h2>
          <p className="mx-auto mb-9 max-w-[440px] text-base leading-[1.7] text-ink-secondary">
            {ctaContent.subheadline}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="xl" className="min-h-11 w-full sm:w-auto">
              <a href={contactMailto}>{ctaContent.primaryCta}</a>
            </Button>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:inline-flex sm:max-w-none sm:items-center sm:justify-center sm:gap-8 lg:gap-12">
            {ctaStats.map((stat, index) => (
              <div key={stat.label} className="contents sm:flex sm:items-center sm:gap-8 lg:gap-12">
                {index > 0 && <div className="hidden h-8 w-px bg-ink-primary/10 sm:block" />}
                <div>
                  <div className="text-3xl font-medium tracking-tight text-ink-primary lg:text-4xl">{stat.value}</div>
                  <div className="text-sm leading-snug text-ink-secondary">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
