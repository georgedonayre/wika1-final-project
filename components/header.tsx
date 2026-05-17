"use client";

import Link from "next/link";
import { GAME_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)]">
      <div className="max-w-xl mx-auto px-3 sm:px-4 py-3 sm:py-5 flex items-center justify-between gap-2">
        <div className="flex flex-col min-w-0">
          <Link href="/" className="no-underline min-w-0">
            <h1 className="text-sm sm:text-2xl font-extrabold text-[var(--green-primary)] tracking-tight leading-tight m-0 truncate">
              {GAME_NAME}
            </h1>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-1 mt-0.5 sm:mt-1 text-[0.45rem] sm:text-xs text-[var(--text-muted)] no-underline transition-colors duration-150 hover:text-[var(--green-primary)]"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 sm:w-3 sm:h-3"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="1" />
            </svg>
            About
          </Link>
        </div>

        {/* nav — mekaniks only */}
        <nav className="flex items-center flex-shrink-0">
          <Link
            href="/paano-maglaro"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs sm:text-sm font-semibold no-underline transition-colors duration-150 hover:border-[var(--green-primary)] hover:text-[var(--green-primary)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="hidden sm:inline">Mekaniks</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
