"use client";

import Collections from "@/components/collections";
import Hero from "@/components/hero";
import Promotions from "@/components/promotions";
import SavingScheme from "@/components/saving_scheme";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-10 lg:gap-20 px-2 lg:px-0 mt-4 lg:mt-12">
        <Promotions />
        <Collections />
        <SavingScheme />
      </div>
    </div>
  );
}
