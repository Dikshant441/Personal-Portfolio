"use client";

import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";
import SectionDivider from "./Section-divider";


export default function About() {

  const { ref } = useSectionView("About",);

  // const { ref , inView } = useInView();
  //console.log(inView);
  // print true on console if about section is active 
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <SectionHeading>About me</SectionHeading>
      <p className="text-lg mb-8 mt-3 text-center font-normal text-gray-500">
                My Introduction
      </p>

      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">where I honed my skills in full-stack web development. As a full-stack developer, I excel in both front-end and back-end technologies, delivering seamless user experiences and robust server-side solutions.</span>.{" "}
        <span className="italic">My core stack includes React, Next.js, Node.js, and MongoDB, and I am also familiar with Firebase and Prisma. </span>
        The problem-solving aspect of programming is what excites me the most ; <span className="underline">I love the satisfaction of finding solutions to complex challenges.</span>
      </p>

      <p>
      I am always eager to learn new technologies and enhance my skill set. Currently, I am currently looking for a{" "}
        <span className="font-medium text-lg underline">full-time position</span> as a software
        developer, where I can contribute to innovative projects and continue to grow professionally.
      </p>

    </motion.section>
  )
}
