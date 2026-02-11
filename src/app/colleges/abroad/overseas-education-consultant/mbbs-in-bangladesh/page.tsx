"use client";
import { useState } from "react";
import { useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase"; // make sure this path matches your project

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
function ConsultationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "consultation_requests"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
  type="text"
  name="firstName"
  placeholder="First Name"
  value={form.firstName}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-red-500 focus:border-green-500 outline-none transition"
/>

<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  value={form.lastName}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
/>

<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={form.phone}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={form.email}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
/>

<button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-green-600 to-green-500 
  text-white py-3 rounded-xl font-semibold 
  hover:scale-[1.02] hover:shadow-lg 
  transition duration-300 disabled:opacity-70"
>
  {loading ? "Submitting..." : "Submit Request"}
</button>

{success && (
  <p className="text-green-600 text-center font-medium">
    ✅ Request submitted successfully!
  </p>
)}
    </form>
  );
}

export default function MBBSBangladesh() {
  return (
    <main className="bg-white text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/images/bangladesh-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            MBBS in Bangladesh for Indian Students
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Your Complete Guide to Affordable, World-Class Medical Education in Bangladesh
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#006A4E] px-8 py-3 rounded-full font-semibold hover:bg-[#F42A41] transition">
              Get Free Consultation
            </button>
            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Explore Universities
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="bg-white shadow-md relative -mt-12 z-20">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {[
            { number: 25, suffix: "+", label: "MCI Approved Colleges" },
            { number: 30, prefix: "₹", suffix: "L", label: "Total Course Fees" },
            { number: 5.5, suffix: " Years", label: "Course Duration" },
            { number: 15000, suffix: "+", label: "Indian Students" },
            ].map((stat, index) => (
            <div key={index} className="group">
                <h3 className="text-3xl md:text-4xl font-bold text-[#006A4E] group-hover:text-[#F42A41] transition">
                {stat.prefix}
                {stat.number}
                {stat.suffix}
                </h3>
                <p className="text-slate-500 mt-2">{stat.label}</p>
            </div>
            ))}

        </div>
      </section>


      {/* ================= WHY CHOOSE BANGLADESH ================= */}
      <section className="container-custom">

        <h2 className="text-4xl font-bold text-[#006A4E] mb-12 text-center">
          Why Choose Bangladesh for MBBS?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#F42A41]">
              Key Benefits for Indian Students
            </h3>

            <ul className="space-y-4 text-lg">
              <li>✔ Same Curriculum as India – Follows NMC syllabus</li>
              <li>✔ No Donation/Capitation – Transparent fee structure</li>
              <li>✔ Indian Food Available – Most colleges have Indian mess</li>
              <li>✔ Cultural Similarity – Similar culture & lifestyle</li>
              <li>✔ Proximity to India – Just 1-2 hour flight</li>
            </ul>
          </div>

          <img
            src="/images/bangladesh-city.jpg"
            className="rounded-2xl shadow-lg"
          />

        </div>
      </section>


      {/* ================= MBBS IN BANGLADESH CONTENT ================= */}
      <section className="py-20 bg-slate-50">

        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#006A4E] mb-6">
              MBBS in Bangladesh
            </h2>

            <p className="mb-6">
              MBBS in Bangladesh is an excellent choice for those who want to pursue a career in medicine. 
              Its provides a great opportunity for students to receive quality education at an affordable cost. 
              MBBS in Bangladesh is a five-year undergraduate medical program. 
              Bangladesh is known for its quality education and has become a popular destination for international students seeking a degree in medicine. 
              The medical colleges of Bangladesh are recognized by the Medical Council of India (MCI), 
              World Health Organization (WHO), and other international medical bodies. LookStudent helps you with all the information 
              you need to know about getting an MBBS admission in Bangladesh. We'll cover everything from the process 
              of selecting a medical colleges of Bangladesh to the application process and fees associated with the MBBS degree. 
              You will be well-equipped with the necessary information to make an informed decision about pursuing your MBBS degree 
              in Bangladesh.
            </p>

            <h3 className="text-2xl font-semibold text-[#F42A41] mb-4">
              Student Life in Bangladesh
            </h3>

            <p>
              Pursuing an MBBS in Bangladesh offers a balanced mix of academic rigor and cultural familiarity, 
              especially for international students from neighboring countries. The medical curriculum is modeled closely 
              on the Indian system, which makes it easier for many students to adapt. Classes are typically structured with 
              a strong focus on theoretical foundations in the early years, followed by intensive clinical exposure in later 
              stages.
            </p>
          </div>

          <img
            src="/images/bangladesh-students.jpg"
            className="rounded-2xl shadow-xl"
          />

        </div>
      </section>

      {/* ================= FEATURED MEDICAL COLLEGES ================= */}
      <section className="py-24 bg-white overflow-hidden relative">

        <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#006A4E]">
            Featured Medical Colleges
            </h2>
            <p className="text-slate-500">
            Globally Recognized & NMC Approved
            </p>
        </div>

        <div className="relative overflow-hidden">

            <div className="flex gap-8 animate-scroll w-max">

            {[
                {
                name: "Diabetic Association Medical College",
                image: "/images/diabetic.jpg",
                },
                {
                name: "Parkview Medical College",
                image: "/images/parkview.jpg",
                },
                {
                name: "Southern Medical College & Hospital",
                image: "/images/southern.jpg",
                },
                {
                name: "North Bengal Medical College, Bangladesh",
                image: "/images/northbengal.jpg",
                },
                {
                name: "Dhaka Medical College",
                image: "/images/dhakas.jpg",
                },
            ]
                .concat([
                {
                    name: "Diabetic Association Medical College",
                    image: "/images/diabetic.jpg",
                },
                {
                    name: "Parkview Medical College",
                    image: "/images/parkview.jpg",
                },
                {
                    name: "Southern Medical College & Hospital",
                    image: "/images/southern.jpg",
                },
                {
                    name: "North Bengal Medical College, Bangladesh",
                    image: "/images/northbengal.jpg",
                },
                {
                    name: "Dhaka Medical College",
                    image: "/images/dhakas.jpg",
                },
                ])
                .map((college, index) => (
                <div
                    key={index}
                    className="relative w-[350px] h-[240px] rounded-2xl overflow-hidden shadow-xl group"
                >
                    <img
                    src={college.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">
                        {college.name}
                    </h3>
                    </div>
                </div>
                ))}

            </div>

        </div>
      </section>

      {/* ================= ADMISSION PROCESS ================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">

            <div className="bg-white rounded-xl shadow-md p-8">

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#006A4E] mb-10">
                Admission Process
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-800">
                    Eligibility Criteria
                </h3>

                <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    Minimum 60% in PCB for General Category (50% for SC/ST/OBC)
                    </li>
                    <li className="flex gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    NEET qualification is mandatory (minimum 50th percentile)
                    </li>
                    <li className="flex gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    Minimum age 17 years as on 31st December of admission year
                    </li>
                </ul>
                </div>

                {/* RIGHT SIDE */}
                <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-800">
                    Application Steps
                </h3>

                <div className="space-y-4 text-sm text-slate-600">

                    <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold">
                        1
                    </div>
                    <p><span className="font-medium">March–May:</span> Submit application with mark sheets and NEET scorecard</p>
                    </div>

                    <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold">
                        2
                    </div>
                    <p><span className="font-medium">June–July:</span> Receive admission offer from college</p>
                    </div>

                    <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold">
                        3
                    </div>
                    <p><span className="font-medium">July–August:</span> Pay first year fees & process visa</p>
                    </div>

                    <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold">
                        4
                    </div>
                    <p><span className="font-medium">September:</span> Join college and begin classes</p>
                    </div>

                </div>
                </div>
            </div>

            {/* DOCUMENTS */}
            <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4 text-slate-800">
                Required Documents
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">

                {[
                    "10th Marksheet",
                    "12th Marksheet",
                    "NEET Scorecard",
                    "Passport",
                    "Birth Certificate",
                    "Passport Photos",
                    "Medical Certificate",
                    "Police Clearance",
                ].map((doc, index) => (
                    <div
                    key={index}
                    className="bg-red-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
                    >
                    {doc}
                    </div>
                ))}

                </div>
            </div>

            </div>
        </div>
      </section>

      {/* ================= FEE STRUCTURE ================= */}
      <section className="py-20 bg-white">
        <div className="container-custom">

            {/* Heading */}
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A4E] tracking-tight">
                MBBS in Bangladesh Fee Structure
            </h2>
            <p className="text-slate-500 mt-3 text-sm md:text-base">
                Tuition & Living Cost Overview (5-Year Program)
            </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl shadow-md border border-slate-200">

            <table className="min-w-full text-sm text-left">

                {/* Table Head */}
                <thead className="bg-[#006A4E] text-white">
                <tr>
                    <th className="px-6 py-4 font-semibold">University / College</th>
                    <th className="px-6 py-4 font-semibold text-center">Total Tuition Fee (5 Years)</th>
                    <th className="px-6 py-4 font-semibold text-center">First Year Fee</th>
                    <th className="px-6 py-4 font-semibold text-center">2nd–5th Year Fee</th>
                    <th className="px-6 py-4 font-semibold text-center">Hostel / Month</th>
                    <th className="px-6 py-4 font-semibold text-center">Mess / Month</th>
                </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-200">

                {[
                    ["Khulna City Medical College", "$40,000", "$12,000", "$28,000", "$75", "$75"],
                    ["Rangpur Community Medical College", "$43,950", "$19,950", "$24,000", "Included", "$50"],
                    ["Shahabuddin Medical College", "$47,000", "$27,000", "$20,000", "-", "-"],
                    ["Marks Medical College", "$38,000", "$15,000", "$23,000", "Included", "$50"],
                    ["Parkview Medical College", "$35,000", "$10,000", "$25,000", "$100", "$50"],
                    ["Barind Medical College", "$38,000", "$11,000", "$27,000", "Included", "$60"],
                    ["City Medical College", "$39,000", "$17,000", "$22,000", "Included", "$50"],
                    ["Faridpur Diabetic Medical College", "$42,000", "$31,000", "$11,000", "Included", "$50"],
                    ["Universal Medical College", "$42,000", "$20,000", "$22,000", "Included", "$50"],
                    ["Bikrampur Bhuiyan Medical College", "$32,000", "$12,000", "$20,000", "$50", "$50"],
                    ["International Medical College", "$44,000", "$18,000", "$26,000", "Included", "$60"],
                    ["Uttara Women's Medical College", "$46,000", "$16,000", "$30,000", "$130", "$50"],
                    ["Dhaka National Medical College", "$53,000", "$35,000", "$18,000", "$50", "$50"],
                    ["Popular Medical College", "$45,000", "$20,000", "$25,000", "Included", "$50"],
                    ["Tairunnessa Medical College", "$43,000", "$15,000", "$28,000", "Included", "$60"],
                    ["IBN Sina Medical College", "$40,000", "$21,000", "$19,000", "$100", "$50"],
                    ["Delta Medical College", "$44,200", "$15,200", "$29,000", "Included", "$60"],
                    ["TMSS Medical College", "$44,000", "$18,000", "$26,000", "Included", "Included"],
                ].map((row, index) => (
                    <tr
                    key={index}
                    className="hover:bg-slate-50 transition"
                    >
                    <td className="px-6 py-4 font-medium text-slate-700">
                        {row[0]}
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[1]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[2]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[3]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[4]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[5]}</td>
                    </tr>
                ))}

                </tbody>
            </table>

            </div>

            {/* Note */}
            <div className="mt-8 text-center text-sm text-slate-500">
            <p>
                <span className="font-medium text-slate-700">Note:</span> Fees are subject to change. 
                Please verify with the respective colleges for the most updated information.
            </p>
            </div>

        </div>
      </section>


      {/* MBBS Course Structure */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14">

            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                MBBS Course Structure in Bangladesh
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-8">
                    Phase-wise Curriculum
                </h3>

                <div className="space-y-6">

                    <div className="bg-green-50 hover:bg-green-100 transition rounded-xl p-5 border border-green-100 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">
                        Phase I (1.5 Years)
                    </h4>
                    <p className="text-sm text-gray-600">
                        Anatomy, Physiology, Biochemistry, Community Medicine
                    </p>
                    </div>

                    <div className="bg-green-50 hover:bg-green-100 transition rounded-xl p-5 border border-green-100 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">
                        Phase II (2 Years)
                    </h4>
                    <p className="text-sm text-gray-600">
                        Pathology, Pharmacology, Microbiology, Forensic Medicine
                    </p>
                    </div>

                    <div className="bg-green-50 hover:bg-green-100 transition rounded-xl p-5 border border-green-100 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">
                        Phase III (2 Years)
                    </h4>
                    <p className="text-sm text-gray-600">
                        Medicine, Surgery, OB/GYN, Pediatrics & Specialties
                    </p>
                    </div>

                </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-8">
                    Examination Pattern
                </h3>

                <div className="space-y-6">

                    {[
                    {
                        title: "Professional Exams",
                        desc: "Held after completion of each phase (3 total)"
                    },
                    {
                        title: "Continuous Assessment",
                        desc: "Regular tests, viva voce & practical exams"
                    },
                    {
                        title: "Internship",
                        desc: "1-year compulsory rotating internship"
                    },
                    {
                        title: "FMGE Preparation",
                        desc: "Special coaching support for Indian students"
                    }
                    ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full text-sm font-semibold">
                        ✓
                        </div>
                        <div>
                        <h4 className="font-semibold text-gray-900">
                            {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                            {item.desc}
                        </p>
                        </div>
                    </div>
                    ))}

                </div>
                </div>

            </div>

            </div>
        </div>
      </section>

      {/* ================= CAREER SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                Career After MBBS from Bangladesh
            </h2>
            <p className="text-gray-500 mt-3 text-sm md:text-base">
                Explore career opportunities after completing your MBBS degree
            </p>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

            {/* Practice in India */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-green-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition">
                🏥
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Practice in India
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                Clear FMGE/NExT exam, complete 1-year internship in India,
                and register with the State Medical Council to practice.
                </p>
            </div>

            {/* International Practice */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-green-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition">
                🌍
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                International Practice
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                Eligible for PLAB (UK), USMLE (USA), AMC (Australia)
                after clearing respective licensing exams.
                </p>
            </div>

            {/* Post Graduation */}
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-green-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition">
                🎓
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Post Graduation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                Pursue MD/MS in India via NEET-PG or continue PG
                in Bangladesh or other countries.
                </p>
            </div>

            </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}

      <section className="py-24 bg-gradient-to-b from-white via-green-100 to-white">
        <div className="max-w-4xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600">
                Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* FAQ Items */}
            <FAQItem 
            question="Is MBBS from Bangladesh valid in India?"
            answer="Yes, MBBS degrees from MCI-approved Bangladeshi medical colleges are valid in India. After completion, students need to clear the FMGE (Foreign Medical Graduates Examination) conducted by NMC to practice in India."
            />

            <FAQItem 
            question="What is the duration of MBBS in Bangladesh?"
            answer="The MBBS program in Bangladesh is 5.5 years duration, which includes 4.5 years of academic study and 1 year of compulsory internship. The curriculum is similar to Indian medical colleges."
            />

            <FAQItem 
            question="How is the FMGE passing rate for Bangladeshi graduates?"
            answer="The FMGE passing rate for Bangladeshi medical graduates is around 30-35%, which is higher than many other countries. The similar curriculum to India and English medium instruction contribute to better preparation."
            />

            <FAQItem 
            question="Is Indian food available in Bangladesh?"
            answer="Yes, Bangladeshi cuisine is very similar to Indian food, especially Bengali cuisine. Most medical colleges have Indian mess facilities or nearby Indian restaurants. Common Indian groceries are easily available."
            />

            <FAQItem 
            question="How is the climate in Bangladesh?"
            answer="Bangladesh has a tropical monsoon climate with six seasons. The weather is generally warm and humid, similar to eastern India. Winter (Dec-Feb) is mild with temperatures around 10-20°C, while summer (Mar-Jun) can be hot (25-35°C) with high humidity."
            />

        </div>
      </section>

      {/* ================== CONSULTATION SECTION ================== */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 text-center">

            {/* Animated Gradient Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white-300 via-white to-white-300 bg-clip-text text-transparent animate-pulse">
            Need Help With Admissions?
            </h2>

            <p className="text-lg text-green-100 mb-12">
            Our expert consultants have helped 500+ students secure admissions.
            </p>

            {/* COUNTERS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={100} suffix="%" />
                </h3>
                <p className="mt-2 text-green-100">Visa Success Rate</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={500} suffix="+" />
                </h3>
                <p className="mt-2 text-green-100">Students Placed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={50} suffix="+" />
                </h3>
                <p className="mt-2 text-green-100">Partner Institutions</p>
            </div>

            </div>

            {/* FORM CARD */}
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-gray-800">

            <h3 className="text-2xl font-bold mb-6 text-center">
                Get Free Consultation
            </h3>

            <ConsultationForm />

            </div>

        </div>
      </section>

    </main>
  );
}
{/* FAQ Component */}
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6 border border-green-100 rounded-2xl bg-white/80 backdrop-blur-lg shadow-md transition duration-300 hover:shadow-lg">
      
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="font-semibold text-lg">
          {question}
        </span>

        <span className={'text-green-600 text-2xl transition-transform duration-300 ${open ? "rotate-180" : ""}'}>
          ⌄
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-40 px-6 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}