/**
 * a solved group card (color + label + 4 words)
 * appears when player guesses a group correctly.
 */

"use client";

import { Group } from "@/types/game";
import { GROUP_THEME, GroupColor } from "@/lib/constants";

interface ConnectionResultProps {
  group: Group;
  isVisible: boolean;
}

export default function ConnectionResult({
  group,
  isVisible,
}: ConnectionResultProps) {
  if (!isVisible) return null;

  const theme = GROUP_THEME[group.color as GroupColor];

  return (
    <div
      className="animate-pop-in"
      style={{
        padding: "16px",
        borderRadius: "var(--radius-md)",
        border: `1px solid ${theme.accent}`,
        background: theme.bg,
        marginBottom: "8px",
      }}
    >
      {/* label */}
      <div
        style={{
          fontSize: "0.8rem",
          fontWeight: 700,
          color: theme.accent,
          marginBottom: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {group.connection}
      </div>

      {/* words inside the group */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {group.words.map((word) => (
          <span
            key={word.id}
            style={{
              padding: "4px 12px",
              borderRadius: "var(--radius-sm)",
              background: "var(--bg-tertiary)",
              color: "var(--text-primary)",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
}
