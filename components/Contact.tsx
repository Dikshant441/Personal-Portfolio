"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";
import { SendEmail } from "@/actions/SendEmail";
import SubmitBtn from "./Submit-btn";
import toast from "react-hot-toast";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useFormState } from "react-dom";



export default function Contact() {
  const { ref } = useSectionView("Contact");
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = React.useTransition();
  const submitToastId = React.useRef<string | null>(null);

  type FormState = { success: boolean; error?: string };
  const initialState: FormState = { success: false };
  const [state, formAction] = useFormState<FormState, FormData>(
    async (_prev: FormState, formData: FormData) => {
      const { error } = await SendEmail(formData);
      if (error) return { success: false, error };
      return { success: true };
    },
    initialState
  );

  React.useEffect(() => {
    if (state?.error) {
      toast.error(
        `Couldn't send right now. Please click Submit again. (${state.error})`,
        { id: submitToastId.current ?? undefined }
      );
      submitToastId.current = null;
    } else if (state?.success) {
      toast.success("Email sent successfully!", {
        id: submitToastId.current ?? undefined,
      });
      submitToastId.current = null;
      formRef.current?.reset();
    }
  }, [state]);

  const actionWithTransition = React.useCallback(
    (formData: FormData) => {
      // Show immediate feedback and invoke action in a transition
      submitToastId.current = toast.loading("Sending your message…", {
        id: submitToastId.current ?? undefined,
      });
      startTransition(() => {
        formAction(formData);
      });
    },
    [formAction]
  );

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
      className="relative mb-24 w-[min(100%,42rem)] mx-auto text-center"
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
        eyebrow="Section 05 — Say hi"
        accent="get in touch"
        subtitle="Email, WhatsApp, or the form below. I usually reply within a day."
      >
        Let&apos;s get in touch
      </SectionHeading>

      <p className="text-gray-700 dark:text-white/80">
        Prefer WhatsApp or email? Reach me at
        <a
          href="https://wa.me/917339895383"
          target="_blank"
          rel="noreferrer"
          className="mx-1 underline decoration-dashed decoration-emerald-500/60 underline-offset-4 hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          7339895383 (WhatsApp)
        </a>
        or use the form below.
      </p>

      {/* Quick links */}
      <div className="mt-6 grid grid-cols-2 gap-3 px-2 sm:gap-4 sm:px-0">
        <a
          href="mailto:singhdikshant200@gmail.com"
          className="flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white py-3 text-sm text-gray-800 transition hover:border-black/20 hover:bg-gray-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/85 dark:hover:bg-white/10 sm:py-3.5 sm:text-base"
        >
          <FiMail className="opacity-70" />
          Email
        </a>
        <a
          href="https://wa.me/917339895383"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white py-3 text-sm text-gray-800 transition hover:border-black/20 hover:bg-gray-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/85 dark:hover:bg-white/10 sm:py-3.5 sm:text-base"
        >
          <FaWhatsapp className="opacity-80" />
          WhatsApp
        </a>
      </div>

      {/* Form card */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8"
      >
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
          <form
            ref={formRef}
            className="flex flex-col gap-4 text-left sm:gap-5"
            action={actionWithTransition}
          >
            {/* Email field */}
            <motion.div variants={containerVariants}>
              <label htmlFor="senderEmail" className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-white/60">
                Your email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400 dark:text-white/40">
                  <FiMail />
                </div>
                <input
                  id="senderEmail"
                  className="h-12 w-full rounded-lg border border-black/10 bg-white pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-100 dark:placeholder:text-white/35 dark:focus:border-white/60"
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
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-white/60">
                Your message
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-3 text-gray-400 dark:text-white/40">
                  <FiMessageSquare />
                </div>
                <textarea
                  id="message"
                  className="min-h-40 w-full rounded-lg border border-black/10 bg-white py-3 pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-100 dark:placeholder:text-white/35 dark:focus:border-white/60 sm:min-h-48"
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
              <SubmitBtn />
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