import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, MessageCircle } from "lucide-react";

const items = [
  { icon: Award, label: "Soft Skill Development Award" },
  { icon: MessageCircle, label: "Strong Communication" },
  { icon: Users, label: "Team Collaboration" },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-card py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Achievements & <span className="text-primary">Soft Skills</span>
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-secondary" />
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
}
