import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.js';

test('renders App', () => {
  render(<App />);
  const element = screen.getByText(/Hi! I like to code in/);
  expect(element).toBeInTheDocument();
});
