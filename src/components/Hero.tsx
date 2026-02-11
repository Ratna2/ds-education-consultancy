"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-28">

      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 -right-32 w-[520px] h-[520px] bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Study in <br />
            Top Private{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              College / University
            </span>
            <br />
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500">
              India + Abroad
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Whichever suits your child — we guide you with expert counselling
            and complete admission support from start to finish.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button
              onClick={() => router.push("/about")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-xl transition hover:scale-105"
            >
              Explore More
            </button>

            <button
              onClick={() => router.push("/about")}
              className="bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold shadow-xl hover:bg-slate-200 transition hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-3xl"></div>

            <img
              src="/students.png"
              alt="Graduated Students"
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl floating-image"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-image {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15pxi); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  );
}