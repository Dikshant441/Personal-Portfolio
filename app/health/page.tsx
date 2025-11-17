import React from "react";

// This is a server component. It runs only on the server and never bundles env values to the client.
export default async function HealthPage() {
  const isResendKeySet = Boolean(process.env.RESEND_API_KEY);
  const isResendFromSet = Boolean(process.env.RESEND_FROM);
  const isResendToSet = Boolean(process.env.RESEND_TO);
  const nodeEnv = process.env.NODE_ENV ?? "unknown";

  // Never render actual secret values; only indicate presence.
  const Row = ({ label, ok }: { label: string; ok: boolean }) => (
    <div className="flex items-center justify-between py-2 border-b border-black/5 dark:border-white/10">
      <span className="text-sm text-gray-600 dark:text-gray-300">{label}</span>
      <span className={ok ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>
        {ok ? "set" : "missing"}
      </span>
    </div>
  );

  return (
    <section className="mx-auto my-16 w-[min(100%,42rem)] rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/5 p-6 backdrop-blur-md shadow">
      <h1 className="text-2xl font-semibold mb-1">Healthcheck</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Server-side environment check (values are not displayed, only presence).
      </p>

      <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4">
        <Row label="RESEND_API_KEY" ok={isResendKeySet} />
        <Row label="RESEND_FROM (optional)" ok={isResendFromSet} />
        <Row label="RESEND_TO (optional)" ok={isResendToSet} />
        <div className="pt-3 text-xs text-gray-500 dark:text-gray-400">NODE_ENV: {nodeEnv}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">Timestamp: {new Date().toISOString()}</div>
      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Tip: Set environment variables in your hosting dashboard (e.g., Vercel) and redeploy.
      </p>
    </section>
  );
}
