"use client";

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
  return <div className="font-pixel">main page</div>;
}
