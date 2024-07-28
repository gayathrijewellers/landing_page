import Button from "./ui/button";
import { dmSerifDisplay, quattrocento } from "@/lib/fonts";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <video
        loop
        autoPlay
        muted
        className="absolute brightness-50 h-full w-full object-cover -z-10"
      >
        <source src="./hero.mp4" type="video/mp4" />
      </video>

      <div className="h-full flex flex-col justify-center items-center gap-3">
        <h1
          className={`font-bold text-6xl text-primary ${dmSerifDisplay.className} uppercase`}
        >
          Gayathri Jewellers
        </h1>
        <p className="tracking-tighter text-muted-foreground text-lg text-center w-1/3">
          Timeless elegance, where exquisite craftsmanship meets exceptional
          quality
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <Button variant="borderless">Browse Collections</Button>
          <Button variant="borderless">About Us</Button>
        </div>
      </div>
    </div>
  );
}
