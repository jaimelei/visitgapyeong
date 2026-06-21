import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

/**
 * Attaches a scroll-linked parallax y-offset to a container ref.
 * @param speed - multiplier for the translation depth (e.g. 1 = standard depth)
 */
export function useParallax(speed = 1) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map to numeric pixel translation (e.g., -150px to 150px) for smooth GPU-accelerated motion
  const y = useTransform(scrollYProgress, [0, 1], [-150 * speed, 150 * speed]);

  return { ref, y };
}

