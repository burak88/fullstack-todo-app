import React, { forwardRef } from "react";
import { ITagProps } from "./index.type";
import { cn } from "@/app/lib/utils";
import { LabelColors } from "@/app/constants/labelColors";

const hexToRGBA = (hex: string, alpha: number): string => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Tag = forwardRef<HTMLDivElement, ITagProps>(
  ({ className, label, ...props }, ref) => {
    const currentLabel = LabelColors.find((x) => x.label === label);
    return (
      <div
        ref={ref}
        {...props}
        className={cn("rounded-md w-fit py-[5px] px-2 text-[12px]", className)}
        style={{
          backgroundColor: currentLabel ?  hexToRGBA(currentLabel.color, 0.1) : hexToRGBA("#33BFFF",0.1) ,
          color: currentLabel ? currentLabel.color : "#33BFFF",
        }}
      >
        {label}
      </div>
    );
  }
);

Tag.displayName = "Tag";
export { Tag };
