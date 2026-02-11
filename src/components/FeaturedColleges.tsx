"use client";

import { useEffect, useRef } from "react";

const colleges = [
  {
    name: "Uttaranchal University",
    location1: "UK",
    location2: "Dehradun",
    image: "/Uttaranchal.jpg",
  },
  {
    name: "UPES University",
    location1: "UK",
    location2: "Dehradun",
    image: "/upes.jpg",
  },
  {
    name: "Roorkee College Of Engineering",
    location1: "Uttarakhand",
    location2: "Roorkee",
    image: "/roorkee.jpg",
  },
  {
    name: "SRM University",
    location1: "Delhi NCR",
    location2: "Ghaziabad",
    image: "/srm.jpg",
  },
];

export default function FeaturedTopColleges() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let position = 0;

    const speed = 0.5; // LOWER = slower (smooth premium speed)

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= slider.scrollWidth / 2) {
        position = 0; // reset smoothly without visual snap
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
          Discover premier institutions in India and abroad recommended by LookStudents
        </p>

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6"
            style={{ width: "max-content" }}
          >
            {[...colleges, ...colleges].map((college, i) => (
              <div
                key={i}
                className="w-[350px] flex-shrink-0"
              >
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
                      {college.location1 && (
                        <span className="bg-blue-600/80 backdrop-blur px-3 py-1 rounded-full text-sm">
                          {college.location1}
                        </span>
                      )}
                      {college.location2 && (
                        <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">
                          {college.location2}
                        </span>
                      )}
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