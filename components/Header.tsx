"use client";

import React from "react"
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { BsCalendar2Check } from "react-icons/bs";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className="z-[999] relative">
            {/* ── Mobile top bar (brand) ── */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-[999] flex h-16 items-center justify-between border-b border-border bg-background/85 px-5 backdrop-blur-[0.5rem] sm:hidden"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <Link
                    href="#home"
                    onClick={() => {
                        setActiveSection("Home");
                        setTimeOfLastClick(Date.now());
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-foreground bg-foreground font-serif text-sm font-semibold text-background"
                >
                    DS
                </Link>

                <a
                    href="https://cal.com/dikshant-singh-canxf0/30min"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Book a call"
                    className="mr-14 inline-flex touch-manipulation items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-xs font-semibold tracking-[0.05em] text-accent-foreground shadow-sm transition active:scale-95"
                >
                    <BsCalendar2Check className="text-sm" />
                    Book a Call
                </a>
            </motion.div>

            {/* ── Desktop pill nav ── */}
            <div className="hidden sm:block">
                <motion.div
                    className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-border bg-card/85 shadow-sm backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                    initial={{ y: -100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                ></motion.div>

                <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-sm font-medium tracking-[0.05em] text-muted-foreground sm:w-[initial] sm:flex-nowrap sm:gap-5">
                        {links.map((link) => (
                            <motion.li
                                className="h-3/4 flex items-center justify-center relative"
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    className={clsx("flex w-full items-center justify-center px-3 py-3 transition hover:text-foreground", {
                                        "text-foreground":
                                            activeSection === link.name,
                                    })}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}

                                >
                                    {link.name}
                                    {link.name === activeSection && (
                                        <motion.span
                                            className="absolute inset-0 -z-10 rounded-full bg-muted"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        ></motion.span>
                                    )}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                </nav>
            </div>
        </header>
    );
}
