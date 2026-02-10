"use client";

import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const logout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900/80 backdrop-blur-xl border-r border-white/10 flex flex-col px-6 py-8">

        {/* BRAND */}
        <div className="mb-10">
          <h1 className="text-2xl font-extrabold tracking-wide">
            DS Admin
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Education Consultancy
          </p>
        </div>

        {/* NAV */}
        <nav className="space-y-2 flex-1">
          <NavItem href="/admin" label="📊 Dashboard" active={pathname === "/admin"} />
          <NavItem href="/admin/leads" label="📋 Enquiry Leads" active={pathname.includes("/leads")} />
          <NavItem href="/admin/appointments" label="📅 Appointments" active={pathname.includes("/appointments")} />
        </nav>

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="mt-auto w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 transition font-semibold shadow-lg"
        >
          🚪 Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      className={`block px-4 py-3 rounded-xl transition font-medium
        ${active
          ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
          : "hover:bg-white/10 text-slate-300"
        }`}
    >
      {label}
    </a>
  );
}
