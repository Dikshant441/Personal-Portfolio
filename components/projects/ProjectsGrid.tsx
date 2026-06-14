"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "./projects.data";
import type { ProjectShowcase as ProjectType } from "./types";

export default function ProjectsGrid() {
  const [open, setOpen] = useState<ProjectType | null>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((p) => (
          <motion.button
            key={p.slug}
            type="button"
            onClick={() => setOpen(p)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 text-left backdrop-blur transition-all hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
              <Image
                src={p.imageUrl}
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="scale-125 object-cover opacity-50 blur-xl"
              />
              <Image
                src={p.imageUrl}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="relative object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-1 text-[0.8rem] text-indigo-600 dark:text-indigo-300">
                {p.tagline}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1">
                {p.tech.slice(0, 4).map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-black/10 bg-white px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-gray-700 dark:border-white/15 dark:bg-white/5 dark:text-white/75"
                  >
                    {t}
                  </li>
                ))}
                {p.tech.length > 4 && (
                  <li className="rounded-full px-2 py-0.5 text-[0.6rem] text-gray-500 dark:text-white/50">
                    +{p.tech.length - 4}
                  </li>
                )}
              </ul>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gray-500 transition group-hover:text-gray-900 dark:text-white/55 dark:group-hover:text-white">
                View details →
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[1000] flex items-end justify-center bg-black/65 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setOpen(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="project-modal relative flex h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white dark:bg-gray-900 sm:h-auto sm:max-h-[88vh] sm:rounded-2xl"
            >
              {/* Sticky header — title + close always visible */}
              <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/5 bg-white/95 px-5 py-3 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/95 sm:px-7">
                <div className="min-w-0">
                  <p className="truncate font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gray-500 dark:text-white/55">
                    Project · {open.tech.slice(0, 3).join(" · ")}
                  </p>
                  <h3 className="truncate text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
                    {open.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="flex-shrink-0 rounded-full p-2 text-gray-500 transition hover:bg-black/5 hover:text-gray-900 dark:hover:bg-white/10 dark:hover:text-white"
                  aria-label="Close"
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </header>

              {/* Scrollable body */}
              <div className="project-modal-scroll relative flex-1 overflow-y-auto overscroll-contain">
                {/* Hero image — fades into header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900 sm:aspect-video">
                  <Image
                    src={open.imageUrl}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="scale-125 object-cover opacity-50 blur-xl"
                  />
                  <Image
                    src={open.imageUrl}
                    alt={open.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="relative object-contain"
                  />
                </div>

                <div className="px-5 pb-6 pt-5 sm:px-7 sm:pb-8">
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                    {open.tagline}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700 dark:text-white/75">
                    {open.description}
                  </p>

                  <p className="mt-6 mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gray-500 dark:text-white/55">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {open.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2.5 text-sm text-gray-700 dark:text-white/75"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400 dark:bg-white/40"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gray-500 dark:text-white/55">
                    Built with
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {open.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-black/10 bg-white px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-gray-700 dark:border-white/15 dark:bg-white/5 dark:text-white/80"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

              {/* Sticky footer action bar */}
              <footer className="sticky bottom-0 z-10 flex flex-wrap items-center gap-2 border-t border-black/5 bg-white/95 px-5 py-3 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/95 sm:px-7">
                {open.demoUrl && (
                  <Link
                    href={open.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900"
                  >
                    {open.demoLabel ?? "Live Demo"}
                    <span aria-hidden>→</span>
                  </Link>
                )}
                {open.repoUrl && (
                  <Link
                    href={open.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.52-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.39-2.7 5.36-5.27 5.64.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.22 21.39 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                    Code
                  </Link>
                )}
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
