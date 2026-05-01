"use client";

import { useGameState } from "@/hooks/useGameState";
import Header from "@/components/header";

export default function Home() {
  const {
    puzzle,
    gameState,
    isLoading,
    showWinModal,
    showLoseModal,
    handleSelectWord,
    handleSubmit,
    handleShuffle,
    handleShare,
    dismissWinModal,
    dismissLoseModal,
    resetGame,
  } = useGameState();

  if (isLoading || !gameState || !puzzle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        {/* spinner */}
        <div className="w-10 h-10 rounded-full border-[3px] border-[var(--border-default)] border-t-[var(--green-primary)] animate-spin" />
        <span className="text-[var(--text-secondary)] text-base font-semibold">
          Naglo-load...
        </span>
      </div>
    );
  }
  return (
    <div className="font-pixel flex-col min-h-screen">
      <Header />

      <footer className="border-t border-[var(--border-default)] p-4 text-center text-xs text-[var(--text-muted)]">
        Wika-Konek © {new Date().getFullYear()} — tagline here
      </footer>
    </div>
  );
}
