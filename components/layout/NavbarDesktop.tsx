import Image from "next/image";
import Link from "next/link";

const menus = [
  { name: "BERANDA", href: "/", external: false },
  { name: "SPORTS", href: "https://www.amanpastianyam.com", external: true },
  { name: "VIRTUAL SPORTS", href: "https://www.amanpastianyam.com", external: true },
  { name: "LIVE CASINO", href: "https://www.amanpastianyam.com", external: true },
  { name: "SLOT", href: "https://www.amanpastianyam.com", external: true },
  { name: "TEMBAK IKAN", href: "https://www.amanpastianyam.com", external: true },
  { name: "SABUNG AYAM", href: "https://www.amanpastianyam.com", external: true },
];

export default function NavbarDesktop() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-xl">

      {/* HEADER */}
      <div className="border-b border-yellow-500/20">
        <div className="mx-auto flex h-[120px] w-full max-w-[1320px] items-center justify-between px-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-navbar.png"
              alt="Boladewa"
              width={300}
              height={90}
              priority
              className="
                h-auto
                w-auto
                drop-shadow-[0_0_15px_rgba(255,210,0,.35)]
                transition-all
                duration-300
                hover:scale-105
              "
            />
          </Link>


          {/* BUTTON */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.amanpastianyam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-12
                min-w-[150px]
                items-center
                justify-center
                rounded-xl
                border
                border-yellow-500
                bg-black
                px-8
                text-base
                font-bold
                uppercase
                text-yellow-400
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                hover:shadow-lg
                hover:shadow-yellow-500/40
              "
            >
              LOGIN
            </a>


            <Link
              href="/register"
              className="
                flex
                h-12
                min-w-[170px]
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-yellow-400
                via-yellow-300
                to-amber-500
                px-8
                text-base
                font-extrabold
                uppercase
                text-black
                shadow-lg
                shadow-yellow-500/20
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-yellow-500/50
              "
            >
              DAFTAR
            </Link>

          </div>

        </div>
      </div>


      {/* MENU */}
      <div className="border-b border-yellow-500/20 bg-[#151515]">

        <nav className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-center px-6">

          <ul className="flex items-center gap-14 translate-x-12">

            {menus.map((menu) => (
              <li key={menu.name} className="shrink-0">

                {menu.external ? (
                  <a
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative
                      block
                      text-[15px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                      transition-all
                      duration-300
                      hover:text-yellow-400

                      after:absolute
                      after:left-0
                      after:-bottom-[21px]
                      after:h-[2px]
                      after:w-0
                      after:bg-yellow-400
                      after:transition-all
                      after:duration-300

                      hover:after:w-full
                    "
                  >
                    {menu.name}
                  </a>
                ) : (
                  <Link
                    href={menu.href}
                    className="
                      relative
                      block
                      text-[15px]
                      font-black
                      uppercase
                      tracking-wide
                      text-yellow-400

                      after:absolute
                      after:left-0
                      after:-bottom-[21px]
                      after:h-[2px]
                      after:w-full
                      after:bg-yellow-400
                    "
                  >
                    {menu.name}
                  </Link>
                )}

              </li>
            ))}

          </ul>

        </nav>

      </div>

    </header>
  );
}