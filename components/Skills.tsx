"use client";

import React, { useMemo, useState } from "react";
import SectionHeading from "./Section-heading";
import { skillsData } from "@/lib/data";
import { useSectionView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiGit,
  SiTailwindcss,
  SiPrisma,
  SiMysql,
  SiPostman,
  SiFirebase,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiPython,
  SiC,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiVercel,
  SiMicrosoftazure,
  SiAmazonaws,
  SiFastapi,
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

// === ICON MAP (normalized) ===
const SKILL_ICON: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  "next.js": SiNextdotjs,
  "node.js": SiNodedotjs,
  mongodb: SiMongodb,
  redux: SiRedux,
  express: SiExpress,
  git: SiGit,
  tailwind: SiTailwindcss,
  "tailwind css": SiTailwindcss,
  prisma: SiPrisma,
  sql: SiMysql,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  postman: SiPostman,
  "google firebase": SiFirebase,
  firebase: SiFirebase,
  "c++": SiCplusplus,
  c: SiC,
  python: SiPython,
  html: SiHtml5,
  css: SiCss3,
  "framer motion": SiFramer,
  docker: SiDocker,
  linux: SiLinux,
  vercel: SiVercel,
  azure: SiMicrosoftazure,
  aws: SiAmazonaws,
  "vercel deployments": SiVercel,
  "azure deployments": SiMicrosoftazure,
  "aws deployments": SiAmazonaws,
  fastapi: SiFastapi,
};

type Category = "All" | "Languages" | "Frontend" | "Backend" | "Databases" | "Tools" | "Other";

const CATEGORIES: Category[] = ["All", "Languages", "Frontend", "Backend", "Databases", "Tools", "Other"];

// === CATEGORY MAP (normalized keys) ===
const SKILL_CATEGORY: Record<string, Category> = {
  // Languages
  "c++": "Languages",
  c: "Languages",
  python: "Languages",
  javascript: "Languages",
  typescript: "Languages",

  // Frontend
  html: "Frontend",
  css: "Frontend",
  react: "Frontend",
  "next.js": "Frontend",
  tailwind: "Frontend",
  "tailwind css": "Frontend",
  redux: "Frontend",
  "framer motion": "Frontend",

  // Backend
  "node.js": "Backend",
  express: "Backend",
  prisma: "Backend",
  fastapi: "Backend",
  "google firebase": "Backend",
  firebase: "Backend",

  // Databases
  mongodb: "Databases",
  postgresql: "Databases",
  mysql: "Databases",
  sql: "Databases",

  // Tools
  git: "Tools",
  postman: "Tools",
  docker: "Tools",
  linux: "Tools",
  vercel: "Tools",
  azure: "Tools",
  aws: "Tools",
  "vercel deployments": "Tools",
  "azure deployments": "Tools",
  "aws deployments": "Tools",

  // Other
  blockchain: "Other",
  web3: "Other",
  "quic protocol": "Other",
  ai: "Other",
};

// Normalize function
const normalize = (s: string) => s.trim().toLowerCase();

// Pre-normalized lookup maps
const NORMALIZED_SKILL_CATEGORY = SKILL_CATEGORY;
const NORMALIZED_SKILL_ICON = SKILL_ICON;

export default function Skills() {
  const { ref } = useSectionView("Skills");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skillsData;

    return skillsData.filter((skill) => {
      const normalized = normalize(skill);
      const category = NORMALIZED_SKILL_CATEGORY[normalized] ?? "Other";
      return category === activeCategory;
    });
  }, [activeCategory]);

  // Count skills per category
  const countsByCategory: Record<Category, number> = useMemo(() => {
    const counts: Record<Category, number> = {
      All: skillsData.length,
      Languages: 0,
      Frontend: 0,
      Backend: 0,
      Databases: 0,
      Tools: 0,
      Other: 0,
    };

    skillsData.forEach((skill) => {
      const normalized = normalize(skill);
      const cat = NORMALIZED_SKILL_CATEGORY[normalized] ?? "Other";
      counts[cat]++;
    });

    return counts;
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-24 max-w-[53rem] scroll-mt-24 text-center"
    >
      <SectionHeading>Areas of Expertise</SectionHeading>
      <p className="text-lg mb-6 text-center font-normal text-gray-500">
        Browse by category or explore all
      </p>

      {/* Category Pills */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-3 py-1.5 text-sm transition flex items-center gap-1.5 ${
              activeCategory === cat
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "bg-white/70 text-gray-700 hover:bg-white dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
            }`}
          >
            <span>{cat}</span>
            <span className="inline-flex items-center justify-center rounded-full bg-black/10 dark:bg-white/20 px-1.5 py-0.5 text-[0.65rem] font-medium">
              {countsByCategory[cat]}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.ul
        className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center text-sm sm:text-base text-gray-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {filteredSkills.length === 0 ? (
          <li className="col-span-full py-6 text-sm text-gray-500 dark:text-white/60">
            No skills in this category yet.
          </li>
        ) : (
          filteredSkills.map((skill) => {
            const normalized = normalize(skill);
            const Icon = NORMALIZED_SKILL_ICON[normalized];

            return (
              <motion.li
                key={skill}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white borderBlack rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 justify-center shadow-sm hover:shadow-md transition dark:bg-white/10 dark:text-white/80"
              >
                {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
                <span className="whitespace-nowrap">{skill}</span>
              </motion.li>
            );
          })
        )}
      </motion.ul>
    </section>
  );
}