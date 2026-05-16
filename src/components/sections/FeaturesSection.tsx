import { useRef, useState } from "react";
import { Check, KanbanSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { featureTabs } from "@/data/features";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeTabId, setActiveTabId] = useState(featureTabs[0].id);
  useScrollReveal(ref, { staggerSelector: ".feature-panel-item" });

  const activeTab = featureTabs.find((tab) => tab.id === activeTabId) ?? featureTabs[0];

  return (
    <section ref={ref} id="features" className="bg-surface-page py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="wrap">
        <div className="mb-10 scroll-reveal text-left sm:mb-12 lg:mb-[54px]">
          <span className="section-pill">Fitur Unggulan</span>
          <h2 className="section-heading">Dirancang untuk Tim HR Modern</h2>
          <p className="section-copy">Setiap fitur dibangun untuk mengurangi kerja manual dan meningkatkan kualitas keputusan hiring.</p>
        </div>

        <div className="mb-6 flex scroll-reveal flex-col gap-2 sm:flex-row">
          {featureTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={cn(
                "min-h-11 rounded-full border border-border px-5 py-2 text-sm font-medium text-ink-secondary transition-colors",
                activeTab.id === tab.id && "border-brand bg-brand text-white",
              )}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Card className="scroll-reveal rounded-xl">
          <CardContent className="grid grid-cols-1 gap-8 p-7 lg:grid-cols-[1fr_1.05fr] lg:p-8">
            <div>
              <h3 className="mb-3 text-2xl font-medium leading-tight tracking-tight text-ink-primary sm:text-3xl">
                {activeTab.headline}
              </h3>
              <p className="mb-6 text-base leading-[1.7] text-ink-secondary">{activeTab.description}</p>
              <div className="space-y-4">
                {activeTab.items.map((item) => (
                  <div key={item.title} className="feature-panel-item scroll-reveal flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                      <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-ink-primary">{item.title}</h4>
                      <p className="text-sm leading-[1.6] text-ink-secondary">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-[#F4F8FB] p-4">
              <div className="mb-4 flex items-center gap-2">
                <KanbanSquare className="h-5 w-5 text-brand" strokeWidth={1.5} />
                <h4 className="text-sm font-medium text-ink-primary">{activeTab.mockupTitle}</h4>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeTab.columns.map((column) => (
                  <div key={column.title} className="rounded-lg border border-border bg-white">
                    <div className="flex items-center justify-between bg-brand-tint px-3 py-2">
                      <span className="text-xs font-medium text-brand-tint-text">{column.title}</span>
                      <Badge variant="muted" className="px-2 py-0.5 text-[10px] text-brand-tint-text">
                        {column.count}
                      </Badge>
                    </div>
                    <div className="space-y-2 p-2">
                      {column.cards.map((card) => (
                        <div key={card.name} className="rounded-md border border-border bg-white p-3">
                          <p className="text-xs font-medium text-ink-primary">{card.name}</p>
                          <p className="text-[11px] text-ink-tertiary">{card.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-border bg-white p-3">
                <h5 className="mb-3 text-xs font-medium uppercase tracking-[0.08em] text-ink-secondary">AI Screening Score</h5>
                <div className="space-y-2">
                  {activeTab.scores.map((score) => (
                    <div key={score.name} className="flex items-center justify-between gap-3">
                      <span className="text-xs text-ink-secondary">{score.name}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-brand-tint">
                        <div className="h-full rounded-full bg-brand" style={{ width: `${score.score}%` }} />
                      </div>
                      <span className="w-7 text-right text-xs font-medium text-ink-primary">{score.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
