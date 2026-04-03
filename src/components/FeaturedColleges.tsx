"use client";

import { useEffect, useRef, useMemo } from "react";
import { collegesData } from "@/data/collegesData";

export default function FeaturedTopColleges() {
  const sliderRef = useRef<HTMLDivElement>(null);

  /* ✅ GET ONLY FEATURED COLLEGES */
  const featuredColleges = useMemo(() => {
    return collegesData.filter((c) => c.featured);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= slider.scrollWidth / 2) {
        position = 0;
      }

      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom text-center">

        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Featured Top Colleges
        </h2>

        <p className="text-slate-500 mb-12">
          Discover premier institutions recommended for your future
        </p>

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6"
            style={{ width: "max-content" }}
          >
            {[...featuredColleges, ...featuredColleges].map((college, i) => (
              <div key={i} className="w-[350px] flex-shrink-0">

                <div className="relative rounded-2xl overflow-hidden shadow-xl group">

                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 text-left text-white">
                    <h3 className="text-xl font-semibold mb-3">
                      {college.name}
                    </h3>

                    <div className="flex gap-3">
                      <span className="bg-blue-600/80 backdrop-blur px-3 py-1 rounded-full text-sm">
                        {college.category}
                      </span>

                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">
                        {college.state}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}