"use client";

import Link from "next/link";
import { GAME_NAME, GAME_TAGLINE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)]">
      <div className="max-w-xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* logo and tagline */}
        <Link href="/" className="no-underline">
          <h1 className="text-2xl font-extrabold text-[var(--green-primary)] tracking-tight leading-tight m-0">
            {GAME_NAME}
          </h1>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            {GAME_TAGLINE}
          </p>
        </Link>

        {/* nav */}
        <nav className="flex items-center gap-3">
          <Link
            href="/paano-maglaro"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm font-semibold no-underline transition-colors duration-150 hover:border-[var(--green-primary)] hover:text-[var(--green-primary)]"
          >
            {/* ? icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Paano Maglaro
          </Link>
        </nav>
      </div>
    </header>
  );
}
