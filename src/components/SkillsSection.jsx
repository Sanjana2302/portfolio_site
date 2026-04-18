import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Database,
  Layout,
  Terminal,
  GitBranch,
  Server,
} from "lucide-react";

const skillGroups = [
  { title: "Languages", icon: Code, skills: ["Java", "SQL", "JavaScript"] },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Tailwind CSS", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Spring MVC", "Hibernate", "JDBC"],
  },
  { title: "Database", icon: Database, skills: ["MySQL"] },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "Postman", "IntelliJ", "VS Code"],
  },
  { title: "Version Control", icon: GitBranch, skills: ["Git", "GitHub"] },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="bg-card py-12 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-secondary" />
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon; // safer pattern

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20"
                >
                  <Icon size={24} className="text-primary" />
                </motion.div>

                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{
                        delay: i * 0.1 + si * 0.05 + 0.3,
                      }}
                      whileHover={{ scale: 1.12 }}
                      className="cursor-default rounded-full bg-accent/50 px-3 py-1 text-xs font-medium text-accent-foreground hover:bg-primary hover:text-primary-foreground transition"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
