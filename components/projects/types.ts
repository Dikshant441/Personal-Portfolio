import type { StaticImageData } from "next/image";

export type ProjectShowcase = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: readonly string[];
  tech: readonly string[];
  videoUrl?: string;
  imageUrl: StaticImageData;
  repoUrl?: string;
  demoUrl?: string;
  runLocally: string;
};
