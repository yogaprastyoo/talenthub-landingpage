import { useRef, useState } from "react";
import { Check, KanbanSquare, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { featureTabs, type FeatureTab } from "@/data/features";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

function FeatureMockup({ tab }: { tab: FeatureTab }) {
  return (
    <div className="rounded-2xl border border-border bg-[#F4F8FB] p-3 sm:p-4">
      <div className="mb-3 flex items-center gap-2 sm:mb-4">
        <KanbanSquare className="h-4 w-4 text-brand sm:h-5 sm:w-5" strokeWidth={1.5} />
        <p className="text-xs font-medium text-ink-primary sm:text-sm">
          {tab.mockupTitle}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {tab.columns.map((column) => (
          <div
            key={column.title}
            className="rounded-lg border border-border bg-white"
          >
            <div className="flex items-center justify-between bg-brand-tint px-2 py-1.5 sm:px-3 sm:py-2">
              <span className="truncate text-[10px] font-medium text-brand-tint-text sm:text-xs">
                {column.title}
              </span>
              <Badge
                variant="muted"
                className="px-1.5 py-0.5 text-[9px] text-brand-tint-text sm:text-[10px]"
              >
                {column.count}
              </Badge>
            </div>
            <div className="space-y-1.5 p-1.5 sm:space-y-2 sm:p-2">
              {column.cards.map((card) => (
                <div
                  key={card.name}
                  className="rounded-md border border-border bg-white p-2 sm:p-3"
                >
                  <p className="text-[11px] font-medium leading-tight text-ink-primary sm:text-xs">
                    {card.name}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-ink-tertiary sm:text-[11px]">
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-border bg-white p-3 sm:mt-4">
        <p className="mb-2 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-ink-secondary sm:mb-3 sm:text-xs">
          <Sparkles className="h-3 w-3 text-brand" strokeWidth={1.75} />
          AI Screening Score
        </p>
        <div className="space-y-1.5 sm:space-y-2">
          {tab.scores.map((score) => (
            <div
              key={score.name}
              className="flex items-center justify-between gap-2 sm:gap-3"
            >
              <span className="w-16 shrink-0 truncate text-[10px] text-ink-secondary sm:w-20 sm:text-xs">
                {score.name}
              </span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-brand-tint sm:h-2">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${score.score}%` }}
                />
              </div>
              <span className="w-6 text-right text-[10px] font-medium text-ink-primary sm:text-xs">
                {score.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeTabId, setActiveTabId] = useState(featureTabs[0].id);
  useScrollReveal(ref);

  const activeTab =
    featureTabs.find((tab) => tab.id === activeTabId) ?? featureTabs[0];
  const hasScreenshot = Boolean(activeTab.screenshotSrc);

  return (
    <section
      ref={ref}
      id="features"
      className="bg-surface-page py-16 sm:py-20 lg:py-24"
    >
      <div className="wrap">
        <div className="mb-10 scroll-reveal text-center sm:mb-14">
          <span className="section-pill">Fitur Unggulan</span>
          <h2 className="section-heading mt-2">Dirancang untuk Tim HR Modern</h2>
          <p className="section-copy mx-auto mt-3 max-w-2xl">
            Setiap fitur dibangun untuk mengurangi kerja manual dan
            meningkatkan kualitas keputusan hiring.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Fitur TalentHub"
          className="mb-8 flex scroll-reveal flex-wrap justify-center gap-2 sm:mb-10"
        >
          {featureTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab.id === tab.id}
              type="button"
              className={cn(
                "min-h-10 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink-secondary transition-all sm:px-5",
                activeTab.id === tab.id &&
                  "border-brand bg-brand text-white shadow-sm",
              )}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Card className="scroll-reveal overflow-hidden rounded-2xl border-0 bg-white shadow-[0_1px_2px_rgba(13,31,45,0.04),0_20px_50px_-20px_rgba(13,31,45,0.12)] ring-1 ring-ink-primary/[0.04]">
          <CardContent className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:p-10">
            <div className="order-2 lg:order-1">
              {activeTab.badge && (
                <span
                  className={cn(
                    "mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.06em]",
                    activeTab.badge === "Tersedia sekarang"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-ink-secondary/10 text-ink-secondary",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      activeTab.badge === "Tersedia sekarang"
                        ? "bg-emerald-500"
                        : "bg-ink-secondary",
                    )}
                  />
                  {activeTab.badge}
                </span>
              )}
              <h3 className="mb-3 text-2xl font-medium leading-tight tracking-tight text-ink-primary sm:text-3xl">
                {activeTab.headline}
              </h3>
              <p className="mb-6 text-base leading-[1.7] text-ink-secondary">
                {activeTab.description}
              </p>
              <div className="space-y-4">
                {activeTab.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-ink-primary">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-[1.6] text-ink-secondary">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 flex items-center justify-center lg:order-2">
              {hasScreenshot ? (
                <div className="relative w-full max-w-[300px] py-4">
                  <div
                    aria-hidden
                    className="absolute inset-x-4 inset-y-0 -z-10 rounded-full bg-brand/15 blur-3xl"
                  />
                  <img
                    src={activeTab.screenshotSrc!}
                    alt={`${activeTab.label} - Screenshot aplikasi TalentHub`}
                    width="1198"
                    height="2531"
                    loading="lazy"
                    draggable={false}
                    className="w-full drop-shadow-[0_25px_40px_rgba(13,31,45,0.25)]"
                  />
                </div>
              ) : (
                <div className="w-full">
                  <FeatureMockup tab={activeTab} />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
