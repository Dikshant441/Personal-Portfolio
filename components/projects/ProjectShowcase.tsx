"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import type { ProjectShowcase as ProjectType } from "./types";
import ProjectMedia from "./ProjectMedia";
import { trackEvent } from "@/lib/analytics";

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
      className="relative overflow-hidden rounded-lg border border-border border-t-2 border-t-accent bg-card p-6 shadow-sm sm:p-8"
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
          <span className="small-caps text-accent">
            Project 0{index + 1}
          </span>
          <h3 className="mt-2 font-serif text-2xl leading-[1.2] text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-base font-medium text-accent">
            {project.tagline}
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-accent"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-muted-foreground"
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
                className="inline-flex min-h-[44px] touch-manipulation items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium tracking-[0.05em] text-accent-foreground shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-secondary hover:shadow-md active:translate-y-0"
                onClick={() => trackEvent("project_demo_click", { project: project.slug })}
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
                className="inline-flex min-h-[44px] touch-manipulation items-center gap-2 rounded-md border border-foreground bg-transparent px-4 py-2 text-sm font-medium tracking-[0.05em] text-foreground transition-all duration-200 ease-out hover:border-accent hover:bg-muted hover:text-accent"
                onClick={() => trackEvent("project_repo_click", { project: project.slug })}
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
