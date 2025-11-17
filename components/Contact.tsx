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
      {/* Soft spotlight background */}
      <div className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 -z-10 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/6 via-fuchsia-400/6 to-emerald-400/6 blur-3xl" />
      </div>

      <SectionHeading>
        <span className="text-gray-700 dark:text-gray-200">Wanna Connect</span>
      </SectionHeading>

      <p className="text-base sm:text-lg mb-3 -mt-3 font-normal text-gray-600 dark:text-gray-300">
        Get in touch
      </p>

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
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 px-2 sm:px-0">
        <a
          href="mailto:singhdikshant200@gmail.com"
          className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-indigo-400/40 via-fuchsia-400/40 to-emerald-400/40 transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-center gap-2 rounded-xl bg-white/85 dark:bg-white/5 backdrop-blur-md py-3 sm:py-3.5 text-sm sm:text-base text-gray-900 dark:text-gray-200 border border-white/40 dark:border-white/10">
            <FiMail className="opacity-70" />
            Email
          </div>
        </a>
        <a
          href="https://wa.me/917339895383"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-emerald-500/40 via-teal-500/40 to-lime-500/40 transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-center gap-2 rounded-xl bg-white/85 dark:bg-white/5 backdrop-blur-md py-3 sm:py-3.5 text-sm sm:text-base text-gray-900 dark:text-gray-200 border border-white/40 dark:border-white/10">
            <FaWhatsapp className="opacity-80" />
            WhatsApp
          </div>
        </a>
      </div>

      {/* Form card with gradient border */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8"
      >
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-indigo-400/35 via-fuchsia-400/35 to-emerald-400/35 blur-[2px]" />
          <div className="relative rounded-2xl border border-white/40 dark:border-white/10 bg-white/85 dark:bg-white/5 backdrop-blur-md p-5 sm:p-6 shadow-lg">
            <form
              ref={formRef}
              className="flex flex-col gap-4 sm:gap-5 text-left"
              action={actionWithTransition}
            >
              {/* Email field */}
              <motion.div variants={containerVariants}>
                <label htmlFor="senderEmail" className="sr-only">
                  Your email
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500 dark:text-gray-400">
                    <FiMail />
                  </div>
                  <input
                    id="senderEmail"
                    className="h-14 w-full rounded-xl borderBlack bg-white/90 dark:bg-white/5 px-10 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none transition focus:ring-2 focus:ring-fuchsia-400/50 focus:bg-white dark:focus:bg-white/10"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                    aria-label="Your email"
                  />
                </div>
              </motion.div>

              {/* Message field */}
              <motion.div variants={containerVariants}>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-3 text-gray-500 dark:text-gray-400">
                    <FiMessageSquare />
                  </div>
                  <textarea
                    id="message"
                    className="min-h-44 sm:min-h-52 w-full rounded-xl borderBlack bg-white/90 dark:bg-white/5 p-10 pt-10 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none transition focus:ring-2 focus:ring-indigo-400/50 focus:bg-white dark:focus:bg-white/10"
                    name="message"
                    placeholder="Your message"
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
                  <p className="text-sm text-rose-600 dark:text-rose-400 text-center">
                    We couldn’t send right now. Please click Submit again. If it keeps failing,
                    try the WhatsApp or Email quick links above.
                  </p>
                )}
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}