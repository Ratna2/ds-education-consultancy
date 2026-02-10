"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const glow = document.getElementById("mouse-glow");
      if (!glow) return;

      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="mouse-glow"
      className="pointer-events-none fixed w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"
    />
  );
}
