import Image from "next/image";

export default function Hero() {
  const primaryBtnClass =
    "rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-black shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50";

  const secondaryBtnClass =
    "rounded-full border border-yellow-400 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-yellow-300 transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105";

  return (
    <section className="flex flex-col items-center justify-center px-5 py-6 md:px-6 md:py-10 text-center">

      {/* Logo */}
      <div className="mb-5 transition-transform duration-300 hover:scale-105">
        <Image
          src="/icon.png"
          alt="BOLADEWA"
          width={700}
          height={250}
          priority
          className="
            mx-auto
            h-auto
            w-[210px]
            sm:w-[270px]
            md:w-[400px]
            lg:w-[500px]
            xl:w-[560px]
            select-none
            drop-shadow-[0_0_18px_rgba(255,215,0,0.45)]
          "
        />
      </div>

      {/* Badge */}
      <div className="rounded-full bg-[#111322]/90 px-5 py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base text-gray-100 shadow-lg">
        🛡️ AGENT RESMI BOLADEWA • AKSES RESMI TERPERCAYA
      </div>

      {/* Tombol */}
      <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5">

        <a
          href="https://www.amanpastianyam.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={primaryBtnClass}
        >
          🔐 LOGIN
        </a>

        <a
          href="https://wa.link/moe2nn"
          target="_blank"
          rel="noopener noreferrer"
          className={primaryBtnClass}
        >
          📝 DAFTAR
        </a>

        <a
          href="https://wa.me/85577325308"
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryBtnClass}
        >
          📱 HUBUNGI
        </a>

      </div>

    </section>
  );
}