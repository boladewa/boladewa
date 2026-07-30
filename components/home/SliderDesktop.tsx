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
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="bg-black py-0">
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111] shadow-xl">

          {/* Banner */}
          <Image
            src={banners[current]}
            alt={`Banner ${current + 1}`}
            width={1920}
            height={760}
            priority
            quality={75}
            sizes="100vw"
            className="block h-auto w-full object-cover"
          />

          {/* Tombol Sebelumnya */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-3xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-yellow-500 hover:text-black"
          >
            ❮
          </button>

          {/* Tombol Selanjutnya */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-3xl text-white backdrop-blur-sm transition-all duration-300 hover:bg-yellow-500 hover:text-black"
          >
            ❯
          </button>

          {/* Indicator */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "scale-125 bg-yellow-400"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}