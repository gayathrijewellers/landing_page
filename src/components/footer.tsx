"use client";

import { useState, useEffect } from "react";
import { dmSerifDisplay } from "@/lib/fonts";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full flex flex-col justify-center items-center backdrop-blur-md bg-amber-600">
      <div className="flex flex-col items-center gap-2">
        <h1
          className={`font-bold text-3xl lg:text-6xl text-primary text-center ${dmSerifDisplay.className} uppercase`}
        >
          Gayathri Jewellers
        </h1>
        <p className="text-neutral-200 tracking-tighter text-base lg:text-lg text-center w-3/4">
          Timeless elegance, where exquisite craftsmanship meets exceptional
          quality
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center text-neutral-300">
        <p>+91 9483974814</p>
        <p>gayathrijewellers@gmail.com</p>
      </div>

      <div className="mt-4 flex gap-4 items-center text-neutral-300">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
