"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Self Assessment",
    points: [
      "Identify your interests & strengths",
      "Take career aptitude tests",
      "Research potential career paths",
    ],
  },
  {
    number: "02",
    title: "Education Planning",
    points: [
      "Choose Indian or Foreign education",
      "Select appropriate courses & streams",
      "Understand entrance requirements",
    ],
  },
  {
    number: "03",
    title: "Preparation",
    points: [
      "Academic preparation for chosen field",
      "Language proficiency (IELTS/TOEFL)",
      "Skill & extracurricular development",
    ],
  },
  {
    number: "04",
    title: "Application & Beyond",
    points: [
      "University applications & documentation",
      "Visa process (for abroad studies)",
      "Career placement & alumni networking",
    ],
  },
];

export default function CareerRoadmap() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2500); // slow smooth auto progress

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-6">
          Your Comprehensive Career Guide
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto mb-20 text-lg">
          Follow our structured step-by-step roadmap to confidently
          navigate your education journey in India or abroad.
        </p>

        {/* Progress Line */}
        <div className="relative mb-20">
          <div className="absolute top-6 left-0 w-full h-1 bg-white/20"></div>
          <div
            className="absolute top-6 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
            style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
          ></div>

          <div className="flex justify-between relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500
                ${
                  i <= active
                    ? "bg-gradient-to-br from-cyan-400 to-blue-500 scale-110 shadow-lg"
                    : "bg-white/20"
                }`}
              >
                {step.number}
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl backdrop-blur-xl border transition-all duration-700
              ${
                i === active
                  ? "bg-white/20 border-cyan-400 scale-105 shadow-2xl"
                  : "bg-white/10 border-white/10"
              }`}
            >
              <h3 className="text-xl font-bold mb-6">
                {step.title}
              </h3>

              <ul className="space-y-3 text-slate-300 text-sm">
                {step.points.map((point, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-cyan-400">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}