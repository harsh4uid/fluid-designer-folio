import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-3xl font-extrabold tracking-tighter">
          HA
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative text-base font-medium text-ink"
            >
              {l.label}
              {active === l.id ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-ink"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ x: 2, y: 2 }}
            className="hidden border-[3px] border-ink bg-brand-yellow px-5 py-2 font-mono text-sm font-bold shadow-brutal sm:inline-block"
          >
            Resume
          </motion.a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="border-[3px] border-ink bg-paper p-2 shadow-brutal-sm md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t-[3px] border-ink bg-paper md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block border-b-2 border-ink/20 px-5 py-3 font-mono text-sm font-bold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
