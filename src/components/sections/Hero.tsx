import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { BrutalButton, fadeUp, stagger } from "@/components/brutal/primitives";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="relative inline-block">
            <span className="absolute -top-3 -left-4 h-20 w-32 -rotate-2 bg-brand-cream" aria-hidden />
            <h1 className="relative font-display text-5xl leading-[0.95] font-extrabold tracking-tighter uppercase md:text-6xl">
              Hi There!
              <br />
              I&apos;m
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="relative mt-2 inline-block -rotate-1">
            <motion.span
              className="absolute inset-0 origin-left bg-brand-yellow"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            />
            <h2 className="relative px-4 py-1 font-display text-5xl leading-[0.95] font-extrabold tracking-tighter uppercase md:text-7xl">
              Harsh
              <br />
              Agrawal.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 -rotate-[0.6deg] border-[3px] border-ink bg-panel px-5 py-4 text-base leading-relaxed shadow-brutal md:text-lg"
          >
            CS Student | AI/ML Engineering Enthusiast | Building bold, functional digital
            experiences with a neo-brutalist edge.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <BrutalButton href="#projects" variant="primary">
              View Projects <ArrowRight size={16} />
            </BrutalButton>
            <BrutalButton href="#contact" variant="ghost">
              Contact Me
            </BrutalButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <span className="absolute inset-0 translate-x-3 translate-y-3 -rotate-3 border-[3px] border-ink bg-brand-pink" aria-hidden />
          <div className="relative border-[3px] border-ink bg-brand-yellow p-3 shadow-brutal-lg">
            <img
              src={heroPortrait}
              alt="Illustration of Harsh Agrawal coding at a desk with neural network visuals"
              width={912}
              height={912}
              className="w-full border-[3px] border-ink"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
