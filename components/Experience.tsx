"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./Section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionView("Career", 0.2);

  return (
    <section
      id="career"
      ref={ref}
      className="relative scroll-mt-24 mb-24 w-full max-w-4xl"
    >
      <SectionHeading
        eyebrow="Section 02 — Journey"
        accent="been & built"
        accentVariant="italic"
        subtitle="Roles, rooms, and what shipped out of each."
      >
        Where I&apos;ve been & built
      </SectionHeading>

      {/* subtle decorative gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-purple-500/[0.04] to-transparent"
      />

      <ol className="relative mt-6 pl-6 sm:pl-10">
        {/* Vertical rail */}
        <div
          aria-hidden
          className="absolute left-[10px] top-3 bottom-3 w-px bg-gradient-to-b from-indigo-400/40 via-gray-300 to-emerald-400/40 dark:via-white/15 sm:left-[18px]"
        />

        {experiencesData.map((item, index) => {
          const isCurrent = "current" in item && item.current === true;
          const isEducation = item.type === "education";

          return (
            <motion.li
              key={`${item.company}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="relative mb-10 last:mb-0"
            >
              {/* Node on the rail */}
              <span
                aria-hidden
                className={`absolute -left-6 top-2 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-gray-50 dark:ring-gray-900 sm:-left-10 sm:h-7 sm:w-7 ${
                  isCurrent
                    ? "bg-emerald-500 text-white"
                    : isEducation
                    ? "bg-amber-500/90 text-white"
                    : "bg-indigo-500 text-white"
                }`}
              >
                <span className="text-[0.55rem] sm:text-[0.7rem]">
                  {item.icon}
                </span>
                {isCurrent && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-emerald-400 opacity-60 animate-ping" />
                )}
              </span>

              {/* Date + tag row */}
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-gray-500 dark:text-white/55">
                  {item.date}
                </span>
                {isCurrent && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-500/30 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
                {isEducation && (
                  <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-amber-700 ring-1 ring-amber-500/30 dark:text-amber-300">
                    Education
                  </span>
                )}
              </div>

              {/* Card */}
              <div
                className={`group rounded-2xl border bg-white/80 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-white/[0.04] sm:p-6 ${
                  isCurrent
                    ? "border-emerald-500/30 dark:border-emerald-400/30"
                    : "border-black/5 dark:border-white/10"
                }`}
              >
                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                  <span>{item.company}</span>
                  <span aria-hidden className="text-gray-400 dark:text-white/30">
                    •
                  </span>
                  <span className="text-gray-600 dark:text-white/60">
                    {item.location}
                  </span>
                </p>

                <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700 dark:text-white/75">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[0.9rem] text-gray-700 dark:text-white/75"
                      >
                        <CheckIcon
                          className={
                            isCurrent
                              ? "text-emerald-500 dark:text-emerald-400"
                              : isEducation
                              ? "text-amber-500 dark:text-amber-400"
                              : "text-indigo-500 dark:text-indigo-400"
                          }
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.skills && item.skills.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-black/10 bg-white px-2.5 py-0.5 font-mono text-[0.65rem] font-medium uppercase tracking-wider text-gray-700 dark:border-white/15 dark:bg-white/5 dark:text-white/75"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={`mt-[0.25rem] h-4 w-4 flex-shrink-0 ${className}`}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L8.5 12.086l6.79-6.793a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
