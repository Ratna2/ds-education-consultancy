"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Partners() {
  const router = useRouter();

  const partners = [
    { name: "AMITY", logo: "/partners/amity.png" },
    { name: "CT University", logo: "/partners/ct.png" },
    { name: "PARUL University", logo: "/partners/parul.png" },
    { name: "BRAINWARE", logo: "/partners/brainware.png" },
    { name: "AMBUJA BT", logo: "/partners/ambuja.png" },
    { name: "ALLIANCE University", logo: "/partners/alliance.png" },
    { name: "GNI HYD", logo: "/partners/gni.png" },
    { name: "TECHNO India", logo: "/partners/techno.png" },
    { name: "PTLR", logo: "/partners/ptlr.png" },
    { name: "SAGE University", logo: "/partners/sage.png" },
    { name: "GRAPHIC ERA", logo: "/partners/graphicera.png" },
    { name: "ADAMAS University", logo: "/partners/adamas.png" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Partnered Institutions
        </h2>

        <p className="text-slate-600 mb-10 text-lg">
          We collaborate with top-tier colleges to provide the best educational opportunities.
        </p>

        <div className="w-24 h-1 bg-blue-600 mx-auto mb-16 rounded-full" />

        {/* MARQUEE CONTAINER */}
        <div className="relative overflow-hidden w-full">

          <div className="marquee flex">

            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[220px] h-[120px] 
                flex items-center justify-center mx-6 
                bg-white rounded-xl shadow-md"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}

          </div>

        </div>

        <div className="mt-16">
          <button
            onClick={() => router.push("/contact")}
            className="bg-blue-600 text-white px-10 py-3 rounded-xl
            hover:bg-blue-700 transition text-lg shadow-md"
          >
            Partner with us →
          </button>
        </div>

      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}