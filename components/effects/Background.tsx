"use client";

import Dust from "./Dust";
import Glow from "./Glow";
import Lines from "./Lines";
import Stars from "./Stars";

export default function Background() {
  return (
    <div
      className="
        fixed inset-0
        z-0
        overflow-hidden
        pointer-events-none
        bg-[#050505]
      "
      aria-hidden="true"
    >
      {/* Soft Gold Glow */}
      <Glow />

      {/* Gold Moving Lines */}
      <Lines />

      {/* Floating Dust */}
      <Dust />

      {/* Twinkling Stars */}
      <Stars />
    </div>
  );
}