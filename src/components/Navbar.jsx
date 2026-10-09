import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click & touch
  useEffect(() => {
    const handleClose = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClose);
      document.addEventListener("touchstart", handleClose);
    }
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("touchstart", handleClose);
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-heading text-xl font-bold text-primary">
          SP<span className="text-secondary">.</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(l.href);
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative text-sm font-medium text-foreground/70 transition hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme toggle + Mobile toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setDark(!dark)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-primary/10"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <button
            className="text-foreground md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      setTimeout(() => {
                        const target = document.querySelector(l.href);
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="block w-full py-2 text-base font-medium text-foreground/80 hover:text-primary transition"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}