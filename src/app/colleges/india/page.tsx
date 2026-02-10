export default function IndiaPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-800 mb-6">
        Study in India
      </h1>

      <p className="text-slate-600 text-lg leading-relaxed mb-6">
        Explore top medical, engineering, and professional colleges across India.
        We provide complete admission guidance, documentation support,
        and end-to-end counselling services.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {["Medical Colleges", "Engineering Colleges", "Management Institutes"].map((item) => (
          <div
            key={item}
            className="p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition"
          >
            <h3 className="font-semibold text-indigo-700 text-lg">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}