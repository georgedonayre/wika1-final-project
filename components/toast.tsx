/**
 * toast for guess feedback
 */

"use client";

import { useEffect, useState } from "react";

export type ToastType = "correct" | "wrong";

interface ToastProps {
  type: ToastType;
  message: string;
  onDone: () => void;
}

export default function Toast({ type, message, onDone }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onDone]);

  const isCorrect = type === "correct";

  return (
    <div
      style={{
        position: "fixed",
        top: visible ? "24px" : "-80px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        transition: "top 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: "10px 20px",
        borderRadius: "var(--radius-md)",
        background: isCorrect
          ? "var(--green-dim)"
          : "rgba(248, 113, 113, 0.15)",
        border: `1px solid ${isCorrect ? "var(--green-primary)" : "var(--error)"}`,
        color: isCorrect ? "var(--green-primary)" : "var(--error)",
        fontSize: "clamp(0.7rem, 2.5vw, 0.9rem)",
        fontWeight: 700,
        textAlign: "center",
        backdropFilter: "blur(12px)",
        boxShadow: isCorrect
          ? "0 4px 24px rgba(74, 222, 128, 0.25)"
          : "0 4px 24px rgba(248, 113, 113, 0.2)",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}
    >
      {message}
    </div>
  );
}
