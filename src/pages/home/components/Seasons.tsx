import { motion } from "framer-motion";
import ScrollReveal from "../../../components/common/ScrollReveal";
import ImagePlaceholder from "../../../components/common/ImagePlaceholder";
import { seasonsContent } from "../../../data/gapyeong";
import { fadeUp } from "../../../lib/animations";

import springImg from "../../../assets/images/season-spring.webp";
import summerImg from "../../../assets/images/season-summer.webp";
import autumnImgA from "../../../assets/images/season-summer-a.webp";
import autumnImgB from "../../../assets/images/season-summer-b.webp";
import autumnImgC from "../../../assets/images/season-summer-c.webp";
import winterImg from "../../../assets/images/season-winter.webp";

export default function Seasons() {
  return (
    <section
      id="seasons"
      data-chapter="seasons"
      className="bg-paper pt-40 pb-32 select-none overflow-hidden"
    >
      {/* Chapter Title */}
      <div className="max-w-[1400px] mx-auto px-16 text-center">
        <ScrollReveal direction="up">
          <h2 className="font-display font-light text-chapter tracking-cinematic text-ink">
            {seasonsContent.title.korean}
          </h2>
          <p className="font-body font-light text-caption text-stone tracking-widest uppercase mt-3">
            {seasonsContent.title.english}
          </p>
        </ScrollReveal>
      </div>

      {/* Spring */}
      <div className="mt-32 max-w-[1400px] mx-auto px-16 flex items-start gap-16">
        <div className="w-[35%] pl-[8%] pt-8">
          <ScrollReveal direction="up">
            <span className="font-display font-semibold text-subheading text-spring">
              {seasonsContent.spring.labelKorean}
            </span>
            <div className="font-body font-light text-small text-spring/70 tracking-widest uppercase mt-1">
              {seasonsContent.spring.labelEnglish}
            </div>
            <div className="mt-8 font-display font-light text-subheading text-ink whitespace-pre-line leading-relaxed">
              {seasonsContent.spring.textKorean}
            </div>
            <div className="mt-4 font-body font-light text-body text-stone whitespace-pre-line leading-relaxed">
              {seasonsContent.spring.textEnglish}
            </div>
          </ScrollReveal>
        </div>

        <div className="w-[50%] ml-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <ImagePlaceholder
              name={seasonsContent.spring.image.name}
              aspectRatio={seasonsContent.spring.image.aspectRatio}
              description={seasonsContent.spring.image.description}
              prompt={seasonsContent.spring.image.prompt}
              src={springImg}
              className="w-full shadow-sm"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Summer */}
      <div className="mt-32 w-full relative h-[60vh] overflow-hidden">
        <ScrollReveal direction="fade" className="absolute inset-0 w-full h-full">
          <ImagePlaceholder
            name={seasonsContent.summer.image.name}
            aspectRatio={seasonsContent.summer.image.aspectRatio}
            description={seasonsContent.summer.image.description}
            prompt={seasonsContent.summer.image.prompt}
            src={summerImg}
            className="w-full h-full object-cover"
          />
        </ScrollReveal>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-12 left-16 max-w-[500px]">
          <ScrollReveal direction="up">
            <span className="font-display font-semibold text-subheading text-spring">
              {seasonsContent.summer.labelKorean}
            </span>
            <span className="font-body font-light text-small text-paper/70 tracking-widest uppercase ml-3 inline-block align-middle">
              / {seasonsContent.summer.labelEnglish}
            </span>
            <h3 className="font-display font-light text-subheading text-paper mt-4 leading-relaxed">
              {seasonsContent.summer.textKorean}
            </h3>
            <p className="font-body font-light text-body text-paper/70 mt-2 leading-relaxed">
              {seasonsContent.summer.textEnglish}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Autumn */}
      <div className="mt-32 max-w-[1400px] mx-auto px-16">
        <div className="ml-[8%]">
          <ScrollReveal direction="up">
            <span className="font-display font-semibold text-subheading text-autumn">
              {seasonsContent.autumn.labelKorean}
            </span>
            <div className="font-body font-light text-small text-autumn/70 tracking-widest uppercase mt-1">
              {seasonsContent.autumn.labelEnglish}
            </div>
            <div className="mt-6 font-display font-light text-subheading text-ink whitespace-pre-line leading-relaxed">
              {seasonsContent.autumn.textKorean}
            </div>
            <div className="mt-4 font-body font-light text-body text-stone whitespace-pre-line leading-relaxed">
              {seasonsContent.autumn.textEnglish}
            </div>
          </ScrollReveal>
        </div>

        {/* Images container */}
        <div className="mt-12 relative h-[520px] w-full">
          {/* Image A */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="absolute left-[5%] top-0 w-[320px] rotate-[-3deg] shadow-md hover:rotate-0 transition-transform duration-500 z-10"
          >
            <ImagePlaceholder
              name={seasonsContent.autumn.imgA.name}
              aspectRatio={seasonsContent.autumn.imgA.aspectRatio}
              description={seasonsContent.autumn.imgA.description}
              prompt={seasonsContent.autumn.imgA.prompt}
              src={autumnImgA}
              className="w-full"
            />
          </motion.div>

          {/* Image B */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="absolute left-[30%] top-[40px] w-[350px] rotate-[2deg] shadow-md hover:rotate-0 transition-transform duration-500 z-20"
          >
            <ImagePlaceholder
              name={seasonsContent.autumn.imgB.name}
              aspectRatio={seasonsContent.autumn.imgB.aspectRatio}
              description={seasonsContent.autumn.imgB.description}
              prompt={seasonsContent.autumn.imgB.prompt}
              src={autumnImgB}
              className="w-full"
            />
          </motion.div>

          {/* Image C */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-[10%] top-[80px] w-[300px] rotate-[-1deg] shadow-md hover:rotate-0 transition-transform duration-500 z-10"
          >
            <ImagePlaceholder
              name={seasonsContent.autumn.imgC.name}
              aspectRatio={seasonsContent.autumn.imgC.aspectRatio}
              description={seasonsContent.autumn.imgC.description}
              prompt={seasonsContent.autumn.imgC.prompt}
              src={autumnImgC}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Winter */}
      <div className="mt-40 mb-16 max-w-[1400px] mx-auto px-16 flex flex-col items-center text-center py-24 bg-winter/10 rounded-sm">
        <ScrollReveal direction="up" className="flex flex-col items-center">
          <span className="font-display font-semibold text-subheading text-stone">
            {seasonsContent.winter.labelKorean}
          </span>
          <div className="font-body font-light text-small text-stone/70 tracking-widest uppercase mt-1">
            {seasonsContent.winter.labelEnglish}
          </div>
          
          <div className="w-[35%] mt-8 shadow-sm">
            <ImagePlaceholder
              name={seasonsContent.winter.image.name}
              aspectRatio={seasonsContent.winter.image.aspectRatio}
              description={seasonsContent.winter.image.description}
              prompt={seasonsContent.winter.image.prompt}
              src={winterImg}
              className="w-full"
            />
          </div>

          <div className="mt-8 max-w-[28ch] font-display font-light text-subheading text-ink whitespace-pre-line leading-relaxed">
            {seasonsContent.winter.textKorean}
          </div>
          <div className="mt-4 max-w-[28ch] font-body font-light text-body text-stone whitespace-pre-line leading-relaxed">
            {seasonsContent.winter.textEnglish}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
