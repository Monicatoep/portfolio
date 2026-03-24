"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Topbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);

      const sections = navItems.map(({ href }) =>
        document.querySelector(href)
      );
      let current = "";
      for (const section of sections) {
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 80) {
            current = `#${section.id}`;
          }
        }
      }
      setActiveSection(current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-background" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="MF logo" width={100} height={34} />
        </a>
        <ul className="flex gap-6">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-lg font-medium transition-colors hover:text-foreground ${
                  activeSection === href
                    ? "text-foreground"
                    : "text-dark"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
