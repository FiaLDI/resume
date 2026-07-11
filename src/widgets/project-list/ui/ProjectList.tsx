"use client";

import { useRef, useState } from "react";

import { ProjectItem } from "@/entities/project";
import { useDict } from "@/shared/lib";

import { useHorizontalScroll } from "../model/useHorizontalScroll";
import { Progress } from "./Progress";

export const ProjectList = () => {
  const data = useDict("ProjectWidget");
  const items = useDict("projects");
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useHorizontalScroll(sectionRef, trackRef, {
    gap: 120,
    onProgress: setProgress,
  });

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-[500vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full flex-col px-5 lg:px-20 py-5 lg:py-16">
          <div className="mb-8 shrink-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white">
              {data.title}
            </h2>
            <div className="mt-6">
              <Progress progress={progress} />
            </div>
          </div>
          <div className="flex flex-1 items-center overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-10 h-full will-change-transform"
            >
              {items.items.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
