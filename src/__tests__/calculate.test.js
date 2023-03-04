import calculate from '../logic/calculate';

describe('Tests button input from calculator UI', () => {
  const obj = {
    total: '0',
    next: null,
    operation: null,
  };
  it('test "1" input', () => {
    Object.assign(obj, calculate(obj, '1'));
    expect(obj).toEqual({ total: null, next: '1', operation: null });
  });
  it('test "2" input', () => {
    Object.assign(obj, calculate(obj, '2'));
    expect(obj).toEqual({ total: null, next: '12', operation: null });
  });
  it('test "+" input', () => {
    Object.assign(obj, calculate(obj, '+'));
    expect(obj).toEqual({ total: '12', next: null, operation: '+' });
  });
  it('test "4" input', () => {
    Object.assign(obj, calculate(obj, '4'));
    expect(obj).toEqual({ total: '12', next: '4', operation: '+' });
  });

  it('test "5" input', () => {
    Object.assign(obj, calculate(obj, '5'));
    expect(obj).toEqual({ total: '12', next: '45', operation: '+' });
  });

  it('test "x" input', () => {
    Object.assign(obj, calculate(obj, 'x'));
    expect(obj).toEqual({ total: '57', next: null, operation: 'x' });
  });

  it('test "6" input', () => {
    Object.assign(obj, calculate(obj, '6'));
    expect(obj).toEqual({ total: '57', next: '6', operation: 'x' });
  });

  it('test "-" input', () => {
    Object.assign(obj, calculate(obj, '-'));
    expect(obj).toEqual({ total: '342', next: null, operation: '-' });
  });

  it('test "7 8 9" input', () => {
    Object.assign(obj, calculate(obj, '7'));
    Object.assign(obj, calculate(obj, '8'));
    Object.assign(obj, calculate(obj, '9'));
    expect(obj).toEqual({ total: '342', next: '789', operation: '-' });
  });

  it('test "÷" input', () => {
    Object.assign(obj, calculate(obj, '÷'));
    expect(obj).toEqual({ total: '-447', next: null, operation: '÷' });
  });

  it('test "+/-" input', () => {
    Object.assign(obj, calculate(obj, '+/-'));
    expect(obj).toEqual({ total: '447', next: null, operation: '÷' });
  });

  it('test "%2=" input', () => {
    Object.assign(obj, calculate(obj, '%'));
    Object.assign(obj, calculate(obj, '2'));
    Object.assign(obj, calculate(obj, '='));
    expect(obj).toEqual({ total: '1', next: null, operation: null });
  });

  it('test "0" input', () => {
    Object.assign(obj, calculate(obj, '1'));
    Object.assign(obj, calculate(obj, '0'));
    expect(obj).toEqual({ total: null, next: '10', operation: null });
  });

  it('test division by 0', () => {
    Object.assign(obj, calculate(obj, '÷'));
    Object.assign(obj, calculate(obj, '0'));
    Object.assign(obj, calculate(obj, '='));
    expect(obj).toEqual({ total: "Can't divide by 0.", next: null, operation: null });
  });

  it('test "AC" input', () => {
    Object.assign(obj, calculate(obj, 'AC'));
    expect(obj).toEqual({ total: '0', next: null, operation: null });
  });

  it('test float operation', () => {
    Object.assign(obj, calculate(obj, '5'));
    Object.assign(obj, calculate(obj, '.'));
    Object.assign(obj, calculate(obj, '3'));
    Object.assign(obj, calculate(obj, '+'));
    Object.assign(obj, calculate(obj, '3'));
    Object.assign(obj, calculate(obj, '0'));
    Object.assign(obj, calculate(obj, '='));
    expect(obj).toEqual({ total: '35.3', next: null, operation: null });
  });
});
