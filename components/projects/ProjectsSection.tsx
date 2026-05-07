"use client";

import SectionHeading from "@/components/Section-heading";
import { useSectionView } from "@/lib/hooks";
import { projectsData } from "./projects.data";
import ProjectShowcase from "./ProjectShowcase";

export default function ProjectsSection() {
  const { ref } = useSectionView("Projects", 0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-24 mb-28 w-full max-w-5xl"
    >
      <SectionHeading>Proof of Work</SectionHeading>
      <p className="-mt-3 mb-12 text-center text-lg font-normal text-gray-500">
        A closer look — demos, what they do, and how to run them locally.
      </p>

      <div className="flex flex-col gap-10">
        {projectsData.map((project, i) => (
          <ProjectShowcase key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
