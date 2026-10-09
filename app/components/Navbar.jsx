"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CountrySelect from "./CountrySelect";
import ThemeToggle from "./ThemeLogic";

const links = [
  { href: "/", label: "Top" },
  { href: "/sports", label: "Sports" },
  { href: "/science", label: "Science" },
  { href: "/business", label: "Business" },
  { href: "/health", label: "Health" },
  { href: "/entertainment", label: "Entertainment" },
  { href: "/tech", label: "Tech" },
  { href: "/politics", label: "Politics" },
  { href: "/travel", label: "Travel" },
];

export default function Navbar({ country, countryName }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden />
          <span>
            <span className="brand-name">News</span>
            <span className="brand-tag">{countryName}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <CountrySelect value={country} />
          <ThemeToggle />
          <button
            type="button"
            className="menu-btn lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? "menu-line open" : "menu-line"} />
            <span className={open ? "menu-line open mid" : "menu-line"} />
            <span className={open ? "menu-line open" : "menu-line"} />
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-wrap lg:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-nav" aria-label="Mobile">
          <div className="px-1 py-2">
            <CountrySelect value={country} />
          </div>
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link block animate-nav-item ${isActive(link.href) ? "nav-link-active" : ""}`}
              style={{ animationDelay: `${i * 40}ms` }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
