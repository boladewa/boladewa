"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  href: string;
  external: boolean;
}

const menus: MenuItem[] = [
  { name: "BERANDA", href: "/", external: false },
  { name: "SPORTS", href: "https://www.terushebatunggul.com/en/euro", external: true },
  { name: "VIRTUAL SPORTS", href: "https://www.terushebatunggul.com/virtualsports", external: true },
  { name: "LIVE CASINO", href: "https://www.terushebatunggul.com/livecasino", external: true },
  { name: "SLOT", href: "https://www.terushebatunggul.com/games", external: true },
  { name: "TEMBAK IKAN", href: "https://www.terushebatunggul.com", external: true },
  { name: "SABUNG AYAM", href: "https://www.terushebatunggul.com", external: true },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-black/95 backdrop-blur-md shadow-2xl">
      {/* Header Bar */}
      <div className="flex h-16 items-center justify-between px-3">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-navbar.png"
            alt="Boladewa"
            width={120}
            height={35}
            priority
            className="h-auto w-auto transition-transform duration-300 active:scale-95"
          />
        </Link>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-1.5">
          {/* Login Button */}
          <a
            href="https://www.terushebatunggul.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-[62px] items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-[10px] font-extrabold text-black shadow-md shadow-amber-500/20 transition-all duration-300 hover:brightness-110 active:scale-95"
          >
            LOGIN
          </a>

          {/* Register Button */}
          <Link
            href="/register"
            className="flex h-8 w-[62px] items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-[10px] font-extrabold text-black shadow-md shadow-amber-500/20 transition-all duration-300 hover:brightness-110 active:scale-95"
          >
            DAFTAR
          </Link>

          {/* Hubungi Button */}
          <a
            href="https://wa.me/85577325308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-[66px] items-center justify-center rounded-lg border border-amber-400 bg-black text-[10px] font-bold text-amber-300 transition-all duration-300 hover:bg-amber-400 hover:text-black active:scale-95"
          >
            HUBUNGI
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/30 bg-neutral-900/80 text-amber-400 shadow-sm transition-all duration-300 hover:border-amber-500/60 hover:bg-neutral-800 active:scale-95"
            aria-label="Toggle Menu"
          >
            {open ? (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
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