"use client";

import { ProjectItem } from "@/entities/project";
import { useDict } from "@/shared/lib";
import { useProjectCategories } from "../model/useProjectCategories";
import { ActiveCategory } from "@/shared/ui/animation";

export const ProjectList = () => {
  const data = useDict("ProjectWidget");
  const items = useDict("projects");

  const {
    activeCategory,
    setActiveCategory,
    grouped,
    categories,
  } = useProjectCategories(items.items);

  return (
    <section
      id="project"
      data-scrollable
      className="min-h-screen lg:h-screen lg:overflow-y-auto lg:no-scrollbar"
    >
      <div className="max-w-5xl mx-auto px-6 py-16 text-white">

        <div className="mb-20">
          <h2 className="text-5xl font-semibold tracking-tight">
            {data.title}
          </h2>

          <div className="mt-5 h-px w-32 bg-indigo-500" />
        </div>

        <div className="space-y-24 pb-32">

          {categories.map((category) => (
            <ActiveCategory
              key={category}
              category={category}
              isActive={activeCategory === category}
              setActiveCategory={setActiveCategory}
            >
              <div className="mb-12">
                <p className="text-xs uppercase tracking-[0.35em] text-indigo-400">
                  {category}
                </p>

                <p className="mt-3 max-w-2xl text-neutral-400">
                  {items.categoriesMeta[category]}
                </p>
              </div>

              <div className="space-y-12">
                {grouped[category].map((project) => (
                  <ProjectItem
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </ActiveCategory>
          ))}

        </div>
      </div>
    </section>
  );
};
