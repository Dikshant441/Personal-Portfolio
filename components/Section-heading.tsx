"use client";

import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  eyebrow?: string;
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
      } mb-10 sm:mb-14 ${className}`}
    >
      {eyebrow && (
        <div className="mb-6 flex items-center gap-4">
          {isCenter && <span aria-hidden className="rule flex-1" />}
          <span className="small-caps text-accent">{eyebrow}</span>
          <span aria-hidden className="rule flex-1" />
        </div>
      )}

      <h2 className="font-serif text-3xl leading-[1.2] tracking-[-0.01em] text-foreground sm:text-4xl">
        {children}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
