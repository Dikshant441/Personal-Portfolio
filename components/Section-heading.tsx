"use client";

import React from "react";
import { motion } from "framer-motion";

type AccentVariant = "gradient" | "marker" | "italic" | "solid" | "squiggle";

type SectionHeadingProps = {
  children: React.ReactNode;
  eyebrow?: string;
  accent?: string;
  accentVariant?: AccentVariant;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

const variantClass: Record<AccentVariant, string> = {
  gradient: "heading-mark",
  marker: "heading-mark-marker",
  italic: "heading-mark-italic",
  solid: "heading-mark-solid",
  squiggle: "heading-mark-squiggle",
};

export default function SectionHeading({
  children,
  eyebrow,
  accent,
  accentVariant = "gradient",
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const headlineNode = React.useMemo(() => {
    if (typeof children !== "string" || !accent) return children;
    const idx = children.toLowerCase().indexOf(accent.toLowerCase());
    if (idx === -1) return children;
    const before = children.slice(0, idx);
    const match = children.slice(idx, idx + accent.length);
    const after = children.slice(idx + accent.length);
    return (
      <>
        {before}
        <span className={variantClass[accentVariant]}>{match}</span>
        {after}
      </>
    );
  }, [children, accent, accentVariant]);

  return (
    <div
      className={`${
        isCenter ? "text-center" : "text-left"
      } mb-10 sm:mb-12 ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45 }}
          className={`flex items-center gap-3 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span aria-hidden className="grad-rule" />
          <span className="eyebrow">{eyebrow}</span>
          <span aria-hidden className="grad-rule" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight"
      >
        {headlineNode}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-3 text-base sm:text-lg text-gray-600 dark:text-white/65 ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
