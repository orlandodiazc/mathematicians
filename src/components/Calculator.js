import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [display, setDisplay] = useState({ total: '0', next: null, operation: null });

  const handleBtnClick = (e) => {
    setDisplay(calculate(display, e.target.innerText));
  };

  return (
    <div id="calculator" className="container bg-secondary">
      <div className="text-end py-2">
        {display.total}
        {display.operation}
        {display.next}
      </div>
      <div className="row row-cols-4 text-center">
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          AC
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          +/-
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          %
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator operator">
          ÷
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          7
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          8
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          9
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator operator">
          x
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          4
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          5
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          6
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator operator">
          -
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          1
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          2
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          3
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator operator">
          +
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator col-6">
          0
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator">
          .
        </button>
        <button onClick={handleBtnClick} type="button" className="btn-calculator operator">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
