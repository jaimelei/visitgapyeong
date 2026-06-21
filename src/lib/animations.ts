export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

export const stagger = (staggerAmount = 0.1) => ({
  visible: {
    transition: {
      staggerChildren: staggerAmount
    }
  }
});

export const defaultTransition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1.0] as const
};

export const slowTransition = {
  duration: 1.5,
  ease: [0.25, 0.1, 0.25, 1.0] as const
};

export const cinematicTransition = {
  duration: 2.5,
  ease: [0.25, 0.1, 0.25, 1.0] as const
};

