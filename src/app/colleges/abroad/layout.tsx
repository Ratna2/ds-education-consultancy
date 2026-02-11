"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AbroadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Abroad Overview", link: "/colleges/abroad" },
    {
      name: "Overseas Education Consultant",
      link: "/colleges/abroad/overseas-education-consultant",
    },
    {
      name: "Consultant – Nepal",
      link: "/colleges/abroad/education-consultant-nepal",
    },
    {
      name: "Consultant – Bangladesh",
      link: "/colleges/abroad/education-consultants-bangladesh",
    },
    {
      name: "Studying MBBS in Bangladesh",
      link: "/colleges/abroad/studying-mbbs-in-bangladesh",
    },
  ];
  const mbbsLinks = [
  { name: "MBBS in India", link: "/colleges" },
  { name: "MBBS in Bangladesh", link: "/colleges/abroad/overseas-education-consultant/mbbs-in-bangladesh" },
  { name: "MBBS in Russia", link: "/colleges/abroad/overseas-education-consultant/mbbs-in-russia" },
  { name: "MBBS in Nepal", link: "/colleges/abroad/overseas-education-consultant/mbbs-in-nepal" },
  { name: "MBBS in Georgia", link: "/colleges/abroad/overseas-education-consultant/mbbs-in-georgia" },
];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ===== PAGE HEADER BAR ===== */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container-custom flex justify-between items-center flex-wrap gap-3">

          {/* Title */}
          <h1 className="text-xl font-bold text-slate-800">
            Study Abroad
          </h1>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl md:hidden text-slate-700"
          >
            ☰
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-semibold">

            {links.map((item, index) => {
                const isActive = pathname === item.link;

                // If Overseas Education Consultant → Add Dropdown
                if (item.name === "Overseas Education Consultant") {
                  return (
                    <div key={index} className="relative group">
                      <Link
                        href={item.link}
                        className="text-slate-700 hover:text-indigo-600 transition"
                      >
                        {item.name}
                      </Link>

                      {/* Dropdown */}
                      <div className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                        {mbbsLinks.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.link}
                            className="block px-5 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                          >
                            {sub.name}
                          </Link>
                        ))}

                      </div>
                    </div>
                  );
                }

  return (
    <Link
      key={index}
      href={item.link}
      className={`relative pb-1 transition duration-200 ${
        isActive
          ? "text-indigo-600"
          : "text-slate-700 hover:text-indigo-600"
      }`}
    >
      {item.name}
    </Link>
  );
})}

          </div>
        </div>

        {/* ===== Mobile Dropdown ===== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6 flex flex-col gap-4 bg-white shadow-inner">

            {links.map((item, index) => {
              const isActive = pathname === item.link;

              return (
                <Link
                  key={index}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={`py-2 border-b transition ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-700 hover:text-indigo-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </div>
        </div>

      </div>

      {/* ===== PAGE CONTENT ===== */}
      <div className="w-full">
        {children}
      </div>

    </div>
  );
}