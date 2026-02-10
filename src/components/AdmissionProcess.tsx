"use client";

import { useEffect, useRef, useState } from "react";

export default function AdmissionProcess() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Admission{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Process
          </span>
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Free Counselling",
            "College Selection",
            "Documentation",
            "Admission Confirmed",
          ].map((step, i) => (
            <div
              key={i}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl font-extrabold text-indigo-400 mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
