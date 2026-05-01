/**
 * components/LoseModal.tsx
 *
 * Game-over modal shown when the player runs out of attempts.
 * Does NOT reveal answers — encourages the player to return tomorrow.
 * Dismissable, but the game board remains frozen until lives reset.
 */

"use client";

interface LoseModalProps {
  onDismiss: () => void;
}

export default function LoseModal({ onDismiss }: LoseModalProps) {
  return (
    <div
      className="animate-overlay"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        zIndex: 50,
        backdropFilter: "blur(4px)",
      }}
      onClick={onDismiss}
    >
      <div
        className="animate-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--error)",
          borderRadius: "var(--radius-xl)",
          padding: "40px 32px",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 0 40px rgba(248, 113, 113, 0.1)",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "12px" }}>💔</div>

        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "var(--error)",
            marginBottom: "12px",
          }}
        >
          Naubos na ang iyong mga buhay
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "32px",
            lineHeight: 1.6,
          }}
        >
          Bumalik bukas para makuha ang 5 bagong buhay at subukan muli ang
          hamon. Ang iyong mga tamang sagot ay naka-save pa rin.
        </p>

        <button
          onClick={onDismiss}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--error)",
            background: "transparent",
            color: "var(--error)",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            transition:
              "background var(--transition-fast), color var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--error)";
            e.currentTarget.style.color = "var(--text-inverse)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--error)";
          }}
        >
          Omsim, babalik ako bukas
        </button>
      </div>
    </div>
  );
}
