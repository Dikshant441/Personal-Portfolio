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
      className="relative mb-16 w-full max-w-4xl scroll-mt-24 sm:mb-24"
    >
      <SectionHeading
        eyebrow="Career"
        subtitle="Roles, rooms, and what shipped out of each."
      >
        Where I&apos;ve been & built
      </SectionHeading>

      <ol className="relative mt-6 pl-6 sm:pl-10">
        {/* Vertical rail */}
        <div
          aria-hidden
          className="absolute left-[10px] top-3 bottom-3 w-px bg-border sm:left-[18px]"
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
                className={`absolute -left-6 top-2 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-background sm:-left-10 sm:h-7 sm:w-7 ${
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
                  <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400 opacity-60" />
                )}
              </span>

              {/* Date + tag row */}
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {item.date}
                </span>
                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent/10 px-2 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.12em] text-accent ring-1 ring-accent/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Current
                  </span>
                )}
                {isEducation && (
                  <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Education
                  </span>
                )}
              </div>

              {/* Card */}
              <div
                className={`group rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-200 ease-out hover:bg-muted/30 hover:shadow-md sm:p-6 ${
                  isCurrent ? "border-t-2 border-t-accent" : ""
                }`}
              >
                <h3 className="font-serif text-lg font-semibold leading-[1.3] text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-medium text-accent">
                  <span>{item.company}</span>
                  <span aria-hidden className="text-border">
                    •
                  </span>
                  <span className="text-muted-foreground">
                    {item.location}
                  </span>
                </p>

                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[0.9rem] text-muted-foreground"
                      >
                        <CheckIcon className="text-accent" />
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
                        className="rounded-sm border border-border bg-background px-2.5 py-0.5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-muted-foreground"
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
