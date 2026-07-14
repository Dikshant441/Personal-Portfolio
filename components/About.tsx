"use client";

import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-14 mt-10 w-full max-w-4xl scroll-mt-24 sm:mb-24 sm:mt-16"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      id="about"
    >
      <SectionHeading
        eyebrow="About"
        subtitle="A curious builder blending full-stack craft with AI, LLMs, MCP & Agentic Workflows."
      >
        Background & Focus
      </SectionHeading>

      <div className="mx-auto max-w-3xl leading-relaxed text-muted-foreground">
        <p className="mb-5 font-serif text-xl text-foreground">
          Hi, I&apos;m Dikshant <span className="inline-block">👋</span>
        </p>

        <p className="mb-5">
          I&apos;m a Software Development Engineer with ~2 years of full-time engineering experience. I currently work at{" "}
          <span className="font-semibold text-foreground">Chainscore Labs</span>, where I started
          as an intern and now contribute as a full-time SDE.
        </p>

        <p className="mb-5">
          My day-to-day spans the full stack and goes a few layers below it. I&apos;ve built complete trading
          frontends in <span className="font-medium text-foreground">Next.js / React / TypeScript</span>, shipped{" "}
          <span className="font-medium text-foreground">Nest.js, Node.js / Express APIs</span> with WebSocket services supporting
          thousands of concurrent users, and currently work on lower-level systems: architecting computational
          pipelines and consensus mechanisms in <span className="font-medium text-foreground">Python</span>, and contributing
          to a high-performance SDK in <span className="font-medium text-foreground">C</span> for a decentralized compute
          protocol (JAM, in the Polkadot ecosystem).
        </p>

        <p className="mb-5">
          Less than any single domain, what pulls me in are problems where{" "}
          <span className="font-semibold text-foreground">correctness, performance, and concurrency</span>{" "}
          actually matter - APIs under load, real-time data, networking, protocols, virtual machines.
        </p>

        <p className="small-caps mb-4 text-accent">
          Outside of work
        </p>
        <ul className="mb-8 space-y-2.5">
          {[
            { label: "Experimenting with agentic workflows and LLM tooling - building RAG systems, custom MCP servers, and eval harnesses to test agent reliability" },
            { label: "Working through System Design problems (LLD + HLD) in C++ and Go" },
            { label: "Building side projects to learn distributed systems internals - most recently Quiver, a QUIC-native pub/sub message broker written from scratch in Python" }
          ].map((item) => (
            <li key={item.label} className="flex gap-3 text-[0.95rem]">
              <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-accent" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/5">
          <p className="text-[0.95rem] text-foreground/85">
            <span className="font-semibold text-emerald-700 dark:text-emerald-300">🚀 Currently open to SDE / SDE-2 / Software Engineer roles</span>{" "}
            - especially focused on frontend, backend, distributed systems, networking, or systems software. If
            you&apos;re hiring or know of a fit, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid w-full grid-cols-3 divide-x divide-border border-y border-border py-8 text-center">
          {[
            { value: '~2 yrs', label: 'Production engineering' },
            { value: '10k+', label: 'Concurrent users served' },
            { value: '350+', label: 'LeetCode solved' },
          ].map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-2 px-2 sm:px-4">
              <span className="font-serif text-3xl text-foreground sm:text-4xl">{m.value}</span>
              <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-[0.65rem]">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
