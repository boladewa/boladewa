const cards = [
  {
    title: "KEAMANAN",
    value: "100%",
    desc: "DATA TERLINDUNGI",
  },
  {
    title: "LAYANAN",
    value: "24/7",
    desc: "SELALU SIAP MEMBANTU",
  },
  {
    title: "BONUS CASHBACK SPORT",
    value: "10%",
    desc: "BONUS MINGGUAN",
  },
  {
    title: "BONUS TURNOVER LIVE CASINO & CASINO GAMES",
    value: "0.7%",
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
    <section className="mt-2 w-full px-2 md:mt-4">

      <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="
              flex
              min-h-[120px]
              flex-col
              justify-center
              rounded-xl
              border
              border-yellow-500/30
              bg-[#111827]
              px-3
              py-4
              text-center
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-yellow-400
              hover:shadow-lg
              hover:shadow-yellow-500/20

              md:min-h-[150px]
              md:rounded-2xl
              md:px-5
              md:py-6
            "
          >
            <p className="text-[10px] uppercase leading-tight tracking-wide text-gray-400 md:text-xs">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-400 md:text-4xl">
              {card.value}
            </h2>

            <p className="mt-2 text-[11px] leading-tight text-gray-300 md:text-sm">
              {card.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}