"use client";

import { useState } from "react";

export default function AbroadPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-800 mb-6">
        Study Abroad Programs
      </h1>

      <p className="text-slate-600 text-lg leading-relaxed mb-6">
        Discover global opportunities for MBBS and higher education.
        We assist students with university selection, visa guidance,
        and admission support in top international destinations.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {["Bangladesh", "Russia", "Georgia", "Nepal"].map((item) => (
          <div
            key={item}
            className="p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition"
          >
            <h3 className="font-semibold text-indigo-700 text-lg">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}