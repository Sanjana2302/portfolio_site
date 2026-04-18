import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Java Full Stack Developer",
  "Web Developer",
  "Software Developer",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="animate-blob absolute top-1/2 -right-32 h-80 w-80 rounded-full bg-secondary/15 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          style={{ animationDelay: "4s" }}
        />

        {/* Floating particles */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-primary/30"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-secondary/40"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/3 left-1/2 h-4 w-4 rounded-full bg-accent/30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-sm font-medium tracking-widest text-secondary uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Hi, I'm <span className="text-primary">Sanjana</span>{" "}
          <span className="text-primary">Pawar</span>
        </motion.h1>

        {/* Rotating role */}
        <div className="mx-auto mt-6 h-10 max-w-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-primary sm:text-xl"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-auto mt-4 max-w-lg text-base text-muted-foreground"
        >
          Building clean, scalable, and impactful web applications.
        </motion.p>

        {/* CTA Buttons (UPDATED 🔥) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:scale-105 transition"
          >
            View My Work
            <ArrowDown size={16} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/40 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
