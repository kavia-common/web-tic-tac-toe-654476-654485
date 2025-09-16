import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

/**
 * Board component represents the game grid of Tic Tac Toe.
 * Renders a 3x3 grid of Square components and manages their layout.
 * 
 * @component
 * @param {object} props Component props
 * @param {Array} props.squares Array of 9 values representing the game state
 * @param {function} props.onClick Function to handle square clicks, receives square index
 * @returns {React.Element} A div containing the 3x3 grid of squares
 */
// PUBLIC_INTERFACE
const Board = ({ squares, onClick }) => {
  const renderSquare = (index) => (
    <Square
      key={index}
      value={squares[index]}
      onClick={() => onClick(index)}
    />
  );

  // Create array of indices [0,1,2,3,4,5,6,7,8] for mapping
  const indices = Array(9).fill().map((_, index) => index);

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {indices.map(index => renderSquare(index))}
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired
};

Board.defaultProps = {
  squares: Array(9).fill(null)
};

export default Board;
