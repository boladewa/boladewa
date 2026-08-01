"use client";

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
    <header className="sticky top-0 z-50 w-full bg-black shadow-xl">
      {/* 1. TOP BAR */}
      <div className="w-full border-b border-yellow-500/20">
        <div className="flex h-[100px] w-full items-center justify-between px-6 lg:px-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-navbar.png"
              alt="Boladewa"
              width={240}
              height={70}
              priority
              className="h-auto w-auto drop-shadow-[0_0_15px_rgba(255,210,0,.35)] transition-all duration-300 hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://www.amanpastianyam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 min-w-[130px] items-center justify-center rounded-xl border border-yellow-500 bg-black px-6 text-sm font-bold uppercase text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:shadow-yellow-500/40"
            >
              LOGIN
            </a>

            <Link
              href="/register"
              className="flex h-11 min-w-[140px] items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-500 px-6 text-sm font-extrabold uppercase text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50"
            >
              DAFTAR
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MENU BAR (Ukuran Font Diperbesar ke text-sm & lg:text-base) */}
      <div className="flex w-full justify-center border-b border-yellow-500/20 bg-[#151515]">
        <div className="w-full max-w-[1080px]">
          <nav className="flex h-14 w-full items-center">
            <ul className="flex w-full items-center justify-between">
              {menus.map((menu) => (
                <li key={menu.name} className="shrink-0">
                  {menu.external ? (
                    <a
                      href={menu.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:text-yellow-400 lg:text-base after:absolute after:-bottom-[17px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {menu.name}
                    </a>
                  ) : (
                    <Link
                      href={menu.href}
                      className="relative block text-sm font-black uppercase tracking-wide text-yellow-400 lg:text-base after:absolute after:-bottom-[17px] after:left-0 after:h-[2px] after:w-full after:bg-yellow-400"
                    >
                      {menu.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}