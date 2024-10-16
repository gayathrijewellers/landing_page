"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { dmSerifDisplay } from "@/lib/fonts";

export default function NavBar() {
  const [bigNavbar, setNavbBar] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return !bigNavbar ? (
    <div className="fixed w-full top-0 z-10 bg-black">
      <div className="hidden md:flex gap-32 items-center justify-center p-4 text-primary">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/collections">
          <p>Collections</p>
        </Link>
        <Link href="/saving_scheme">
          <p>Saving Scheme</p>
        </Link>
        <Link href="/about_us">
          <p>About Us</p>
        </Link>
      </div>

      <div className="md:hidden flex justify-between items-center px-2 py-3">
        <p className={`${dmSerifDisplay.className} text-primary`}>
          Gayathri Jewellers
        </p>
        <Menu
          className="text-primary h-4 w-4 cursor-pointer"
          onClick={() => setNavbBar(!bigNavbar)}
        />
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen z-[1000] fixed bg-white px-8">
      <div className="md:hidden flex justify-between items-center py-3">
        <p className={`${dmSerifDisplay.className}`}>Gayathri Jewellers</p>
        <X
          className="h-4 w-4 cursor-pointer"
          onClick={() => setNavbBar(!bigNavbar)}
        />
      </div>

      <div className="mt-12 flex flex-col gap-2">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/collections">
          <p>Collections</p>
        </Link>
        <Link href="/saving_scheme">
          <p>Saving Scheme</p>
        </Link>
        <Link href="/about_us">
          <p>About Us</p>
        </Link>
      </div>
    </div>
  );
}
