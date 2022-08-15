import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name : "리액트 배우기" });
  expect(linkElement).toBeInTheDocument();
});
