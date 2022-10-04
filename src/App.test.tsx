import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text in App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/uau this a simple test?/i);
  expect(linkElement).toBeInTheDocument();
});
