import React, { useState } from 'react';
import Board from './Board';
import '../styles/Game.css';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isXNext, setIsXNext] = useState(true);
  
  const currentSquares = history[currentMove];
  
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsXNext(!isXNext);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setIsXNext(nextMove % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    const description = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button 
          className="history-button"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  const winner = calculateWinner(currentSquares);
  const status = winner 
    ? `Winner: ${winner}` 
    : currentSquares.every(square => square)
      ? "Game is a draw!"
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="game-info">
        <h1>Tic Tac Toe</h1>
        <div className="status">{status}</div>
      </div>
      <div className="game-board">
        <Board squares={currentSquares} onPlay={handlePlay} xIsNext={isXNext} />
      </div>
      <div className="game-history">
        <h2>Game History</h2>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
