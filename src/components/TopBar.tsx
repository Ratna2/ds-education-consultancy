export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white overflow-hidden">
      <div className="relative whitespace-nowrap">
        <div className="flex gap-10 py-2 px-4 text-sm font-medium animate-marquee">

          <span>🎓 Admissions Open for All Colleges</span>

          <a href="tel:+918415029087" className="hover:underline">
            📞 Helpline: +91 9366294006
          </a>

          <a
            href="https://wa.me/919366294006"
            target="_blank"
            className="hover:underline"
          >
            💬 WhatsApp: 9366294006
          </a>

          <a
            href="mailto:consultancy708@gmail.com"
            className="hover:underline"
          >
            ✉️ consultancy708@gmail.com
          </a>

          <a
            href="/brochure.pdf"
            className="hover:underline"
          >
            📄 Download Brochure
          </a>

          <span>⭐ GRAB THE GREAT OPPORTUNITY</span>

          {/* duplicate content for smooth infinite loop */}
          <span>🎓 Admissions Open for All Colleges</span>
          <span>📞 Helpline: +91 8415029087</span>
          <span>💬 WhatsApp: 9366294006</span>
          <span>✉️ consultancy708@gmail.com</span>
          <span>📄 Download Brochure</span>
          <span>⭐ GRAB THE GREAT OPPORTUNITY</span>

        </div>
      </div>
    </div>
  );
}
