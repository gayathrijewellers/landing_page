"use client";

import { useEffect, useState } from "react";

const ads = [
  {
    type: "image",
    src: "./ad-1.jpg",
    content: {
      title: "50% discount on homelander",
      description:
        "This ad doesnt allow you to live alone with a ghost. It is what it is. This ad doesnt allow you to live alone with a ghost. It is what it is.",
    },
  },
  {
    type: "video",
    src: "./hero.mp4",
    content: {
      title: "50% discount on homelander",
      description:
        "This ad doesnt allow you to live alone with a ghost. It is what it is.",
    },
  },
];

export default function Advertisements() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (ads[currentIndex].type === "video") {
      const videoElement = document.getElementById(
        `video-${currentIndex}`
      ) as HTMLVideoElement;
      if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play();
      }
    }
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {ads.map((ad, index) => (
          <div className="w-full h-full flex-shrink-0 relative" key={index}>
            {ad.type === "image" && (
              <img
                src={ad.src}
                alt={`Slide ${index + 1}`}
                className="brightness-75 absolute h-full w-full object-cover -z-10"
              />
            )}
            {ad.type === "video" && (
              <video
                id={`video-${index}`}
                loop
                muted
                className="brightness-75 absolute h-full w-full object-cover -z-10"
              >
                <source src={ad.src} type="video/mp4" />
              </video>
            )}
            <div className="h-full flex justify-end">
              <div className="backdrop-blur-md px-12 ">
                <div className="max-w-[600px] h-full flex flex-col gap-4 justify-center items-end">
                  <p className="text-primary text-6xl font-extrabold text-right">
                    {ad.content.title}
                  </p>
                  <p className="text-muted-foreground text-right">
                    {ad.content.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
