import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/Contact-form-email";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server misconfiguration: RESEND_API_KEY is not set" },
      { status: 500 }
    );
  }

  let senderEmail: unknown, message: unknown;
  try {
    const body = await req.json();
    senderEmail = body.senderEmail;
    message = body.message;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!validateString(senderEmail, 500)) {
    return NextResponse.json({ error: "Invalid sender email" }, { status: 400 });
  }
  if (!validateString(message, 5000)) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "Contact Form <onboarding@resend.dev>";
  const to = process.env.RESEND_TO ?? "singhdikshant200@gmail.com";

  try {
    const data = await resend.emails.send({
      from,
      to,
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });
    return NextResponse.json({ data });
  } catch (error: unknown) {
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
  }
}
