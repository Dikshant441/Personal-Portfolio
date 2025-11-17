import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // always compute on request

export async function GET() {
  // Do not return actual env values; only booleans.
  const payload = {
    ok: true,
    env: {
      RESEND_API_KEY: Boolean(process.env.RESEND_API_KEY),
      RESEND_FROM: Boolean(process.env.RESEND_FROM),
      RESEND_TO: Boolean(process.env.RESEND_TO),
      NODE_ENV: process.env.NODE_ENV ?? "unknown",
    },
    now: new Date().toISOString(),
  } as const;

  return NextResponse.json(payload, { status: 200 });
}
