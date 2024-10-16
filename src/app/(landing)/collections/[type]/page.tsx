/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation";

import { dmSerifDisplay } from "@/lib/fonts";

import { PRODUCTS_MAP } from "@/config/products.config";
import { ArrowLeft, ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function Collection() {
  const { type } = useParams();

  return (
    <div className="min-h-screen mt-20 lg:mt-28 p-2 lg:px-20 mb-12">
      <Link href="/collections" className="bg-amber-200">
        <span className="flex flex-col gap-4 cursor-pointer">
          <ArrowLeftCircle className="h-6 w-6" />
          <h1
            className={`font-bold text-4xl lg:text-9xl ${dmSerifDisplay.className} uppercase`}
          >
            {type} collection
          </h1>
        </span>
      </Link>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6 lg:mt-12">
        {PRODUCTS_MAP[
          type as "devyani" | "maharani" | "mangalya" | "nitya" | "ratnam"
        ]().map((product) => (
          <div
            key={product.id}
            className="cursor-pointer overflow-hidden rounded-lg"
          >
            <img
              src={product.image}
              alt=""
              className="object-cover object-center h-[150px] md:h-[240px] lg:h-[300px] w-full grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
