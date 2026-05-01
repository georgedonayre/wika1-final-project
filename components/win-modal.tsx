"use client";

interface WinModalProps {
  onShare: () => void;
  onDismiss: () => void;
}

export default function WinModal({ onShare, onDismiss }: WinModalProps) {
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
          border: "1px solid var(--green-primary)",
          borderRadius: "var(--radius-xl)",
          padding: "40px 32px",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 0 40px rgba(74, 222, 128, 0.15)",
        }}
      >
        {/* Trophy icon */}
        <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎉</div>

        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "var(--green-primary)",
            marginBottom: "12px",
          }}
        >
          Napanalunan mo!
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "28px",
            lineHeight: 1.6,
          }}
        >
          Mahusay! Nahanap mo ang lahat ng mga grupo.
          <br />
          Bumalik bukas para sa bagong hamon!
        </p>

        {/* Share button */}
        <button
          id="btn-share"
          onClick={onShare}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "var(--radius-md)",
            border: "none",
            background: "var(--green-primary)",
            color: "var(--text-inverse)",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: "12px",
            transition: "background var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--green-secondary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--green-primary)";
          }}
        >
          📋 I-share ang Resulta
        </button>

        <button
          onClick={onDismiss}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-default)",
            background: "var(--bg-tertiary)",
            color: "var(--text-secondary)",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--bg-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--bg-tertiary)";
          }}
        >
          Isara
        </button>
      </div>
    </div>
  );
}
