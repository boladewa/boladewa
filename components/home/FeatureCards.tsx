const cards = [
  {
    icon: "🛡️",
    title: "KEAMANAN",
    value: "100%",
    desc: "DATA TERLINDUNGI",
  },
  {
    icon: "🎧",
    title: "LAYANAN",
    value: "24/7",
    desc: "SELALU SIAP MEMBANTU",
  },
  {
    icon: "💰",
    title: "BONUS NEW MEMBER",
    value: "10%",
    desc: "BONUS MINGGUAN",
  },
  {
    icon: "🎰",
    title: "TURNOVER",
    value: "0.7%",
    desc: "ROLLINGAN MINGGUAN",
  },
  {
    icon: "💰",
    title: "CASHBACK SPORT ",
    value: "5%",
    desc: "BONUS MINGGUAN",
  },
  {
    icon: "👨‍💻📢",
    title: "SUPPORT",
    value: "AKTIF",
    desc: "ONLINE SETIAP HARI",
  },
];

export default function FeatureCards() {
  return (
    <section className="mt-4 mb-10">

      <div className="mx-auto w-full max-w-[1100px]">

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                flex
                h-[120px]
                flex-col
                items-center
                justify-center

                rounded-2xl

                border
                border-yellow-500/20

                bg-gradient-to-b
                from-[#1B2332]
                via-[#141B28]
                to-[#101623]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-yellow-400
                hover:shadow-xl
                hover:shadow-yellow-500/20
              "
            >
              {/* Icon */}
              <div className="text-xl transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>

              {/* Title */}
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                {card.title}
              </p>

              {/* Value */}
              <h2 className="mt-1 text-3xl font-black leading-none text-yellow-400">
                {card.value}
              </h2>

              {/* Description */}
              <p className="mt-1 text-center text-[10px] text-gray-300">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}