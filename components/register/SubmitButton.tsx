"use client";

export default function SubmitButton() {
  const handleWhatsApp = () => {
    window.open("https://wa.link/mybvkd", "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleWhatsApp}
      className="
        mt-4
        w-full
        rounded-xl
        border border-yellow-300/20
        bg-gradient-to-r
        from-yellow-400
        via-amber-400
        to-yellow-500
        px-6
        py-3.5
        text-base
        font-bold
        uppercase
        tracking-wider
        text-black
        shadow-lg
        shadow-yellow-500/20
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-xl
        hover:shadow-yellow-500/40
        hover:brightness-110
        active:translate-y-0
        active:scale-[0.99]
        focus:outline-none
        focus:ring-2
        focus:ring-yellow-400
      "
    >
      BUAT AKUN
    </button>
  );
}