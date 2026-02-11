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