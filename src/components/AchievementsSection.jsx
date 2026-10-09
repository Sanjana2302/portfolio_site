import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Users,
  MessageCircle,
  Code,
  Mail,
  Phone,
  Link2,
  GitFork,
} from "lucide-react";

const items = [
  { icon: Award, label: "Soft Skill Development Award" },
  { icon: Code, label: "Java Full Stack Developer" },
  // { icon: MessageCircle, label: "Strong Communication" },
  // { icon: Users, label: "Team Collaboration" },
];

const contacts = [
  {
    icon: Mail,
    label: "sanjanapawar7090@gmail.com",
    href: "mailto:sanjanapawar7090@gmail.com",
  },
  { icon: Phone, label: "+91-8007649252", href: "tel:+918007649252" },
  {
    icon: Link2,
    label: "LinkedIn",
    href: "www.linkedin.com/in/sanjana-pawar-b48000325",
  },
  { icon: GitFork, label: "GitHub", href: "https://github.com/Sanjana2302/" },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="bg-card py-12 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT — Achievements & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Achievements & <span className="text-primary">Soft Skills</span>
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />

            <div className="mt-10 flex flex-wrap gap-4">
              {items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 shadow-sm"
                >
                  <item.icon size={20} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Get In Touch */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
            <p className="mt-4 text-muted-foreground">
              I'm always open to new opportunities and collaborations. Let's
              connect!
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    whileHover={{ scale: 1.03, x: 6 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 shadow-sm transition-all hover:border-primary/30"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"
                    >
                      <Icon size={18} className="text-primary" />
                    </motion.div>
                    <span className="text-sm font-medium text-foreground">
                      {c.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
