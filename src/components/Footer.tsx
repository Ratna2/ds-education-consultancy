export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">
            DS Education Consultancy
          </h3>
          <p className="text-sm">
            GRAB THE GREAT OPPORTUNITY
          </p>
          <p className="text-sm mt-2">
            Helping students choose the right career path with expert guidance.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold mb-2 text-white">
            Courses Offered
          </h4>
          <p className="text-sm">
            <strong>Medical:</strong> MBBS, BHMS, BAMS, BDS
          </p>
          <p className="text-sm mt-1">
            <strong>Others:</strong> Engineering, Law, MBA, Pharmacy, Management
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2 text-white">
            Contact Details
          </h4>
          <p className="text-sm">
            📍 Bardowali, Agartala, Near Mouchak Club,<br />
            Flyover Pillar No. 12, Tripura, India
          </p>
          <p className="text-sm mt-2">
            📞 Phone: +91 8415029087
          </p>
          <p className="text-sm">
            💬 WhatsApp: 9366294006
          </p>
          <p className="text-sm">
            ✉️ consultancy708@gmail.com
          </p>
        </div>

      </div>

      <p className="text-center text-xs mt-10 text-slate-400">
        © {new Date().getFullYear()} DS Education Consultancy. All rights reserved.
      </p>
    </footer>
  );
}
