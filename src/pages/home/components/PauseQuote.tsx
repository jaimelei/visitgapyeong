import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/animations";

interface PauseQuoteProps {
  content: {
    korean: string;
    english: string;
  };
  id: string;
  showDivider?: boolean;
}

export default function PauseQuote({ content, id, showDivider = false }: PauseQuoteProps) {
  return (
    <section
      id={id}
      data-chapter={id}
      className="w-full h-screen bg-paper flex items-center justify-center select-none overflow-hidden"
    >
      <div className="px-6 text-center">
        {showDivider && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="w-16 h-[1px] bg-mist mx-auto mb-12 origin-center"
          />
        )}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{
            duration: 2.0,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          <h3 className="font-display font-light text-quote leading-relaxed text-ink whitespace-pre-line">
            {content.korean}
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{
            duration: 2.0,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          <p className="font-body font-light text-body text-stone mt-8 whitespace-pre-line">
            {content.english}
          </p>
        </motion.div>
      </div>
    </section>
  );
}