import React from 'react';

const CalcButton = ({ handleBtnClick, type, children }) => (
  <button
    onClick={handleBtnClick}
    type="button"
    className={`btn-calculator ${type === 'normal' ? '' : type}`}
  >
    {children}
  </button>
);

export default CalcButton;
