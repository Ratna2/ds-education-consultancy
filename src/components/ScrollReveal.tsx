"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right";

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "translate-y-14",
    left: "-translate-x-14",
    right: "translate-x-14",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${
        visible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${directionClass[direction]} scale-95`
      }`}
    >
      {children}
    </div>
  );
}
