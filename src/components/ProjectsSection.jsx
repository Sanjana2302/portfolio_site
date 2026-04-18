import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Clear Your Debt Way",
    tech: ["React.js", "Tailwind", "Spring Boot", "MySQL"],
    description:
      "A full-stack debt management platform featuring user profile systems, email notifications, and seamless API integration for financial tracking.",
    link: "https://www.clearurdebt.com/",
  },
  {
    title: "Shamudri Tourism",
    tech: ["REST APIs", "Spring Boot", "React.js", "MySQL"],
    description:
      "A dynamic tourism website with an admin panel, combining REST APIs with full frontend–backend integration for a smooth booking experience.",
    link: "https://www.shamudritourism.ae/",
  },
  {
    title: "Triangle Application",
    tech: ["NFC Integration", "Spring Boot", "React.js"],
    description:
      "An artist platform with NFC integration and tiered subscription plans — Free, Premium, and Platinum.",
    link: null,
  },
  {
    title: "Ocean Holiday Homes",
    tech: ["React.js", "Tailwind", "Spring Boot", "MySQL"],
    description:
      "A tourist website for holiday home rentals, offering a seamless browsing and booking experience with a modern UI.",
    link: "https://theoceanholidayhomes.ae/",
  },
  {
    title: "Sanjeevani Hospital Website",
    tech: ["React.js", "Tailwind", "Spring Boot", "MySQL"],
    description:
      "A professional hospital website for Sanjeevani Clinic featuring doctor listings, services, and patient appointment information.",
    link: "https://sanjeevani-clinic-six.vercel.app/",
  },
  {
    title: "Book Inventory",
    tech: ["React.js", "Tailwind", "Spring Boot", "MySQL"],
    description:
      "Manage your collection with style and elegance. A full-stack book inventory app to track, organize, and manage your personal book collection seamlessly.",
    link: "https://sanjanapawar-nexgensis-bookmanagement.netlify.app/",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-secondary" />
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <div className="relative z-10 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {project.title}
                  </h3>

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ rotate: -45 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink
                        size={18}
                        className="text-muted-foreground group-hover:text-primary"
                      />
                    </motion.a>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
