"use client";

import { useRouter } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function TopColleges() {
  const router = useRouter();

  const colleges = [
    "IEM Kolkata",
    "KIIT University",
    "Sikkim Manipal University",
    "Brainware University",
    "SRM University",
    "Lovely Professional University",
  ];

  return (
    <section id="colleges" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <ScrollReveal direction="up">
          <h2 className="text-4xl font-bold mb-4">
            Top Colleges We Work With
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <p className="text-slate-400 mb-12">
            Trusted partnerships with reputed institutions across India.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {colleges.map((college, i) => (
            <ScrollReveal key={i} delay={i * 120} direction="up">

              <div
                onClick={() => router.push("/colleges")}
                className="cursor-pointer p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-600/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-semibold text-lg">
                  {college}
                </h3>
              </div>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}