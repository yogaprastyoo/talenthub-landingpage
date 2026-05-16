import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { solutions } from "@/data/solutions";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function SolutionOverviewSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, { staggerSelector: ".solution-card" });

  return (
    <section ref={ref} className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="wrap">
        <div className="mb-10 scroll-reveal text-left sm:mb-12 lg:mb-[54px]">
          <span className="section-pill">Solusi Kami</span>
          <h2 className="section-heading">Satu Platform untuk Seluruh Proses Rekrutmen</h2>
          <p className="section-copy">
            TalentHub menghubungkan setiap langkah rekrutmen - dari posting lowongan hingga hari pertama kerja - dalam satu alur yang mulus.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="solution-card scroll-reveal rounded-xl transition-[border-color,box-shadow] duration-200 hover:border-ink-primary/20 hover:shadow-sm">
                <CardContent className="p-7 lg:p-8">
                  <Icon className="mb-[18px] h-9 w-9 text-brand" strokeWidth={1.5} />
                  <h3 className="mb-2 text-base font-medium text-ink-primary">{item.title}</h3>
                  <p className="max-w-[65ch] text-sm leading-[1.65] text-ink-secondary">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
