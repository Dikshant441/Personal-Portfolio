"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/Contact-form-email";

export const SendEmail = async (formData: FormData) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "Server misconfiguration: RESEND_API_KEY is not set" };
  }
  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "Contact Form <onboarding@resend.dev>";
  const to = process.env.RESEND_TO ?? "singhdikshant200@gmail.com";
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (process.env.NODE_ENV !== "production") {
    console.info("[SendEmail] Key present:", Boolean(apiKey));
    console.info("[SendEmail] From:", from, "To:", to);
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };  
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from,
      to,
      subject: "Message from contact form",
      replyTo: String(senderEmail),
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    if (process.env.NODE_ENV !== "production") {
      console.info("[SendEmail] Resend response:", data);
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};