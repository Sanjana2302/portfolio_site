// import { motion, useScroll } from "framer-motion";

// export default function ScrollProgress() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <motion.div
//       style={{ scaleX: scrollYProgress }}
//       className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-primary"
//     />
//   );
// }

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div
      style={{ scaleX: smoothProgress }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-primary"
    />
  );
}
