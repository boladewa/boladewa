"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/banners/banner 1 desktop.png",
  "/banners/banner 2 desktop.png",
  "/banners/banner 3 desktop.png",
  "/banners/banner 4 desktop.png",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="mx-auto mt-6 max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#111827]">

        {/* Banner */}
        <Image
          src={banners[current]}
          alt={`Banner ${current + 1}`}
          width={1920}
          height={800}
          priority
          className="w-full h-auto"
        />

        {/* Tombol Kiri */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-2xl text-white transition hover:bg-yellow-500 hover:text-black"
        >
          ❮
        </button>

        {/* Tombol Kanan */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-2xl text-white transition hover:bg-yellow-500 hover:text-black"
        >
          ❯
        </button>

        {/* Indicator */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                current === index
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}