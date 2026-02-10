"use client";

export default function GetInTouch() {
  return (
    <section className="py-24 bg-slate-100 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE - CONTACT INFO */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-indigo-600">
            Get In Touch
          </h2>

          <div className="space-y-6 text-lg">

            <div>
              <h4 className="font-semibold">📧 Email</h4>
              <p className="text-slate-700">
                consultancy708@gmail.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold">📞 Phone</h4>
              <p className="text-slate-700">
                +91 8415029087
              </p>
            </div>

            <div>
              <h4 className="font-semibold">💬 WhatsApp</h4>
              <p className="text-slate-700">
                +91 9366294006
              </p>
            </div>

            <div>
              <h4 className="font-semibold">📍 Office Address</h4>
              <p className="text-slate-700">
                Opposite Mouchak Club,<br />
                Bardowali, Agartala,<br />
                Near Flyover Pillar No. 12,<br />
                Tripura, India
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - GOOGLE MAP */}
        <div>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.560817483161!2d91.27275001522518!3d23.822019684570933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505598bbaeffd1%3A0xb56879da119786bc!2sMouchak%20Club%2C%20Bardowali%2C%20Agartala%2C%20Tripura%20799003%2C%20India!5e0!3m2!1sen!2sin!4v170"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0"
            ></iframe>

          </div>

          {/* Open in Google Maps button */}
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/Mouchak+Club,+Bardowali,+Agartala,+Tripura+799003,+India/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              View in Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}