import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre principal', () => {
  render(<App />);
  const titleElement = screen.getByText('Mon Apprentissage React');
  expect(titleElement).toBeInTheDocument();
});