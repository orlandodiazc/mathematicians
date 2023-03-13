import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalcButton from './CalcButton';

const buttonNames = [
  { name: 'AC', type: 'normal' },
  { name: '+/-', type: 'normal' },
  { name: '%', type: 'normal' },
  { name: '÷', type: 'operator' },
  { name: '7', type: 'normal' },
  { name: '8', type: 'normal' },
  { name: '9', type: 'normal' },
  { name: 'x', type: 'operator' },
  { name: '4', type: 'normal' },
  { name: '5', type: 'normal' },
  { name: '6', type: 'normal' },
  { name: '-', type: 'operator' },
  { name: '1', type: 'normal' },
  { name: '2', type: 'normal' },
  { name: '3', type: 'normal' },
  { name: '+', type: 'operator' },
  { name: '0', type: 'col-6' },
  { name: '.', type: 'normal' },
  { name: '=', type: 'operator' },
];

const Calculator = () => {
  const [display, setDisplay] = useState({ total: '0', next: null, operation: null });
  const { total, next, operation } = display;

  const handleBtnClick = (e) => {
    const res = calculate(display, e.target.textContent);
    setDisplay(res);
  };

  return (
    <div id="calculator" className="container bg-secondary">
      <div data-testid="display" className="text-end py-2">
        {total}
        {operation}
        {next}
      </div>
      <div className="row row-cols-4 text-center">
        {buttonNames.map((btn) => (
          <CalcButton key={btn.name} handleBtnClick={handleBtnClick} type={btn.type}>
            {btn.name}
          </CalcButton>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
