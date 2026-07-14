import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 w-full max-w-5xl px-4 text-center">
      <div className="mb-6 flex items-center gap-4" aria-hidden>
        <span className="h-px flex-1 bg-border" />
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        <span className="h-px flex-1 bg-border" />
      </div>
      <small className="block font-mono text-[0.65rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
        &copy; {new Date().getFullYear()} Dikshant Singh · All rights reserved
      </small>
    </footer>
  );
}
