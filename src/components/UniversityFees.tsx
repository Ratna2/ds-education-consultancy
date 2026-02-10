"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function UniversityFees() {
  const fees = [
    {
      university: "CT University",
      state: "Punjab",
      location: "Ludhiana, Punjab",
      course: "B.Tech CSE",
      duration: "4 Years",
      annual: "₹1,90,000",
      total: "₹7,60,000",
    },
    {
      university: "Noida International University",
      state: "Uttar Pradesh",
      location: "Greater Noida, UP",
      course: "MBA",
      duration: "2 Years",
      annual: "₹1,98,350",
      total: "₹3,96,000",
    },
    {
      university: "KIIT University",
      state: "Odisha",
      location: "Bhubaneswar, Odisha",
      course: "B.Tech CSE",
      duration: "4 Years",
      annual: "₹3,50,000",
      total: "₹14,00,000",
    },
    {
      university: "Ambuja Neotia University",
      state: "West Bengal",
      location: "Kolkata, WB",
      course: "BBA",
      duration: "3 Years",
      annual: "₹90,000",
      total: "₹2,70,000",
    },
    {
      university: "SAGE University",
      state: "Madhya Pradesh",
      location: "Indore, MP",
      course: "B.Tech AI",
      duration: "4 Years",
      annual: "₹1,10,000",
      total: "₹4,40,000",
    },
    {
      university: "PTLR College of Pharmacy",
      state: "Haryana",
      location: "Faridabad, Haryana",
      course: "D Pharma",
      duration: "2 Years",
      annual: "₹1,00,000",
      total: "₹2,00,000",
    },
    {
      university: "ICARE Institute of Medical Sciences",
      state: "West Bengal",
      location: "Haldia, West Bengal",
      course: "D Pharma",
      duration: "3 Years",
      annual: "₹19,00,000",
      total: "₹85,50,000",
    },
    {
      university: "Brainware University",
      state: "West Bengal",
      location: "Kolkata, WB",
      course: "BCA",
      duration: "3 Years",
      annual: "₹75,000",
      total: "₹2,25,000",
    },
    {
      university: "Graphic Era Institute of Medical Sciences",
      state: "Uttarakhand",
      location: "Dehradun, UK",
      course: "MBBS",
      duration: "4.5 Years",
      annual: "₹22,00,000",
      total: "₹99,00,000",
    },
    {
      university: "Ramaiah Medical College",
      state: "Karnataka",
      location: "Bangalore, KA",
      course: "MBBS",
      duration: "4.5 Years",
      annual: "₹25,00,000",
      total: "₹1,12,50,000",
    },
    {
      university: "Shiksha O Anusandhan",
      state: "Odisha",
      location: "Bhubaneswar, Odisha",
      course: "B.Tech AIML",
      duration: "4 Years",
      annual: "₹3,05,000",
      total: "₹12,20,000",
    },
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              University Fee Structure
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Compare fees across top universities in India to make
              an informed decision about your education.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Table */}
        <ScrollReveal delay={100}>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

            {/* Header */}
            <div className="grid grid-cols-6 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-sm font-semibold px-8 py-4">
              <div>University</div>
              <div>Location</div>
              <div>Course</div>
              <div>Duration</div>
              <div>Annual Fee</div>
              <div>Total Fee</div>
            </div>

            {/* Rows */}
            {fees.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 px-8 py-5 border-b hover:bg-blue-50 transition text-sm items-center"
              >
                <div>
                  <p className="font-semibold text-slate-800">
                    {item.university}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {item.state}
                  </p>
                </div>

                <div className="text-slate-600">
                  {item.location}
                </div>

                <div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {item.course}
                  </span>
                </div>

                <div className="text-slate-600">
                  {item.duration}
                </div>

                <div className="font-medium text-slate-800">
                  {item.annual}
                </div>

                <div className="font-bold text-indigo-600">
                  {item.total}
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="flex justify-between items-center px-8 py-4 text-sm bg-slate-50">
              <p className="text-slate-500">
                Showing 1 to {fees.length} of {fees.length} universities
              </p>

              <div className="flex gap-2">
                <button className="px-4 py-1 bg-white border rounded hover:bg-slate-100">
                  Previous
                </button>
                <button className="px-4 py-1 bg-blue-600 text-white rounded">
                  1
                </button>
                <button className="px-4 py-1 bg-white border rounded hover:bg-slate-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Note */}
        <ScrollReveal delay={200}>
          <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-yellow-600">Note:</span>{" "}
              Fees mentioned are approximate and subject to change.
              Please contact us for the most updated fee structure
              and scholarship opportunities.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}