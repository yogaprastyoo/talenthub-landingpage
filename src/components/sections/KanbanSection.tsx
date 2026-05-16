import { useCallback, useEffect, useMemo, useRef, type DragEvent, type TouchEvent } from "react";
import { GripVertical } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { candidates, kanbanColumns, type Candidate, type CandidatePriority } from "@/data/candidates";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn, hashToPalette } from "@/lib/utils";

const avatarPalette = ["#355872", "#4A7A9B", "#2A4A63", "#3D6B8A", "#1F5171", "#2E5F7A"] as const;
const assigneePalette = ["#355872", "#4A7A9B", "#2A4A63", "#3D6B8A", "#1F5171", "#2E5F7A"] as const;

function assigneeList(value: string) {
  return value.split(",").map((assignee) => assignee.trim());
}

function scoreClass(score: number) {
  if (score >= 80) {
    return "bg-[#DCFCE7] text-[#166534]";
  }

  if (score >= 60) {
    return "bg-[#FEF3C7] text-[#92400E]";
  }

  return "bg-[#FEE2E2] text-[#991B1B]";
}

function priorityClass(priority: CandidatePriority) {
  const classes: Record<CandidatePriority, string> = {
    high: "bg-red-500",
    medium: "bg-amber-400",
    low: "bg-slate-300",
  };

  return classes[priority];
}

interface CandidateCardProps {
  candidate: Candidate;
  onDragStart: (event: DragEvent<HTMLDivElement>) => void;
  onDragEnd: (event: DragEvent<HTMLDivElement>) => void;
  onTouchStart: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (event: TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: (event: TouchEvent<HTMLDivElement>) => void;
}

function CandidateCard({ candidate, onDragStart, onDragEnd, onTouchStart, onTouchMove, onTouchEnd }: CandidateCardProps) {
  return (
    <Card
      draggable
      data-candidate-card="true"
      data-candidate-id={candidate.id}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="group select-none rounded-[7px] border border-border bg-white p-[10px_11px] transition-[border-color,background] duration-150 hover:border-ink-primary/20 hover:bg-[#FAFCFE] cursor-grab touch-none"
    >
      <div className="mb-[7px] flex items-center gap-[7px]">
        <Avatar className="h-[26px] w-[26px]" style={{ backgroundColor: hashToPalette(candidate.name, avatarPalette) }}>
          <AvatarFallback className="text-[10px] font-medium text-white">{candidate.initials}</AvatarFallback>
        </Avatar>
        <h3 className="flex-1 text-xs font-medium leading-[1.3] text-ink-primary">{candidate.name}</h3>
        <GripVertical className="h-[11px] w-[11px] shrink-0 text-ink-tertiary opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100" />
      </div>
      <span className="mb-1.5 inline-flex rounded bg-ink-primary/[0.06] px-[7px] py-0.5 text-[10px] font-normal leading-[1.5] text-ink-secondary">
        {candidate.role}
      </span>
      <div className="mb-1.5 flex flex-wrap gap-1">
        {candidate.tags.map((tag) => (
          <Badge key={tag} variant="muted" className="rounded-[3px] px-1.5 py-0.5 text-[10px] font-medium">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="mb-1.5 flex items-center gap-[5px]">
        <Badge className={cn("rounded-[3px] px-1.5 py-0.5 text-[10px] font-medium", scoreClass(candidate.aiScore))}>
          AI {candidate.aiScore}
        </Badge>
        <span className={cn("h-[5px] w-[5px] rounded-full", priorityClass(candidate.priority))} />
      </div>
      <p className="mb-2 text-[10px] text-ink-tertiary">{candidate.status}</p>
      <div className="flex items-center justify-between gap-3 pt-1">
        <span className="text-[10px] text-ink-tertiary">{candidate.dateAdded}</span>
        <div className="flex items-center pr-1">
          {assigneeList(candidate.assignee).map((assignee) => (
            <Avatar
              key={assignee}
              className="-ml-1.5 h-6 w-6 border-2 border-white first:ml-0"
              style={{ backgroundColor: hashToPalette(assignee, assigneePalette) }}
            >
              <AvatarFallback className="text-[9px] font-medium text-white">{assignee}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </Card>
  );
}

interface TouchDragState {
  card: HTMLElement;
  clone: HTMLElement;
}

export function KanbanSection() {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);
  const draggedRef = useRef<HTMLElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const touchDragRef = useRef<TouchDragState | null>(null);

  const grouped = useMemo(
    () =>
      kanbanColumns.map((column) => ({
        ...column,
        items: candidates.filter((candidate) => candidate.column === column.id),
      })),
    [],
  );

  function makePlaceholder() {
    const element = document.createElement("div");
    element.className = "mx-1 my-1 h-[60px] shrink-0 rounded border-2 border-dashed border-brand/30 bg-brand-tint";
    return element;
  }

  const getColumnBody = useCallback((column: HTMLElement) => {
    return column.querySelector<HTMLElement>("[data-column-body='true']");
  }, []);

  function updateColumn(column: HTMLElement) {
    const body = getColumnBody(column);
    const count = body?.querySelectorAll("[data-candidate-card='true']").length ?? 0;
    const countElement = column.querySelector<HTMLElement>("[data-column-count='true']");
    const emptyElement = body?.querySelector<HTMLElement>("[data-empty='true']");

    if (countElement) {
      countElement.textContent = String(count);
    }

    if (!body) {
      return;
    }

    if (count === 0 && !emptyElement) {
      const empty = document.createElement("div");
      empty.dataset.empty = "true";
      empty.className = "py-6 text-center text-sm text-hero-muted";
      empty.textContent = "Belum ada kandidat";
      body.appendChild(empty);
    } else if (count > 0 && emptyElement) {
      emptyElement.remove();
    }
  }

  const clearDragStyles = useCallback((card: HTMLElement) => {
    card.style.opacity = "";
    card.style.transform = "";
    card.style.cursor = "";
  }, []);

  const clearColumnHighlights = useCallback(() => {
    document.querySelectorAll<HTMLElement>("[data-column-id]").forEach((column) => {
      column.classList.remove("border-2", "border-brand", "bg-brand-tint");
      getColumnBody(column)?.classList.remove("bg-brand-tint");
    });
  }, [getColumnBody]);

  const cleanupDragArtifacts = useCallback(() => {
    document.querySelectorAll("[data-kanban-touch-clone='true']").forEach((element) => element.remove());
    document.querySelectorAll<HTMLElement>("[data-candidate-card='true']").forEach((card) => {
      clearDragStyles(card);
    });
    placeholderRef.current?.remove();
    clearColumnHighlights();
    touchDragRef.current = null;
    draggedRef.current = null;
    placeholderRef.current = null;
  }, [clearColumnHighlights, clearDragStyles]);

  useEffect(() => cleanupDragArtifacts, [cleanupDragArtifacts]);

  function handleDragStart(event: DragEvent<HTMLDivElement>) {
    const card = event.currentTarget;
    draggedRef.current = card;
    placeholderRef.current = makePlaceholder();
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", card.dataset.candidateId ?? "");

    requestAnimationFrame(() => {
      card.style.opacity = ".4";
      card.style.transform = "scale(1.02)";
      card.style.cursor = "grabbing";
    });
  }

  function handleDragEnd(event: DragEvent<HTMLDivElement>) {
    clearDragStyles(event.currentTarget);
    placeholderRef.current?.remove();
    cleanupDragArtifacts();
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    const column = event.currentTarget;
    const body = getColumnBody(column);

    column.classList.add("border-2", "border-brand", "bg-brand-tint");
    body?.classList.add("bg-brand-tint");

    if (body && placeholderRef.current && placeholderRef.current.parentNode !== body) {
      placeholderRef.current.remove();
      body.appendChild(placeholderRef.current);
    }
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    const relatedTarget = event.relatedTarget;

    if (relatedTarget instanceof Node && event.currentTarget.contains(relatedTarget)) {
      return;
    }

    const column = event.currentTarget;
    column.classList.remove("border-2", "border-brand", "bg-brand-tint");
    getColumnBody(column)?.classList.remove("bg-brand-tint");

    if (placeholderRef.current?.parentNode === getColumnBody(column)) {
      placeholderRef.current.remove();
    }
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const column = event.currentTarget;
    const body = getColumnBody(column);
    const dragged = draggedRef.current;
    const fromColumn = dragged?.closest<HTMLElement>("[data-column-id]");

    placeholderRef.current?.remove();

    if (body && dragged) {
      body.appendChild(dragged);
      updateColumn(column);

      if (fromColumn && fromColumn !== column) {
        updateColumn(fromColumn);
      }
    }

    clearColumnHighlights();
    draggedRef.current = null;
    placeholderRef.current = null;
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    const card = event.currentTarget;
    const clone = card.cloneNode(true);

    if (!(clone instanceof HTMLElement)) {
      return;
    }

    clone.style.cssText = [
      "position:fixed",
      "z-index:9999",
      "opacity:.75",
      "pointer-events:none",
      `width:${card.offsetWidth}px`,
      "transform:scale(1.03)",
      "border-radius:7px",
    ].join(";");
    clone.dataset.kanbanTouchClone = "true";
    document.body.appendChild(clone);
    touchDragRef.current = { card, clone };
    draggedRef.current = card;
    card.style.opacity = ".4";
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    const touchDrag = touchDragRef.current;

    if (!touchDrag) {
      return;
    }

    event.preventDefault();
    const touch = event.touches[0];
    touchDrag.clone.style.left = `${touch.clientX - touchDrag.clone.offsetWidth / 2}px`;
    touchDrag.clone.style.top = `${touch.clientY - 30}px`;
    touchDrag.clone.style.display = "none";
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    touchDrag.clone.style.display = "";
    const targetColumn = element?.closest<HTMLElement>("[data-column-id]");

    document.querySelectorAll<HTMLElement>("[data-column-id]").forEach((column) => {
      const isTarget = column === targetColumn;
      column.classList.toggle("border-2", isTarget);
      column.classList.toggle("border-brand", isTarget);
      column.classList.toggle("bg-brand-tint", isTarget);
      getColumnBody(column)?.classList.toggle("bg-brand-tint", isTarget);
    });
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const touchDrag = touchDragRef.current;

    if (!touchDrag) {
      return;
    }

    const touch = event.changedTouches[0];
    touchDrag.clone.style.display = "none";
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    const targetColumn = element?.closest<HTMLElement>("[data-column-id]");
    const fromColumn = touchDrag.card.closest<HTMLElement>("[data-column-id]");
    touchDrag.clone.remove();
    clearDragStyles(touchDrag.card);

    if (targetColumn) {
      getColumnBody(targetColumn)?.appendChild(touchDrag.card);
      updateColumn(targetColumn);

      if (fromColumn && fromColumn !== targetColumn) {
        updateColumn(fromColumn);
      }
    }

    cleanupDragArtifacts();
  }

  return (
    <section id="pipeline" ref={ref} className="bg-[#F4F8FB] py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="wrap">
        <div className="mb-10 scroll-reveal text-left sm:mb-12 lg:mb-[52px]">
          <span className="section-pill">Candidate Pipeline</span>
          <h2 className="section-heading">Visualisasi Seluruh Pipeline Anda</h2>
          <p className="section-copy">
            Geser kandidat antar tahap secara real-time. Status, skor AI, dan assignee — semua terlihat dalam satu tampilan.
          </p>
        </div>
        <p className="mb-3 text-xs text-hero-muted lg:hidden">Scroll to see all stages →</p>
        <div className="scroll-reveal relative">
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-[#F4F8FB] to-transparent lg:hidden" />
          <div className="overflow-x-auto pb-1 [WebkitOverflowScrolling:touch] [scrollbar-width:thin] [scrollbar-color:rgba(53,88,114,.20)_transparent]">
            <div className="flex gap-2.5">
              {grouped.map((column) => (
                <div
                  key={column.id}
                  data-column-id={column.id}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className="flex w-[260px] min-w-[260px] shrink-0 flex-col overflow-hidden rounded-lg border border-border bg-white transition sm:w-[280px] sm:min-w-[280px] lg:w-[260px] lg:min-w-[260px] xl:w-[280px] xl:min-w-[280px]"
                >
                  <div className="flex items-center justify-between bg-brand-tint p-[9px_12px]">
                    <span className="text-xs font-medium text-brand-tint-text">{column.title}</span>
                    <Badge data-column-count="true" variant="muted" className="px-2 py-0.5 text-[11px] text-brand-tint-text">
                      {column.items.length}
                    </Badge>
                  </div>
                  <div data-column-body="true" className="flex min-h-[76px] flex-col gap-1.5 p-2">
                    {column.items.length === 0 ? (
                      <div data-empty="true" className="py-6 text-center text-sm text-hero-muted">
                        Belum ada kandidat
                      </div>
                    ) : (
                      column.items.map((candidate) => (
                        <CandidateCard
                          key={candidate.id}
                          candidate={candidate}
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                          onTouchStart={handleTouchStart}
                          onTouchMove={handleTouchMove}
                          onTouchEnd={handleTouchEnd}
                        />
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
