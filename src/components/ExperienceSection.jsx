import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const highlights = [
  "Developed Spring Boot REST APIs for scalable microservices",
  "Built CRM modules for Finance & HR departments",
  "Optimized MySQL queries for improved performance",
  "Implemented role-based access control & data validation",
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="bg-card py-12 px-4" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-secondary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-16 pl-8 border-l-2 border-primary/30"
        >
          <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <Briefcase size={14} className="text-primary-foreground" />
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Java Full Stack Developer
              </h3>

              <span className="text-sm font-medium text-secondary">
                Feb 2025 – 31/3/2026
              </span>
            </div>

            <p className="mt-1 text-sm font-medium text-primary">
              Sarg Softech
            </p>

            <ul className="mt-5 space-y-3">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.1,
                  }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
