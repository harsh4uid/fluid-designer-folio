import { motion } from "motion/react";
import { TerminalSquare } from "lucide-react";
import {
  BrutalCard,
  SectionHeading,
  stagger,
  viewportOnce,
} from "@/components/brutal/primitives";

const groups = [
  {
    title: "AI / ML",
    tone: "bg-brand-cyan",
    tilt: -2,
    description: "Developing predictive models and neural networks.",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn"],
  },
  {
    title: "Frontend",
    tone: "bg-brand-pink",
    tilt: -1,
    description: "Crafting responsive, high-performance user interfaces.",
    items: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Algorithms",
    tone: "bg-brand-yellow",
    tilt: -2,
    description: "Optimizing logic and mastering data structures.",
    items: ["C++", "Graph Theory", "DP"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        icon={
          <span className="hidden md:inline-flex">
            <TerminalSquare size={38} />
          </span>
        }
      >
        Technical Arsenal
      </SectionHeading>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
        className="mt-10 grid gap-8 md:grid-cols-3"
      >
        {groups.map((g) => (
          <BrutalCard key={g.title} className="p-6 pt-0">
            <span
              className={`-mt-5 -ml-2 inline-block border-[3px] border-ink px-4 py-1.5 font-display text-2xl font-extrabold shadow-brutal-sm ${g.tone}`}
              style={{ rotate: `${g.tilt}deg` }}
            >
              {g.title}
            </span>
            <p className="mt-6 text-base leading-relaxed text-ink/80">{g.description}</p>
            <div className="my-5 border-t-2 border-dashed border-ink/60" />
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="border-2 border-ink bg-paper px-2.5 py-1 font-mono text-xs font-bold"
                >
                  {i}
                </span>
              ))}
            </div>
          </BrutalCard>
        ))}
      </motion.div>
    </section>
  );
}
