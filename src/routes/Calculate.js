import React from 'react';
import Calculator from '../components/Calculator';

const Calculate = () => (
  <div className="container">
    <div className="row">
      <h3 className="col">Let&apos;s do some math</h3>
      <div className="col">
        <Calculator />
      </div>
    </div>
  </div>
);

export default Calculate;
