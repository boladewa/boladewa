"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 180 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
      size: Math.random() * 2 + 1,
    }));

    setStars(generated);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </>
  );
}