"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="py-24 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6 animate-pulse">
          📩 Get In Touch
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Contact Us Directly
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          We're here to guide you towards the right career path.
        </p>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10">

          {/* CALL */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
              <Phone size={24} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Call Us Now
            </h3>

            <p className="text-slate-600 mb-4">
              Speak directly with our counsellor
            </p>

            <a
              href="tel:+918415029087"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-md hover:opacity-90 transition"
            >
              +91 8415029087
            </a>
          </div>

          {/* VISIT */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
              <MapPin size={24} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Visit Our Office
            </h3>

            <p className="text-slate-700 mb-4">
              Opposite Mouchak Club, Bardowali <br />
              Flyover Pillar No. 12, Agartala
            </p>

            <a
              href="https://maps.google.com/?q=Opposite+Mouchak+Club+Bardowali+Agartala"
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View on Google Maps
            </a>
          </div>

          {/* MAIL */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mb-6">
              <Mail size={24} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Mail Us
            </h3>

            <p className="text-slate-600 mb-4">
              Send your queries anytime
            </p>

            <a
              href="mailto:consultancy708@gmail.com"
              className="inline-block bg-slate-800 text-white px-5 py-2 rounded-md hover:bg-slate-700 transition"
            >
              consultancy708@gmail.com
            </a>
          </div>

        </div>
      </section>

      {/* FORM + MAP SECTION (Perfect Symmetry) */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE → FORM */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              
            </h2>

            <div className="flex-1">
              <EnquiryForm />
            </div>
          </div>

          {/* RIGHT SIDE → MAP */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex">
            <iframe
              src="https://maps.google.com/maps?q=Opposite%20Mouchak%20Club%20Bardowali%20Agartala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[550px]"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}