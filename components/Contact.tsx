"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";



export default function Contact() {
  const { ref } = useSectionView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact-me</SectionHeading>
      <p className="text-lg mb-8 text-center font-normal text-gray-500">
                Get in touch
      </p>

      <p className="text-gray-700 mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:singhdikshant200@gmail.com">
          singhdikshant200@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <span> **Note:** Due to an error, the contact form has been removed. will update it soon. to be connect, contact the above email.</span>
    </motion.section>
  );
}