"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "India Overview", href: "/colleges/india" },
  { name: "MBBS in India", href: "/colleges/india/mbbs-in-india" },
  { name: "Consultant – Tripura", href: "/colleges/india/education-consultant-tripura" },
  { name: "Consultant – West Bengal", href: "/colleges/india/education-consultant-west-bengal" },
  { name: "Consultant – Shillong", href: "/colleges/india/education-consultant-shillong-meghalaya" },
  { name: "Consultant – Guwahati", href: "/colleges/india/education-consultants-guwahati-assam" },
  { name: "Consultant – Imphal", href: "/colleges/india/education-consultants-imphal-manipur" },
  { name: "Consultant – Aizawl", href: "/colleges/india/education-consultants-aizawl-mizoram" },
  { name: "Consultant – Nagaland", href: "/colleges/india/education-consultants-nagaland" },
  { name: "Consultant – Bihar", href: "/colleges/india/education-consultant-bihar" },
];

export default function IndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">

      <div className="max-w-7xl mx-auto flex gap-8 px-6 py-12">

        {/* Sidebar */}
        <aside className="w-72 shrink-0">

          <div className="sticky top-28 bg-white/80 backdrop-blur-xl 
          border border-white/40 shadow-xl rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-6 bg-gradient-to-r 
            from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              🇮🇳 Study in India
            </h2>

            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium 
                    transition-all duration-300
                    ${
                      pathname === link.href
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                        : "text-slate-600 hover:bg-indigo-100 hover:text-indigo-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </aside>

        {/* Content */}
        <main className="flex-1">

          <div className="bg-white/80 backdrop-blur-xl 
          border border-white/40 shadow-xl rounded-3xl p-10">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}