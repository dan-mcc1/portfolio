import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "outside", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-5 sm:px-6">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="whitespace-nowrap border-b-2 px-4 py-4 text-[0.95rem] font-medium transition-colors"
            style={{
              borderColor: active === id ? "var(--accent)" : "transparent",
              color: active === id ? "var(--accent)" : "var(--muted)",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
