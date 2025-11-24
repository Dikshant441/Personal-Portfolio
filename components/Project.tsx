"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-6 last:mb-0"
    >
      <section
        className={`relative flex h-[24rem] max-w-[44rem] flex-col overflow-hidden rounded-2xl border bg-white/80 shadow-sm backdrop-blur transition-all hover:shadow-xl dark:bg-white/10
        ${
          title === "TelosX Landing Page" || title === "JAM Implementation Doc" || title === "Merge-Me"
            ? "border-transparent bg-gradient-to-br from-indigo-500/80 via-sky-400/80 to-emerald-500/80 p-[1px] animate-pulse"
            : "border-black/5"
        }`}
      >
        <div className="flex h-full flex-col rounded-[1rem] bg-white/90 dark:bg-zinc-900/90">
        {/* Top: image (about 60%) */}
        <div className="relative flex-[8]">
          <Link
            href={url}
            target="_blank"
            aria-label={`Open ${title}`}
            className="relative block h-full w-full overflow-hidden"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent dark:from-black/60" />
          </Link>
        </div>

        {/* Bottom: details (about 40%) */}
        <div className="px-5 pt-4 pb-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className=" items-center gap-2 text-[1.4rem] font-semibold tracking-tight text-gray-900 dark:text-white">
              
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h3>
          <div className="">
            <Link
              href={url}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              aria-label={`View ${title}`}
            >
              View Project
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>

          </div>
          <p className="mt-2 text-[0.96rem] leading-relaxed text-gray-700 dark:text-white/70 text-sm text-justify">
            {description}
          </p>

          <ul className="mt-3 flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/80 px-2 py-1 text-[0.7rem] uppercase tracking-wider text-white shadow-sm dark:bg-white/20 dark:text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>

          
        </div>
        </div>
      </section>
    </motion.div>
  );
}
