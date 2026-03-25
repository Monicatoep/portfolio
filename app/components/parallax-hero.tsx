"use client";

import { useEffect, useState, ReactNode } from "react";

export default function ParallaxHero({ children }: { children: ReactNode }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-start justify-center overflow-hidden px-6 pt-24">
      <div
        style={{ transform: `translateY(${offset * 0.35}px)`, opacity: Math.max(1 - offset / 700, 0) }}
        className="transition-none"
      >
        {children}
      </div>
    </section>
  );
}
