"use client";

import { RefObject, useEffect } from "react";

type Options = {
  gap?: number;
  onProgress?: (progress: number) => void;
};

export const useHorizontalScroll = (
  sectionRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLDivElement | null>,
  { gap = 0, onProgress }: Options = {}
) => {
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    let frame = 0;
    let maxTranslate = 0;

    const update = () => {
      maxTranslate = Math.max(
        0,
        track.scrollWidth - window.innerWidth + gap
      );

      section.style.height = `${window.innerHeight + maxTranslate}px`;

      updatePosition();
    };

    const updatePosition = () => {
      const rect = section.getBoundingClientRect();

      const progress = Math.min(
        Math.max(
          -rect.top /
            (section.offsetHeight - window.innerHeight),
          0
        ),
        1
      );

      track.style.transform = `translate3d(-${progress * maxTranslate}px,0,0)`;

      onProgress?.(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updatePosition);
    };

    const resizeObserver = new ResizeObserver(update);

    resizeObserver.observe(track);

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);

      cancelAnimationFrame(frame);
    };
  }, [gap, sectionRef, trackRef]);


};
