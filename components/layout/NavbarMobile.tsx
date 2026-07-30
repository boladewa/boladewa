"use client";

import { useState } from "react";
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

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">

      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-yellow-500/20 px-4">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo-navbar.png"
            alt="Boladewa"
            width={165}
            height={45}
            priority
            className="h-auto w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-2">

          <a
            href="https://www.amanpastianyam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-yellow-500 px-3 py-1 text-[11px] font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
          >
            LOGIN
          </a>

          <Link
            href="/register"
            className="rounded-md bg-gradient-to-r from-yellow-400 to-amber-500 px-3 py-1 text-[11px] font-bold text-black transition hover:brightness-110"
          >
            DAFTAR
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-1 text-2xl font-bold text-yellow-400 transition hover:bg-[#1b1b1b]"
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#111111] transition-all duration-300 ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav>

          {menus.map((menu, index) =>
            menu.external ? (
              <a
                key={menu.name}
                href={menu.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-yellow-500/10 px-5 py-4 text-sm font-medium tracking-wide transition ${
                  index === 0
                    ? "bg-[#1a1a1a] text-yellow-400"
                    : "text-gray-300 hover:bg-[#1a1a1a] hover:text-yellow-400"
                }`}
              >
                <span>{menu.name}</span>
                <span className="text-yellow-500">›</span>
              </a>
            ) : (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-yellow-500/10 bg-[#1a1a1a] px-5 py-4 text-sm font-medium tracking-wide text-yellow-400"
              >
                <span>{menu.name}</span>
                <span className="text-yellow-500">›</span>
              </Link>
            )
          )}

        </nav>
      </div>

    </header>
  );
}