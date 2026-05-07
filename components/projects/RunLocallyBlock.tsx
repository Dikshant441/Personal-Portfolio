"use client";

import { useState } from "react";

export default function RunLocallyBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="relative rounded-xl border border-black/10 bg-zinc-950 text-zinc-100 dark:border-white/10">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Run locally
          </span>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="rounded-md px-2 py-1 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
          aria-label="Copy commands"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-[0.8rem] leading-relaxed">
        <code className="font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
