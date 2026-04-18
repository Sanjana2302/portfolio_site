import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const stats = [
  { label: "Projects", value: "13+" },
  { label: "Technologies", value: "15+" },
  { label: "Experience", value: "1+ yr" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Avatar */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative flex h-64 w-64 items-center justify-center rounded-3xl bg-primary/10 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-3xl border-2 border-dashed border-primary/20"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20" />
              <User size={80} className="relative z-10 text-primary" />
            </motion.div>
          </div>

          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
            >
              About <span className="text-primary">Me</span>
            </motion.h2>

            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-base leading-relaxed text-muted-foreground"
            >
              Chose growth over comfort by changing academic direction and consistently showing the courage to learn, adapt, and take responsibility.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-base leading-relaxed text-muted-foreground"
            >
              I'm a passionate Java Full Stack Developer who loves turning complex problems into elegant, user-friendly solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex gap-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}