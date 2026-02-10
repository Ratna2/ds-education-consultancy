"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* EXPANDED BUTTONS */}
      {open && (
        <div className="mb-3 flex flex-col gap-3 items-end animate-fadeIn">

          <a
            href="https://wa.me/919366294006"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition"
          >
            💬 WhatsApp
          </a>

          <a
            href="tel:+918415029087"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition"
          >
            📞 Call Now
          </a>
        </div>
      )}

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:scale-110 transition"
      >
        ☎
      </button>
    </div>
  );
}
