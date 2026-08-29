import { motion } from "motion/react";
import { Chip, stagger, viewportOnce } from "@/components/brutal/primitives";

const tech = ["Python", "TensorFlow", "React", "Docker", "AWS", "Tailwind"];

export function TechStrip() {
  return (
    <section className="border-y-[3px] border-ink bg-band py-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-5"
      >
        {tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </motion.div>
    </section>
  );
}
