import { render, screen } from '@testing-library/react';
import Salutation from './Salutation';

test('affiche le message de salutation', () => {
  render(<Salutation userName="farah" />);
  expect(screen.getByText('Salut, Farah !')).toBeInTheDocument();
});