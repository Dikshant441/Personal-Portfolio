import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/e-commerce.png";
import foodorederImg from "@/public/foodoreder.png";
import minitubeImg from "@/public/minitube.png";


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
    title: "Virtual Cart",
    description:
      "A full-featured e-commerce application using the MERN stack, enabling seamless shopping experiences with robust front-end and back-end integration.",
    tags: ["React", "Nodejs", "MongoDB", "Express", "material-ui"],
    
    imageUrl: ecommerceImg,
  },
  {
    title: "Swad Safarii",
    description:
      "A web application integrated with the Swiggy API, enabling users to browse menus, search local restaurants, and utilize add-to-cart functionality.",
    tags: ["HTML","Tailwind", "JavaScript", "React", "Redux" , "API"],
    imageUrl: foodorederImg,
  },
  {
    title: "Min-tube",
    description:
      "A mini YouTube application featuring debouncing, video playback, live chat, and a Reddit-style comment section UI.",
    tags: ["HTML","Tailwind", "JavaScript", "React", "Redux" , "You-tube API"],
    imageUrl: minitubeImg,
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
  "Google Firebase"
] as const;