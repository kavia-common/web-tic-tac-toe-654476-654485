import React from 'react';
import '../styles/Square.css';

const Square = ({ value, onSquareClick, isWinning }) => {
  return (
    <button 
      className={`square ${isWinning ? 'winning' : ''} ${value ? 'filled' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
