/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { ANNOUNCEMENTS } from "@/config/announcements.config";
import { dmSerifDisplay } from "@/lib/fonts";

/*@ts-ignore*/
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Promotions() {
  const [perPage, setPerPage] = useState(2);

  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    const updatePerPage = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setPerPage(3);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setPerPage(2);
      } else {
        setPerPage(1);
      }
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  return (
    domLoaded && (
      <div className="lg:px-12 flex flex-col gap-4 lg:gap-8 justify-center">
        <p
          className={`text-3xl lg:text-6xl ${dmSerifDisplay.className} uppercase`}
        >
          For you
        </p>
        <Splide
          aria-label="Promotions"
          hasTrack={true}
          options={{
            type: "loop",
            autoplay: true,
            perPage: perPage,
            drag: "free",
            snap: true,
            focus: "center",
            gap: "1rem",
          }}
        >
          {ANNOUNCEMENTS.map((announcement, index) => (
            <SplideSlide
              key={index}
              className="flex justify-center group overflow-hidden rounded-lg"
            >
              <div className="hover:scale-[1.01] transition-all duration-500">
                <img
                  src={announcement.src}
                  alt={`Announcement ${index + 1}`}
                  className="grayscale-[50%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    )
  );
}
