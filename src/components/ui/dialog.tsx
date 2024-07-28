"use client";

import { X } from "lucide-react";
import React, { forwardRef, useEffect } from "react";
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}
const Dialog = forwardRef<
  HTMLDialogElement,
  React.PropsWithChildren<DialogProps>
>(({ isOpen, onClose, children, ...props }, ref) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full backdrop-blur-md z-[999]"
        onClick={onClose}
      ></div>
      <dialog
        open={isOpen}
        onClick={(e) => e.stopPropagation()}
        ref={ref}
        className="p-2 bg-slate-50 border fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]"
        {...props}
      >
        <X
          className="h-4 w-4 absolute right-0 top-0 cursor-pointer"
          onClick={onClose}
        />
        {children}
      </dialog>
    </>
  );
});
Dialog.displayName = "Dialog";
export default Dialog;
