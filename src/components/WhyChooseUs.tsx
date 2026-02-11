"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, BadgeCheck, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true); // 🔥 default true to avoid blank mobile
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 } // 🔥 lower threshold for mobile
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div
        ref={ref}
        className={`container-custom transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >

        {/* ================= ORIGINAL PART ================= */}

        <div className="text-center mb-12 md:mb-16">
          <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            Why Students
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold mt-6 text-slate-900">
            Trust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              DS Education
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mb-20 md:mb-32">
          {[
            {
              title: "Graduation Degree",
              desc: "Explore vibrant paths to your academic achievements.",
              icon: <GraduationCap size={28} />,
            },
            {
              title: "Government Recognized",
              desc: "Trusted partnerships with officially recognized institutions.",
              icon: <BadgeCheck size={28} />,
            },
            {
              title: "Placement Opportunities",
              desc: "Discover exciting career prospects through our strong network.",
              icon: <Briefcase size={28} />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 md:p-10 text-white shadow-xl 
              bg-gradient-to-br from-blue-600 to-indigo-700 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center 
              bg-white/20 backdrop-blur-md rounded-full mb-6 md:mb-8">
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= SECTION 1 ================= */}

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">

          <div
            className={`transition-all duration-700 ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
            }`}
          >
            <img
              src="/welcome.jpg"
              alt="Campus"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Welcome to <span className="text-blue-600">LookStudents</span>
            </h2>

            <p className="text-slate-600 mb-8 text-sm md:text-base leading-relaxed">
              Welcome to Look DS Education Consultancy! We understand that choosing the right educational institution for your
              child is a crucial decision. That's why we're here to help. 
              Our online admission portal provides a platform for students to explore and secure admissions in top 
              private schools, colleges, and universities in India and Abroad. We provide professional career counseling and 
              advice to help students decide which academic path they should pursue after graduation. 
              LookStudents also provide expert guidance on professional courses after graduation and list 
              of professional courses to choose from..
            </p>

            <button
              onClick={() => router.push("/about")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-8 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          <div
            className={`transition-all duration-700 ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Are You Looking For An{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Education Consultant?
              </span>
            </h2>

            <p className="text-slate-600 mb-8 text-sm md:text-base leading-relaxed">
              DS Education Consultancy is the best Education consultants in Agartala, Tripura. We are highly skilled professionals 
              who have the expertise to guide students to make the right educational and career decisions. 
              We provide professional career counseling and advice to help students decide which academic path they should 
              pursue after graduation. LookStudents also provide expert guidance on professional courses after 
              graduation and list of professional courses to choose from.
            </p>

            <button
              onClick={() => router.push("/about")}
              className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
            >
              Explore More
            </button>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
            }`}
          >
            <img
              src="/girl.png"
              alt="Consultant"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}