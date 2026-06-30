"use client";

import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  eyebrow?: string;
  accent?: string;
  accentVariant?: "gradient" | "marker" | "italic" | "solid" | "squiggle";
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  children,
  eyebrow,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${
        isCenter ? "text-center" : "text-left"
      } mb-7 sm:mb-8 ${className}`}
    >
      {eyebrow && (
        <p className="text-left text-sm text-gray-500 dark:text-white/60">{eyebrow}</p>
      )}

      <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {children}
      </h2>

      {subtitle && (
        <p
          className={`mt-2 text-base sm:text-lg text-gray-600 dark:text-white/65 ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
