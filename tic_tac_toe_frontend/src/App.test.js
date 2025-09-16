import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Tic Tac Toe/i);
  expect(titleElement).toBeInTheDocument();
});

test('starts with player X', () => {
  render(<App />);
  const statusElement = screen.getByText(/Next player: X/i);
  expect(statusElement).toBeInTheDocument();
});

test('renders new game button', () => {
  render(<App />);
  const newGameButton = screen.getByText(/New Game/i);
  expect(newGameButton).toBeInTheDocument();
});

test('renders theme toggle button', () => {
  render(<App />);
  const themeButton = screen.getByRole('button', { name: /Switch to dark mode/i });
  expect(themeButton).toBeInTheDocument();
});
