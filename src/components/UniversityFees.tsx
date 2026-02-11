"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function UniversityFees() {
  const fees = [
    {
      university: "CT University",
      state: "Punjab",
      location: "Ludhiana, Punjab",
      course: "B.Tech ",
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
      course: "B.Tech",
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
      course: "B.Tech",
      duration: "4 Years",
      annual: "₹1,10,000",
      total: "₹4,40,000",
    },
    {
      university: "PTLR College of Pharmacy",
      state: "Haryana",
      location: "Faridabad, Haryana",
      course: "DPharma",
      duration: "2 Years",
      annual: "₹1,00,000",
      total: "₹2,00,000",
    },
    {
      university: "ICARE Institute of Medical Sciences",
      state: "West Bengal",
      location: "Haldia, West Bengal",
      course: "DPharma",
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
      course: "B.Tech",
      duration: "4 Years",
      annual: "₹3,05,000",
      total: "₹12,20,000",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              University Fee Structure
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              Compare fees across top universities in India to make
              an informed decision about your education.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Responsive Table */}
        <ScrollReveal delay={100}>
          <div className="overflow-x-auto rounded-3xl shadow-lg border border-slate-200 bg-white">

            <table className="min-w-full text-sm text-left">

              {/* Table Head */}
              <thead className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">University</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold text-center">Course</th>
                  <th className="px-6 py-4 font-semibold text-center">Duration</th>
                  <th className="px-6 py-4 font-semibold text-center">Annual Fee</th>
                  <th className="px-6 py-4 font-semibold text-center">Total Fee</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200">
                {fees.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-800">
                        {item.university}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.state}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {item.location}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item.course}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center text-slate-600">
                      {item.duration}
                    </td>

                    <td className="px-6 py-4 text-center font-medium text-slate-800">
                      {item.annual}
                    </td>

                    <td className="px-6 py-4 text-center font-bold text-indigo-600">
                      {item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </ScrollReveal>

        {/* Note */}
        <ScrollReveal delay={200}>
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>
              <span className="font-medium text-slate-700">Note:</span> Fees mentioned are approximate and subject to change.
              Please contact us for the most updated fee structure
              and scholarship opportunities.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}