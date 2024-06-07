"use client";

import React, { useEffect } from "react";
import SectionHeading from "./Section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionView } from "@/lib/hooks";

export default function Projects() {

  const { ref } = useSectionView("Projects" , 0.5);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

