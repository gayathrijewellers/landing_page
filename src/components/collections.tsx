/* eslint-disable @next/next/no-img-element */
"use client";

import { dmSerifDisplay } from "@/lib/fonts";
import { COLLECTION_NAMES } from "@/config/collections.config";
import Button from "./ui/button";
import Link from "next/link";

export default function Collections() {
  return (
    <div className="lg:px-12 flex flex-col gap-4 lg:gap-8 justify-center">
      <p
        className={`text-3xl lg:text-6xl ${dmSerifDisplay.className} uppercase`}
      >
        Collections
      </p>

      <div className="lg:p-0 flex flex-wrap gap-2 lg:gap-0 lg:flex-nowrap w-full">
        {COLLECTION_NAMES.slice(0, 3).map((collection, index) => (
          <div
            key={index}
            className="flex-grow flex-wrap h-[200px] lg:h-[360px] cursor-pointer flex items-center justify-center relative overflow-hidden"
          >
            <Link href={`/collections/${collection.id}`}>
              <picture className="h-[600px] lg:h-full w-full">
                <source srcSet={collection.image} type="image/webp" />
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-center object-cover lg:hover:scale-125 grayscale hover:grayscale-0 transition-all duration-500 brightness-50 hover:brightness-100"
                  loading="lazy"
                />
              </picture>
              <p
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[2] ${dmSerifDisplay.className} text-lg`}
              >
                {collection.name}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/collections">
          <Button variant="border">Browse More</Button>
        </Link>
      </div>
    </div>
  );
}
