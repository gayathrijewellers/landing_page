"use client";

import Link from "next/link";

import { dmSerifDisplay } from "@/lib/fonts";
import { SAVING_SCHEME } from "@/config/saving_scheme.config";

export default function SavingScheme() {
  return (
    <div className="px-2 lg:px-12 py-12 flex justify-center items-center">
      <div className="flex flex-col gap-4 lg:gap-8 justify-center">
        <Link href="/saving_scheme">
          <div className="flex flex-col gap-2">
            {SAVING_SCHEME.map((scheme, index) => (
              <div key={index} className="cursor-pointer border-b p-2">
                <p
                  className={`font-medium text-3xl lg:text-6xl ${dmSerifDisplay.className} `}
                >
                  {scheme.name}
                </p>
              </div>
            ))}
          </div>
        </Link>

        <p className="text-right">Know More</p>
      </div>
    </div>
  );
}
