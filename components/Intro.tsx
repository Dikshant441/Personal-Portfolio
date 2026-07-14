"use client";

import { useEffect, useState } from "react";
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

const socialLinkClasses =
    "inline-flex items-center justify-center rounded-full border border-border bg-card p-2.5 text-lg text-muted-foreground transition-all duration-200 ease-out hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Intro() {
    const { ref } = useSectionView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);
    const resumeHref = "/dikshant_resume.pdf";

    useEffect(() => {
        if (!isResumePreviewOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsResumePreviewOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isResumePreviewOpen]);

    return (
        <>
            <section
                className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-2 md:flex-row xl:items-center xl:gap-12 xl:px-0 lg:gap-12"
                id="home"
                ref={ref}
            >
                {/* Ambient gold glow */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-3xl dark:bg-accent/[0.02]"
                />

                {/* ── Text column ── */}
                <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">

                    {/* Availability label */}
                    <motion.div
                        {...fadeUp(0.02)}
                        className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-50 px-3 py-1 dark:border-emerald-400/40 dark:bg-emerald-500/10"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span className="small-caps text-emerald-700 dark:text-emerald-300">
                            Open to full-time · contract · freelance
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        {...fadeUp(0.05)}
                        className="font-serif text-5xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-7xl"
                    >
                        Dikshant Singh
                    </motion.h1>

                    {/* Gold rule */}
                    <motion.div
                        {...fadeUp(0.1)}
                        className="mt-6 h-px w-16 bg-accent"
                    />

                    {/* Description */}
                    <motion.p
                        {...fadeUp(0.12)}
                        className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
                    >
                        With <span className="font-semibold text-foreground">~2 years</span> of experience shipping production software, I work across{" "}
                        <span className="font-semibold text-foreground">product engineering, backend systems, and protocol-level infrastructure</span>.
                        My recent work spans real-time applications, distributed systems, and low-level networking, and I adapt quickly to the tools a problem demands.
                        Currently SDE at <span className="font-semibold text-foreground">Chainscore Labs</span>, and I also take on{" "}
                        <span className="font-semibold text-foreground">freelance and side-project work</span> building products end to end.
                        Open to full-stack, frontend, backend, distributed systems, and systems software roles.
                    </motion.p>

                    {/* Badges */}
                    <motion.div
                        {...fadeUp(0.15)}
                        className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start"
                    >
                        {["Frontend & Backend", "Distributed Systems", "Protocol & Network Engineering"].map((badge) => (
                            <span
                                key={badge}
                                className="rounded-sm border border-border bg-card px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-muted-foreground"
                            >
                                {badge}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        {...fadeUp(0.18)}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
                    >
                        <Link
                            href="#contact"
                            className="group inline-flex min-h-[44px] touch-manipulation items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-medium tracking-[0.05em] text-accent-foreground shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-secondary hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
                            onClick={() => {
                                setActiveSection("Contact");
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            Contact me
                            <BsArrowRight className="transition group-hover:translate-x-1" />
                        </Link>

                        <button
                            type="button"
                            className="inline-flex min-h-[44px] touch-manipulation items-center gap-2 rounded-md border border-foreground bg-transparent px-6 py-2.5 text-sm font-medium tracking-[0.05em] text-foreground transition-all duration-200 ease-out hover:border-accent hover:bg-muted hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            onClick={() => setIsResumePreviewOpen(true)}
                        >
                            Preview Resume
                            <HiDownload className="opacity-60" />
                        </button>

                        <div className="flex items-center gap-2">
                            <a
                                className={socialLinkClasses}
                                href="https://www.linkedin.com/in/dikshant-singh/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <BsLinkedin className="text-[#0A66C2]" />
                            </a>
                            <a
                                className={socialLinkClasses}
                                href="https://github.com/Dikshant441"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithubSquare className="text-[#181717] dark:text-white" />
                            </a>
                            <a
                                className={socialLinkClasses}
                                href="https://x.com/Dikshant441"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter/X"
                            >
                                <FaSquareXTwitter className="text-black dark:text-white" />
                            </a>
                            <a
                                className={socialLinkClasses}
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
                        className="absolute -top-4 -right-4 z-10 text-3xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 140, delay: 0.3 }}
                    >
                        👋
                    </motion.span>

                    {/* Offset gold plate frame */}
                    <div
                        aria-hidden
                        className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-accent/40"
                    />

                    <div className="relative h-56 w-56 overflow-hidden rounded-lg border border-border bg-card shadow-md sm:h-64 sm:w-64 lg:h-72 lg:w-72">
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

            {isResumePreviewOpen ? (
                <div
                    className="fixed inset-0 z-[1100] flex items-center justify-center bg-foreground/70 px-4 py-6 backdrop-blur-sm dark:bg-black/70"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Resume preview"
                    onClick={() => setIsResumePreviewOpen(false)}
                >
                    <div
                        className="flex h-[min(90vh,820px)] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-lg"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-border px-5 py-4">
                            <div>
                                <h2 className="font-serif text-xl font-semibold text-foreground">Resume Preview</h2>
                                <p className="text-sm text-muted-foreground">Review it first, then download the PDF.</p>
                            </div>
                            <button
                                type="button"
                                className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 ease-out hover:border-accent hover:text-accent"
                                onClick={() => setIsResumePreviewOpen(false)}
                            >
                                Close
                            </button>
                        </div>

                        <div className="flex-1 bg-muted p-3">
                            <iframe
                                src={resumeHref}
                                title="Dikshant Singh resume preview"
                                className="h-full w-full rounded-md bg-white"
                            />
                        </div>

                        <div className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-muted-foreground">
                                If the preview does not load, open the PDF in a new tab.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    className="inline-flex min-h-[44px] touch-manipulation items-center justify-center rounded-md border border-foreground px-5 py-2 text-sm font-medium tracking-[0.05em] text-foreground transition-all duration-200 ease-out hover:border-accent hover:bg-muted hover:text-accent"
                                    href={resumeHref}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Open in new tab
                                </a>
                                <a
                                    className="inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-md bg-accent px-5 py-2 text-sm font-medium tracking-[0.05em] text-accent-foreground shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-secondary hover:shadow-md active:translate-y-0"
                                    href={resumeHref}
                                    download
                                >
                                    Download Resume
                                    <HiDownload className="opacity-70" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
