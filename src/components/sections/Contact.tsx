import { Mail } from "lucide-react";
import { BrutalButton, BrutalTag, Reveal } from "@/components/brutal/primitives";

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "mailto:hello@example.com" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <div className="relative border-[3px] border-ink bg-brand-yellow p-8 shadow-brutal-lg md:p-14">
          <BrutalTag className="bg-paper" tilt={-2}>
            Contact
          </BrutalTag>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tighter uppercase md:text-6xl">
            Let&apos;s build
            <br />
            something bold.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Open to internships, collaborations, and interesting problems in AI/ML, web
            development, and algorithms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BrutalButton href="mailto:hello@example.com" variant="ghost">
              <Mail size={16} /> Say Hello
            </BrutalButton>
            {socials.slice(0, 2).map((s) => (
              <BrutalButton key={s.label} href={s.href} variant="primary">
                {s.label}
              </BrutalButton>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-ink bg-band">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row">
        <span className="font-display text-3xl font-extrabold tracking-tighter">HA.</span>
        <p className="text-center font-display text-base font-bold">
          © 2024 Harsh Agrawal. Built with Neo-Brutalism.
        </p>
        <nav className="flex flex-wrap justify-center gap-5 font-mono text-sm font-bold">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="hover:underline">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
