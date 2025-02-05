import React from "react";
import "./GameStatus.css";

const GameStatus = ({ gameOver, win, word, onReset }) => {
  if (!gameOver) return null;
  
  return (
    <div className="game-status">
      <h2>{win ? "🎉 You Won!" : `❌ You Lost! The word was ${word}`}</h2>
      <button onClick={onReset} className="reset-button">New Game</button>
    </div>
  );
};

export default GameStatus;
