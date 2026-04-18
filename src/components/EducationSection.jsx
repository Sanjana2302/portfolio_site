import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "M.Com IT", score: "75%" },
  { degree: "B.Com IT", score: "75.05%" },
  { degree: "XII (HSC)", score: "76.31%" },
  { degree: "X (SSC)", score: "76.60%" },
];

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-12 px-4" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-primary">Education</span>
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-secondary" />
        </motion.div>

        <div className="relative mt-16 space-y-8 pl-8 border-l-2 border-secondary/30">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[calc(2rem+5px)] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                <GraduationCap
                  size={14}
                  className="text-secondary-foreground"
                />
              </div>

              <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>

                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
