import * as React from "react";

import { cn } from "@/lib/utils";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("font-label-caps text-label-caps text-on-surface-variant", className)}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label };
