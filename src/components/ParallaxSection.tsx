"use client";

import { useEffect, useRef } from "react";

export default function ParallaxSection({
  children,
  speed = 0.3,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const offset = window.scrollY;
      ref.current.style.transform = `translateY(${offset * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
}
