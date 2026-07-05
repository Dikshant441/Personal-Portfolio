"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { LuHome, LuUser, LuBriefcase, LuFolderGit2, LuMail } from "react-icons/lu";
import { useActiveSectionContext } from "@/context/active-section-context";

const mobileLinks = [
  { name: "Home", hash: "#home", icon: LuHome },
  { name: "About", hash: "#about", icon: LuUser },
  { name: "Career", hash: "#career", icon: LuBriefcase },
  { name: "Projects", hash: "#projects", icon: LuFolderGit2 },
  { name: "Contact", hash: "#contact", icon: LuMail },
] as const;

export default function MobileNav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.nav
      className="fixed bottom-3 left-1/2 z-[999] flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/40 bg-white/80 px-1.5 py-1.5 shadow-lg backdrop-blur-[0.5rem] sm:hidden dark:border-white/10 dark:bg-zinc-900/90"
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      {mobileLinks.map((link) => {
        const Icon = link.icon;
        const isActive = activeSection === link.name;
        return (
          <Link
            key={link.hash}
            href={link.hash}
            aria-label={link.name}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
            className={clsx(
              "relative flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[0.6rem] font-medium text-gray-500 transition dark:text-gray-400",
              { "text-gray-950 dark:text-white": isActive }
            )}
          >
            {isActive && (
              <motion.span
                layoutId="mobileActiveSection"
                className="absolute inset-0 -z-10 rounded-full bg-gray-200 dark:bg-zinc-700"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <Icon className="text-lg" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </motion.nav>
  );
}
