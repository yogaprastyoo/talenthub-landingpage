import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/hero";
import { heroStats } from "@/data/stats";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { playStoreUrl } from "@/lib/contact";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-hero-bg pt-14 sm:pt-20 lg:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,122,155,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(53,88,114,0.35),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(240,246,250,0.04)_1px,transparent_1px)] bg-[length:32px_32px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-hero-bg"
      />

      <div className="wrap relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex scroll-reveal items-center gap-2 rounded-full border border-hero-text/15 bg-hero-text/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-wide text-hero-muted backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {heroContent.label} &middot; Beta v1 di Google Play
            </div>

            <h1 className="scroll-reveal text-balance text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-hero-text sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              {heroContent.headline}
              <span className="mt-2 block bg-gradient-to-r from-brand-light via-hero-text to-brand-light bg-clip-text text-transparent">
                {heroContent.subheadline}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl scroll-reveal text-base leading-relaxed text-hero-muted sm:text-lg lg:mx-0">
              {heroContent.description}
            </p>

            <div className="mt-9 flex scroll-reveal flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="group min-h-12 w-full sm:w-auto">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {heroContent.primaryCta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-12 w-full sm:w-auto"
              >
                <a href="#features">{heroContent.secondaryCta}</a>
              </Button>
            </div>

            <div className="mt-12 grid scroll-reveal grid-cols-3 gap-4 border-t border-hero-text/10 pt-8 sm:gap-8 lg:max-w-md">
              {heroStats.slice(1, 4).map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-medium tracking-tight text-hero-text sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-hero-muted sm:text-[13px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative scroll-reveal pb-16 lg:pb-24">
            <div className="relative mx-auto flex max-w-md items-end justify-center gap-4 sm:gap-6 lg:max-w-none">
              <div className="relative z-10 hidden max-w-[240px] flex-1 -translate-y-6 sm:block">
                <img
                  src="/screenshots/login.webp"
                  alt="Tampilan halaman login aplikasi TalentHub"
                  width="1198"
                  height="2531"
                  loading="lazy"
                  draggable={false}
                  className="w-full rotate-[-4deg] drop-shadow-[0_30px_45px_rgba(13,31,45,0.45)]"
                />
              </div>
              <div className="relative z-20 max-w-[280px] flex-1">
                <div
                  aria-hidden
                  className="absolute -inset-8 -z-10 rounded-full bg-brand/25 blur-3xl"
                />
                <img
                  src="/screenshots/beranda.webp"
                  alt="Tampilan beranda TalentHub - daftar lowongan dan kelola job posting"
                  width="1198"
                  height="2531"
                  loading="eager"
                  fetchPriority="high"
                  draggable={false}
                  className="w-full drop-shadow-[0_35px_55px_rgba(13,31,45,0.55)] sm:rotate-[3deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
