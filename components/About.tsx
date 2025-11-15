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
      className="mb-24 max-w-[70rem] scroll-mt-24"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      id="about"
    >
      <div className="text-center">
        <SectionHeading>Dev Story</SectionHeading>
        <p className="mx-auto mb-10 mt-2 max-w-2xl text-lg font-normal text-gray-500">
          A curious builder blending full‑stack engineering with blockchain
          systems.
        </p>
      </div>

      {/* Main content layout: image | text */}
      <div className="relative grid items-start gap-10 md:grid-cols-[1fr,1.55fr]">
        {/* Decorative vertical divider */}
        <div aria-hidden className="pointer-events-none absolute left-[calc(100%/3)] top-2 hidden h-[94%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-indigo-400/40 to-transparent md:block" />
        {/* Portrait block with added inner spacing */}
        <div className="mx-auto w-full max-w-sm">
          <figure className="group relative rounded-2xl bg-gradient-to-br from-white/70 to-white/40 p-3 shadow-lg ring-1 ring-black/10 dark:from-white/10 dark:to-white/5 dark:ring-white/10">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            <div className="rounded-xl bg-white/60 p-2 dark:bg-white/10">
              <Image
                src="/about.jpg"
                alt="Working at desk with multi-screen setup"
                width={820}
                height={1024}
                className="h-auto w-full rounded-lg object-cover shadow-sm transition-transform duration-500 group-hover:scale-[1.015]"
                priority={false}
              />
            </div>
            <motion.div
              whileHover={{ y: -3 }}
              className="mt-4 rounded-xl bg-white/60 p-2 ring-1 ring-black/10 transition-transform duration-500 dark:bg-white/10 dark:ring-white/10"
            >
              <Image
                src="/about3.jpeg"
                alt="Office environment standing near glass partition"
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </motion.div>
            <figcaption className="mt-3 text-center text-xs font-medium tracking-wide text-gray-600 dark:text-gray-400">
              Systems thinking + interface craft.
            </figcaption>
          </figure>
        </div>

        {/* Text content */}
        <div className="leading-8 text-gray-800 dark:text-white/80">
          <p className="mb-5 text-[1.05rem]">
            I’m Dikshant Singh — a curious builder, full‑stack engineer, and
            blockchain enthusiast driven by the excitement of creating things
            that didn’t exist before.
          </p>

          <p className="mb-5">
            My journey started with a B.Tech in IT from KNIT Sultanpur, where I
            built a strong foundation in computer systems, software engineering,
            and problem‑solving through DSA and full‑stack development. Since
            then, I’ve been exploring the edges of technology — from scalable
            web platforms to decentralized protocols.
          </p>

          <p className="mb-5">
            I currently contribute as a Software Development Engineer at
            Chainscore Labs, co‑developing JAM (Join‑Accumulate Machine) —
            Polkadot’s next‑generation protocol from Gavin Wood. My work spans
            off‑chain auditing pipelines, dispute resolution, validator‑scale
            networking (QUIC/TLS 1.3), and systems that support 1,000+
            validators with sub‑2s latency. I also engineered components like
            guarantee/assurance protocols, adaptive tranche logic, and highly
            available work‑report distribution.
          </p>

          <p className="mb-5">
            Beyond protocol research, I’ve contributed 20,000+ lines of
            production code to TelosX, a Layer‑1 crypto exchange — building
            trading interfaces with Next.js + TypeScript, integrating real‑time
            websockets, and improving UI performance by ~40% for 10,000+ users.
          </p>

          <p className="mb-5">
            I thrive where engineering meets exploration — whether building
            full‑stack apps with Next.js, MERN, Redux Toolkit, designing Web3
            systems, or experimenting with LLMs and AI‑driven tools. I love
            understanding how things work at a deep level and then pushing to
            build something better, cleaner, and more scalable.
          </p>

          <p>
            If you’re working on something exciting in full‑stack engineering,
            blockchain infrastructure, Web3, or AI systems — I’d love to
            connect, learn, and build together.
          </p>
          <div className="mt-8 grid w-full gap-3 sm:grid-cols-3">
            {[
              { value: '20k+', label: 'LOC shipped' },
              { value: '10k+', label: 'Users impacted' },
              { value: '<2s', label: 'Validator latency' },
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
