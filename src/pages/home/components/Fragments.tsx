import { motion } from "framer-motion";
import ScrollReveal from "../../../components/common/ScrollReveal";
import ImagePlaceholder from "../../../components/common/ImagePlaceholder";
import { fragmentsContent } from "../../../data/gapyeong";
import { fadeUp, stagger } from "../../../lib/animations";

import cafeImg from "../../../assets/images/fragment-cafe.webp";
import trailImg from "../../../assets/images/fragment-trail.webp";
import bridgeImg from "../../../assets/images/fragment-bridge.webp";
import marketImg from "../../../assets/images/fragment-market.webp";
import steamImg from "../../../assets/images/fragment-steam.webp";

export default function Fragments() {
  return (
    <section
      id="fragments"
      data-chapter="fragments"
      className="bg-paper pt-40 pb-32 select-none overflow-hidden"
    >
      {/* Chapter Title */}
      <div className="max-w-[1400px] mx-auto px-16 text-center">
        <ScrollReveal direction="up">
          <h2 className="font-display font-light text-chapter tracking-cinematic text-ink">
            {fragmentsContent.title.korean}
          </h2>
          <p className="font-body font-light text-caption text-stone tracking-widest uppercase mt-3">
            {fragmentsContent.title.english}
          </p>
        </ScrollReveal>
      </div>

      {/* Irregular Scrapbook Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.15)}
        className="max-w-[1400px] mx-auto px-16 mt-20 grid grid-cols-12 auto-rows-auto gap-y-16 gap-x-8"
      >
        {/* Item A (Café) */}
        <motion.div
          variants={fadeUp}
          className="col-span-3 row-start-1 flex flex-col justify-end"
        >
          <div className="rotate-[-2deg] hover:rotate-0 transition-transform duration-500 shadow-sm">
            <ImagePlaceholder
              name={fragmentsContent.imgA.name}
              aspectRatio={fragmentsContent.imgA.aspectRatio}
              description={fragmentsContent.imgA.description}
              prompt={fragmentsContent.imgA.prompt}
              src={cafeImg}
              className="w-full shadow-sm"
            />
          </div>
          <div className="mt-4">
            <p className="font-display italic text-body text-stone">
              {fragmentsContent.captions.cafe.korean}
            </p>
            <p className="font-body text-caption text-stone/60 mt-1">
              {fragmentsContent.captions.cafe.english}
            </p>
          </div>
        </motion.div>

        {/* Item B (Trail) */}
        <motion.div
          variants={fadeUp}
          className="col-start-8 col-span-5 row-start-1"
        >
          <div className="rotate-[1deg] hover:rotate-0 transition-transform duration-500 shadow-sm">
            <ImagePlaceholder
              name={fragmentsContent.imgB.name}
              aspectRatio={fragmentsContent.imgB.aspectRatio}
              description={fragmentsContent.imgB.description}
              prompt={fragmentsContent.imgB.prompt}
              src={trailImg}
              className="w-full shadow-sm"
            />
          </div>
        </motion.div>

        {/* Item C (Bridge) */}
        <motion.div
          variants={fadeUp}
          className="col-start-4 col-span-4 row-start-3 flex flex-col justify-end"
        >
          <div className="rotate-[-1deg] hover:rotate-0 transition-transform duration-500 shadow-sm">
            <ImagePlaceholder
              name={fragmentsContent.imgC.name}
              aspectRatio={fragmentsContent.imgC.aspectRatio}
              description={fragmentsContent.imgC.description}
              prompt={fragmentsContent.imgC.prompt}
              src={bridgeImg}
              className="w-full shadow-sm"
            />
          </div>
          <div className="mt-4">
            <p className="font-display italic text-body text-stone">
              {fragmentsContent.captions.bridge.korean}
            </p>
            <p className="font-body text-caption text-stone/60 mt-1">
              {fragmentsContent.captions.bridge.english}
            </p>
          </div>
        </motion.div>

        {/* Item D (Market) */}
        <motion.div
          variants={fadeUp}
          className="col-start-9 col-span-4 row-start-3"
        >
          <div className="rotate-[2deg] hover:rotate-0 transition-transform duration-500 shadow-sm">
            <ImagePlaceholder
              name={fragmentsContent.imgD.name}
              aspectRatio={fragmentsContent.imgD.aspectRatio}
              description={fragmentsContent.imgD.description}
              prompt={fragmentsContent.imgD.prompt}
              src={marketImg}
              className="w-full shadow-sm"
            />
          </div>
        </motion.div>

        {/* Item E (Steam) */}
        <motion.div
          variants={fadeUp}
          className="col-start-6 col-span-4 row-start-5 flex flex-col justify-end"
        >
          <div className="shadow-sm">
            <ImagePlaceholder
              name={fragmentsContent.imgE.name}
              aspectRatio={fragmentsContent.imgE.aspectRatio}
              description={fragmentsContent.imgE.description}
              prompt={fragmentsContent.imgE.prompt}
              src={steamImg}
              className="w-full shadow-sm"
            />
          </div>
          <div className="mt-4">
            <p className="font-display italic text-body text-stone">
              {fragmentsContent.captions.steam.korean}
            </p>
            <p className="font-body text-caption text-stone/60 mt-1">
              {fragmentsContent.captions.steam.english}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
