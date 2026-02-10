"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I apply for colleges through your consultancy?",
    answer:
      "Once you contact us, we understand your preferences and academic background. Based on that, we suggest suitable colleges and guide you through the complete admission process including documentation and submission.",
  },
  {
    question: "Can you assist with scholarship applications?",
    answer:
      "Yes, we help identify relevant scholarships and guide you step-by-step through the application process to maximize your chances.",
  },
  {
    question: "Do you offer assistance with study abroad options?",
    answer:
      "Absolutely. We assist with university selection, course guidance, visa processing, accommodation, and preparation for exams like IELTS and TOEFL.",
  },
  {
    question: "Is there any counselling fee?",
    answer:
      "We provide initial counselling sessions free of cost to understand your requirements before moving forward.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-16 rounded-full" />

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === index
                    ? "max-h-40 opacity-100 px-6 pb-6"
                    : "max-h-0 opacity-0 px-6"
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}