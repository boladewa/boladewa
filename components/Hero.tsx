export default function Hero() {
  // Class dasar yang bisa digunakan kembali (reusable)
  const primaryBtnClass =
    "rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 px-8 py-4 font-bold text-black shadow-lg shadow-yellow-500/40 transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-amber-200";

  const secondaryBtnClass =
    "rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-300 transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105";

  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Title */}
      <h1 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
        BOLADEWA
      </h1>

      {/* Badge */}
      <div className="mt-4 rounded-full bg-[#111322] px-6 py-2 text-gray-300 shadow-lg">
        🛡️ AGENT RESMI BOLADEWA • AKSES RESMI TERPERCAYA
      </div>

      {/* Tombol Navigasi */}
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <a
          href="https://www.amanpastianyam.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={primaryBtnClass}
        >
          🔐 LOGIN
        </a>

        <a
          href="https://wa.link/q4ygp2"
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