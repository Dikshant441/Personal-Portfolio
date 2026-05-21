"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { StaticImageData } from "next/image";

type Props = {
  videoUrl?: string;
  imageUrl: StaticImageData;
  title: string;
};

function getYouTubeEmbed(url: string): string | null {
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return ytMatch ? `https://www.youtube.com/embed/${ytMatch[1]}` : null;
}

export default function ProjectMedia({ videoUrl, imageUrl, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  if (videoUrl) {
    const ytEmbed = getYouTubeEmbed(videoUrl);
    if (ytEmbed) {
      return (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black lg:aspect-auto lg:h-full lg:min-h-[420px]">
          <iframe
            src={ytEmbed}
            title={`${title} demo video`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      );
    }

    if (/\.(mp4|webm|mov)$/i.test(videoUrl)) {
      return (
        <div
          className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black lg:aspect-auto lg:h-full lg:min-h-[420px]"
          onMouseEnter={() => {
            setHovered(true);
            videoRef.current?.play().catch(() => {});
          }}
          onMouseLeave={() => {
            setHovered(false);
            videoRef.current?.pause();
          }}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            poster={imageUrl.src}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {!hovered && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                <svg
                  className="ml-1 h-6 w-6 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      );
    }
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 lg:aspect-auto lg:h-full lg:min-h-[420px]">
      <Image
        src={imageUrl}
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="scale-125 object-cover blur-2xl opacity-60"
      />
      <div className="absolute inset-0 bg-black/20" />
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="relative object-contain"
      />
    </div>
  );
}
