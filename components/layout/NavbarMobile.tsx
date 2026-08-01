"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-black/95 backdrop-blur-md shadow-2xl">
      {/* Header Bar */}
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-navbar.png"
            alt="Boladewa"
            width={150}
            height={40}
            priority
            className="h-auto w-auto transition-transform duration-300 active:scale-95"
          />
        </Link>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Login Button */}
          <a
            href="https://www.amanpastianyam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-[85px] items-center justify-center rounded-lg border border-amber-500/60 bg-amber-500/10 text-xs font-bold text-amber-400 shadow-sm transition-all duration-300 hover:bg-amber-500 hover:text-black active:scale-95"
          >
            LOGIN
          </a>

          {/* Register Button */}
          <Link
            href="/register"
            className="flex h-9 w-[85px] items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-xs font-extrabold text-black shadow-md shadow-amber-500/20 transition-all duration-300 hover:brightness-110 active:scale-95"
          >
            DAFTAR
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/30 bg-neutral-900/80 text-amber-400 shadow-sm transition-all duration-300 hover:border-amber-500/60 hover:bg-neutral-800 active:scale-95"
            aria-label="Toggle Menu"
          >
            {open ? (
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`overflow-hidden border-t border-amber-500/10 bg-neutral-950/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          open ? "max-h-[600px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="flex flex-col gap-1.5 px-3">
          {menus.map((menu) => {
            // Deteksi menu mana yang sedang aktif
            const isActive = !menu.external && pathname === menu.href;

            const baseClasses = `group relative flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold tracking-wider transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent text-amber-400 border-l-4 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.15)]"
                : "border border-amber-500/10 bg-neutral-900/40 text-neutral-300 hover:border-amber-500/30 hover:bg-neutral-900 hover:text-amber-300"
            }`;

            return menu.external ? (
              <a
                key={menu.name}
                href={menu.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={baseClasses}
              >
                <span>{menu.name}</span>
                <svg
                  className="h-4 w-4 text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ) : (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={baseClasses}
              >
                <span>{menu.name}</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isActive ? "text-amber-400 translate-x-1" : "text-neutral-500 group-hover:translate-x-1 group-hover:text-amber-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}