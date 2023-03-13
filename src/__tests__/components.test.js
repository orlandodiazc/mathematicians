import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import CalcButton from '../components/CalcButton';
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

it('CalcButton.js', () => {
  const handleBtnClick = jest.fn();
  const btn = { name: 'AC', type: 'operator' };
  const tree = render(
    <CalcButton key={btn.name} handleBtnClick={handleBtnClick} type={btn.type}>
      {btn.name}
    </CalcButton>,
  );
  expect(tree).toMatchSnapshot();
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('AC');
  expect(button).not.toBeDisabled();
});
