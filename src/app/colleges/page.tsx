"use client";

import Image from "next/image";
import { useState, useMemo, useEffect, Suspense } from "react";

type College = {
  name: string;
  category: string;
  image: string;
  featured?: boolean;
};

const colleges: College[] = [
  { name: "Uttaranchal University, Dehradun", category: "Law", image: "/uttaranchal.jpg", featured: true },
  { name: "SAGE University, Bhopal", category: "Law", image: "/sage.jpg" },
  { name: "Adamas University, Kolkata", category: "Law", image: "/adamas.jpg" },

  { name: "SRM University, Delhi", category: "Medical", image: "/srm.jpg", featured: true },
  { name: "East Point College Of Medical Sciences", category: "Medical", image: "/eastpoint.jpg" },
  { name: "Kalinga Institute Of Medical Sciences", category: "Medical", image: "/kalinga.jpg" },

  { name: "Indo Global Group Of Colleges Punjab", category: "Management", image: "/indoglobal.jpg" },
  { name: "UPES University, Dehradun", category: "Management", image: "/upes.jpg", featured: true },
  { name: "MIT World Peace University", category: "Management", image: "/mit.jpg" },

  { name: "Roorkee College Of Engineering", category: "Engineering", image: "/roorkee.jpg" },
  { name: "Brainware University, Kolkata", category: "Engineering", image: "/brainware.jpg" },
  { name: "Graphic Era Hill University", category: "Engineering", image: "/graphicera.jpg", featured: true },
];

const ITEMS_PER_PAGE = 6;

function CollegesContent() {

  const [active, setActive] = useState("All");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

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

          <h1 className="text-5xl font-bold text-slate-800">
            University & Colleges
          </h1>

          <p className="text-slate-500 mt-4">
            Showing: <span className="font-semibold">{active}</span> Colleges
          </p>

          {/* SEARCH */}
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

      {/* FILTER */}
      <div className="sticky top-20 z-10 flex justify-center gap-4 pb-10 bg-white/80 backdrop-blur-md">
        {["All", "Law", "Medical", "Management", "Engineering"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setPage(1);
            }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                active === cat
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div
        key={active + page + search}
        className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10 animate-fade"
      >
        {paginated.map((college, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 relative group"
          >
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
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg text-slate-800 mb-4">
                {college.name}
              </h3>

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

      <style jsx>{`
        .animate-fade {
          animation: fade 0.4s ease;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default function CollegesPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
      <CollegesContent />
    </Suspense>
  );
}