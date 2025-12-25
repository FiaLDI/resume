"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { useFullpage } from "./useFullpage";
import { FullpageContext } from "./FullpageContext";
import { FullpageProgress } from "./FullpageProgress";
import { LanguageSwitcher } from "@/features/language-switcher/ui/LanguageSwitcher";
import { AnimatedBackground } from "@/features/animated-background/ui/AnimatedBackground";

/* ---------------- CONFIG ---------------- */

const SWIPE_THRESHOLD = 80;
const WHEEL_THRESHOLD = 35;
const WHEEL_COOLDOWN_MS = 700;

/* ---------------- HELPERS ---------------- */

function getScrollableParent(target: EventTarget | null): HTMLElement | null {
  let el = target as HTMLElement | null;
  while (el) {
    if (el.hasAttribute?.("data-scrollable")) return el;
    el = el.parentElement;
  }
  return null;
}

function canScroll(el: HTMLElement, delta: number) {
  const { scrollTop, scrollHeight, clientHeight } = el;
  if (scrollHeight <= clientHeight) return false;

  if (delta > 0) return scrollTop + clientHeight < scrollHeight - 1;
  if (delta < 0) return scrollTop > 0;
  return false;
}

/* ---------------- COMPONENT ---------------- */

export function FullpageLayout({ sections }: { sections: ReactNode[] }) {
  const { index, setIndex, progress, projectsProgress } = useFullpage({
    sectionCount: sections.length,
  });

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const max = sections.length - 1;
  const lastWheelTs = useRef(0);
  const touchStartY = useRef(0);

  /* ---------- BLOCK BODY SCROLL ON MOBILE ---------- */
  useEffect(() => {
    if (!isMobile) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile]);

  /* ---------- DESKTOP WHEEL ---------- */
  useEffect(() => {
    if (isMobile) return;

    const onWheel = (e: WheelEvent) => {
      const scrollable = getScrollableParent(e.target);

      if (scrollable && canScroll(scrollable, e.deltaY)) return;
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

      const now = Date.now();
      if (now - lastWheelTs.current < WHEEL_COOLDOWN_MS) return;
      lastWheelTs.current = now;

      e.preventDefault();

      if (e.deltaY > 0 && index < max) setIndex(index + 1);
      if (e.deltaY < 0 && index > 0) setIndex(index - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [index, max, setIndex, isMobile]);

  /* ---------- MOBILE SWIPE ---------- */
  useEffect(() => {
    if (!isMobile) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // 🔥 критично
    };

    const onTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const delta = endY - touchStartY.current;

      if (Math.abs(delta) < SWIPE_THRESHOLD) return;

      const scrollable = getScrollableParent(e.target);
      if (scrollable && canScroll(scrollable, delta < 0 ? 1 : -1)) return;

      if (delta < 0 && index < max) setIndex(index + 1);
      if (delta > 0 && index > 0) setIndex(index - 1);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [index, max, setIndex, isMobile]);

  /* ---------- RENDER ---------- */

  return (
    <FullpageContext.Provider
      value={{
        index,
        progress,
        projectsProgress,
        setIndex,
        lockScroll: false,
        setLockScroll: () => {},
      }}
    >
      {!isMobile && <AnimatedBackground />}

      <div className="relative w-full h-screen overflow-hidden">
        <FullpageProgress />
        <LanguageSwitcher />

        <motion.div
          className="absolute inset-0"
          style={{ willChange: "transform" }}
          animate={{ translateY: `-${index * 100}vh` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag={!isMobile ? "y" : false}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (isMobile) return;

            if (info.offset.y < -SWIPE_THRESHOLD && index < max)
              setIndex(index + 1);
            if (info.offset.y > SWIPE_THRESHOLD && index > 0)
              setIndex(index - 1);
          }}
        >
          {sections.map((section, i) => (
            <section key={i} className="h-screen w-full">
              {section}
            </section>
          ))}
        </motion.div>
      </div>
    </FullpageContext.Provider>
  );
}
