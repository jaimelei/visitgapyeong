import { motion } from "framer-motion";
import { useActiveChapter } from "../../hooks/useActiveChapter";

interface ChapterNavProps {
  chapters: { id: string; label: string }[];
}

export default function ChapterNav({ chapters }: ChapterNavProps) {
  const activeChapter = useActiveChapter(chapters.map((c) => c.id));

  const handleDotClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 items-center select-none">
      {chapters.map((chapter) => {
        const isActive = activeChapter === chapter.id;

        return (
          <button
            key={chapter.id}
            onClick={() => handleDotClick(chapter.id)}
            className="group relative flex items-center justify-center w-4 h-4 cursor-pointer focus:outline-none"
            aria-label={`Scroll to ${chapter.label}`}
          >
            {/* Hover Tooltip Label */}
            <span className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-body text-small text-stone tracking-wider bg-paper/90 px-2 py-0.5 rounded shadow-sm border border-mist/20">
              {chapter.label}
            </span>

            {/* Dot */}
            <div className="relative flex items-center justify-center">
              {isActive && (
                <motion.div
                  layoutId="activeChapterDot"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-2 h-2 bg-ink rounded-full"
                />
              )}
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  isActive ? "bg-transparent" : "bg-stone/40 group-hover:bg-stone/75"
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
