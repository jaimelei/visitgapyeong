import ScrollReveal from "../../../components/common/ScrollReveal";
import { letterContent } from "../../../data/gapyeong";

export default function Letter() {
  return (
    <section
      id="letter"
      data-chapter="letter"
      className="bg-paper py-48 select-none overflow-hidden"
    >
      <div className="max-w-[32rem] mx-auto px-8">
        {/* Letter Header */}
        <ScrollReveal direction="up">
          <h2 className="font-display font-light text-subheading text-ink">
            {letterContent.title.korean}
          </h2>
          <p className="font-body font-light text-caption text-stone tracking-[0.15em] mt-2">
            {letterContent.title.english}
          </p>
          <div className="w-12 h-[1px] bg-mist my-8" />
        </ScrollReveal>

        {/* Letter Body - Each stanza wrapped in a ScrollReveal */}
        <div className="space-y-12">
          {letterContent.stanzas.map((stanza, index) => (
            <div key={index}>
              <ScrollReveal direction="up" delay={0.05}>
                <p className="font-display font-light italic text-body leading-[2.2] text-ink whitespace-pre-line">
                  {stanza.korean}
                </p>
                <p className="font-body font-light text-body leading-[2] text-stone mt-4 whitespace-pre-line">
                  {stanza.english}
                </p>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className="mt-16 text-right">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="font-display text-subheading text-ink block">
              {letterContent.signature.korean}
            </span>
            <span className="font-body font-light text-caption text-stone tracking-[0.15em] uppercase block mt-1">
              {letterContent.signature.english}
            </span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
