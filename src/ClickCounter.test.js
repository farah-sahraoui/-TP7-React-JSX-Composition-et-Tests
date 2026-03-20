import { render, screen, fireEvent } from '@testing-library/react';
import ClickCounter from './ClickCounter';

test('incrémente le nombre de clics lors du clic', () => {
  render(<ClickCounter />);
  const button = screen.getByText('Ajouter un clic');
  fireEvent.click(button);
  expect(screen.getByText('Nombre de clics : 1')).toBeInTheDocument();
});