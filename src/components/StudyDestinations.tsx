"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function StudyDestinations() {
  const destinations = [
    {
      country: "United States",
      flag: "/flags/us.png",
      gradient: "from-blue-600 to-indigo-700",
      details: [
        "SAT / ACT Required",
        "Cost: $20K – $70K per year",
        "STEM fields highly popular",
      ],
    },
    {
      country: "United Kingdom",
      flag: "/flags/uk.png",
      gradient: "from-red-600 to-pink-600",
      details: [
        "IELTS 6.5+ Required",
        "Cost: £10K – £38K per year",
        "1-Year Master's Programs",
      ],
    },
    {
      country: "Canada",
      flag: "/flags/canada.png",
      gradient: "from-red-500 to-orange-500",
      details: [
        "Post-Study Work Options",
        "Cost: CAD $15K – $35K per year",
        "PR Pathways Available",
      ],
    },
    {
      country: "India",
      flag: "/flags/india.png",
      gradient: "from-green-500 to-emerald-600",
      details: [
        "JEE / NEET / CAT etc.",
        "Cost: ₹10K – ₹10L per year",
        "Growing Research Opportunities",
      ],
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <ScrollReveal>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
            Popular Study Destinations
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-20">
            Compare countries based on entrance exams, tuition cost
            and future career opportunities.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {destinations.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>

              <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">

                {/* Gradient Top Bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${item.gradient}`} />

                <div className="p-8 text-left">

                  {/* Flag + Country */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-8">
                      <Image
                        src={item.flag}
                        alt={item.country}
                        fill
                        className="object-cover rounded-sm"
                      />
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-800 group-hover:text-blue-600 transition">
                      {item.country}
                    </h3>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    {item.details.map((detail, index) => (
                      <p
                        key={index}
                        className="text-base font-medium text-slate-600 leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>

                </div>
              </div>

            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}