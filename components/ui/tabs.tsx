import * as React from "react";

import { cn } from "@/lib/utils";

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex flex-wrap items-center gap-2 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-2 shadow-sm",
        className
      )}
      {...props}
    />
  )
);
TabsList.displayName = "TabsList";

export { TabsList };
