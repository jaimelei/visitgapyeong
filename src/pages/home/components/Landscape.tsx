import { motion } from "framer-motion";
import ScrollReveal from "../../../components/common/ScrollReveal";
import ImagePlaceholder from "../../../components/common/ImagePlaceholder";
import { useParallax } from "../../../hooks/useParallax";
import { landscapeContent } from "../../../data/gapyeong";

import mountainsImg from "../../../assets/images/landscape-mountains.webp";
import riverImg from "../../../assets/images/landscape-river.webp";
import forestImg from "../../../assets/images/landscape-forest.webp";

export default function Landscape() {
  const { ref: containerRef, y } = useParallax(1.2);

  return (
    <section
      id="landscape"
      data-chapter="landscape"
      className="bg-paper py-32 select-none overflow-hidden"
    >
      {/* Chapter title block */}
      <div className="max-w-[1400px] mx-auto px-16">
        <ScrollReveal direction="up">
          <h2 className="font-display font-light text-chapter tracking-cinematic text-ink">
            {landscapeContent.title.korean}
          </h2>
          <p className="font-body font-light text-caption text-stone tracking-widest uppercase mt-3">
            {landscapeContent.title.english}
          </p>
        </ScrollReveal>
      </div>

      {/* Full-bleed panorama (Image 1) */}
      <div
        ref={containerRef}
        className="mt-20 w-full h-[60vh] overflow-hidden relative"
      >
        <motion.div
          style={{ y }}
          className="absolute left-0 right-0 h-[80vh] -top-[10vh] w-full"
        >
          <ImagePlaceholder
            name={landscapeContent.img1.name}
            aspectRatio={landscapeContent.img1.aspectRatio}
            description={landscapeContent.img1.description}
            prompt={landscapeContent.img1.prompt}
            src={mountainsImg}
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Image 2 + text row */}
      <div className="mt-32 max-w-[1400px] mx-auto px-16 flex gap-16 items-start">
        <div className="w-[40%] ml-[5%]">
          <ScrollReveal direction="left">
            <ImagePlaceholder
              name={landscapeContent.img2.name}
              aspectRatio={landscapeContent.img2.aspectRatio}
              description={landscapeContent.img2.description}
              prompt={landscapeContent.img2.prompt}
              src={riverImg}
              className="w-full shadow-sm"
            />
          </ScrollReveal>
        </div>

        <div className="w-[35%] pt-16 pl-12">
          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-display font-light text-subheading text-ink whitespace-pre-line leading-relaxed">
              {landscapeContent.block2.korean}
            </p>
            <p className="font-body font-light text-body text-stone mt-4 whitespace-pre-line leading-relaxed">
              {landscapeContent.block2.english}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Image 3 + caption */}
      <div className="mt-32 max-w-[1400px] mx-auto px-16">
        <div className="w-[60%] ml-auto">
          <ScrollReveal direction="up">
            <ImagePlaceholder
              name={landscapeContent.img3.name}
              aspectRatio={landscapeContent.img3.aspectRatio}
              description={landscapeContent.img3.description}
              prompt={landscapeContent.img3.prompt}
              src={forestImg}
              className="w-full shadow-sm"
            />
          </ScrollReveal>
          <div className="pr-8 mt-4">
            <ScrollReveal direction="up" delay={0.15}>
              <p className="font-display italic text-body text-stone">
                {landscapeContent.caption3.korean}
              </p>
              <p className="font-body text-caption text-stone/60 mt-2">
                {landscapeContent.caption3.english}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
