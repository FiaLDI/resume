"use client";

import { motion } from "framer-motion";
import { Github, Lock } from "lucide-react";
import { ProjectItemType } from "../types/project.types";

export const ProjectItem = ({
  project,
}: {
  project: ProjectItemType;
}) => {
  
  return (
    <motion.article
      layout
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
      className="group relative pl-10"
    >
      {/* Timeline */}

      <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800" />

      <div
        className="
          absolute
          left-[-5px]
          top-2
          h-3
          w-3
          rounded-full
          bg-neutral-600
          transition-all
          duration-300
          group-hover:bg-indigo-500
          group-hover:shadow-[0_0_12px_rgba(99,102,241,.8)]
        "
      />

      <div className="space-y-5">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>

          </div>

          {project.isPrivate ? (
            <Lock
              size={18}
              className="text-neutral-500"
            />
          ) : (
            project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="
                  text-neutral-500
                  transition-all
                  hover:text-indigo-400
                  hover:translate-x-1
                "
              >
                <Github size={18} />
              </a>
            )
          )}
        </div>

        <p className="max-w-3xl leading-8 text-neutral-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                text-sm
                text-neutral-400
                after:content-['•']
                after:ml-3
                last:after:hidden
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </motion.article>
  );
};
