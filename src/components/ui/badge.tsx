import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium tracking-normal transition-colors",
  {
    variants: {
      variant: {
        default: "bg-brand text-white",
        muted: "bg-brand-tint text-brand-tint-text",
        scoreHigh: "bg-green-50 text-green-800",
        scoreMedium: "bg-amber-50 text-amber-800",
        scoreLow: "bg-red-50 text-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge };
