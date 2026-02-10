"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function OverseasEducationConsultant() {
  const sliderRef = useRef<HTMLDivElement>(null);
    
    const [percentage, setPercentage] = useState("");
const [neet, setNeet] = useState("");
const [country, setCountry] = useState("");
const [result, setResult] = useState("");

const calculateChance = () => {
  const pcb = parseFloat(percentage);
  const neetScore = parseFloat(neet || "0");

  if (!pcb || pcb < 34 || pcb > 100) {
    setResult("Invalid");
    return;
  }

  if (neetScore < 0 || neetScore > 720) {
    setResult("Invalid");
    return;
  }

  if (!country) {
    setResult("Invalid");
    return;
  }

  const pcbWeight = ((pcb - 34) / (100 - 34)) * 50;
  const neetWeight = (neetScore / 720) * 30;

  const countryWeights: any = {
    India: 10,
    Russia: 18,
    Bangladesh: 16,
    Nepal: 14,
    Georgia: 19,
  };

  const total = Math.min(
    Math.round(pcbWeight + neetWeight + countryWeights[country]),
    100
  );

  setResult(`${total}%`);
};

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let speed = 0.5;
    let animationFrame: number;
    let position = 0;

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= slider.scrollWidth / 2) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    slider.addEventListener("mouseenter", () => (speed = 0.15));
    slider.addEventListener("mouseleave", () => (speed = 0.5));

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const colleges = [
    {
      name: "Kazan Federal University",
      country: "Russia",
      fee: "$4,500/year",
      image: "/images/kazan.jpg",
    },
    {
      name: "Lomonosov Moscow State University",
      country: "Russia",
      fee: "$6,500/year",
      image: "/images/lomonosov.jpg",
    },
    {
      name: "Tbilisi State Medical University",
      country: "Georgia",
      fee: "$5,000/year",
      image: "/images/tbilisi.jpg",
    },
    {
      name: "Dhaka Medical College",
      country: "Bangladesh",
      fee: "$3,800/year",
      image: "/images/dhaka.jpg",
    },
    {
      name: "Moscow State Medical University",
      country: "Russia",
      fee: "$6,000/year",
      image: "/images/moscow.jpg",
    },
  ];

  return (
    <main className="bg-white text-slate-900">

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-screen h-screen overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] text-white">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/mbbs-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Dreaming of MBBS in India or Abroad?
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
            We turn aspirations into achievements by helping students secure
            admission in top medical universities worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
              Free Consultation
            </button>

            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              View MBBS Opportunities
            </button>

          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-sm opacity-80">Students Placed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-sm opacity-80">Partner Colleges</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-sm opacity-80">Countries</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-sm opacity-80">Visa Success</p>
          </div>
        </div>
      </section>

      {/* ===== MBBS DESTINATIONS ===== */}
      <section className="py-24 bg-white">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            MBBS Destinations
          </h2>
          <p className="text-slate-500 text-lg">
            Choose Your Preferred Country
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <Link href="/colleges">
            <div className="group relative h-[260px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <img src="/images/india.jpg"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">MBBS in India</h3>
                <p className="text-sm opacity-80">NEET Required • 500+ Colleges</p>
              </div>
            </div>
          </Link>

          <Link href="/colleges/abroad/overseas-education-consultant/mbbs-in-bangladesh">
            <div className="group relative h-[260px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <img src="/images/bangladesh.jpg"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">MBBS in Bangladesh</h3>
                <p className="text-sm opacity-80">No Donation • English Medium</p>
              </div>
            </div>
          </Link>

          <Link href="/colleges/abroad/overseas-education-consultant/mbbs-in-russia">
            <div className="group relative h-[260px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <img src="/images/russia.jpg"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">MBBS in Russia</h3>
                <p className="text-sm opacity-80">Low Fees • MCI Approved</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 mt-12">

          <Link href="/colleges/abroad/overseas-education-consultant/mbbs-in-nepal">
            <div className="group relative h-[260px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <img src="/images/nepal.jpg"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">MBBS in Nepal</h3>
                <p className="text-sm opacity-80">Low Fees • English Medium</p>
              </div>
            </div>
          </Link>

          <Link href="/colleges/abroad/overseas-education-consultant/mbbs-in-georgia">
            <div className="group relative h-[260px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              <img src="/images/georgia.jpg"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">MBBS in Georgia</h3>
                <p className="text-sm opacity-80">Best Destination • MCI Approved</p>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ===== FEATURED COLLEGES SLIDER ===== */}
      <section className="py-24 relative overflow-hidden">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-2">
            Featured International Medical Colleges
          </h2>
          <p className="text-slate-500">
            Globally Recognized & NMC Approved
          </p>
        </div>

        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="overflow-hidden">
          <div ref={sliderRef} className="flex gap-8 w-max">
            {[...colleges, ...colleges].map((college, index) => (
              <div key={index} className="relative w-[350px] h-[230px] rounded-2xl overflow-hidden shadow-xl group">
                <img src={college.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{college.name}</h3>
                  <p className="text-sm opacity-80">
                    {college.country} • {college.fee}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    {/* ===== ADMISSION PROCESS SECTION ===== */}
    <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            

            {/* Eligibility */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-4">Eligibility Check</h3>
            <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Minimum 50% in PCB</li>
                <li>• NEET qualification</li>
                <li>• Age criteria verification</li>
            </ul>
            </div>

            {/* University Selection */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏫</div>
            <h3 className="text-xl font-semibold mb-4">University Selection</h3>
            <ul className="text-slate-600 space-y-2 text-sm">
                <li>• 200+ MCI approved universities</li>
                <li>• Scholarship guidance</li>
                <li>• Hostel & food arrangements</li>
            </ul>
            </div>

            {/* Admission Process */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
            <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Documentation support</li>
                <li>• Visa processing</li>
                <li>• Travel arrangements</li>
            </ul>
            </div>

        </div>

      </section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Student Success Stories</h2>
            <p className="text-slate-500 mt-2">
            From Our 1200+ Successful Applicants
            </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
                <img src="/images/student1.jpg" className="w-14 h-14 rounded-full object-cover" />
                <div>
                <h4 className="font-semibold">Priya Patel</h4>
                <p className="text-sm text-blue-600">MBBS in Bangladesh (2021)</p>
                </div>
            </div>
            <p className="text-slate-600 text-sm">
                "I got 50% scholarship in Dhaka Medical College. Their team handled
                everything from NEET counseling to hostel arrangements."
            </p>
            <div className="mt-4 text-yellow-500">★★★★★ 4.5/5</div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
                <img src="/images/student2.jpg" className="w-14 h-14 rounded-full object-cover" />
                <div>
                <h4 className="font-semibold">Rahul Sharma</h4>
                <p className="text-sm text-blue-600">MBBS in Russia (2022)</p>
                </div>
            </div>
            <p className="text-slate-600 text-sm">
                "LookStudents helped me secure admission in Kazan Federal University
                with complete visa guidance."
            </p>
            <div className="mt-4 text-yellow-500">★★★★★ 5/5</div>
            </div>

        </div>

      </section>

      {/* ================= ADMISSION CHANCE CALCULATOR ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">

            <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3">
                Admission Chance Calculator
            </h2>
            <p className="text-slate-500 text-lg">
                Estimate your probability of getting admission
            </p>
            </div>

            <div className="bg-white border rounded-2xl shadow-md p-8">

            {/* PCB */}
            <div className="mb-6">
                <label className="block font-medium mb-2">
                12th Percentage (PCB)
                </label>
                <input
                type="number"
                min={34}
                max={100}
                placeholder="Enter your 12th percentage"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>

            {/* NEET */}
            <div className="mb-6">
                <label className="block font-medium mb-2">
                NEET Score (if applicable)
                </label>
                <input
                type="number"
                min={0}
                max={720}
                placeholder="Enter NEET score (optional)"
                value={neet}
                onChange={(e) => setNeet(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>

            {/* COUNTRY */}
            <div className="mb-6">
                <label className="block font-medium mb-2">
                Preferred Country
                </label>
                <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Russia">Russia</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Nepal">Nepal</option>
                <option value="Georgia">Georgia</option>
                </select>
            </div>

            {/* BUTTON */}
            <button
                onClick={calculateChance}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
                Calculate My Chance
            </button>

            {/* RESULT BOX */}
            {result && (
                <div className="mt-8 border rounded-xl p-6 bg-slate-50 text-center">

                <p className="text-lg font-medium text-slate-700">
                    Your estimated admission chance:
                </p>

                <p
                    className={`text-5xl font-bold mt-3 ${
                    parseInt(result) >= 70
                        ? "text-green-600"
                        : parseInt(result) >= 40
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                >
                    {result}
                </p>

                <p className="text-sm text-slate-500 mt-3">
                    Based on your 12th percentage and NEET score for {country}
                </p>

                </div>
            )}

            </div>
        </div>
      </section>

    </main>
  );
}