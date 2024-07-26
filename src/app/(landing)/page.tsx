import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="h-full p-2">
      <Hero />

      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <p className="text-3xl font-bold">Some title about company</p>
        <div className="flex flex-wrap gap-2 md:gap-4">
          <div className="border flex-grow border-neutral-400 h-[300px] w-[400px]"></div>
          <div className="border flex-grow border-neutral-400 h-[300px] w-[400px]"></div>
          <div className="border flex-grow border-neutral-400 h-[300px] w-[400px]"></div>
        </div>
      </div>
    </div>
  );
}
