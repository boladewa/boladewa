"use client";

import { useEffect, useState } from "react";

type DustParticle = {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
};

export default function Dust() {
  const [dots, setDots] = useState<DustParticle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 8 + Math.random() * 8,
      size: Math.random() * 4 + 1,
    }));

    setDots(generated);
  }, []);

  return (
    <>
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="dust"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </>
  );
}