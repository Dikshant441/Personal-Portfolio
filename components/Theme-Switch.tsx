"use client";

import { useTheme } from "@/context/Theme-Context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className="fixed top-2 right-4 z-[1000] sm:top-auto sm:bottom-5 sm:right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full transition-all hover:scale-[1.15] active:scale-105 sm:border sm:border-gray-200 sm:bg-white sm:bg-opacity-80 sm:shadow-sm sm:backdrop-blur-[0.5rem] dark:sm:border-white/40 dark:sm:bg-gray-950"
      onClick={toggleTheme}
    >
      {isLight ? (
        <BsSun className="text-gray-900" />
      ) : (
        <BsMoon className="text-white" />
      )}
    </button>
  );
}
