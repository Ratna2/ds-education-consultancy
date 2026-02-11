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
  focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
/>

<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  value={form.lastName}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
/>

<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={form.phone}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={form.email}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
/>

<button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-red-600 to-red-500 
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

export default function MBBSRussia() {
  return (
    <main className="bg-white text-slate-900">

      {/* ============================ HERO SECTION ============================ */}

      <section className="relative w-screen h-[90vh] overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] text-white">

        {/* Background Image */}
        <img
          src="/images/georgia-hero.jpg"
          alt="MBBS in Georgia"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            MBBS in Georgia for Indian Students
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
            World-class medical education at affordable costs with globally
            recognized universities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-full bg-red-500 hover:bg-white-100 transition duration-300 font-semibold shadow-lg">
              Get Free Consultation
            </button>

            <button className="px-8 py-3 rounded-full border border-yellow hover:bg-white hover:text-black transition duration-300 font-semibold">
              Explore Universities
            </button>
          </div>
        </div>
      </section>


      {/* ============================ STATS STRIP ============================ */}

      <section className="bg-red-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-10">

          <div>
            <h3 className="text-3xl font-bold text-red-600">5+</h3>
            <p className="mt-2 text-sm text-slate-600">
              NMC Approved Universities
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-red-600">₹15–25L</h3>
            <p className="mt-2 text-sm text-slate-600">
              Total Course Fees
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-red-600">100%</h3>
            <p className="mt-2 text-sm text-slate-600">
              English Medium
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-red-600">5,000+</h3>
            <p className="mt-2 text-sm text-slate-600">
              Indian Students
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE RUSSIA SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                Why Choose Georgia for MBBS?
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left Side - Advantages */}
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Advantages of Studying MBBS in Georgia
                </h3>

                <ul className="space-y-5 text-slate-600 text-[15px] leading-relaxed">

                <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>
                    <strong>Globally Recognized Degrees:</strong> Medical degrees from Georgian universities are recognized by WHO, NMC (formerly MCI), 
                    and other international medical councils.
                    </span>
                </li>

                <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>
                    <strong>Affordable Fees:</strong> Cost of MBBS in Georgia is much lower compared to private 
                    medical colleges in India.
                    </span>
                </li>

                <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>
                    <strong>No Donation/Capitation:</strong>  Admission is based on 12th standard marks (PCB), 
                    no NEET qualification required (but needed for practice in India).
                    </span>
                </li>

                <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>
                    <strong>English Medium:</strong> All medical courses are taught in English.
                    </span>
                </li>

                <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>
                    <strong>Advanced Infrastructure:</strong> High-quality education with modern infrastructure
                     and experienced faculty.
                    </span>
                </li>

                </ul>
            </div>

            {/* Right Side - Life Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-red-100 hover:shadow-xl transition duration-300">

                <img
                src="/images/georgia-life.jpg"
                alt="Life in Georgia"
                className="w-full h-64 object-cover"
                />

                <div className="p-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Life in Georgia
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Georgia offers a safe environment with moderate climate, rich culture, and welcoming people. 
                    Indian food is easily available and the cost of living is affordable.
                </p>
                </div>

            </div>

            </div>
        </div>
      </section>

      {/* ================= TOP NMC UNIVERSITIES SECTION ================= */}

      <section className="py-20 bg-white overflow-hidden">
        <div className="container-custom">

            {/* Heading */}
            <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                Top NMC Approved Universities
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
               These Georgian medical universities are recognized by National Medical Commission (India) and World Health Organization
            </p>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Slider Wrapper */}
            <div className="relative overflow-hidden">

            {/* Fade Effect Left */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>

            {/* Fade Effect Right */}
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Infinite Track */}
            <div className="flex gap-8 animate-scroll w-max">

                {/* CARD 1 */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/kazan.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Kazan Federal University
                </h3>
                </div>

                {/* CARD 2 */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/lomonosov.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Lomonosov Moscow State University
                </h3>
                </div>

                {/* CARD 3 */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/pirogov.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Pirogov Russian National Research Medical University
                </h3>
                </div>

                {/* CARD 4 */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/moscow.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Moscow State Medical University
                </h3>
                </div>

                {/* CARD 5 */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/crimea.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Crimea Federal University
                </h3>
                </div>

                {/* DUPLICATE CARDS FOR INFINITE LOOP */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/kazan.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Kazan Federal University
                </h3>
                </div>

                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/lomonosov.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Lomonosov Moscow State University
                </h3>
                </div>

            </div>
            </div>
        </div>

        {/* Animation Style */}
        <style jsx>{`
            .animate-scroll {
            animation: scroll 30s linear infinite;
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

      {/* ================= ADMISSION PROCESS SECTION ================= */}

      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                Admission Process
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Main Box */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12 border border-red-100">

            {/* ================= ELIGIBILITY ================= */}
            <div className="bg-red-50 rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-red-600 mb-6">
                Eligibility Criteria
                </h3>

                <ul className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    Minimum 50% marks in PCB (40% for SC/ST/OBC)
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    NEET qualification is mandatory for Indian students
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    Minimum age 17 years as on 31st December of admission year
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    Valid passport
                </li>
                </ul>
            </div>


            {/* ================= APPLICATION TIMELINE ================= */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-red-100">
                <h3 className="text-2xl font-semibold text-red-600 mb-8">
                Application Timeline
                </h3>

                <div className="space-y-6">

                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold shadow-md">
                    1
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">March – June:</span> Application submission with required documents
                    </p>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold shadow-md">
                    2
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">July – August:</span> Receive admission letter and invitation letter
                    </p>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold shadow-md">
                    3
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">August – September:</span> Visa processing and fee payment
                    </p>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-red-600 text-white rounded-full text-sm font-bold shadow-md">
                    4
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">September – October:</span> Travel to Georgia and start your MBBS journey!
                    </p>
                </div>

                </div>
            </div>

            </div>
        </div>
      </section>

      {/* ================= MBBS RUSSIA FEE STRUCTURE ================= */}

      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
          <div className="max-w-6xl mx-auto px-6">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 
            bg-gradient-to-r from-red-700 via-red-500 to-red-700 
            bg-clip-text text-transparent">
              Fee Structure & Accomodation cost
              </h2>
            
            <div className="grid md:grid-cols-2 gap-10">

              {/* ================= LEFT SIDE - FEES TABLE ================= */}
              <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-8">

                <h3 className="text-2xl font-semibold mb-6 text-red-700">
                  Tuition Fees (Approximate)
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-red-100 text-red-700">
                        <th className="p-3 rounded-l-lg">University</th>
                        <th className="p-3">Annual Fee (USD)</th>
                        <th className="p-3 rounded-r-lg">Total 6 Years (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">

                      <tr className="border-b hover:bg-red-50 transition">
                        <td className="p-3 font-medium">TSMU</td>
                        <td className="p-3">$5,000 - $6,000</td>
                        <td className="p-3">₹22–26L</td>
                      </tr>

                      <tr className="border-b hover:bg-red-50 transition">
                        <td className="p-3 font-medium">BSU</td>
                        <td className="p-3">$4,000 - $5,000</td>
                        <td className="p-3">₹18–22L</td>
                      </tr>

                      <tr className="hover:bg-red-50 transition">
                        <td className="p-3 font-medium">UG</td>
                        <td className="p-3">$5,500 - $6,500</td>
                        <td className="p-3">₹25–30L</td>
                      </tr>

                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  * Fees may vary based on exchange rates and university updates.
                </p>

              </div>

              {/* ================= RIGHT SIDE - COST CARDS ================= */}
              <div className="space-y-6">

                {/* Accommodation */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-100 hover:shadow-2xl transition">
                  <h4 className="text-xl font-semibold text-red-700 mb-3">
                    Accommodation
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>University hostel: $1000–$1500/year</li>
                    <li>Private apartment: $150–$300/month</li>
                  </ul>
                </div>

                {/* Food & Expenses */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-100 hover:shadow-2xl transition">
                  <h4 className="text-xl font-semibold text-red-700 mb-3">
                    Food & Other Expenses
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Food: $100–$150/month</li>
                    <li>Transportation: $10–$20/month</li>
                    <li>Miscellaneous: $50–$100/month</li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
      </section>

      {/* ================= SCHOLARSHIP OPPORTUNITIES ================= */}

      <section className="py-24 bg-gradient-to-b from-red-50 to-white">

          <div className="max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-red-700">
                Scholarships & Education Loans
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Financial support options to make your MBBS journey affordable and stress-free.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">

              {/* LEFT CARD */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100 hover:shadow-2xl transition duration-300">

                <h3 className="text-2xl font-bold text-red-600 mb-6">
                  Scholarships for Indian Students
                </h3>

                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <div className="w-2 bg-red-600 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        University Merit Scholarships
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Top 10% students receive 10–25% tuition fee waiver based on academic performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 bg-red-600 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Government Scholarships
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Limited full or partial scholarships available for international students.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 bg-red-600 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Private Organization Grants
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Various medical foundations offer financial assistance programs.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-8 bg-red-50 p-4 rounded-lg text-sm text-red-700">
                  We assist students in identifying and applying for suitable scholarship programs.
                </div>

              </div>

              {/* RIGHT CARD */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100 hover:shadow-2xl transition duration-300">

                <h3 className="text-2xl font-bold text-red-600 mb-6">
                  Education Loan Assistance
                </h3>

                <p className="text-gray-600 mb-6">
                  We collaborate with leading banks and NBFCs to help you secure hassle-free education loans.
                </p>

                <ul className="space-y-4 text-gray-700">

                  <li className="flex items-center gap-3">
                    <span className="text-red-600 text-xl">✔</span>
                    Loan up to ₹20 Lakhs available
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-red-600 text-xl">✔</span>
                    Moratorium period during study years
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-red-600 text-xl">✔</span>
                    Competitive interest rates (8–12%)
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-red-600 text-xl">✔</span>
                    Collateral-free loans available
                  </li>

                </ul>

                <div className="mt-8 bg-red-50 p-4 rounded-lg text-sm text-red-700">
                  Our financial advisors guide you throughout the loan application process.
                </div>

              </div>

            </div>

          </div>

      </section>

      {/* ================= CAREER AFTER MBBS ================= */}

      <section className="py-24 bg-gradient-to-b from-white to-red-50">

        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700">
              Career Opportunities After MBBS
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Explore multiple pathways after completing your MBBS degree abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE – Practice in India */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100">

              <h3 className="text-2xl font-bold text-red-600 mb-6">
                Practice in India
              </h3>

              <p className="text-gray-600 mb-6">
                After completing MBBS, Indian students must follow these steps:
              </p>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                    1
                  </div>
                  <p className="text-gray-700">
                    Clear the <span className="font-semibold">FMGE / NEXT Exam</span> conducted by NMC.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                    2
                  </div>
                  <p className="text-gray-700">
                    Complete <span className="font-semibold">1-year compulsory internship</span> in India.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                    3
                  </div>
                  <p className="text-gray-700">
                    Register with the <span className="font-semibold">State Medical Council</span>.
                  </p>
                </div>

              </div>

              <div className="mt-8 bg-red-50 p-4 rounded-lg text-red-700 text-sm">
                We provide special FMGE/NEXT coaching guidance and internship placement assistance.
              </div>

            </div>

            {/* RIGHT SIDE – Other Career Paths */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-red-100">
                <h4 className="font-bold text-red-600 mb-2">
                  PG Abroad
                </h4>
                <p className="text-gray-600 text-sm">
                  Pursue MD/MS in Georgia or other countries with simplified admission process.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-red-100">
                <h4 className="font-bold text-red-600 mb-2">
                  International Practice
                </h4>
                <p className="text-gray-600 text-sm">
                  Work in EU, Middle East or other countries after clearing licensing exams.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-red-100">
                <h4 className="font-bold text-red-600 mb-2">
                  USMLE Pathway
                </h4>
                <p className="text-gray-600 text-sm">
                  Prepare for USMLE to practice medicine in the USA.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-red-100">
                <h4 className="font-bold text-red-600 mb-2">
                  Hospital Management
                </h4>
                <p className="text-gray-600 text-sm">
                  Combine MBBS with MBA for leadership roles in healthcare administration.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ SECTION ================= */}

      <section className="py-24 bg-gradient-to-b from-white via-red-50 to-white">
        <div className="max-w-4xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* FAQ Items */}
            <FAQItem 
            question="Is NEET mandatory for MBBS in Russia?"
            answer="Yes, since 2019, NEET qualification is mandatory for Indian students to pursue MBBS abroad, including Russia. You need to qualify NEET to be eligible for admission."
            />

            <FAQItem 
            question="How is the climate in Russia for Indian students?"
            answer="Russia has cold winters (Nov-Mar) with temperatures ranging from -10°C to -30°C in most regions. However, universities provide well-heated hostels and classrooms. Summers (Jun-Aug) are pleasant with 20-30°C temperature."
            />

            <FAQItem 
            question="What is the FMGE passing rate?"
            answer="The overall FMGE passing rate for Russian medical graduates is around 20-25%. However, students from top universities like Moscow State have higher passing rates of 35-40% with proper preparation."
            />

            <FAQItem 
            question="Are entrance exams required?"
            answer="Most Russian medical universities don't conduct entrance exams for international students. Admission is based on 12th standard marks (PCB) and NEET score. Some top universities may have Skype interviews."
            />

            <FAQItem 
            question="How is the Indian student community?"
            answer="Russia has a large Indian student community (25,000+). Most universities have Indian student associations that organize cultural events, festivals and provide support to new students."
            />

        </div>
      </section>

      {/* ================== CONSULTATION SECTION ================== */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 text-center">

            {/* Animated Gradient Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent animate-pulse">
            Need Help With Admissions?
            </h2>

            <p className="text-lg text-red-100 mb-12">
            Our expert consultants have helped 500+ students secure admissions.
            </p>

            {/* COUNTERS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={100} suffix="%" />
                </h3>
                <p className="mt-2 text-red-100">Visa Success Rate</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={500} suffix="+" />
                </h3>
                <p className="mt-2 text-red-100">Students Placed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={50} suffix="+" />
                </h3>
                <p className="mt-2 text-red-100">Partner Institutions</p>
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
    <div className="mb-6 border border-red-100 rounded-2xl bg-white/80 backdrop-blur-lg shadow-md transition duration-300 hover:shadow-lg">
      
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="font-semibold text-lg">
          {question}
        </span>

        <span className={'text-red-600 text-2xl transition-transform duration-300 ${open ? "rotate-180" : ""}'}>
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