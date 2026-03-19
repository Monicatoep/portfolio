const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Topbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-secondary/30 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Portfolio
        </a>
        <ul className="flex gap-6">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-secondary transition-colors hover:text-accent"
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
