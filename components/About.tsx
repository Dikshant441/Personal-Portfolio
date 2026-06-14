"use client";

import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";
import SectionDivider from "./Section-divider";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 mt-16 max-w-[70rem] scroll-mt-24"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      id="about"
    >
      <div className="text-center">
        <SectionHeading
          eyebrow="Section 01 / Dev story"
          accent="full-stack craft"
          accentVariant="marker"
          subtitle="A curious builder blending full-stack craft with blockchain systems."
        >
          My dev story - full-stack craft, end to end
        </SectionHeading>
      </div>

      {/* Main content layout: image | text */}
      <div className="relative grid items-start gap-10 md:grid-cols-[0.85fr,1.6fr] md:gap-14">
        {/* Sticky portrait + status card */}
        <div className="md:sticky md:top-28 md:self-start">
          <figure className="group relative mx-auto w-full max-w-sm">
            {/* Ambient glow */}

            {/* Portrait */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
              <Image
                src="/aboutn.jpeg"
                alt="Dikshant Singh — portrait"
                width={820}
                height={1024}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority={false}
              />
            </div>

            {/* Floating location chip */}
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M10 18s7-6.16 7-11a7 7 0 10-14 0c0 4.84 7 11 7 11zm0-8a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Pune, India
            </span>

            {/* Floating "available" chip */}
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/95 px-3 py-1 text-xs font-medium text-white backdrop-blur-md ring-1 ring-emerald-300/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Open to roles
            </span>

            {/* Bottom "now" card */}
            <div className="mt-4 rounded-xl border border-black/10 bg-white/80 p-3 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-gray-500 dark:text-white/50">
                <span>Currently</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">● live</span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-gray-900 dark:text-white">
                SDE @ Chainscore Labs
              </p>
              <p className="mt-0.5 text-xs text-gray-600 dark:text-white/60">
                Co-developing JAM — Polkadot&apos;s next-gen protocol
              </p>
            </div>
          </figure>
        </div>

        {/* Text content */}
        <div className="leading-relaxed text-gray-800 dark:text-white/80">
          <p className="mb-5 text-[1.12rem] font-medium text-gray-900 dark:text-white">
            Hi, I&apos;m Dikshant <span className="inline-block">👋</span>
          </p>

          <p className="mb-5">
            I&apos;m a Software Development Engineer based in Pune, India, with around 1.5 years of full-time
            engineering experience. I currently work at{" "}
            <span className="font-semibold text-gray-900 dark:text-white">Chainscore Labs</span>, where I started
            as an intern and now contribute as a full-time SDE.
          </p>

          <p className="mb-5">
            My day-to-day spans the full stack and goes a few layers below it. I&apos;ve built complete trading
            frontends in <span className="font-medium">Next.js / React / TypeScript</span>, shipped{" "}
            <span className="font-medium">Node.js / Express APIs</span> with WebSocket services supporting
            thousands of concurrent users, and currently work on lower-level systems: architecting computational
            pipelines and consensus mechanisms in <span className="font-medium">Python</span>, and contributing
            to a high-performance SDK in <span className="font-medium">C</span> for a decentralized compute
            protocol (JAM, in the Polkadot ecosystem).
          </p>

          <p className="mb-5">
            Less than any single domain, what pulls me in are problems where{" "}
            <span className="font-semibold text-gray-900 dark:text-white">correctness, performance, and concurrency</span>{" "}
            actually matter - APIs under load, real-time data, networking, protocols, virtual machines.
          </p>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-white/50">
            Outside of work
          </p>
          <ul className="mb-6 space-y-2.5">
            {[
              { label: "Experimenting with agentic workflows and LLM tooling - building RAG systems, custom MCP servers, and eval harnesses to test agent reliability"},  
              { label: "Working through System Design problems (LLD + HLD) in C++ and Go" },
              { label: "Building side projects to learn distributed systems internals - most recently Quiver, a QUIC-native pub/sub message broker written from scratch in Python" }
            ].map((item) => (
              <li key={item.label} className="flex gap-2.5 text-[0.95rem]">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400 dark:bg-white/40" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/5">
            <p className="text-[0.95rem] text-gray-800 dark:text-white/85">
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">🚀 Currently open to SDE / SDE-2 / Software Engineer roles</span>{" "}
              - especially ones focused on backend, distributed systems, networking, or systems software. If
              you&apos;re hiring or know of a fit, I&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-8 grid w-full gap-3 sm:grid-cols-3">
            {[
              { value: '1.5+ yrs', label: 'Production engineering' },
              { value: '10k+', label: 'Concurrent users served' },
              { value: '350+', label: 'LeetCode solved' },
            ].map((m) => (
              <div key={m.label} className="flex flex-col rounded-lg border border-black/10 bg-white/60 px-4 py-3 text-center backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/10">
                <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{m.value}</span>
                <span className="mt-1 text-[0.65rem] uppercase tracking-wider text-gray-500 dark:text-gray-400">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
