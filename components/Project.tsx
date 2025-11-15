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
      className="group mb-6 sm:mb-10 last:mb-0"
    >
      <section
        className="relative max-w-[44rem] overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm backdrop-blur transition-all hover:shadow-xl dark:bg-white/10 sm:h-[22rem] sm:pr-8 sm:group-even:pl-8"
      >
        {/* Image side (decorative) */}
        <Link href={url} target="_blank" aria-label={`Open ${title}`}>
          <div
            className="absolute hidden sm:block top-8 -right-36 h-[18rem] w-[30rem] overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10 group-even:right-[initial] group-even:-left-36"
          >
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-transparent via-black/0 to-black/10 dark:to-white/10" />
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="h-full w-full scale-100 object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:-rotate-1 group-even:group-hover:rotate-1"
              sizes="(max-width: 640px) 0px, 480px"
              priority={false}
            />
          </div>
        </Link>

        {/* Content side */}
        <div className="relative z-20 flex h-full flex-col px-5 pt-5 pb-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-[0.96rem] leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          {/* Tags */}
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/80 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white shadow-sm dark:bg-white/20 dark:text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-4">
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
      </section>
    </motion.div>
  );
}
