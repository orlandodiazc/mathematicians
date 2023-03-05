import PropTypes from 'prop-types';
import React from 'react';

const CalcButton = ({ handleBtnClick, type = '', children }) => (
  <button
    onClick={handleBtnClick}
    type="button"
    className={`btn-calculator ${type === 'normal' ? '' : type}`}
  >
    {children}
  </button>
);

CalcButton.propTypes = {
  handleBtnClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};

CalcButton.defaultProps = {
  type: '',
};

export default CalcButton;
