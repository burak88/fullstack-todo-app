import React, { forwardRef } from "react";
import { IModalProps } from "./index.type";
import { cn } from "@/app/lib/utils";

const Modal = forwardRef<HTMLDivElement, IModalProps>(
  (
    {
      className,
      title,
      open,
      onClose,
      onAction,
      actionName,
      isCloseButton,
      children,
      ...props
    },
    ref
  ) => {
    if (!open) return null;

    return (
      <div
        className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",className)}
        ref={ref}
        {...props}
      >
        <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          {title && (
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              {title}
            </h2>
          )}

          <div>{children}</div>

          <div className="mt-6 flex justify-end space-x-2">
            {!isCloseButton && (
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            )}

            {actionName && (
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                onClick={onAction}
              >
                {actionName}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
export { Modal };
