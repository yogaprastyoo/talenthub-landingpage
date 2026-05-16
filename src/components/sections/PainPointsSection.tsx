import { useRef } from "react";
import { painPoints } from "@/data/painPoints";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function PainPointsSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, { staggerSelector: ".pain-card" });

  return (
    <section ref={ref} className="bg-surface-page py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="wrap">
        <div className="mb-10 scroll-reveal text-left sm:mb-12 lg:mb-[54px]">
          <span className="section-pill">Tantangan yang Kami Selesaikan</span>
          <h2 className="section-heading">Kenapa Proses Rekrutmen Anda Berantakan?</h2>
          <p className="section-copy">
            Tanpa sistem terpusat, tim HR menghabiskan lebih banyak waktu mengelola proses daripada merekrut kandidat terbaik.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-0">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="pain-card scroll-reveal border-l-2 border-brand-light bg-[#F8FAFB] p-6 sm:border-b sm:border-r sm:border-l-2 sm:border-border sm:border-l-brand-light lg:p-8"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-tint text-brand">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1.5 text-[15px] font-medium text-ink-primary">{item.title}</h3>
                <p className="max-w-[65ch] text-sm leading-[1.65] text-ink-secondary">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
