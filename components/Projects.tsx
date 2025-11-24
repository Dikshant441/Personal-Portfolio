"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionView("Projects", 0.5);

  return (
    <section ref={ref} className="scroll-mt-24 mb-20" id="projects">
      <SectionHeading>Proof of Work</SectionHeading>
      <p className="text-lg mb-8 -mt-3 text-center font-normal text-gray-500">
        Most recent works
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
