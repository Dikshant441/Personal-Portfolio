"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      aria-hidden
      className="my-14 hidden w-56 items-center gap-4 sm:flex"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <span className="rule flex-1" />
      <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
      <span className="rule flex-1" />
    </motion.div>
  );
}
