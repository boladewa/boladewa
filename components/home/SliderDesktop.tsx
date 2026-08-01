"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/banners/banner 1 desktop.png",
  "/banners/banner 2 desktop.png",
  "/banners/banner 3 desktop.png",
  "/banners/banner 4 desktop.png",
];

export default function SliderDesktop() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="mx-auto w-full max-w-[1200px] py-4">
      <div className="relative w-full overflow-hidden rounded-3xl border border-yellow-500/20 bg-black shadow-2xl shadow-yellow-500/10">
        <Image
          src={banners[current]}
          alt={`Banner ${current + 1}`}
          width={1920}
          height={760}
          priority
          quality={100}
          className="block h-auto w-full object-cover"
        />

        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur-md transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:shadow-yellow-500/40"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur-md transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:shadow-yellow-500/40"
        >
          ❯
        </button>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "scale-125 bg-yellow-400 shadow-lg shadow-yellow-400/60"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}