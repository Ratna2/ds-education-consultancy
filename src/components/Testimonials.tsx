"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    college: "B.Tech, Techno India University",
    rating: 5,
    message: "They helped me secure admission in my dream college!",
  },
  {
    name: "Ananya Das",
    college: "MBA, Brainware University",
    rating: 5,
    message: "Professional counselling and smooth admission process.",
  },
  {
    name: "Sourav Sen",
    college: "BBA, Amity University Kolkata",
    rating: 5,
    message: "Highly recommended for engineering admissions.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white text-center"
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-4 tracking-tight">
          What Our Students Say
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-14 rounded-full" />

        {/* Card */}
        <div
          className={`p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
            fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Stars */}
          <div className="flex justify-center mb-6 text-yellow-400 text-xl">
            {"⭐".repeat(current.rating)}
          </div>

          {/* Message */}
          <p className="text-lg leading-relaxed text-gray-300 mb-8 italic">
            “{current.message}”
          </p>

          {/* Student Info */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xl font-semibold text-indigo-400">
              {current.name}
            </h4>
            <p className="text-sm text-gray-400 mt-1">
              {current.college}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}