"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:text-indigo-400 transition ${
      pathname === path ? "text-indigo-400" : "text-slate-200"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur shadow-xl">
      <nav className="w-full max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="DS Education Consultancy Logo"
            className="h-12 w-auto object-contain"
          />

          <div>
            <h1 className="text-lg md:text-xl font-bold text-white leading-tight">
              DS Education Consultancy
            </h1>
            <p className="text-xs text-gray-200 tracking-wide">
              GRAB THE GREAT OPPORTUNITY
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li>
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>

          {/* ✅ UPDATED: Direct Colleges Link */}
          <li>
            <Link href="/colleges" className={linkClass("/colleges")}>
              Colleges
            </Link>
          </li>

          <li>
            <Link href="/blogs" className={linkClass("/blogs")}>
              Blogs
            </Link>
          </li>

          <li>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Call Button */}
        <a
          href="tel:+919366294006"
          className="hidden md:flex items-center gap-3 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-green-600 animate-bounce">
            📞
          </span>
          <span className="font-semibold">
            +91 9366294006
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 px-6 pb-6 space-y-4 text-slate-200">
          <Link href="/" className="block" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/about" className="block" onClick={() => setOpen(false)}>
            About
          </Link>

          {/* ✅ UPDATED: Direct Colleges Link */}
          <Link href="/colleges" className="block" onClick={() => setOpen(false)}>
            Colleges
          </Link>

          <Link href="/blogs" className="block" onClick={() => setOpen(false)}>
            Blogs
          </Link>

          <Link href="/contact" className="block" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <a
            href="tel:+919366294006"
            className="block bg-green-500 text-center py-2 rounded-lg"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}