"use client";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn({ pending }: { pending: boolean }) {
    return (
      <button
        type="submit"
        className="group flex min-h-[44px] w-[9rem] touch-manipulation items-center justify-center gap-2 rounded-md bg-accent text-sm font-medium tracking-[0.05em] text-accent-foreground shadow-sm outline-none transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-secondary hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 disabled:translate-y-0 disabled:opacity-65"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-accent-foreground"></div>
        ) : (
          <>
            Send message{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        )}
      </button>
    );
  }
