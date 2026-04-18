import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Link2, GitFork } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "sanjanapawar7090@gmail.com",
    href: "mailto:sanjanapawar7090@gmail.com",
  },
  {
    icon: Phone,
    label: "+91-8007649252",
    href: "tel:+918007649252",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: GitFork,
    label: "GitHub",
    href: "https://github.com",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-secondary" />

          <p className="mt-6 text-muted-foreground">
            I'm always open to new opportunities and collaborations. Let's
            connect!
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-5">
          {contacts.map((c, i) => {
            const Icon = c.icon; // safer pattern
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{
                  scale: 1.05,
                  x: 6,
                  boxShadow: "0 10px 30px -10px oklch(0.48 0.1 140 / 0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full max-w-md items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10"
                >
                  <Icon size={20} className="text-primary" />
                </motion.div>

                <span className="text-sm font-medium text-foreground">
                  {c.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
