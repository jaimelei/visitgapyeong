import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, fadeLeft, fadeRight } from "../../lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "fade";
  once?: boolean;
  amount?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  // Select matching variant direction
  const getVariants = () => {
    switch (direction) {
      case "up":
        return fadeUp;
      case "left":
        return fadeLeft;
      case "right":
        return fadeRight;
      case "none":
        return { hidden: {}, visible: {} }; // no-op animation
      case "fade":
      default:
        return fadeIn;
    }
  };

  const selectedVariants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
