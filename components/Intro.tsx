"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiMongodb, SiPolkadot } from "react-icons/si";
import { useSectionView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import React from "react";

export default function Intro() {
    const { ref } = useSectionView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const rotating = React.useMemo(
        () => [
            "Next.js, Nest.js",
            "Node.js & Express",
            "MERN Stack",
            "Web3 & Blockchain",
            "Scalable Systems",
        ],
        [
        ]
    );
    const [idx, setIdx] = React.useState(0);
    React.useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % rotating.length), 2200);
        return () => clearInterval(t);
    }, [rotating.length]);

    return (
        <section
            className="relative max-w-[64em]  text-center"
            id="home"
            ref={ref}
        >
            {/* Decorative background */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 blur-3xl" />
                <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-400/25 via-cyan-500/25 to-indigo-500/25 blur-3xl" />
            </div>

            {/* Avatar */}
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ rotate: 1, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                                className="rounded-full bg-gradient-to-br from-white/60 to-white/30 p-1 shadow-xl ring-2 ring-white/70 backdrop-blur-md dark:ring-white/20"
                            >
                                <Image
                                    className="h-24 w-24 rounded-full object-cover"
                                    src="/logo.jpeg"
                                    alt="logo"
                                    width={192}
                                    height={192}
                                    quality={95}
                                    priority
                                />
                            </motion.div>

                            {/* Waving emoji */}
                            <motion.span
                                className="absolute -top-2 -right-2 text-4xl"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 140, delay: 0.1 }}
                            >
                                👋
                            </motion.span>


                            {/* Orbiting icons */}
                            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
                                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2">
                                    {/* Outer ring */}
                                    <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10" />
                                    <div className="absolute inset-0 animate-[spin_16s_linear_infinite]">
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 p-1 shadow-sm backdrop-blur-sm dark:bg-white/10">
                                            <SiNextdotjs className="h-5 w-5 text-gray-800 dark:text-white/70" />
                                        </span>
                                        <span className="absolute top-1/2 -right-3 -translate-y-1/2 rounded-full bg-white/90 p-1 shadow-sm backdrop-blur-sm dark:bg-white/10">
                                            <SiNodedotjs className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                        </span>
                                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 p-1 shadow-sm backdrop-blur-sm dark:bg-white/10">
                                            <SiMongodb className="h-5 w-5 text-green-700 dark:text-green-400" />
                                        </span>
                                        <span className="absolute top-1/2 -left-3 -translate-y-1/2 rounded-full bg-white/90 p-1 shadow-sm backdrop-blur-sm dark:bg-white/10">
                                            <SiPolkadot className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            {/* Headline */}
            <motion.h1
                className="mt-6 px-4 text-3xl font-semibold !leading-tight sm:text-5xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="block text-gray-900 dark:text-white/90">Hello, I’m</span>
                <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent">
                    Dikshant Singh
                </span>
            </motion.h1>

            {/* Rotating subhead */}
            <div className="mt-2 h-8 sm:h-9">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="px-4 text-base text-gray-600 dark:text-white/70 sm:text-xl"
                    >
                        Building with {rotating[idx]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* About blurb (from your text) */}
            <motion.p
                className="mx-auto mt-4 max-w-3xl px-6 text-[0.98rem] leading-relaxed text-gray-700 dark:text-white/70 sm:text-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
            >
                I’m a passionate Software Developer from India focused on building scalable, high-performance applications.
                I specialize in full‑stack development with Next.js, Nest.js, Node.js, and the MERN stack—turning complex ideas
                into clean, efficient solutions. I’m also deeply into blockchain, exploring protocols like Bitcoin, Ethereum,
                and Polkadot, and building Web3 and decentralized systems. I’m eager to contribute to impactful projects and
                grow within innovative engineering teams.
            </motion.p>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 px-4">
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    Full‑Stack Engineer
                </span>
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    Web3 & Blockchain
                </span>
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    Scalable Systems
                </span>
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    Open to Opportunities
                </span>
            </div>

            {/* CTAs */}
            <motion.div
                className="mt-6 flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white transition hover:scale-105 hover:bg-black focus:scale-105 active:scale-100 dark:bg-white dark:text-gray-900"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                    aria-label="Contact me"
                >
                    Contact me
                    <BsArrowRight className="transition group-hover:translate-x-1" />
                </Link>

                <a
                    className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 transition hover:scale-105 focus:scale-105 active:scale-100 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                    href="/dikshant_resume.pdf"
                    download
                    aria-label="Download CV"
                >
                    Download CV
                    <HiDownload className="opacity-70 transition group-hover:translate-y-0.5" />
                </a>

                <a
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-105 hover:text-gray-950 focus:scale-105 active:scale-100 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                    href="https://www.linkedin.com/in/dikshant-singh/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-105 hover:text-gray-950 focus:scale-105 active:scale-100 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                    href="https://github.com/Dikshant441"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithubSquare />
                </a>

                <a
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-105 hover:text-gray-950 focus:scale-105 active:scale-100 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                    href="https://x.com/Dikshant441"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter/X"
                >
                    <FaTwitterSquare />
                </a>
            </motion.div>
        </section>
    );
}
