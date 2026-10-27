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
  "rounded-lg border border-[#405363] bg-[#263746] px-4 py-2 font-medium text-[#F1F5F9] transition-colors duration-150 hover:border-[#3282B8] hover:bg-[#2D4253] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3282B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17212B]";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-0.5 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
          open ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-[18px] h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
          open ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F1720]/95 px-3 py-3 backdrop-blur-sm sm:px-4">
      <div className="mx-auto max-w-6xl rounded-xl border border-[#405363] bg-[#17212B] px-3 shadow-lg shadow-black/20 sm:px-5">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 py-2 sm:gap-5 sm:py-3">
          <Link
            href="/"
            className="block shrink-0 rounded-lg bg-[#F8FAFC] p-2"
            onClick={closeMenu}>
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
              className="rounded-lg border border-[#3282B8] bg-[#173B5F] px-3 py-2 text-center text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#245C86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CB6E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17212B] sm:px-5 sm:text-base"
            >
              Request Service
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#405363] bg-[#263746] text-[#F1F5F9] transition-colors duration-150 hover:border-[#3282B8] hover:bg-[#2D4253] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3282B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17212B] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <HamburgerIcon open={menuOpen} />
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
            className="border-t border-[#405363] pb-3 md:hidden"
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
