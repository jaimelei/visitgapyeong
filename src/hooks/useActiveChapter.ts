import { useEffect, useState } from "react";

/**
 * Tracks which chapter element is currently active in the viewport.
 * @param chapterIds - Array of DOM element IDs to observe
 * @returns The ID of the currently active chapter
 */
export function useActiveChapter(chapterIds: string[]) {
  const [activeChapter, setActiveChapter] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveChapter(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe elements
    chapterIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      chapterIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [chapterIds]);

  return activeChapter;
}
