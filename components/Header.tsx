"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const navButtonClass =
  "rounded-lg border border-[#CBD5E1] px-4 py-2 font-medium text-[#17324D] transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#EAF1F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 px-3 py-3 backdrop-blur-sm sm:px-4">
      <div className="mx-auto max-w-6xl rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3 shadow-sm sm:px-5">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 py-2 sm:gap-5 sm:py-3">
          <Link href="/" className="block shrink-0" onClick={closeMenu}>
            <Image
              src="/images/OM-LOGO-WEB-800.png"
              alt="ONeill Mechanical"
              width={752}
              height={483}
              priority
              className="h-auto w-20 object-contain sm:w-28 md:w-32"
            />
          </Link>

          <div className="flex justify-center">
            <Link
              href="/contact#request-service"
              onClick={closeMenu}
              className="rounded-lg border border-[#17324D] bg-[#17324D] px-3 py-2 text-center text-xs font-semibold text-white transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#2F6690] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2 sm:px-5 sm:text-base"
            >
              Request Service
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`${navButtonClass} px-3 text-sm md:hidden`}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={navButtonClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-[#CBD5E1] pb-3 md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="grid gap-2 pt-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`${navButtonClass} block w-full`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
