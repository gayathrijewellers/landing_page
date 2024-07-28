"use client";

import { useState } from "react";
import Dialog from "./ui/dialog";

export default function Gallery() {
  const [dialogState, setDialogState] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <p className="text-3xl font-bold">Gallery</p>
      <div
        className="flex flex-wrap gap-2 md:gap-4"
        onClick={() => setDialogState(!dialogState)}
      >
        <div className="border flex-grow border-neutral-400 h-[300px] w-[400px]"></div>
        <div className="border flex-grow border-neutral-400 h-[300px] w-[400px]"></div>
        <div className="border flex-grow border-neutral-400 h-[300px] w-[400px]"></div>
      </div>

      <Dialog
        isOpen={dialogState}
        onClose={() => setDialogState(!dialogState)}
      ></Dialog>
    </div>
  );
}
