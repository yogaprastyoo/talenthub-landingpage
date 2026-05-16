import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { reports } from "@/data/reports";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ReportsSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, { staggerSelector: ".report-card" });

  return (
    <section id="reports" ref={ref} className="bg-surface-page py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="wrap">
        <div className="mb-10 scroll-reveal text-left sm:mb-12 lg:mb-[54px]">
          <span className="section-pill">Laporan Siap Pakai</span>
          <h2 className="section-heading">Data Rekrutmen Anda, Siap Dipresentasikan</h2>
          <p className="section-copy">6 template laporan bawaan - export ke dashboard, Excel, atau PDF langsung dari platform.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {reports.map((report) => {
            const Icon = report.icon;

            return (
              <Card key={report.title} className="report-card scroll-reveal rounded-xl transition-[border-color,box-shadow] duration-200 hover:border-ink-primary/20 hover:shadow-sm">
                <CardContent className="p-7 lg:p-8">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <Badge variant="muted" className="text-[10px] uppercase tracking-[0.08em] text-brand-tint-text">
                      {report.exportType}
                    </Badge>
                  </div>
                  <h3 className="mb-2 text-base font-medium text-ink-primary">{report.title}</h3>
                  <p className="max-w-[65ch] text-sm leading-[1.65] text-ink-secondary">{report.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
