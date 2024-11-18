import React, { forwardRef } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";
import { KanbanCardProps } from "./index.type";
import { Tag } from "../tag";
import { Divider } from "../divider";

const KanbanCard = forwardRef<HTMLDivElement, KanbanCardProps>(
  ({ description, label, title, ...props }, ref) => {
    return (
      <div
        className="w-full border-1 rounded-lg  border-[#E2E8F0]  py-5 mb-6 shadow-md"
        ref={ref}
        {...props}
      >
        <div className="px-4">
          <div>
            <p className="font-bold text-[#1E293B] text-base">{title}</p>
            <p className="text-[#94A3B8] mt-2 text-[12px]">{description}</p>
          </div>
          <div className="h-7 mt-4 flex justify-between items-center">
            <Tag label={label} />
            <div className="stroke-white bg-[#D2ECC6] w-7 h-7 rounded-full"></div>
          </div>
        </div>
        <Divider className="border-[0.5px] mt-4 border-[#E2E8F0]/50" />
        <div className="px-4 pt-4">
          <div className="flex items-center justify-start">
            <button className="text-[#94A3B8] font-semibold text-[12px] flex mr-[12px]">
              <FaRegCommentDots size={16} className="mr-1" /> 8
            </button>
            <button className="text-[#94A3B8] font-semibold text-[12px] flex">
              <RiLinksFill size={16} className="mr-1" />1
            </button>
            <p className="text-[#94A3B8] font-semibold text-[12px] flex ml-auto">
              <IoCalendarOutline size={16} className="mr-1" /> Tomorrow
            </p>
          </div>
        </div>
      </div>
    );
  }
);
KanbanCard.displayName = "KanbanCard";
export { KanbanCard };
