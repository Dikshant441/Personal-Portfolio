"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";
import SubmitBtn from "./Submit-btn";
import toast from "react-hot-toast";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";

type FormState = { success: boolean; error?: string };

export default function Contact() {
  const { ref } = useSectionView("Contact");
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = React.useState(false);
  const [state, setState] = React.useState<FormState>({ success: false });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const senderEmail = (form.elements.namedItem("senderEmail") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    // setTimeout moves all React state updates outside the synchronous event-handler
    // context so React doesn't treat them as "synchronous input" and throw a Suspense error.
    setTimeout(async () => {
      setIsPending(true);
      const toastId = toast.loading("Sending your message…") as string;

      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ senderEmail, message }),
        });
        const result = await res.json();
        if (!res.ok || result.error) {
          const msg = result.error ?? "Something went wrong";
          setState({ success: false, error: msg });
          toast.error(`Couldn't send right now. ${msg}`, { id: toastId });
        } else {
          setState({ success: true, error: undefined });
          toast.success("Email sent successfully!", { id: toastId });
          formRef.current?.reset();
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        setState({ success: false, error: msg });
        toast.error(`Couldn't send right now. ${msg}`, { id: toastId });
      } finally {
        setIsPending(false);
      }
    }, 0);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-14 sm:mb-20 w-[min(100%,42rem)] mx-auto text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        eyebrow="Contact"
        subtitle="Email, WhatsApp, or the form below. I usually reply within a day."
      >
        Let&apos;s get in touch
      </SectionHeading>

      {/* Quick links */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { href: "mailto:singhdikshant200@gmail.com", label: "Email", icon: <FiMail className="opacity-70" />, external: false },
          { href: "https://wa.me/917339895383", label: "WhatsApp", icon: <FaWhatsapp className="opacity-80" />, external: true },
          { href: "https://cal.com/dikshant-singh-canxf0/30min", label: "Book meeting", icon: <BsCalendar2Check className="opacity-70" />, external: true },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-md border border-border bg-card py-3 text-sm text-foreground shadow-sm transition-all duration-200 ease-out hover:border-accent hover:bg-muted/30 hover:text-accent hover:shadow-md sm:py-3.5 sm:text-base"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>

      {/* Form card */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-6"
      >
        <div className="mx-auto max-w-2xl rounded-lg border border-border border-t-2 border-t-accent bg-card p-5 shadow-sm sm:p-6">
          <form
            ref={formRef}
            className="flex flex-col gap-4 text-left sm:gap-5"
            onSubmit={handleSubmit}
          >
            {/* Email field */}
            <motion.div variants={containerVariants}>
              <label htmlFor="senderEmail" className="mb-2 block font-mono text-[0.65rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Your email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground/50">
                  <FiMail />
                </div>
                <input
                  id="senderEmail"
                  className="h-12 w-full rounded-md border border-border bg-transparent pl-10 pr-3 text-sm text-foreground outline-none transition-all duration-150 ease-out placeholder:text-muted-foreground/60 hover:border-muted-foreground/40 focus:border-accent focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card"
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="you@example.com"
                  aria-label="Your email"
                />
              </div>
            </motion.div>

            {/* Message field */}
            <motion.div variants={containerVariants}>
              <label htmlFor="message" className="mb-2 block font-mono text-[0.65rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Your message
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-3 text-muted-foreground/50">
                  <FiMessageSquare />
                </div>
                <textarea
                  id="message"
                  className="min-h-40 w-full rounded-md border border-border bg-transparent py-3 pl-10 pr-3 text-sm text-foreground outline-none transition-all duration-150 ease-out placeholder:text-muted-foreground/60 hover:border-muted-foreground/40 focus:border-accent focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card sm:min-h-48"
                  name="message"
                  placeholder="What are you working on?"
                  required
                  maxLength={5000}
                  aria-label="Your message"
                />
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div variants={containerVariants} className="flex flex-col items-center gap-2 pt-1">
              <SubmitBtn pending={isPending} />
              {state?.error && (
                <p className="text-center text-sm text-rose-600 dark:text-rose-400">
                  We couldn&apos;t send right now. Please click Submit again. If it keeps failing,
                  try the WhatsApp or Email quick links above.
                </p>
              )}
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
}
