import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border bg-card py-8 px-6 text-center"
    >
      <p className="text-sm text-muted-foreground">
        Thank you for visiting my portfolio !!! Your time means a lot to me.
      </p>
    </motion.footer>
  );
}
