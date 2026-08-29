import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Code, ExternalLink, Rocket } from "lucide-react";
import visionnet from "@/assets/project-visionnet.jpg";
import algovisual from "@/assets/project-algovisual.jpg";
import styleTransfer from "@/assets/project-style-transfer.jpg";
import {
  BrutalCard,
  SectionHeading,
  stagger,
  viewportOnce,
} from "@/components/brutal/primitives";

const featured = [
  {
    title: "VisionNet AI",
    tone: "bg-brand-cyan",
    year: "2024",
    image: visionnet,
    alt: "Neural network training dashboard mockup",
    description:
      "A convolutional neural network model trained to classify complex visual patterns with 98% accuracy. Built entirely in Python using TensorFlow.",
  },
  {
    title: "AlgoVisual",
    tone: "bg-brand-pink",
    year: "2023",
    image: algovisual,
    alt: "Algorithmic sorting visualizer mockup",
    description:
      "An interactive React application that visualizes complex sorting and graph algorithms in real-time, designed with a raw, brutalist UI.",
  },
];

const recent = [
  {
    title: "Neural Style Transfer",
    badge: "AI/ML",
    image: styleTransfer,
    alt: "Neural style transfer application mockup",
    description:
      "An application applying artistic styles to images using deep neural networks and PyTorch.",
    tags: ["PyTorch", "Flask"],
    cta: "View Case Study",
    arrow: "right" as const,
    frame: "bg-brand-yellow",
  },
  {
    title: "Data Vis Dashboard",
    badge: "Web Dev",
    image: visionnet,
    alt: "Machine learning metrics dashboard mockup",
    description: "Interactive dashboard for visualizing complex ML model metrics in real-time.",
    tags: ["React", "D3.js"],
    cta: "View Live Demo",
    arrow: "up" as const,
    frame: "bg-brand-pink",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        icon={
          <span className="hidden md:inline-flex">
            <Rocket size={36} />
          </span>
        }
      >
        Featured Projects
      </SectionHeading>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
        className="mt-10 grid gap-8 md:grid-cols-2"
      >
        {featured.map((p) => (
          <BrutalCard key={p.title} className="bg-paper p-4">
            <div className="relative border-[3px] border-ink">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1200}
                height={768}
                className="aspect-16/10 w-full object-cover"
              />
              <span className="absolute top-3 right-3 border-2 border-ink bg-paper px-2 py-0.5 font-mono text-xs font-bold">
                {p.year}
              </span>
            </div>
            <span
              className={`mt-6 inline-block border-[3px] border-ink px-3 py-1 font-display text-2xl font-extrabold shadow-brutal-sm ${p.tone}`}
            >
              {p.title}
            </span>
            <p className="mt-5 text-base leading-relaxed text-ink/80">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-[3px] border-ink bg-brand-yellow px-5 py-2.5 font-mono text-sm font-bold shadow-brutal-sm"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-[3px] border-ink bg-panel px-5 py-2.5 font-mono text-sm font-bold shadow-brutal-sm"
              >
                <Code size={15} /> GitHub
              </a>
            </div>
          </BrutalCard>
        ))}
      </motion.div>

      <div className="mt-20">
        <SectionHeading bar>Recent Projects</SectionHeading>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-10 grid gap-8 md:grid-cols-2"
        >
          {recent.map((p) => (
            <BrutalCard key={p.title} className="bg-paper">
              <div className={`relative border-b-[3px] border-ink p-3 ${p.frame}`}>
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1200}
                  height={768}
                  className="aspect-16/10 w-full border-[3px] border-ink object-cover"
                />
                <span className="absolute top-5 right-5 border-2 border-ink bg-brand-yellow px-2 py-0.5 font-mono text-xs font-bold">
                  {p.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-extrabold uppercase">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/80">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border-2 border-ink bg-paper px-2.5 py-1 font-mono text-xs font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 border-t-2 border-ink pt-4">
                  <a
                    href="#contact"
                    className="flex items-center justify-between font-mono text-sm font-bold"
                  >
                    {p.cta}
                    {p.arrow === "right" ? <ArrowRight size={18} /> : <ArrowUpRight size={18} />}
                  </a>
                </div>
              </div>
            </BrutalCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
