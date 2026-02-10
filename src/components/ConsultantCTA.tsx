import ScrollReveal from "@/components/ScrollReveal";

export default function ConsultantCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6">
            Looking for an Education Consultant?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-slate-300 mb-10">
            We guide you step-by-step from course selection to admission
            confirmation in top institutions across India and abroad.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/about"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold"
            >
              Explore More
            </a>

            <a
              href="#enquiry"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
              Contact Us Now
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
