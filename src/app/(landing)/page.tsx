"use client";

import Collections from "@/components/collections";
import Hero from "@/components/hero";
import Promotions from "@/components/promotions";
import SavingScheme from "@/components/saving_scheme";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 lg:gap-20">
      <Hero />
      <Promotions />
      <Collections />
      <SavingScheme />
    </div>
  );
}
