import React from 'react';

/**
 * Square component represents a single cell in the Tic Tac Toe board
 * @param {object} props Component props
 * @param {string|null} props.value The value to display (X, O, or null)
 * @param {function} props.onClick Handler for click events
 */
// PUBLIC_INTERFACE
const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
