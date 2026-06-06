import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 font-label-caps text-label-caps transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary",
        secondary: "bg-secondary-container text-on-secondary-container",
        outline: "border border-outline-variant/40 bg-surface-container-lowest text-secondary",
        soft: "bg-primary-fixed text-on-primary-fixed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
