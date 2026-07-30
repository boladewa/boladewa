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
    <header className="sticky top-0 z-50 bg-black shadow-2xl">
      {/* ================= HEADER ================= */}
      <div className="border-b border-yellow-500/20">
        <div className="mx-auto flex h-[145px] max-w-[1850px] items-center justify-between px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center pt-6">
            <Image
              src="/logo-navbar.png"
              alt="Boladewa"
              width={340}
              height={100}
              priority
              className="
                h-auto
                w-auto
                drop-shadow-[0_0_12px_rgba(255,210,0,.45)]
                transition-all
                duration-300
                hover:scale-105
              "
            />
          </Link>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.amanpastianyam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-[58px]
                min-w-[170px]
                items-center
                justify-center
                rounded-xl
                border
                border-yellow-500
                bg-black
                px-8
                text-[18px]
                font-extrabold
                uppercase
                tracking-wide
                text-yellow-400
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                hover:shadow-[0_0_18px_rgba(255,210,0,.45)]
              "
            >
              LOGIN
            </a>

            <Link
              href="/register"
              className="
                flex
                h-[58px]
                min-w-[190px]
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-yellow-400
                via-yellow-300
                to-amber-500
                px-8
                text-[18px]
                font-black
                uppercase
                tracking-wide
                text-black
                shadow-[0_0_18px_rgba(255,210,0,.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_24px_rgba(255,210,0,.55)]
              "
            >
              DAFTAR
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MENU ================= */}
      <div className="border-b border-yellow-500/20 bg-[#141414]">
        <nav className="mx-auto max-w-[1850px]">
          <ul className="flex h-[62px] items-center justify-center gap-14">
            {menus.map((menu) => (
              <li key={menu.name}>
                {menu.external ? (
                  <a
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative
                      text-[17px]
                      font-extrabold
                      uppercase
                      tracking-wide
                      text-white
                      transition-all
                      duration-300
                      hover:text-yellow-400
                      after:absolute
                      after:left-0
                      after:-bottom-[20px]
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
                      text-[17px]
                      font-black
                      uppercase
                      tracking-wide
                      text-yellow-400
                      after:absolute
                      after:left-0
                      after:-bottom-[20px]
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