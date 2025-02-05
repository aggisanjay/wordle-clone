import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import words from "./words";
import "./App.css";

const App = () => {
  const [targetWord, setTargetWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const handleChange = (event) => {
    if (event.target.value.length <= 5) {
      setCurrentGuess(event.target.value.toUpperCase());
    }
  };

  const handleSubmit = () => {
    if (currentGuess.length !== 5 || gameOver) return;

    if (currentGuess === targetWord) {
      setWin(true);
      setGameOver(true);
    }

    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");

    if (guesses.length + 1 === 6) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setTargetWord(words[Math.floor(Math.random() * words.length)]);
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setWin(false);
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Wordle Clone</h1>
      <Board guesses={guesses} targetWord={targetWord} />
      <input
        type="text"
        value={currentGuess}
        onChange={handleChange}
        maxLength={5}
        disabled={gameOver}
        placeholder="Enter a 5-letter word"
      />
      <button onClick={handleSubmit} disabled={gameOver}>Submit</button>
      <GameStatus gameOver={gameOver} win={win} word={targetWord} onReset={resetGame} />
    </div>
  );
};

export default App;
