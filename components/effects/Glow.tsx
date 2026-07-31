"use client";

export default function Glow() {
  return (
    <>
      {/* Glow kiri atas */}
      <div
        className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,.18) 0%, rgba(255,215,0,.05) 45%, transparent 75%)",
          animation: "glowFloat1 10s ease-in-out infinite",
        }}
      />

      {/* Glow kanan */}
      <div
        className="absolute right-[-180px] top-[25%] h-[520px] w-[520px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,180,0,.16) 0%, rgba(255,180,0,.04) 45%, transparent 70%)",
          animation: "glowFloat2 13s ease-in-out infinite",
        }}
      />

      {/* Glow bawah */}
      <div
        className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,.14) 0%, rgba(255,215,0,.03) 45%, transparent 70%)",
          animation: "glowFloat3 16s ease-in-out infinite",
        }}
      />
    </>
  );
}