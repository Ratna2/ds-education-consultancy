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

  const collegeLinks = [
    { name: "College Info", link: "/colleges" },
    { name: "India", link: "/colleges/india" },
    { name: "Abroad", link: "/colleges/abroad" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur shadow-xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

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

          {/* Colleges Dropdown */}
          <li className="relative group">

            <button className="flex items-center gap-1 text-slate-200 hover:text-indigo-400 transition">
              Colleges ▾
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 top-8 w-64 opacity-0 invisible 
            translate-y-3 group-hover:opacity-100 group-hover:visible 
            group-hover:translate-y-0 transition-all duration-300">

              <div className="mt-4 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-5">

                <ul className="flex flex-col gap-4 text-sm">
                  {collegeLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="block text-slate-200 hover:text-indigo-400 transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

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
          href="tel:+918415029087"
          className="hidden md:flex items-center gap-3 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-green-600 animate-bounce">
            📞
          </span>
          <span className="font-semibold">
            +91 8415029087
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

          {/* Mobile Colleges */}
          <div>
            <p className="text-indigo-400 font-semibold mb-2">
              Colleges
            </p>

            <div className="pl-4 space-y-2">
              {collegeLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="block"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blogs" className="block" onClick={() => setOpen(false)}>
            Blogs
          </Link>

          <Link href="/contact" className="block" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <a
            href="tel:+918415029087"
            className="block bg-green-500 text-center py-2 rounded-lg"
          >
            Call Now
          </a>

        </div>
      )}

    </header>
  );
}