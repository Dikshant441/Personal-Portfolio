"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import type { ProjectShowcase as ProjectType } from "./types";
import ProjectMedia from "./ProjectMedia";

type Props = {
  project: ProjectType;
  index: number;
};

export default function ProjectShowcase({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reverse = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-white/5 sm:p-8"
    >
      <div
        className={`grid gap-8 lg:grid-cols-2 lg:items-stretch ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <ProjectMedia
          videoUrl={project.videoUrl}
          imageUrl={project.imageUrl}
          title={project.title}
        />

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Project 0{index + 1}
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-base font-medium text-indigo-600/90 dark:text-indigo-300/90">
            {project.tagline}
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-700 dark:text-white/75">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-2 text-sm text-gray-700 dark:text-white/70"
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-gray-700 shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white/80"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90"
              >
                {project.demoLabel ?? "Live Demo"}
                <ArrowIcon />
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
              >
                <GitHubIcon />
                View Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.52-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.39-2.7 5.36-5.27 5.64.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.22 21.39 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}
