"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  links: { name: string; link: string }[];
  title: string;
};

export default function CollegeSidebar({ links, title }: Props) {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 bg-white shadow-lg rounded-xl p-6 h-fit">

      <h3 className="text-xl font-bold text-slate-800 mb-6">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === item.link
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </aside>
  );
}