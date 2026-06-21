import { motion } from "framer-motion";
import { arrivalContent } from "../../../data/gapyeong";
import ImagePlaceholder from "../../../components/common/ImagePlaceholder";
import heroImg from "../../../assets/images/arrival-hero.webp";
import { fadeIn, stagger, defaultTransition } from "../../../lib/animations";

export default function Arrival() {
  const koreanTitle = ["가", "평"];

  // Custom animations for letters to handle the staggered reveal
  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: defaultTransition
    }
  };

  return (
    <section 
      id="arrival" 
      data-chapter="arrival" 
      className="relative w-full h-screen overflow-hidden bg-ink select-none"
    >
      {/* Background Image utilizing local image */}
      <ImagePlaceholder
        name={arrivalContent.image.name}
        aspectRatio={arrivalContent.image.aspectRatio}
        description={arrivalContent.image.description}
        prompt={arrivalContent.image.prompt}
        src={heroImg}
        className="absolute inset-0 w-full h-full"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/75" />

      {/* Content centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Title Stagger */}
        <motion.h1
          variants={stagger(0.4)}
          initial="hidden"
          animate="visible"
          className="font-display font-light text-hero tracking-[0.2em] text-paper flex gap-8 mb-4"
        >
          {koreanTitle.map((char, index) => (
            <motion.span key={index} variants={letterVariant}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5, duration: 1.0 }}
          className="font-body font-light text-caption tracking-widest text-paper/60 uppercase"
        >
          Gapyeong
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ delay: 2.5, repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-body text-small uppercase tracking-widest text-paper/30">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-paper/30 to-transparent" />
      </motion.div>
    </section>
  );
}
