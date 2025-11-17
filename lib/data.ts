import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    name: "Career",
    hash: "#career",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
    title: "Software Developer Engineering - Web3 & Full Stack.",
    location: "Company - Chainscore Labs",
    description:"Co-developing the Join-Accumulate Machine (JAM), a major upgrade to the Polkadot ecosystem introduced by Gavin Wood. JAM combines Ethereum-style smart contracts with Polkadot’s parachain interoperability to build a highly efficient decentralized Web3 supercomputer.",
    icon: React.createElement(CgWorkAlt),
    date: "November/2024 - Present",
    highlights: [
      "Contributing to Web3 features across frontend and backend services",
      "Implemented reusable UI components and API integrations",
      "Collaborated in an agile team to ship incremental improvements",
    ],
    skills: [
      "Blockchain",
      "Web3",
      "Python",
      "C",
      "QUIC Protocol",
      "Redux",
      "Jest",
      "Auth0",
      "Next.js",
      "TypeScript",
      "Node.js",      
    ],
  },
  {
    title: "Full Stack Internship",
    location: "at Elevatifier, Remote",
    description:
      "Responsible for developing and maintaining server-side logic, designing and implementing APIs, optimizing database performance, and collaborating with frontend developers to integrate user-facing elements with server-side logic.",
    icon: React.createElement(CgWorkAlt),
    date: "July/2024 - October/2024",
    highlights: [
      "Designed and integrated REST APIs with frontend",
      "Optimized database queries and improved response times",
      "Implemented form validation and error handling",
    ],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Git",
      "Postman",
    ],
  },
  {
    title: "Kamla Nehru Institute of Technology - CGPA: 8.4",
    location: "Sultanpur, INDIA",
    description: "BEng, Graduated with a strong foundation in computer systems, software engineering, and information management. Throughout the program, I gained hands-on experience in full-stack development, data structures, and algorithms, which strengthened my problem-solving skills and technical expertise.",
    icon: React.createElement(LuGraduationCap),
    date: "2020/November - 2024/July",
    highlights: [
      "Completed core CS coursework (DSA, DBMS, OS, OOP)",
      "Built multiple projects using MERN/Next.js stack",
      "Active participation in coding and tech communities",
    ],
    skills: ["C++", "Data Structures and Algorithms", "DBMS", "OOP", "SQL", "CN", "OS"],
  }
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

// @/lib/data.ts
export const skillsData = [
  "TypeScript",
  "JavaScript",
  "QUIC Protocol",
  "Blockchain",
  "Web3",
  "AI",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Redux",
  "Express",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Postman",
  "Google Firebase",
  "C++",
  "C",
  "Python",
  "HTML",
  "CSS",
  "Framer Motion",
  "Docker",
  "Linux",
  "Vercel",
  "Azure",
  "AWS",
  "FastAPI",
] as const;