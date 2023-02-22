import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(e) {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    return (
      <div id="calculator" className="container bg-secondary">
        <div className="text-end py-2">
          {this.state.total}
          {this.state.operation}
          {this.state.next}
        </div>
        <div className="row row-cols-4 text-center">
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            AC
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            +/-
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            %
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator operator">
            ÷
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            7
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            8
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            9
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator operator">
            x
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            4
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            5
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            6
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator operator">
            -
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            1
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            2
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            3
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator operator">
            +
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator col-6">
            0
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator">
            .
          </button>
          <button onClick={this.handleBtnClick} type="button" className="btn-calculator operator">
            =
          </button>
        </div>
      </div>
    );
  }
}
