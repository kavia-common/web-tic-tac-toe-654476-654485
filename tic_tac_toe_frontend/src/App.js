import React, { useState, useEffect } from 'react';
import './App.css';

// Square component for individual board cells
const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

// Board component for the game grid
const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((value, index) => (
      <Square
        key={index}
        value={value}
        onClick={() => onClick(index)}
      />
    ))}
  </div>
);

// Calculate winner helper function
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Main App component
// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Handle click on square
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // Reset game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Calculate game status
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  const status = winner 
    ? `Winner: ${winner}` 
    : isDraw 
    ? "It's a Draw!" 
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="App">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        <div className={`status ${winner ? 'winner' : ''}`}>{status}</div>
        <Board squares={squares} onClick={handleClick} />
        <button className="game-button" onClick={resetGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
