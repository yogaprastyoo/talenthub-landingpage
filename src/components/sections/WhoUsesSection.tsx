import { useRef } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { personas } from "@/data/personas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function WhoUsesSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, { staggerSelector: ".persona-card" });

  return (
    <section id="users" ref={ref} className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="wrap">
        <div className="mb-10 scroll-reveal text-left sm:mb-12 lg:mb-[54px]">
          <span className="section-pill">Siapa Penggunanya</span>
          <h2 className="section-heading">Siapa yang Menggunakan TalentHub?</h2>
          <p className="section-copy">
            Satu platform untuk semua pihak yang terlibat dalam proses rekrutmen - dari HR hingga hiring manager.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {personas.map((persona) => (
            <Card
              key={persona.role}
              className={cn(
                "persona-card scroll-reveal rounded-xl transition-[border-color,box-shadow] duration-200 hover:border-ink-primary/20 hover:shadow-sm",
                persona.highlighted && "border-2 border-brand",
              )}
            >
              <CardContent className="p-7 lg:p-8">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.08em] text-brand">{persona.role}</p>
                <h3 className="mb-3 text-base font-medium text-ink-primary">{persona.tagline}</h3>
                <p className="mb-5 text-sm leading-[1.65] text-ink-secondary">{persona.description}</p>
                <ul className="space-y-3">
                  {persona.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-[1.5] text-ink-secondary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" strokeWidth={1.7} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
