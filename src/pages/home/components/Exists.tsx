import ScrollReveal from "../../../components/common/ScrollReveal";
import ImagePlaceholder from "../../../components/common/ImagePlaceholder";
import villageImg from "../../../assets/images/exists-village.webp";
import { existsContent } from "../../../data/gapyeong";

export default function Exists() {
  return (
    <section
      id="exists"
      data-chapter="exists"
      className="bg-paper py-40 select-none overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-16">
        {/* Top Split Block */}
        <div className="flex gap-16 items-start">
          {/* Asymmetric Left Column Image (55%) */}
          <ScrollReveal direction="up" className="w-[55%]">
            <ImagePlaceholder
              name={existsContent.image.name}
              aspectRatio={existsContent.image.aspectRatio}
              description={existsContent.image.description}
              prompt={existsContent.image.prompt}
              src={villageImg}
              className="w-full shadow-sm"
            />
          </ScrollReveal>

          {/* Asymmetric Right Column Text (35% with pt-32 offset) */}
          <div className="w-[35%] pt-32">
            <ScrollReveal direction="up" delay={0.3}>
              <h2 className="font-display font-light text-chapter text-ink whitespace-pre-line leading-relaxed">
                {existsContent.block1.korean}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.45}>
              <p className="font-body font-light text-body text-stone mt-6 whitespace-pre-line leading-relaxed">
                {existsContent.block1.english}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Description Block */}
        <div className="mt-32 max-w-[650px] ml-[15%]">
          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-display font-light text-subheading text-ink whitespace-pre-line leading-loose">
              {existsContent.block2.korean[0]}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.35}>
            <p className="font-display font-light text-subheading text-ink whitespace-pre-line leading-loose mt-6">
              {existsContent.block2.korean[1]}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5}>
            <p className="font-body font-light text-body text-stone mt-6 whitespace-pre-line leading-loose">
              {existsContent.block2.english[0]}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.65}>
            <p className="font-body font-light text-body text-stone mt-6 whitespace-pre-line leading-loose">
              {existsContent.block2.english[1]}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}