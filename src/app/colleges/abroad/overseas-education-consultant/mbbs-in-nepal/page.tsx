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
  focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
/>

<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  value={form.lastName}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
/>

<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={form.phone}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={form.email}
  onChange={handleChange}
  required
  className="w-full bg-white/90 border border-gray-300 rounded-xl px-4 py-3 
  focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
/>

<button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-pink-600 to-pink-500 
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
          src="/images/nepal-hero.jpg"
          alt="MBBS in Nepal"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            MBBS in Nepal for Indian Students
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
            World-class medical education at affordable costs with globally
            recognized universities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition duration-300 font-semibold shadow-lg">
              Get Free Consultation
            </button>

            <button className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition duration-300 font-semibold">
              Explore Universities
            </button>
          </div>
        </div>
      </section>


      {/* ============================ STATS STRIP ============================ */}

      <section className="bg-pink-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-10">

          <div>
            <h3 className="text-3xl font-bold text-pink-600">25+</h3>
            <p className="mt-2 text-sm text-slate-600">
              NMC Approved Universities
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pink-600">₹18–30L</h3>
            <p className="mt-2 text-sm text-slate-600">
              Total Course Fees
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pink-600">5.5 Years</h3>
            <p className="mt-2 text-sm text-slate-600">
              Course Duration
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pink-600">15,000+</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
                Why Choose Nepal for MBBS?
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left Side - Advantages */}
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Advantages of Studying MBBS in Nepal
                </h3>

                <ul className="space-y-5 text-slate-600 text-[15px] leading-relaxed">

                <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">✓</span>
                    <span>
                    <strong>Globally Recognized Degrees:</strong> Nepal medical
                    degrees are recognized by WHO, NMC, and medical councils worldwide.
                    </span>
                </li>

                <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">✓</span>
                    <span>
                    <strong>Affordable Fees:</strong> Cost is 60–70% lower than
                    private medical colleges in India.
                    </span>
                </li>

                <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">✓</span>
                    <span>
                    <strong>No Donation/Capitation:</strong> Transparent fee
                    structure with no hidden costs.
                    </span>
                </li>

                <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">✓</span>
                    <span>
                    <strong>English Medium:</strong> All medical courses are taught in English.
                    </span>
                </li>

                <li className="flex gap-3">
                    <span className="text-pink-500 font-bold">✓</span>
                    <span>
                    <strong>Advanced Infrastructure:</strong> Modern hospitals and
                    research facilities for practical training.
                    </span>
                </li>

                </ul>
            </div>

            {/* Right Side - Life Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100 hover:shadow-xl transition duration-300">

                <img
                src="/images/nepal-life.jpg"
                alt="Life in Nepal"
                className="w-full h-64 object-cover"
                />

                <div className="p-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Life in Nepal
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Nepal offers a vibrant multicultural environment with a large Indian
                    community. Universities provide Indian food in hostels and the cost
                    of living is affordable compared to many other countries.
                </p>
                </div>

            </div>

            </div>
        </div>
      </section>

      {/* ================= TOP NMC UNIVERSITIES SECTION ================= */}

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
                Top NMC Approved Universities
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
                Nepal medical universities have been training international students for over 50 years
            </p>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
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
                <img src="/images/nepalm.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Nepal medical college 
                </h3>
                </div>

                {/* CARD 2 */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/manipal.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Manipal medical college
                </h3>
                </div>

                {/* CARD 3 */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/janaki.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Janaki medical college & hospital 
                </h3>
                </div>

                {/* CARD 4 */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/koirala.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    BP koirala medical college
                </h3>
                </div>

                {/* DUPLICATE CARDS FOR INFINITE LOOP */}
                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/manipal.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Manipal medical college
                </h3>
                </div>

                <div className="min-w-[320px] h-[220px] relative rounded-xl overflow-hidden shadow-lg group">
                <img src="/images/janaki.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Janaki medical college & hospital
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

      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
                Admission Process
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Main Box */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12 border border-pink-100">

            {/* ================= ELIGIBILITY ================= */}
            <div className="bg-pink-50 rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-pink-600 mb-6">
                Eligibility Criteria
                </h3>

                <ul className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    Minimum 50% marks in PCB (40% for SC/ST/OBC)
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    NEET qualification is mandatory for Indian students
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    Minimum age 17 years as on 31st December of admission year
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">✓</span>
                    Valid passport
                </li>
                </ul>
            </div>


            {/* ================= APPLICATION TIMELINE ================= */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-pink-100">
                <h3 className="text-2xl font-semibold text-pink-600 mb-8">
                Application Timeline
                </h3>

                <div className="space-y-6">

                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-pink-600 text-white rounded-full text-sm font-bold shadow-md">
                    1
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">March – June:</span> Application submission with required documents
                    </p>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-pink-600 text-white rounded-full text-sm font-bold shadow-md">
                    2
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">July – August:</span> Receive admission letter and invitation letter
                    </p>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-pink-600 text-white rounded-full text-sm font-bold shadow-md">
                    3
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">August – September:</span> Visa processing and fee payment
                    </p>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center bg-pink-600 text-white rounded-full text-sm font-bold shadow-md">
                    4
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold">September – October:</span> Travel to Nepal and begin classes
                    </p>
                </div>

                </div>
            </div>

            </div>
        </div>
      </section>

      {/* ================= MBBS RUSSIA FEE STRUCTURE ================= */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

            {/* Section Heading */}
            <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
                MBBS in Nepal – Fee Structure 
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Detailed breakdown of tuition fees and living expenses for Indian students.
            </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">

            {/* Tuition Fees Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-200">
                <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-5 rounded-t-2xl">
                <h3 className="text-xl font-semibold">Tuition Fees</h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                <div className="flex justify-between">
                    <span>First Year</span>
                    <span className="font-semibold text-pink-600">₹3.5 – ₹6.5 Lakhs</span>
                </div>
                <div className="flex justify-between">
                    <span>2nd–6th Year (per year)</span>
                    <span className="font-semibold text-pink-600">₹2.5 – ₹4.5 Lakhs</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                    <span className="font-medium">Total Course Fee</span>
                    <span className="font-bold text-pink-700 text-lg">₹15 – ₹25 Lakhs</span>
                </div>
                <p className="text-sm text-gray-500 italic">
                    *Varies by university and location
                </p>
                </div>
            </div>


            {/* Hostel & Living Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-200">
                <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-5 rounded-t-2xl">
                <h3 className="text-xl font-semibold">Hostel & Living</h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                <div className="flex justify-between">
                    <span>Hostel (per year)</span>
                    <span className="font-semibold text-pink-600">₹50,000 – ₹1.2L</span>
                </div>
                <div className="flex justify-between">
                    <span>Food (per month)</span>
                    <span className="font-semibold text-pink-600">₹15,000 – ₹20,000</span>
                </div>
                <div className="flex justify-between">
                    <span>Miscellaneous</span>
                    <span className="font-semibold text-pink-600">₹10,000/month</span>
                </div>
                <p className="text-sm text-gray-500 italic">
                    *Shared accommodation typically included
                </p>
                </div>
            </div>


            {/* Other Expenses Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-200">
                <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white p-5 rounded-t-2xl">
                <h3 className="text-xl font-semibold">Other Expenses</h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                <div className="flex justify-between">
                    <span>Medical Insurance</span>
                    <span className="font-semibold text-pink-600">₹10,000 – ₹15,000</span>
                </div>
                <div className="flex justify-between">
                    <span>Visa Extension</span>
                    <span className="font-semibold text-pink-600">₹5,000 – ₹8,000</span>
                </div>
                <div className="flex justify-between">
                    <span>Airfare (Round Trip)</span>
                    <span className="font-semibold text-pink-600">₹25,000 – ₹40,000</span>
                </div>
                <p className="text-sm text-gray-500 italic">
                    *Approximate costs for Indian students
                </p>
                </div>
            </div>

            </div>
        </div>
      </section>

      {/* ================= TOP UNIVERSITY FEE COMPARISON ================= */}

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">

            {/* Section Heading */}
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
                Top University Fee Comparison
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

            {/* Header Row */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white grid grid-cols-5 px-6 py-4 font-semibold text-sm md:text-base">
                <div>University</div>
                <div>Tuition / Year</div>
                <div>Hostel / Year</div>
                <div>Total 6 Years</div>
                <div>NMC Approved</div>
            </div>

            {/* Rows */}
            <div className="divide-y">

                {/* Row 1 */}
                <div className="grid grid-cols-5 px-6 py-5 items-center hover:bg-pink-50 transition duration-300">
                <div className="font-medium">Crimea Federal University</div>
                <div>₹3.8 Lakhs</div>
                <div>₹60,000</div>
                <div className="font-bold text-pink-600">₹22 Lakhs</div>
                <div className="text-green-600 text-xl">✔</div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-5 px-6 py-5 items-center hover:bg-pink-50 transition duration-300">
                <div className="font-medium">Kazan Federal University</div>
                <div>₹4.2 Lakhs</div>
                <div>₹75,000</div>
                <div className="font-bold text-pink-600">₹25 Lakhs</div>
                <div className="text-green-600 text-xl">✔</div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-5 px-6 py-5 items-center hover:bg-pink-50 transition duration-300">
                <div className="font-medium">Altai State Medical University</div>
                <div>₹3.2 Lakhs</div>
                <div>₹50,000</div>
                <div className="font-bold text-pink-600">₹19 Lakhs</div>
                <div className="text-green-600 text-xl">✔</div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-5 px-6 py-5 items-center hover:bg-pink-50 transition duration-300">
                <div className="font-medium">Orenburg State Medical University</div>
                <div>₹3.5 Lakhs</div>
                <div>₹55,000</div>
                <div className="font-bold text-pink-600">₹20.5 Lakhs</div>
                <div className="text-green-600 text-xl">✔</div>
                </div>

            </div>
            </div>

            {/* Note Section */}
            <div className="mt-6 text-sm text-gray-500 text-center italic">
            *Fees are approximate and subject to change. Includes tuition, hostel, and basic medical insurance.
            </div>

        </div>
      </section>

      {/* ================= SCHOLARSHIP OPPORTUNITIES ================= */}

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
                Scholarship Opportunities
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">
                Financial assistance options available for Indian students
            </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-2">

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl mb-6 group-hover:bg-pink-600 group-hover:text-white transition duration-300">
                🎓
                </div>

                <h3 className="text-xl font-semibold mb-3">
                Government Scholarships
                </h3>

                <p className="text-gray-600 leading-relaxed">
                Russian government offers <span className="font-semibold text-pink-600">15% – 100% tuition fee waiver</span> 
                for meritorious international students under federal programs.
                </p>

            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-2">

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl mb-6 group-hover:bg-pink-600 group-hover:text-white transition duration-300">
                🏫
                </div>

                <h3 className="text-xl font-semibold mb-3">
                University Scholarships
                </h3>

                <p className="text-gray-600 leading-relaxed">
                Many universities provide <span className="font-semibold text-pink-600">10% – 50% discount</span> 
                for students scoring <span className="font-semibold">85%+ in PCB</span>.
                </p>

            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-2">

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl mb-6 group-hover:bg-pink-600 group-hover:text-white transition duration-300">
                ⏳
                </div>

                <h3 className="text-xl font-semibold mb-3">
                Early Bird Discount
                </h3>

                <p className="text-gray-600 leading-relaxed">
                Get <span className="font-semibold text-pink-600">5% – 10% discount</span> 
                on first-year tuition fees for applications submitted before <span className="font-semibold">March 31</span>.
                </p>

            </div>

            </div>

        </div>
      </section>

      {/* ================= CAREER AFTER MBBS ================= */}

      <section className="py-24 bg-gradient-to-b from-white via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
                Career After MBBS from Nepal
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4">
                Explore multiple career pathways after completing your MBBS degree
            </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-10">

            {/* Practice in India */}
            <div className="group bg-white/70 backdrop-blur-lg border border-pink-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3">

                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-3xl mb-6 group-hover:bg-pink-600 group-hover:text-white transition duration-300">
                🇮🇳
                </div>

                <h3 className="text-xl font-semibold mb-4">
                Practice in India
                </h3>

                <p className="text-gray-600 leading-relaxed">
                Clear the <span className="font-semibold text-red-600">FMGE/NExT exam</span>, 
                complete a 1-year internship in India, and register with the State Medical Council 
                to begin your medical practice.
                </p>

            </div>

            {/* International Practice */}
            <div className="group bg-white/70 backdrop-blur-lg border border-pink-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3">

                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-3xl mb-6 group-hover:bg-pink-600 group-hover:text-white transition duration-300">
                🌍
                </div>

                <h3 className="text-xl font-semibold mb-4">
                International Practice
                </h3>

                <p className="text-gray-600 leading-relaxed">
                Eligible for global licensing exams like 
                <span className="font-semibold text-pink-600"> PLAB (UK), USMLE (USA), AMC (Australia)</span> 
                after clearing respective medical exams.
                </p>

            </div>

            {/* Post Graduation */}
            <div className="group bg-white/70 backdrop-blur-lg border border-pink-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3">

                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-3xl mb-6 group-hover:bg-pink-600 group-hover:text-white transition duration-300">
                🎓
                </div>

                <h3 className="text-xl font-semibold mb-4">
                Post Graduation
                </h3>

                <p className="text-gray-600 leading-relaxed">
                Pursue <span className="font-semibold text-pink-600">MD/MS</span> in Russia, India, 
                or other countries. Russian PG degrees are recognized under NMC guidelines.
                </p>

            </div>

            </div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}

      <section className="py-24 bg-gradient-to-b from-white via-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
                Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
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
      <section className="relative py-20 bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 text-white overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 text-center">

            {/* Animated Gradient Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent animate-pulse">
            Need Help With Admissions?
            </h2>

            <p className="text-lg text-pink-100 mb-12">
            Our expert consultants have helped 500+ students secure admissions.
            </p>

            {/* COUNTERS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={100} suffix="%" />
                </h3>
                <p className="mt-2 text-pink-100">Visa Success Rate</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={500} suffix="+" />
                </h3>
                <p className="mt-2 text-pink-100">Students Placed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-yellow-300">
                <Counter target={50} suffix="+" />
                </h3>
                <p className="mt-2 text-pink-100">Partner Institutions</p>
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
    <div className="mb-6 border border-pink-100 rounded-2xl bg-white/80 backdrop-blur-lg shadow-md transition duration-300 hover:shadow-lg">
      
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="font-semibold text-lg">
          {question}
        </span>

        <span className={'text-pink-600 text-2xl transition-transform duration-300 ${open ? "rotate-180" : ""}'}>
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