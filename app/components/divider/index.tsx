import React, { forwardRef } from "react";
import { IDividerProps } from "./index.type";
import { cn } from "@/app/lib/utils";

const Divider = forwardRef<HTMLDivElement, IDividerProps>(
  ({ className, children, color, ...props }, ref) => {
    return (
      <div
        className={cn("w-full border-b border-gray-200", className)}
        ref={ref}
        {...props}
      ></div>
    );
  }
);

Divider.displayName = "Divider";
export { Divider };
