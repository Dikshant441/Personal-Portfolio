"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionView } from "@/lib/hooks";

export default function Projects() {

  const { ref } = useSectionView("Projects" , 0.5);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>My projects</SectionHeading>
      <p className="text-lg mb-8 text-center font-normal text-gray-500">
                Most recent works
      </p>
      <div >
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>    
            <Project {...project} />        
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

