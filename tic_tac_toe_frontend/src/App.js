import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import { calculateWinner } from './utils/gameUtils';

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
