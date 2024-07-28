import Advertisements from "@/components/advertisments";
import Categories from "@/components/categories";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Advertisements />
      <Categories />
    </div>
  );
}
