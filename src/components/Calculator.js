import React from 'react';

export default class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator" className="container bg-secondary">
        <div className="text-end py-2">result</div>
        <div className="row row-cols-4 text-center">
          <button type="button" className="btn-calculator">
            AC
          </button>
          <button type="button" className="btn-calculator">
            +/-
          </button>
          <button type="button" className="btn-calculator">
            %
          </button>
          <button type="button" className="btn-calculator operator">
            ÷
          </button>
          <button type="button" className="btn-calculator">
            7
          </button>
          <button type="button" className="btn-calculator">
            8
          </button>
          <button type="button" className="btn-calculator">
            9
          </button>
          <button type="button" className="btn-calculator operator">
            x
          </button>
          <button type="button" className="btn-calculator">
            4
          </button>
          <button type="button" className="btn-calculator">
            5
          </button>
          <button type="button" className="btn-calculator">
            6
          </button>
          <button type="button" className="btn-calculator operator">
            -
          </button>
          <button type="button" className="btn-calculator">
            1
          </button>
          <button type="button" className="btn-calculator">
            2
          </button>
          <button type="button" className="btn-calculator">
            3
          </button>
          <button type="button" className="btn-calculator operator">
            +
          </button>
          <button type="button" className="btn-calculator col-6">
            0
          </button>
          <button type="button" className="btn-calculator">
            .
          </button>
          <button type="button" className="btn-calculator operator">
            =
          </button>
        </div>
      </div>
    );
  }
}
