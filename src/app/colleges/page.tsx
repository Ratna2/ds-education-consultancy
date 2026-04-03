"use client";

export const dynamic = "force-dynamic";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";

type College = {
  name: string;
  category: string;
  image: string;
  state: string;
  featured?: boolean;
};

const colleges: College[] = [
  // (your same data — unchanged)
  { name: "IEM", category: "Engineering", image: "/IEM.jpg", state: "West Bengal", featured: true },
  { name: "SRM Chennai", category: "Engineering", image: "/SRM.jpeg", state: "Tamil Nadu" },
  { name: "Ramaiah Institute of Technology", category: "Engineering", image: "/RAMAIAH.jpg", state: "Karnataka" },
  { name: "NMIMS", category: "Engineering", image: "/NMIMS.jpg", state: "Maharashtra" },
  { name: "KIIT", category: "Engineering", image: "/KIIT.jpg", state: "Odisha" },
  { name: "Siksha ‘O’ Anusandhan", category: "Engineering", image: "/SHIKSHA.webp", state: "Odisha" },
  { name: "Jain University", category: "Engineering", image: "/JAIN.jpg", state: "Karnataka" },
  { name: "Dayananda Sagar", category: "Engineering", image: "/DAYANAND.jpg", state: "Karnataka" },

  { name: "IQ City Medical College, Kolkata", category: "Medical", image: "/IQ.jpg", state: "West Bengal", featured: true },
  { name: "Jagannath Gupta Medical College, Kolkata", category: "Medical", image: "/JAGANNATH.jpeg", state: "West Bengal" },
  { name: "ICARE Medical College", category: "Medical", image: "/ICARE.webp", state: "West Bengal" },
  { name: "Gouri Devi Medical College", category: "Medical", image: "/GOURI.webp", state: "West Bengal" },
  { name: "MS Ramaiah Medical College", category: "Medical", image: "/MSRAMAIAH.jpg", state: "Karnataka" },
  { name: "Shree Lakshmi Narayana Medical College", category: "Medical", image: "/SHRILAKSHMI.webp", state: "Puducherry" },

  { name: "Symbiosis", category: "Management", image: "/SYMB.avif", state: "Maharashtra", featured: true },
  { name: "Christ University", category: "Management", image: "/CHRIST.jpg", state: "Karnataka" },
  { name: "Nitte School of Management", category: "Management", image: "/NITTE.jpeg", state: "Karnataka" },
  { name: "Ramaiah Institute", category: "Management", image: "/RAMAIAH.jpg", state: "Karnataka" },
  { name: "Dayananda Sagar", category: "Management", image: "/DAYANAND.jpg", state: "Karnataka" },
  { name: "Acharya Institute", category: "Management", image: "/ACHAR.webp", state: "Karnataka" },

  { name: "IEM", category: "Law", image: "/IEM.jpg", state: "West Bengal", featured: true },
  { name: "Adamas University", category: "Law", image: "/ADAM.jpg", state: "West Bengal" },
  { name: "Sister Nivedita University", category: "Law", image: "/SISTERS.avif", state: "West Bengal" },
  { name: "Ramaiah Institute", category: "Law", image: "/RAMAIAH.jpg", state: "Karnataka" },
  { name: "Jain University", category: "Law", image: "/JAIN.jpg", state: "Karnataka" },
  { name: "Dayananda Sagar", category: "Law", image: "/DAYANAND.jpg", state: "Karnataka" },

  { name: "Acharya College of Pharmacy", category: "Pharmacy", image: "/ACHARIA.png", state: "Karnataka", featured: true },
  { name: "East Point College of Pharmacy", category: "Pharmacy", image: "/EAST.jpg", state: "Karnataka" },
  { name: "MVM College of Pharmacy", category: "Pharmacy", image: "/MVM.jpg", state: "Karnataka" },
  { name: "Karnataka College of Pharmacy", category: "Pharmacy", image: "/KARNATAKA.avif", state: "Karnataka" },
  { name: "Nargund College of Pharmacy", category: "Pharmacy", image: "/NARGUNDA.webp", state: "Karnataka" },
];

const ITEMS_PER_PAGE = 6;

function CollegesContent() {
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  /* ✅ AUTO SCROLL TO TOP */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, active]);

  const filtered = useMemo(() => {
    let result =
      active === "All"
        ? colleges
        : colleges.filter((c) => c.category === active);

    if (search.trim() !== "") {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [active, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-white min-h-screen">

      {/* HERO */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="relative">
          <div className="inline-block px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6 animate-bounce">
            🎓 Explore Institutions
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">
            University & Colleges
          </h1>

          <p className="text-slate-500 mt-4">
            Showing: <span className="font-semibold">{active}</span> Colleges
          </p>

          <div className="max-w-xl mx-auto mt-8">
            <input
              type="text"
              placeholder="Search college..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full px-5 py-3 rounded-full border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>
        </div>
      </section>

      {/* ✅ FIXED FILTER BAR */}
      <div className="sticky top-20 z-10 bg-white/90 backdrop-blur-md py-4">
        <div className="flex gap-3 overflow-x-auto px-4 no-scrollbar justify-start md:justify-center">
          {["All", "Engineering", "Medical", "Pharmacy", "Law", "Management"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setPage(1);
              }}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  active === cat
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn">
        {paginated.map((college, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition relative group">
            {college.featured && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-xs px-3 py-1 rounded-full font-semibold shadow z-10">
                ⭐ Featured
              </div>
            )}

            <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
              <Image
                src={college.image}
                alt={college.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg text-slate-800">
                {college.name}
              </h3>

              <p className="text-sm text-slate-500 mb-4">
                📍 {college.state}
              </p>

              <button
                onClick={() => window.location.href = "/contact"}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 pb-20">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-full text-sm transition
                ${
                  page === i + 1
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white border hover:bg-blue-50"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CollegesPage() {
  return <CollegesContent />;
}