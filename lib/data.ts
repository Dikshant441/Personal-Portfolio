import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/e-commerce.png";
import aisaasImg from "@/public/ai-saas.png";
import netflixgpt from "@/public/netflix-gpt.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Internship",
    location: "at Elevatifier, Remote",
    description:
      "I worked as a full-stack developer for 3 month as a Intern. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept/2023 - Dec/2023",
  },
  {
    title: "Kamla Nehru Institute of Technology - CGPA: 8.48",
    location: "Sultanpur, INDIA",
    description:
      "I am currently pursuing a BTech in Computer Science Engineering and have a strong passion for programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - Present",
  },
  {
    title: "Intermediate (12th) - Percentage: 86%",
    location: "T.S.S Inter College, INDIA",
    description:
      "having completed my schooling with a focus on Physics, Chemistry, and Mathematics (PCM). My solid foundation in these core subjects has equipped me with strong analytical and problem-solving skills.",
    // icon: React.createElement(FaReact),  icon for current working
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Cloud-AI-Saas",
    description:
      "A SaaS application, integrating cloudinary AI to enhance smart video preview and efficient media manage. Developed a scalable, server-side rendered application.",
    tags: ["Next.js", "TypeScript", "Cloudinary", "Prisma", "NeonDB"],

    imageUrl: aisaasImg,
    url: "https://github.com/Dikshant441/AI-saas",
  },
  {
    title: "CinemaBot-GPT",
    description:
      "A responsive movie streaming platform using the TMDB API for real-time movie data. Integrated GPT-3.5 API with TMDB for personalized movie suggestions.",
    tags: ["ReactJS", "Redux", "TMDB", "OpenAI", "JavaScript"],
    imageUrl: netflixgpt,
    url: "https://github.com/Dikshant441/Netflixx-GPT",
  },
  {
    title: "Virtual Cart",
    description:
      "A full-featured e-commerce application using the MERN stack, enabling seamless shopping experiences with robust front-end and back-end integration.",
    tags: ["React", "Nodejs", "MongoDB", "Express", "material-ui"],

    imageUrl: ecommerceImg,
    url: "https://github.com/Dikshant441/E-commerce-MERN",
  },
] as const;

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "SQL",
  "Postman",
  "Framer Motion",
  "Google Firebase",
] as const;
