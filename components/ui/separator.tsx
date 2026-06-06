import * as React from "react";

import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(orientation === "vertical" ? "h-full w-px" : "h-px w-full", "bg-outline-variant/30", className)}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };
