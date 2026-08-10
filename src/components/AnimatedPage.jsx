import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
