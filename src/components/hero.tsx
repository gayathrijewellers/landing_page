"use client";

import Link from "next/link";

import Button from "./ui/button";

import { dmSerifDisplay } from "@/lib/fonts";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <video
        height="100"
        width="100"
        loop
        autoPlay
        muted
        className="absolute brightness-[50%] contrast-125 saturate-[125%] h-full w-full object-cover -z-10"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="h-full flex flex-col justify-center items-center gap-3">
        <h1
          className={`font-bold text-3xl lg:text-6xl text-primary text-center ${dmSerifDisplay.className} uppercase`}
        >
          Gayathri Jewellers
        </h1>
        <p className="tracking-tighter text-muted-foreground text-base lg:text-lg text-center lg:w-1/3">
          Timeless elegance, where exquisite craftsmanship meets exceptional
          quality
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <Link href="/collections">
            <Button variant="borderless">Browse Collections</Button>
          </Link>
          <Link href="/about_us">
            <Button variant="borderless">About Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
