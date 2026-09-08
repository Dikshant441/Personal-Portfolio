"use client";

import { useSectionView } from "@/lib/hooks";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsSection() {
  const { ref } = useSectionView("Projects", 0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-24 mb-16 sm:mb-28 w-full max-w-4xl xl:max-w-6xl"
    >
      <div className="mb-4 flex items-center gap-4">
        <span aria-hidden className="rule flex-1" />
        <span className="small-caps text-accent">Selected Work</span>
        <span aria-hidden className="rule flex-1" />
      </div>

      <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:mb-14 sm:text-lg">
        Tap any card to see the brief, stack, and how to run it locally.
      </p>

      <ProjectsGrid />
    </section>
  );
}
