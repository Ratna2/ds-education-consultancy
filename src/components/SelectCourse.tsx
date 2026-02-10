"use client";

import { useRouter } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function SelectCourse() {
  const router = useRouter();

  const courses = [
    { name: "Engineering", icon: "⚙️", category: "Engineering" },
    { name: "Medical", icon: "🩺", category: "Medical" },
    { name: "Law", icon: "⚖️", category: "Law" },
    { name: "B.Ed / D.El.Ed", icon: "📘", category: "All" },
    { name: "Nursing", icon: "👩‍⚕️", category: "Medical" },
    { name: "Management", icon: "📊", category: "Management" },
    { name: "Commerce & Banking", icon: "💰", category: "Management" },
    { name: "Paramedical", icon: "🏥", category: "Medical" },
  ];

  const handleClick = (category: string) => {
    router.push(`/colleges?category=${category}`);
  };

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12">
            Select Your Course
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-10">

          {courses.map((course, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                onClick={() => handleClick(course.category)}
                className="cursor-pointer group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500 hover:bg-indigo-600/10 transition-all duration-300"
              >
                <div className="text-5xl mb-4 animate-bounce-slow group-hover:scale-110 transition">
                  {course.icon}
                </div>

                <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition">
                  {course.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

    </section>
  );
}