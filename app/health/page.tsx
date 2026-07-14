import React from "react";

// This is a server component. It runs only on the server and never bundles env values to the client.
export default async function HealthPage() {
  const isResendKeySet = Boolean(process.env.RESEND_API_KEY);
  const isResendFromSet = Boolean(process.env.RESEND_FROM);
  const isResendToSet = Boolean(process.env.RESEND_TO);
  const nodeEnv = process.env.NODE_ENV ?? "unknown";

  // Never render actual secret values; only indicate presence.
  const Row = ({ label, ok }: { label: string; ok: boolean }) => (
    <div className="flex items-center justify-between py-2 border-b border-border">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={ok ? "text-accent" : "text-rose-600 dark:text-rose-400"}>
        {ok ? "set" : "missing"}
      </span>
    </div>
  );

  return (
    <section className="mx-auto my-16 w-[min(100%,42rem)] rounded-lg border border-border bg-card p-6 shadow-sm">
      <h1 className="font-serif text-2xl font-semibold mb-1 text-foreground">Healthcheck</h1>
      <p className="text-sm text-muted-foreground mb-4">
        Server-side environment check (values are not displayed, only presence).
      </p>

      <div className="rounded-md border border-border bg-background p-4">
        <Row label="RESEND_API_KEY" ok={isResendKeySet} />
        <Row label="RESEND_FROM (optional)" ok={isResendFromSet} />
        <Row label="RESEND_TO (optional)" ok={isResendToSet} />
        <div className="pt-3 text-xs text-muted-foreground">NODE_ENV: {nodeEnv}</div>
        <div className="text-xs text-muted-foreground">Timestamp: {new Date().toISOString()}</div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Tip: Set environment variables in your hosting dashboard (e.g., Vercel) and redeploy.
      </p>
    </section>
  );
}
