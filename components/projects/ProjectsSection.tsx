"use client";

import SectionHeading from "@/components/Section-heading";
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
      <SectionHeading
        eyebrow="Selected Work"
        subtitle="Tap any card to see the brief, stack, and how to run it locally."
      >
        Things I&apos;ve built & shipped
      </SectionHeading>

      <ProjectsGrid />
    </section>
  );
}
