import { motion } from "motion/react";
import { Code2, Cpu, Network } from "lucide-react";
import {
  BrutalCard,
  BrutalTag,
  Reveal,
  stagger,
  viewportOnce,
} from "@/components/brutal/primitives";

const noteLines = [
  "I'm a curious and motivated student who enjoys learning deeply and solving problems.",
  "Along with my studies in Computer Science, I have teaching experience in Physics, where I focus on helping students understand concepts clearly.",
  "I'm currently improving my skills in Web Development, Algorithms, and System Thinking, while also exploring areas like Economics and emerging technologies.",
  "I believe in continuous learning, discipline, and building meaningful things with technology.",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <BrutalTag className="bg-brand-pink" tilt={-2}>
            About Me
          </BrutalTag>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tighter md:text-6xl">
            I&apos;m a curious and motivated student.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
            &quot;I&apos;m a curious and motivated student who enjoys learning deeply and
            solving problems.&quot; I focus on Web Dev, Algorithms, and AI/ML, bringing a
            rigorous analytical mindset from my background in Physics.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rotate-[1.2deg] border-[3px] border-ink bg-brand-cream p-5 shadow-brutal-lg">
            <span className="mb-4 block h-8 w-32 border-[3px] border-ink bg-brand-cyan" aria-hidden />
            <div className="border-[3px] border-ink bg-brand-cream/60 p-5">
              {noteLines.map((line) => (
                <p key={line} className="mb-3 text-base leading-relaxed last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        <BrutalCard className="p-7 md:col-span-2">
          <BrutalTag className="bg-brand-cyan">Teaching</BrutalTag>
          <h3 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">
            Physics Instructor
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            I have extensive experience teaching Physics, breaking down complex concepts into
            digestible pieces. This process not only helped my students but sharpened my own
            foundational problem-solving skills, which I now apply to software engineering.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BrutalTag className="bg-paper">Mechanics</BrutalTag>
            <BrutalTag className="bg-paper">Electromagnetism</BrutalTag>
          </div>
        </BrutalCard>

        <BrutalCard className="p-7">
          <span className="inline-flex border-[3px] border-ink bg-brand-pink p-2 shadow-brutal-sm">
            <Code2 size={22} />
          </span>
          <h3 className="mt-14 font-display text-2xl font-extrabold">Web Dev</h3>
          <p className="mt-3 text-base leading-relaxed text-ink/80">
            Building robust, scalable frontend and backend architectures with modern
            frameworks.
          </p>
        </BrutalCard>

        <BrutalCard className="p-7" tilt={-1.5}>
          <span className="inline-flex border-[3px] border-ink bg-brand-yellow p-2 shadow-brutal-sm">
            <Network size={22} />
          </span>
          <h3 className="mt-10 font-display text-2xl font-extrabold">Algorithms</h3>
          <p className="mt-3 text-base leading-relaxed text-ink/80">
            Deep passion for competitive programming and optimizing complex data structures.
          </p>
        </BrutalCard>

        <BrutalCard className="p-7 md:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex border-[3px] border-ink bg-brand-cyan p-2 shadow-brutal-sm">
              <Cpu size={22} />
            </span>
            <BrutalTag className="bg-paper">Current Focus</BrutalTag>
          </div>
          <h3 className="mt-8 font-display text-3xl font-extrabold md:text-4xl">
            AI &amp; Machine Learning
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Exploring neural networks, natural language processing, and the intersection of
            physical models with machine learning paradigms to solve real-world problems.
          </p>
        </BrutalCard>
      </motion.div>
    </section>
  );
}
