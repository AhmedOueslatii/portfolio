"use client";

import Link from "next/link";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#cta" },
];

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-g200 bg-paper/[0.88] py-5 backdrop-blur-xl section-pad">
      <Link
        href="#"
        className="font-serif text-[1.3rem] tracking-tightest text-ink no-underline"
      >
        Ahmed Oueslati
      </Link>

      <ul className="hidden list-none gap-10 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.82rem] font-normal uppercase tracking-wider2 text-g700 no-underline transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#cta"
        className="inline-block rounded-pill border border-ink px-5 py-2 text-[0.82rem] font-medium text-ink no-underline transition-colors hover:bg-ink hover:text-paper"
      >
        Hire me
      </Link>
    </nav>
  );
}
