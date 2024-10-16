/* eslint-disable @next/next/no-img-element */
"use client";

import Promotions from "@/components/promotions";
import { Option, Select } from "@/components/ui/select";
import { COLLECTION_NAMES } from "@/config/collections.config";
import { RANDOM_PRODUCTS } from "@/config/products.config";
import { dmSerifDisplay } from "@/lib/fonts";
import { useRouter } from "next/navigation";

export default function Collections() {
  const router = useRouter();

  function handleCollectionRoute(e: any) {
    router.push(`/collections/${e}`);
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-12 p-2 mt-20 mb-20">
      <Promotions />

      <div>
        <div
          id="collection_tab"
          className="hidden lg:flex w-full px-2 lg:px-12 rounded-lg"
        >
          {COLLECTION_NAMES.map((collection) => (
            <div
              key={collection.id}
              className="cursor-pointer h-[300px] w-[300px] hover:w-1/2 transition-all duration-500 relative group"
              style={{ willChange: "auto" }}
              onClick={() => handleCollectionRoute(collection.id)}
            >
              <picture>
                <source srcSet={collection.image} type="image/webp" />
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full brightness-[40%] grayscale hover:grayscale-0 hover:brightness-75 transition-all duration-200 object-center object-cover"
                  loading="lazy"
                />
              </picture>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <p className="hidden group-hover:block text-xs text-center">
                  {collection.counter}
                </p>
                <p className="text-center">{collection.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="collection_tab" className="block lg:hidden ">
          <Select onChange={handleCollectionRoute}>
            {COLLECTION_NAMES.map((collection) => (
              <Option key={collection.id} value={collection.id}>
                <div>
                  <p className="text-xs text-neutral-300">
                    {collection.counter}
                  </p>
                  <p>{collection.name}</p>
                </div>
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div id="collection_body" className="lg:px-12 flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {RANDOM_PRODUCTS.map((random, index) => (
            <div
              key={index}
              id="collection_item"
              className="cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={random.image}
                alt={random.name}
                className="object-cover object-center h-[150px] md:h-[240px] lg:h-[300px] w-full grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
