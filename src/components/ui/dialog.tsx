"use client";

import { X, XCircle } from "lucide-react";
import React, { forwardRef, useEffect } from "react";
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}
const Dialog = forwardRef<
  HTMLDialogElement,
  React.PropsWithChildren<DialogProps>
>(({ isOpen, onClose, children, className, ...props }, ref) => {
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
        className={`p-2 h-[90vh] w-full lg:w-1/2 bg-slate-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] ${className}`}
        {...props}
      >
        <XCircle
          className="h-6 w-6 absolute -right-1 -top-1 cursor-pointer"
          onClick={onClose}
        />
        {children}
      </dialog>
    </>
  );
});
Dialog.displayName = "Dialog";
export default Dialog;
