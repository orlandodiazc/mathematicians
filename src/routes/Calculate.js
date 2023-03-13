import React from 'react';
import Calculator from '../components/Calculator';

const Calculate = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h3>Calculator</h3>
        <p>
          An electronic calculator is typically a portable electronic device used to perform
          calculations, ranging from basic arithmetic to complex mathematics. The first solid-state
          electronic calculator was created in the early 1960s. Pocket-sized devices became
          available in the 1970s, especially after the Intel 4004, the first microprocessor, was
          developed by Intel for the Japanese calculator company Busicom.
        </p>
      </div>
      <div className="col-md-4">
        <Calculator />
      </div>
    </div>
  </div>
);

export default Calculate;
