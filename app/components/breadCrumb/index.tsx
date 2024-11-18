import React from "react";
import { BreadcrumbProps } from "./index.type";
import Link from "next/link";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
}) => {
  let notNullItems = items.filter((x) => x.label !== 'null')

  return (
    <nav aria-label="breadcrumb" className="text-sm">
      <ol className="flex space-x-2">
        {notNullItems.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLastItem && item.path ? (
                <Link href={item.path} className="text-[#94A3B8] hover:underline">
                  {item.label === null ? " " : item.label}
                </Link>
              ) : (
                <span className="text-[#94A3B8]">{item.label === null ? " " : item.label}</span>
              )}
              {!isLastItem && (
                <span className="mx-2 text-gray-400">{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;