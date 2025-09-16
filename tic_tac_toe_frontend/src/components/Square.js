import React from 'react';
import PropTypes from 'prop-types';

/**
 * Square component represents a single cell in the Tic Tac Toe board.
 * Renders a button that displays either 'X', 'O', or remains empty.
 * 
 * @component
 * @param {object} props Component props
 * @param {string|null} props.value The value to display (X, O, or null)
 * @param {function} props.onClick Handler for click events
 * @returns {React.Element} A button element representing a game square
 */
// PUBLIC_INTERFACE
const Square = ({ value, onClick }) => (
  <button 
    className="square" 
    onClick={onClick}
    aria-label={value ? `Square marked ${value}` : 'Empty square'}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Square.defaultProps = {
  value: null
};

export default Square;
