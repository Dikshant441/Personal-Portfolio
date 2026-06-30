import ecommerceImg from "@/public/e-commerce.png";
import netflixgpt from "@/public/netflix-gpt.png";
import mergeMe from "@/public/merge-me.png";
import quiver from "@/public/quiver.png";
import telosx from "@/public/telosx.png";
import jam from "@/public/jam.jpg";
import type { ProjectShowcase } from "./types";

export const projectsData: readonly ProjectShowcase[] = [
  {
    slug: "merge-me",
    title: "Merge-Me",
    tagline: "Match for developers | chat, build together.",
    description:
      "A full-stack matchmaking platform that helps developers discover collaborators based on shared stack and interests. Real-time chat, swipe-based interactions, and a hardened auth flow built from scratch.",
    highlights: [
      "Swipe-based matchmaking with optimistic UI updates",
      "JWT auth with HTTP-only cookies and refresh-token rotation",
      "Real-time messaging via WebSockets (Socket.IO)",
      "Redux Toolkit for client state, RTK Query for data fetching",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "React", "Redux", "Socket.IO", "Auth0", "Oauth", "TypeScript", "Tailwind CSS, "],
    imageUrl: mergeMe,
    videoUrl: "",
    demoUrl: "https://mergeme.xyz",
    repoUrl: "https://github.com/Dikshant441/merge_me",
  },
  {
    slug: "quiver",
    title: "Quiver",
    tagline: "A QUIC-native distributed pub/sub broker built from scratch.",
    description:
      "A real-time pub/sub message broker built entirely on QUIC instead of TCP - every peer connection is mutually authenticated with Ed25519 certificates, with 0-RTT session resumption for sub-millisecond reconnects. Designed around custom wire protocols multiplexed over QUIC streams, inspired by production blockchain networking patterns.",
    highlights: [
      "Custom application-layer protocol over QUIC streams via aioquic",
      "Zero-trust mutual TLS using Ed25519 identity keys encoded as certificate SANs",
      "0-RTT session resumption tickets for near-instant reconnects",
      "ProtocolRouter dispatches stream prefixes (Publish / Subscribe) to a topic registry with persistent push fan-out",
    ],
    tech: ["Python 3.13", "QUIC", "aioquic", "Ed25519", "asyncio"],
    imageUrl: quiver,
    videoUrl: "",
    repoUrl: "https://github.com/Dikshant441/quiver",
  },
  {
    slug: "telosx",
    title: "TelosX Landing Page",
    tagline: "High-conversion crypto landing page with i18n + CMS.",
    description:
      "Marketing site for TelosX, an emerging crypto trading platform. Animated hero powered by Framer Motion, full localization, and a dynamic blog backed by Sanity CMS so the marketing team can ship copy without code changes.",
    highlights: [
      "Sanity Studio integration for content-managed blog",
      "Locale-aware routing with next-intl",
      "Framer Motion scroll-driven animations",
      "Lighthouse 95+ on perf and accessibility",
    ],
    tech: ["Next.js", "Sanity API", "Tailwind", "Framer Motion", "TypeScript"],
    imageUrl: telosx,
    videoUrl: "",
    demoUrl: "https://telosx-landing-v2.vercel.app/",
  },
  {
    slug: "jam-protocol",
    title: "JAM Protocol Implementation",
    tagline: "The Join-Accumulate Machine for Polkadot.",
    description:
      "Contributions to JAM Protocol - a major upgrade to the Polkadot ecosystem proposed by Gavin Wood. Documentation covers design choices, core components, and integration points required to run a functional JAM node, from block production and finality to PVM and peer-to-peer networking.",
    highlights: [
      "QUIC-based peer-to-peer networking implementation",
      "PVM (Polkadot Virtual Machine) integration notes",
      "Block production and finality protocol design",
      "Architecture write-ups consumed by the wider JAM community",
    ],
    tech: ["Python", "FastAPI", "Blockchain", "QUIC", "Web3"],
    imageUrl: jam,
    videoUrl: "",
    demoUrl: "https://tessera.chainscore.finance/",
    demoLabel: "Docs",
    repoUrl: "https://github.com/Chainscore/tessera",
  },
  {
    slug: "cinemabot-gpt",
    title: "CinemaBot-GPT",
    tagline: "Personalized movie recommendations via GPT + TMDB.",
    description:
      "A responsive movie streaming UI that combines the TMDB API with GPT-3.5 for personalized recommendations. Type a vibe (\"sci-fi noir from the 90s\") and the bot returns a curated list with posters, ratings, and trailers.",
    highlights: [
      "GPT-3.5 prompt pipeline grounded in TMDB results",
      "Skeleton UI and lazy loading for smooth scroll",
      "Redux Toolkit for cache and request deduplication",
      "Firebase auth for personalized watchlists",
    ],
    tech: ["React", "Redux", "TMDB API", "OpenAI", "Firebase"],
    imageUrl: netflixgpt,
    videoUrl: "",
    repoUrl: "https://github.com/Dikshant441/Netflixx-GPT",
  },
  {
    slug: "virtual-cart",
    title: "Virtual Cart",
    tagline: "Full-featured MERN e-commerce with admin dashboard.",
    description:
      "An end-to-end e-commerce platform built on the MERN stack - product catalog, cart, checkout, and an admin dashboard for inventory and orders. Material UI for polished components and Stripe for payment processing.",
    highlights: [
      "Stripe Checkout with webhook-driven order fulfillment",
      "Admin dashboard for orders, products, and users",
      "JWT-protected APIs with role-based access control",
      "Image uploads via Multer + Cloudinary",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Material UI", "Stripe"],
    imageUrl: ecommerceImg,
    videoUrl: "",
    repoUrl: "https://github.com/Dikshant441/E-commerce-MERN",
  },
];
