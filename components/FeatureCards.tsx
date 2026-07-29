const cards = [
  {
    title: "KEAMANAN",
    value: "100%",
    desc: "DATA TERLINDUNGI",
  },
  {
    title: "Layanan",
    value: "24/7",
    desc: "Selalu siap membantu",
  },
  {
    title: "BONUS CASHACK SPORT",
    value: "5%",
    desc: "BONUS MINGGUAN",
  },
  {
    title: "BONUS TURNOVER",
    value: "1%",
    desc: "ROLLINGAN MINGGUAN",
  },
  {
    title: "DUKUNGAN",
    value: "AKTIF",
    desc: "TIM SUPPORT",
  },
  {
    title: "INFORMASI",
    value: "UPDATE",
    desc: "SELALU TERBARU",
  },
];

export default function FeatureCards() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl border border-yellow-500/30 bg-[#111827] p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-yellow-500/20"
          >
            <p className="text-xs uppercase tracking-wider text-gray-400">
              {card.title}
            </p>

            <h2 className="mt-2 text-4xl font-bold text-yellow-400">
              {card.value}
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}