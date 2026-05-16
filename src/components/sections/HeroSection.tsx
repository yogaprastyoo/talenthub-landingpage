import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { heroPreviewColumns, heroPreviewLabel } from "@/data/candidates";
import { heroContent } from "@/data/hero";
import { heroStats } from "@/data/stats";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { contactMailto } from "@/lib/contact";

function HeroPreview() {
  return (
    <div className="relative z-[1] mx-auto max-w-[860px] scroll-reveal after:absolute after:inset-x-0 after:bottom-0 after:z-[2] after:h-[100px] after:bg-gradient-to-b after:from-transparent after:to-hero-bg after:content-['']">
      <div className="overflow-hidden rounded-t-xl border border-b-0 border-brand/25 bg-hero-bg/70">
        <div className="flex items-center gap-[7px] border-b border-brand/10 bg-brand/10 p-[11px_14px]">
          <span className="h-[9px] w-[9px] rounded-full bg-brand/30" />
          <span className="h-[9px] w-[9px] rounded-full bg-brand/30" />
          <span className="h-[9px] w-[9px] rounded-full bg-brand/30" />
          <span className="ml-3.5 truncate text-[10px] font-medium text-hero-muted sm:text-xs">{heroPreviewLabel}</span>
          <span className="ml-auto flex gap-2">
            <span className="h-[7px] w-16 rounded-[3px] bg-brand/20" />
            <span className="h-[7px] w-10 rounded-[3px] bg-brand/20" />
          </span>
        </div>
        <div className="flex gap-[9px] overflow-hidden p-3">
          {heroPreviewColumns.map((column) => (
            <div key={column.id} className="min-w-0 flex-1 overflow-hidden rounded-md border border-brand/15 bg-brand/[0.03]">
              <div className="flex items-center justify-between bg-brand/10 p-2.5">
                <span className="truncate text-[10px] font-medium text-hero-muted">{column.title}</span>
                <span className="rounded-md bg-brand/20 px-1.5 py-0.5 text-[9px] font-medium text-hero-muted">{column.count}</span>
              </div>
              <div className="flex flex-col gap-[5px] p-[7px]">
                {column.candidates.map((candidate) => (
                  <div
                    key={candidate.name}
                    className="rounded-[5px] border border-brand/10 bg-hero-text/[0.02] p-[7px_9px]"
                    style={column.id === "hired" ? { borderColor: "rgba(22,163,74,.16)" } : undefined}
                  >
                    <div className="mb-1 flex items-center gap-1.5">
                      <span
                        className="h-4 w-4 shrink-0 rounded-full"
                        style={{ background: column.id === "hired" ? "rgba(22,163,74,.38)" : "rgba(53,88,114,.32)" }}
                      />
                      <span className="truncate text-[9px] font-medium leading-none text-hero-text/80">{candidate.name}</span>
                    </div>
                    <p className="mb-1 truncate text-[9px] text-hero-muted">{candidate.role}</p>
                    <div className="flex flex-wrap gap-1">
                      {candidate.meta.map((meta) => (
                        <span key={meta} className="rounded-[3px] bg-brand/15 px-1.5 py-0.5 text-[8px] text-hero-muted">
                          {meta}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <section ref={ref} className="relative overflow-hidden bg-hero-bg px-4 py-16 pb-0 text-center sm:px-8 sm:py-20 sm:pb-0 lg:px-0 lg:py-24 lg:pb-0 xl:py-24 xl:pb-0">
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle,rgba(53,88,114,.07)_1px,transparent_1px)] bg-[length:28px_28px] sm:block" />
      <div className="wrap">
        <div className="relative z-[1]">
          <div className="mx-auto mb-7 inline-flex scroll-reveal items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-[14px] py-[5px] text-xs font-medium uppercase tracking-[0.05em] text-hero-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {heroContent.label}
          </div>
          <h1 className="mx-auto mb-[22px] max-w-[660px] scroll-reveal text-4xl font-medium leading-tight tracking-tight text-hero-text sm:text-5xl lg:text-5xl xl:text-6xl">
            {heroContent.headline}
          </h1>
          <p className="mx-auto mb-3 max-w-[450px] scroll-reveal px-4 text-base font-medium leading-[1.6] text-hero-text sm:px-0">
            {heroContent.subheadline}
          </p>
          <p className="mx-auto mb-8 max-w-[560px] scroll-reveal px-4 text-base leading-[1.6] text-hero-muted sm:px-0">
            {heroContent.description}
          </p>
          <div className="mb-[68px] flex scroll-reveal flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-11 w-full sm:w-40">
              <a href={contactMailto}>{heroContent.primaryCta}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-11 w-full sm:w-40">
              <a href="#features">{heroContent.secondaryCta}</a>
            </Button>
          </div>
          <div className="mx-auto mb-10 grid max-w-3xl grid-cols-2 gap-4 scroll-reveal sm:inline-flex sm:max-w-none sm:items-center sm:justify-center sm:gap-8 lg:gap-12">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="contents sm:flex sm:items-center sm:gap-8 lg:gap-12">
                {index > 0 && <div className="hidden h-8 w-px bg-white/15 sm:block" />}
                <div>
                  <div className="text-3xl font-medium tracking-tight text-hero-text lg:text-4xl">{stat.value}</div>
                  <div className="text-sm leading-snug text-hero-muted">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap">
        <HeroPreview />
      </div>
    </section>
  );
}
