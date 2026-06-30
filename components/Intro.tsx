"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsCalendar2Check } from "react-icons/bs";
import { useSectionView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
});

export default function Intro() {
    const { ref } = useSectionView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-12 lg:gap-16"
            id="home"
            ref={ref}
        >
            {/* ── Text column ── */}
            <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">

                {/* Cal.com CTA */}
             

                {/* Label */}
                <motion.p
                    {...fadeUp(0.02)}
                    className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400"
                >
                    Software Development Engineer
                </motion.p>

                {/* Name */}
                <motion.h1
                    {...fadeUp(0.05)}
                    className="text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
                >
                    Dikshant Singh
                </motion.h1>

                {/* Divider */}
                <motion.div
                    {...fadeUp(0.1)}
                    className="mt-5 h-px w-12 bg-gray-300 dark:bg-white/20"
                />

                {/* Description */}
                <motion.p
                    {...fadeUp(0.12)}
                    className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 dark:text-gray-300"
                >
                    With <span className="font-semibold text-gray-900 dark:text-white">~2 years</span> shipping production software, real-time web apps in{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">TypeScript/Javascript &amp; React, Node.js/Nest.js</span>
                    {" "}and low-level protocol code in <span className="font-semibold text-gray-900 dark:text-white">C and Python</span>. Currently SDE at{" "}
                    Chainscore Labs.
                    Open to full-stack, frontend, backend, distributed systems, and systems software roles.
                </motion.p>

                {/* Badges */}
                <motion.div
                    {...fadeUp(0.15)}
                    className="mt-5 flex flex-wrap items-center justify-center gap-2 md:justify-start"
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Open to SDE / SDE-2 roles
                    </span>
                    <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                        Backend &amp; Distributed Systems
                    </span>
                    <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                        Networking &amp; Protocols
                    </span>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    {...fadeUp(0.18)}
                    className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start"
                >
                    <Link
                        href="#contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                        onClick={() => {
                            setActiveSection("Contact");
                            setTimeOfLastClick(Date.now());
                        }}
                    >
                        Contact me
                        <BsArrowRight className="transition group-hover:translate-x-1" />
                    </Link>

                    <a
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                        href="/dikshant_resume.pdf"
                        download
                    >
                        Download CV
                        <HiDownload className="opacity-60" />
                    </a>

                    <div className="flex items-center gap-2">
                        <a
                            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2.5 text-lg text-gray-600 transition hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white"
                            href="https://www.linkedin.com/in/dikshant-singh/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2.5 text-lg text-gray-600 transition hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white"
                            href="https://github.com/Dikshant441"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithubSquare />
                        </a>
                        <a
                            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2.5 text-lg text-gray-600 transition hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white"
                            href="https://x.com/Dikshant441"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter/X"
                        >
                            <FaSquareXTwitter />
                        </a>
                        <a
                            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2.5 text-lg text-gray-600 transition hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white"
                            href="https://cal.com/dikshant-singh-canxf0/30min"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Cal.com"
                        >
                            <BsCalendar2Check />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* ── Photo column ── */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex-shrink-0"
            >
                {/* Waving emoji */}
                <motion.span
                    className="absolute -top-3 -right-3 z-10 text-3xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 140, delay: 0.3 }}
                >
                    👋
                </motion.span>

                <div className="h-56 w-56 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                    <Image
                        className="h-full w-full object-cover"
                        src="/logo.jpeg"
                        alt="Dikshant Singh"
                        width={288}
                        height={288}
                        quality={95}
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
