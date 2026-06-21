import ScrollReveal from "../../../components/common/ScrollReveal";
import ImagePlaceholder from "../../../components/common/ImagePlaceholder";
import { fragmentsContent } from "../../../data/gapyeong";

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

      <div className="max-w-[1400px] mx-auto px-16 mt-20 flex flex-col gap-20">

        {/* Row 1: Café (left) + Trail (right) */}
        <ScrollReveal direction="up" amount={0.15}>
          <div className="grid grid-cols-12 gap-x-8 items-end">
            {/* Café */}
            <div className="col-span-3 flex flex-col">
              <div className="rotate-[-2deg] hover:rotate-0 transition-transform duration-500 shadow-sm">
                <ImagePlaceholder
                  name={fragmentsContent.imgA.name}
                  aspectRatio={fragmentsContent.imgA.aspectRatio}
                  description={fragmentsContent.imgA.description}
                  prompt={fragmentsContent.imgA.prompt}
                  src={cafeImg}
                  className="w-full"
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
            </div>

            {/* Trail */}
            <div className="col-start-8 col-span-5">
              <div className="rotate-[1deg] hover:rotate-0 transition-transform duration-500 shadow-sm">
                <ImagePlaceholder
                  name={fragmentsContent.imgB.name}
                  aspectRatio={fragmentsContent.imgB.aspectRatio}
                  description={fragmentsContent.imgB.description}
                  prompt={fragmentsContent.imgB.prompt}
                  src={trailImg}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Row 2: Bridge (center-left) + Market (right) */}
        <ScrollReveal direction="up" amount={0.15}>
          <div className="grid grid-cols-12 gap-x-8 items-end">
            {/* Bridge */}
            <div className="col-start-4 col-span-4 flex flex-col">
              <div className="rotate-[-1deg] hover:rotate-0 transition-transform duration-500 shadow-sm">
                <ImagePlaceholder
                  name={fragmentsContent.imgC.name}
                  aspectRatio={fragmentsContent.imgC.aspectRatio}
                  description={fragmentsContent.imgC.description}
                  prompt={fragmentsContent.imgC.prompt}
                  src={bridgeImg}
                  className="w-full"
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
            </div>

            {/* Market */}
            <div className="col-start-9 col-span-4">
              <div className="rotate-[2deg] hover:rotate-0 transition-transform duration-500 shadow-sm">
                <ImagePlaceholder
                  name={fragmentsContent.imgD.name}
                  aspectRatio={fragmentsContent.imgD.aspectRatio}
                  description={fragmentsContent.imgD.description}
                  prompt={fragmentsContent.imgD.prompt}
                  src={marketImg}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Row 3: Steam (center) */}
        <ScrollReveal direction="up" amount={0.15}>
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-start-6 col-span-4 flex flex-col">
              <div className="shadow-sm">
                <ImagePlaceholder
                  name={fragmentsContent.imgE.name}
                  aspectRatio={fragmentsContent.imgE.aspectRatio}
                  description={fragmentsContent.imgE.description}
                  prompt={fragmentsContent.imgE.prompt}
                  src={steamImg}
                  className="w-full"
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
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
