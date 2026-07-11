"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { label: "Home", id: "hero" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "project" },
  { label: "Timeline", id: "timeline" },
  { label: "Contact", id: "contact" },
];

export function FullpageProgress() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const center = window.innerHeight / 2;

      let current = SECTIONS[0].id;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= center && rect.bottom >= center) {
          current = section.id;
          break;
        }
      }

      setActive(current);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-black/40 backdrop-blur-md rounded-xl px-4 py-2">
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          data-active={active === section.id}
          onClick={() =>
            document.getElementById(section.id)?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className=" text-sm text-neutral-400 transition-all hover:text-white data-[active=true]:text-indigo-400 data-[active=true]:drop-shadow-[0_0_8px_rgb(129_140_248)]"
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}