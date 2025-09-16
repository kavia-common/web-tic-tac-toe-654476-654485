import React from 'react';
import Square from './Square';

/**
 * Board component represents the game grid and handles square rendering
 * @param {object} props Component props
 * @param {Array} props.squares Array of square values
 * @param {function} props.onClick Handler for square clicks
 */
// PUBLIC_INTERFACE
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

export default Board;
