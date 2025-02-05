import React from "react";
import "./Board.css";

const Board = ({ guesses, targetWord }) => {
  const getLetterClass = (letter, index) => {
    if (!targetWord.includes(letter)) return "absent";
    if (targetWord[index] === letter) return "correct";
    return "present";
  };

  return (
    <div className="board">
      {Array(6).fill("").map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array(5).fill("").map((_, colIndex) => {
            const letter = guesses[rowIndex]?.[colIndex] || "";
            return (
              <div key={colIndex} className={`letter ${letter ? getLetterClass(letter, colIndex) : ""}`}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
