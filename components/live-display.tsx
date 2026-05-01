"use client";

import { MAX_ATTEMPTS } from "@/lib/constants";
import PixelHeart from "./pixel-heart";

interface LivesDisplayProps {
  remaining: number;
}

export default function LivesDisplay({ remaining }: LivesDisplayProps) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xs font-semibold text-[var(--text-secondary)]">
        Mga Pagkakataon:
      </span>

      {/* heartsssss this is just cool */}
      <div className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <PixelHeart key={i} filled={i < remaining} />
        ))}
      </div>

      <span className="text-xs font-medium text-[var(--text-muted)]">
        {remaining}/{MAX_ATTEMPTS}
      </span>
    </div>
  );
}
