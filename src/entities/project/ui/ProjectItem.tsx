"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock } from "lucide-react";

import { ProjectItemType } from "../types/project.types";

const categoryColors = {
  Core: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
  Contribution: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
  Pet: "bg-orange-500/15 border-orange-500/30 text-orange-300",
  Legacy: "bg-neutral-700/40 border-neutral-600 text-neutral-300",
};

export const ProjectItem = ({
  project,
}: {
  project: ProjectItemType;
}) => {
  return (
    <article
      className="group relative flex h-full w-[450px] shrink-0 flex-col overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-neutral-900 via-neutral-900 to-black p-8 transition-all duration-300 hover:border-indigo-500/40"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative flex items-center justify-between">
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[project.category]}`}>
          {project.category}
        </span>

        {project.isPrivate ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400">
            <Lock size={18} />
          </div>
        ) : (
          project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-400"
            >
              <Github size={18} />
            </a>
          )
        )}
      </div>

      <div className="relative mt-3">
        <h3 className="text-3xl font-bold tracking-tight text-white truncate">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-4 text-[15px] leading-7 text-neutral-400">
          {project.description}
        </p>
      </div>

      <div className="relative mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300 transition-colors group-hover:border-indigo-500/20 group-hover:bg-indigo-500/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-sm text-neutral-500">
            {project.isPrivate ? "Private Repository" : "Open Source"}
          </span>

          {!project.isPrivate && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-indigo-400 transition-all duration-300"
            >
              View Project
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
