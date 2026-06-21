import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/animations";
import { endingContent } from "../../../data/gapyeong";

export default function Ending() {
  return (
    <section
      id="ending"
      data-chapter="ending"
      className="w-full h-screen bg-ink flex flex-col items-center justify-center select-none overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{
          duration: 2.5,
          ease: [0.25, 0.1, 0.25, 1.0], // custom cubic bezier
        }}
        className="flex flex-col items-center text-center"
      >
        <span className="font-display font-light text-subheading text-paper/80 tracking-[0.15em] block">
          {endingContent.korean}
        </span>
        <span className="font-body font-light text-caption text-paper/40 tracking-widest uppercase mt-2 block">
          {endingContent.english}
        </span>
        <span className="font-body font-light text-small text-stone/50 tracking-[0.1em] mt-8 block">
          {endingContent.coordinates}
        </span>
      </motion.div>
    </section>
  );
}
