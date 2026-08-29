import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { TechStrip } from "@/components/sections/TechStrip";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact, SiteFooter } from "@/components/sections/Contact";

const title = "Harsh Agrawal — CS Student & AI/ML Portfolio";
const description =
  "Neo-brutalist portfolio of Harsh Agrawal: computer science student building AI/ML models, algorithms, and bold front-end experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
