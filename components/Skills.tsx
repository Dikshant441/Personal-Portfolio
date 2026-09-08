"use client";

import React from "react";
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
  SiGithub,
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
  SiSupabase,
  SiVercel,
  SiMicrosoftazure,
  SiAmazonaws,
  SiFastapi,
  SiNestjs,
  SiGreensock,
  SiAuth0,
  SiPolkadot,
  SiRust,
  SiGo,
  SiJest,
  SiFigma,
  SiClerk,
  SiCloudinary,
  SiRazorpay,
  SiMui,
  SiVite,
  SiReactrouter,
  SiDaisyui,
  SiSocketdotio,
  SiJsonwebtokens,
  SiOpenai,
} from "react-icons/si";

const SKILL_ICON: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  "next.js": SiNextdotjs,
  "node.js": SiNodedotjs,
  mongodb: SiMongodb,
  redux: SiRedux,
  "redux toolkit": SiRedux,
  express: SiExpress,
  nestjs: SiNestjs,
  git: SiGit,
  github: SiGithub,
  tailwind: SiTailwindcss,
  "tailwind css": SiTailwindcss,
  daisyui: SiDaisyui,
  "material ui": SiMui,
  mui: SiMui,
  vite: SiVite,
  "react router": SiReactrouter,
  prisma: SiPrisma,
  sql: SiMysql,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  neondb: SiPostgresql,
  supabase: SiSupabase,
  postman: SiPostman,
  "google firebase": SiFirebase,
  firebase: SiFirebase,
  "c++": SiCplusplus,
  c: SiC,
  python: SiPython,
  rust: SiRust,
  go: SiGo,
  html: SiHtml5,
  css: SiCss3,
  "framer motion": SiFramer,
  gsap: SiGreensock,
  docker: SiDocker,
  linux: SiLinux,
  vercel: SiVercel,
  azure: SiMicrosoftazure,
  aws: SiAmazonaws,
  "aws ec2": SiAmazonaws,
  fastapi: SiFastapi,
  auth0: SiAuth0,
  clerk: SiClerk,
  jwt: SiJsonwebtokens,
  polkadot: SiPolkadot,
  websockets: SiSocketdotio,
  websocket: SiSocketdotio,
  jest: SiJest,
  figma: SiFigma,
  cloudinary: SiCloudinary,
  razorpay: SiRazorpay,
  openai: SiOpenai,
};

const normalize = (s: string) => s.trim().toLowerCase();

// Split into three rows so the marquee feels dense but readable.
const third = Math.ceil(skillsData.length / 3);
const rowA = skillsData.slice(0, third);
const rowB = skillsData.slice(third, third * 2);
const rowC = skillsData.slice(third * 2);

type MarqueeRowProps = {
  items: readonly string[];
  direction: "ltr" | "rtl";
  duration: number;
};

function MarqueeRow({ items, direction, duration }: MarqueeRowProps) {
  // Duplicate the list so the loop is seamless.
  const loop = [...items, ...items];
  const from = direction === "ltr" ? "-50%" : "0%";
  const to = direction === "ltr" ? "0%" : "-50%";

  return (
    <div className="relative overflow-hidden py-2">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <motion.ul
        className="flex w-max gap-3"
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((skill, idx) => {
          const Icon = SKILL_ICON[normalize(skill)];
          return (
            <li
              key={`${skill}-${idx}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-md border border-border bg-card px-4 py-2.5 text-foreground shadow-sm"
            >
              {Icon && <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />}
              <span className="text-sm sm:text-base">{skill}</span>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default function Skills() {
  const { ref } = useSectionView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16 sm:mb-24 max-w-[53rem] scroll-mt-24 text-center"
    >
      <div className="mb-4 flex items-center gap-4">
        <span aria-hidden className="rule flex-1" />
        <span className="small-caps text-accent">Toolkit</span>
        <span aria-hidden className="rule flex-1" />
      </div>

      <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:mb-14 sm:text-lg">
        A glimpse of my daily drivers - not the full list.
      </p>

      <div className="flex flex-col gap-3">
        <MarqueeRow items={rowA} direction="ltr" duration={35} />
        <MarqueeRow items={rowB} direction="rtl" duration={40} />
        <MarqueeRow items={rowC} direction="ltr" duration={45} />
      </div>
    </section>
  );
}
