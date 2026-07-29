export default function Hero() {
  const buttonClass =
    "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 px-8 py-3 font-bold text-black shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-amber-200";

  return (
   <section className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
        BOLADEWA
      </h1>

   {/* Badge */}
      <div className="mt-4 rounded-full bg-[#111322] px-6 py-2 text-gray-300 shadow-lg">
        🛡️ AGENT RESMI BOLADEWA • AKSES RESMI TERPECAYA
      </div>

{/* Tombol */}
<div className="mt-10 flex flex-wrap justify-center gap-5">
  <a
    href="hhttps://www.amanpastianyam.com"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 px-8 py-4 font-bold text-black shadow-lg shadow-yellow-500/40 transition-all hover:scale-105"
  >
    🔐 LOGIN
  </a>

  <a
    href="https://wa.link/q4ygp2"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 px-8 py-4 font-bold text-black shadow-lg shadow-yellow-500/40 transition-all hover:scale-105"
  >
    📝 DAFTAR
  </a>

   <a
    href="https://wa.me/85577325308"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-300 transition-all hover:bg-yellow-400 hover:text-black hover:scale-105"
  >
    📱 HUBUNGI
  </a>
</div>

</section>
  );
}