"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/banners/banner 1 desktop.png",
  "/banners/banner 2 desktop.png",
  "/banners/banner 3 desktop.png",
  "/banners/banner 4 desktop.png",
];

export default function SliderMobile() {
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
    <section className="bg-black py-2">
      <div className="px-2">

        <div className="relative overflow-hidden rounded-lg border border-yellow-500/20 bg-[#111]">

          <Image
            src={banners[current]}
            alt={`Banner ${current + 1}`}
            width={900}
            height={500}
            priority
            className="w-full h-auto object-cover"
          />

          {/* Tombol kiri */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-lg text-white"
          >
            ❮
          </button>

          {/* Tombol kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-lg text-white"
          >
            ❯
          </button>

          {/* Indicator */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  current === index
                    ? "bg-yellow-400"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}