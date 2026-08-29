import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const viewportOnce = { once: true, amount: 0.2 } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{
        hidden: fadeUp.hidden,
        show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function BrutalCard({
  children,
  className,
  tilt = 0,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
  hover?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      style={{ rotate: tilt }}
      whileHover={hover ? { y: -4, x: -2 } : undefined}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={cn(
        "border-[3px] border-ink bg-panel shadow-brutal transition-shadow hover:shadow-brutal-lg",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function BrutalTag({
  children,
  className,
  tilt = 0,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  return (
    <span
      style={{ rotate: `${tilt}deg`, display: "inline-block" }}
      className={cn(
        "border-[3px] border-ink px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <motion.span
      variants={fadeUp}
      whileHover={{ y: -3 }}
      className="inline-block border-2 border-ink bg-paper px-3 py-1.5 font-mono text-xs font-bold shadow-brutal-sm"
    >
      {children}
    </motion.span>
  );
}

export function BrutalButton({
  children,
  href,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost" | "yellow";
  className?: string;
}) {
  const tone =
    variant === "primary"
      ? "bg-brand-cyan"
      : variant === "yellow"
        ? "bg-brand-yellow"
        : "bg-paper";

  return (
    <motion.a
      href={href}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 3, y: 3, boxShadow: "0px 0px 0 0 var(--ink)" }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className={cn(
        "inline-flex items-center gap-2 border-[3px] border-ink px-6 py-3 font-mono text-sm font-bold text-ink shadow-brutal",
        tone,
        className,
      )}
    >
      {children}
    </motion.a>
  );
}

export function SectionHeading({
  icon,
  children,
  bar = false,
}: {
  icon?: ReactNode;
  children: ReactNode;
  bar?: boolean;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        {bar ? <span className="h-9 w-2 bg-brand-yellow md:h-12" aria-hidden /> : null}
        {icon}
        <h2 className="text-3xl font-extrabold tracking-tight uppercase md:text-5xl">
          {children}
        </h2>
      </div>
      <div className="mt-4 h-[3px] w-full bg-ink" />
    </Reveal>
  );
}
