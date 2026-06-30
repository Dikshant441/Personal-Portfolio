"use client";

import { useTheme } from "@/context/Theme-Context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className={`fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white bg-opacity-80 backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950 ${
        isLight
          ? "border border-gray-200 shadow-sm"
          : "border border-white/40"
      }`}
      onClick={toggleTheme}
    >
      {isLight ? (
        <span className="flex items-center justify-center rounded-full border border-amber-400/80 p-1 text-amber-500">
          <BsSun className="text-sm" />
        </span>
      ) : (
        <BsMoon className="text-white" />
      )}
    </button>
  );
}
