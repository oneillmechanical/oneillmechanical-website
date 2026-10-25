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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-gray-300 text-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <Link href="/" className="block shrink-0" onClick={closeMenu}>
            <Image
              src="/images/OM-LOGO-WEB-800.png"
              alt="ONeill Mechanical"
              width={752}
              height={483}
              priority
              className="h-auto w-28 object-contain sm:w-36 md:w-40"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded border border-gray-700 px-4 py-2 font-medium md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-700">
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
            className="border-t border-gray-400 pb-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col pt-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-lg font-medium hover:text-blue-700"
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
