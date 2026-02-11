"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { useEffect, useState } from "react";
import GetInTouch from "@/components/GetInTouch"; // ✅ IMPORT ADDED

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-900">

      {/* HERO SECTION */}
      <section className="py-28 text-center bg-gradient-to-r from-indigo-50 to-blue-50">
        <ScrollReveal>
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 animate-pulse">
            🎓 Education Experts
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            A Little <span className="text-indigo-600">About Us</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mt-4 text-lg text-slate-600">
            Best Education Consultancy helping students achieve success.
          </p>
        </ScrollReveal>
      </section>

      {/* ACHIEVEMENTS */}
      <Achievements />

      {/* WHO WE ARE */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-indigo-600">
              Who We Are?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              DS Education Consultancy is dedicated to guiding students toward
              the right career path. With expert counselling, personalized
              support and strong partnerships with leading institutions,
              we ensure smooth admissions and long-term success.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Founder2.jpg"
              alt="Founder"
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <ScrollReveal>
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Mission.jpg"
                alt="Mission"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-indigo-600">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to provide accessible and high-quality education
                guidance. We empower students with expert advice, scholarship
                support and end-to-end admission assistance to help them achieve
                academic excellence and successful careers.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div>
            <h2 className="text-4xl font-bold mb-10 text-indigo-600">
              Why Choose Us?
            </h2>

            <ul className="space-y-6 text-lg">
              <li>💻 One Stop Study Solution</li>
              <li>⚡ Superfast Support</li>
              <li>🤝 One To One Discussion</li>
              <li>🔗 End To End Support</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/whychoose2.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ✅ USE COMPONENT INSTEAD */}
      <GetInTouch />

    </div>
  );
}

/* ---------------- ACHIEVEMENTS COUNTER ---------------- */

function Achievements() {
  const [count, setCount] = useState({ partners: 0, counseling: 0, careers: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => ({
        partners: prev.partners < 900 ? prev.partners + 10 : 900,
        counseling: prev.counseling < 15000 ? prev.counseling + 200 : 15000,
        careers: prev.careers < 10000 ? prev.careers + 150 : 10000,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">

        <div className="p-8 rounded-2xl bg-blue-100 shadow-md">
          <h3 className="text-4xl font-bold">{count.partners}+</h3>
          <p className="mt-2">Featured Partners</p>
        </div>

        <div className="p-8 rounded-2xl bg-yellow-100 shadow-md">
          <h3 className="text-4xl font-bold">{count.counseling}+</h3>
          <p className="mt-2">Career Counselling</p>
        </div>

        <div className="p-8 rounded-2xl bg-pink-100 shadow-md">
          <h3 className="text-4xl font-bold">{count.careers}+</h3>
          <p className="mt-2">Successful Careers</p>
        </div>

      </div>
    </section>
  );
}