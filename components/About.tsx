"use client";

import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";
import { FiExternalLink } from "react-icons/fi";

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
      <div className="mb-4 flex items-center gap-4">
        <span aria-hidden className="rule flex-1" />
        <span className="small-caps text-accent">About</span>
        <span aria-hidden className="rule flex-1" />
      </div>

      <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:mb-14 sm:text-lg">
        A curious builder blending full-stack craft with AI, LLMs, MCP & Agentic Workflows.
      </p>

      <div className="mx-auto max-w-3xl text-justify leading-relaxed text-muted-foreground">
        <p className="mb-5 font-serif text-xl text-foreground">
          Hi, I&apos;m Dikshant <span className="inline-block">👋</span>
        </p>

        <p className="mb-5">
          I&apos;m a Software Development Engineer with{" "}
          <span className="font-semibold text-foreground">2+ years</span> of full-time engineering experience,
          building production-grade applications across frontend, backend, and distributed infrastructure. I
          currently work at <span className="font-semibold text-foreground">Chainscore Labs</span> as a full-time
          SDE.
        </p>

        <p className="mb-5">
          My work spans the full stack and goes a few layers below it. I build responsive applications with{" "}
          <span className="font-medium text-foreground">React.js, Next.js, and TypeScript</span>, and backend
          services and APIs with{" "}
          <span className="font-medium text-foreground">Node.js/Express.js, NestJS, and Golang</span>, backed by{" "}
          <span className="font-medium text-foreground">PostgreSQL, MongoDB, and Redis</span>. I&apos;ve shipped
          WebSocket-based real-time systems supporting thousands of concurrent users, complete trading frontends and
          interfaces, and authentication/authorization systems - and I currently work on lower-level systems too:
          architecting computational pipelines and consensus mechanisms in{" "}
          <span className="font-medium text-foreground">Python</span>, and contributing to a high-performance SDK
          in <span className="font-medium text-foreground">C and Golang</span> for JAM, a decentralized compute
          protocol in the Polkadot ecosystem.
        </p>

        <p className="mb-5">
          I choose tools based on the problem rather than limiting myself to a single stack, and I&apos;ve worked
          across the complete product lifecycle - system design, implementation, testing, optimization, deployment,
          and production ownership.
        </p>

        <p className="mb-5">
          Less than any single domain, what pulls me in are problems where{" "}
          <span className="font-semibold text-foreground">correctness, performance, and concurrency</span>{" "}
          actually matter - APIs under load, real-time data, networking, protocols, virtual machines, and
          understanding how systems behave under scale and failure.
        </p>

        <p className="small-caps mb-4 text-accent">
          Outside of work
        </p>
        <ul className="mb-8 space-y-2.5">
          {[
            { label: "Experimenting with agentic workflows and LLM tooling - building RAG systems, custom MCP servers, and eval harnesses to test agent reliability" },
            { label: "Working through System Design problems (LLD + HLD) in C++ and Go" },
          ].map((item) => (
            <li key={item.label} className="flex gap-3 text-[0.95rem]">
              <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-accent" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <p className="mb-5">
          I&apos;m always interested in connecting with engineers, founders, and teams working on technically
          challenging products.
        </p>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/5">
          <p className="text-[0.95rem] text-foreground/85">
            <span className="font-semibold text-emerald-700 dark:text-emerald-300">🚀 Currently open to SDE / SDE-2 / Software Engineer roles</span>{" "}
            - especially focused on frontend, backend, distributed systems, networking, or systems software. If
            you&apos;re hiring or know of a fit, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid w-full grid-cols-3 divide-x divide-border border-y border-border py-8 text-center">
          {[
            { value: '2+ yrs', label: 'Production engineering' },
            { value: '10k+', label: 'Concurrent users served' },
            { value: '450+', label: 'LeetCode solved', href: 'https://leetcode.com/u/okayokay211/' },
          ].map((m) =>
            m.href ? (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-2 px-2 transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                <span className="font-serif text-3xl text-foreground transition group-hover:text-accent sm:text-4xl">{m.value}</span>
                <span className="inline-flex items-center gap-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.15em] text-accent underline decoration-accent/40 underline-offset-4 transition group-hover:decoration-accent sm:text-[0.65rem]">
                  {m.label}
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <FiExternalLink aria-hidden className="text-[0.7rem]" />
                  </motion.span>
                </span>
              </a>
            ) : (
              <div key={m.label} className="flex flex-col items-center gap-2 px-2 sm:px-4">
                <span className="font-serif text-3xl text-foreground sm:text-4xl">{m.value}</span>
                <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-[0.65rem]">{m.label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}
