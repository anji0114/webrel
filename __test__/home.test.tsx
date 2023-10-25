import { render, screen } from '@testing-library/react';
import Home from '@/app/(lp)/page';

it('should have docs text', () => {
  render(<Home />);
  const myElem = screen.getByText('Yes');
  expect(myElem).toBeInTheDocument();
});
