import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Navbar from '../components/Navbar';

it('Calculator.js', async () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
  const button = screen.getByRole('button', { name: '1' });
  await act(async () => {
    await userEvent.click(button);
  });
  expect(screen.getByTestId('display')).toHaveTextContent('1');
});

it('Navbar.js', () => {
  const tree = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
