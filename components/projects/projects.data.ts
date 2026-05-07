import ecommerceImg from "@/public/e-commerce.png";
import aisaasImg from "@/public/ai-saas.png";
import netflixgpt from "@/public/netflix-gpt.png";
import progress from "@/public/progress.jpg";
import telosx from "@/public/telosx.png";
import jam from "@/public/jam.jpg";
import type { ProjectShowcase } from "./types";

export const projectsData: readonly ProjectShowcase[] = [
  {
    slug: "merge-me",
    title: "Merge-Me",
    tagline: "Tinder for developers — match, chat, build together.",
    description:
      "A full-stack matchmaking platform that helps developers discover collaborators based on shared stack and interests. Real-time chat, swipe-based interactions, and a hardened auth flow built from scratch.",
    highlights: [
      "Swipe-based matchmaking with optimistic UI updates",
      "JWT auth with HTTP-only cookies and refresh-token rotation",
      "Real-time messaging via WebSockets (Socket.IO)",
      "Redux Toolkit for client state, RTK Query for data fetching",
    ],
    tech: ["Node.js", "Express", "MongoDB", "React", "Redux", "Socket.IO"],
    imageUrl: progress,
    videoUrl: "",
    repoUrl: "https://github.com/Dikshant441/merge_me",
    runLocally: `git clone https://github.com/Dikshant441/merge_me
cd merge_me

# Backend
cd backend
npm install
cp .env.example .env   # fill MONGO_URI, JWT_SECRET
npm run dev

# Frontend
cd ../frontend
npm install
npm run dev`,
  },
  {
    slug: "cloud-ai-saas",
    title: "Cloud-AI-Saas",
    tagline: "AI-powered media platform with smart previews.",
    description:
      "A SaaS application that integrates Cloudinary AI for smart video previews and efficient media management. Server-side rendered for SEO and fast first paint, with Prisma + NeonDB for typed data access at the edge.",
    highlights: [
      "Cloudinary AI for auto-cropping and smart video previews",
      "Stripe-style usage metering on uploads",
      "Prisma schema with NeonDB serverless Postgres",
      "Next.js App Router with server actions for uploads",
    ],
    tech: ["Next.js", "TypeScript", "Cloudinary", "Prisma", "NeonDB"],
    imageUrl: aisaasImg,
    videoUrl: "",
    repoUrl: "https://github.com/Dikshant441/AI-saas",
    runLocally: `git clone https://github.com/Dikshant441/AI-saas
cd AI-saas
npm install
cp .env.example .env   # CLOUDINARY_*, DATABASE_URL, NEXTAUTH_SECRET
npx prisma migrate dev
npm run dev`,
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
    runLocally: `# Repo is private — contact me for access.
# Once cloned:
npm install
cp .env.example .env.local   # SANITY_PROJECT_ID, SANITY_DATASET
npm run dev`,
  },
  {
    slug: "jam-protocol",
    title: "JAM Implementation Doc",
    tagline: "Co-developing the Join-Accumulate Machine for Polkadot.",
    description:
      "Contributions to JAM Protocol — a major upgrade to the Polkadot ecosystem proposed by Gavin Wood. Documentation covers design choices, core components, and integration points required to run a functional JAM node, from block production and finality to PVM and peer-to-peer networking.",
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
    runLocally: `# Source not public yet. Documentation is hosted at:
# https://tessera.chainscore.finance/`,
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
    runLocally: `git clone https://github.com/Dikshant441/Netflixx-GPT
cd Netflixx-GPT
npm install
# Add VITE_TMDB_KEY and VITE_OPENAI_KEY to .env.local
npm run dev`,
  },
  {
    slug: "virtual-cart",
    title: "Virtual Cart",
    tagline: "Full-featured MERN e-commerce with admin dashboard.",
    description:
      "An end-to-end e-commerce platform built on the MERN stack — product catalog, cart, checkout, and an admin dashboard for inventory and orders. Material UI for polished components and Stripe for payment processing.",
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
    runLocally: `git clone https://github.com/Dikshant441/E-commerce-MERN
cd E-commerce-MERN

# Backend
cd backend
npm install
cp .env.example .env   # MONGO_URI, JWT_SECRET, STRIPE_KEY
npm run dev

# Frontend
cd ../frontend
npm install
npm start`,
  },
];
