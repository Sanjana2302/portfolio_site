import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const roles = [
  "Java Full Stack Developer",
  "Web Developer",
  "Software Developer",
];

const images = [
  "/1stimg.jpg",
  "/2img.jpg",
  "/3img.jpg",
  "/4thimg.jpg",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Desktop — mouse move
  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - left) / width;
    setFrameIndex(Math.min(images.length - 1, Math.floor(ratio * images.length)));
  };

  const handleMouseLeave = () => setFrameIndex(0);

  // Mobile — touch swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const ratio = (e.touches[0].clientX - left) / width;
    setFrameIndex(Math.min(images.length - 1, Math.max(0, Math.floor(ratio * images.length))));
  };

  const handleTouchEnd = () => setFrameIndex(0);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background lg:flex-row">

      {/* IMAGE PANEL — top on mobile, left on desktop */}
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative h-[50vh] w-full cursor-none overflow-hidden lg:h-screen lg:w-1/2"
      >
        {/* Blobs */}
        <div className="animate-blob absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-blob absolute bottom-10 right-0 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" style={{ animationDelay: "2s" }} />

        {/* Images */}
        {images.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt={`Frame ${i + 1}`}
            animate={{ opacity: i === frameIndex ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ))}

        {/* Swipe hint on mobile */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:hidden">
          <p className="text-xs font-medium text-white/70 tracking-widest uppercase">
            ← swipe to explore →
          </p>
        </div>

        {/* Gradient blend — bottom on mobile, right on desktop */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent lg:hidden" />
        <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-background lg:block" />
      </motion.div>

      {/* INFO PANEL — bottom on mobile, right on desktop */}
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-start justify-center px-8 py-10 lg:h-screen lg:w-1/2 lg:px-16 lg:py-0"
      >
        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/4 right-1/4 h-3 w-3 rounded-full bg-primary/30" />
          <motion.div animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute top-1/3 right-1/3 h-2 w-2 rounded-full bg-secondary/40" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-secondary"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl xl:text-6xl"
        >
          Hi, I'm <span className="text-primary">Sanjana</span>{" "}
          <span className="text-secondary">Pawar</span>
        </motion.h1>

        {/* Rotating role */}
        <div className="mt-5 h-9 overflow-hidden">
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
          transition={{ delay: 0.6 }}
          className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground"
        >
          Building clean, scalable, and impactful web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:scale-105"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
