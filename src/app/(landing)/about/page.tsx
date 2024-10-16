"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const throttle = (fn: Function, delay: number) => {
  let lastCall = 0;
  return (...args: any[]) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
};

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const requestRef = useRef<number | null>(null);

  const updateVideoTime = throttle((latest: number) => {
    if (videoRef.current) {
      const duration = videoRef.current.duration || 1;
      const newTime = latest * duration;

      if (Math.abs(videoRef.current.currentTime - newTime) > 0.05) {
        videoRef.current.currentTime = newTime;
      }
    }
  }, 50);

  useEffect(() => {
    const animate = () => {
      updateVideoTime(scrollYProgress.get());
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress]);

  return (
    <>
      <div className="relative">
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <video
            className="object-cover w-full h-full brightness-50"
            loop
            muted
            playsInline
            ref={videoRef}
          >
            <source src="output_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <div className="h-screen w-full flex justify-center items-center">
            <p className="w-1/4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              deleniti veniam quod? Hic, suscipit expedita voluptates ullam
              saepe doloremque maiores, delectus corporis repudiandae soluta id,
              aspernatur ducimus fugiat dolore odio.
            </p>
          </div>

          <div className="h-screen w-full flex justify-center items-center">
            <p className="w-1/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              deleniti veniam quod? Hic, suscipit expedita voluptates ullam
              saepe doloremque maiores, delectus corporis repudiandae soluta id,
              aspernatur ducimus fugiat dolore odio.
            </p>
          </div>

          <div className="h-screen w-full flex justify-center items-center">
            <p className="w-1/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              deleniti veniam quod? Hic, suscipit expedita voluptates ullam
              saepe doloremque maiores, delectus corporis repudiandae soluta id,
              aspernatur ducimus fugiat dolore odio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
