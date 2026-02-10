// components/ContactMap.tsx
"use client";

export default function ContactMap() {
  const address = `Bardowali, Agartala, Near Mouchak Club, Flyover Pillar No. 12, Tripura, India`;
  const q = encodeURIComponent(address);
  const iframeSrc = `https://www.google.com/maps?q=${q}&z=17&output=embed`;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: contact info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="text-slate-300">Our friendly team would love to hear from you.</p>

          <div className="pt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Email</h4>
              <a href="mailto:consultancy708@gmail.com" className="text-indigo-300">consultancy708@gmail.com</a>
            </div>

            <div>
              <h4 className="font-semibold">Office</h4>
              <p className="text-slate-300">{address}</p>
            </div>

            <div>
              <h4 className="font-semibold">Phone</h4>
              <a href="tel:+918415029087" className="text-indigo-300">+91 8415029087</a>
            </div>
          </div>
        </div>

        {/* Right: responsive map */}
        <div>
          <div className="w-full h-[360px] rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DS Education Consultancy - Office Location"
              style={{ border: 0 }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-400">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${q}`}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}