import operate from '../logic/operate';

describe('test calculator numerical operations', () => {
  it('test sum', () => expect(operate(8, 2, '+')).toBe('10'));
  it('test substraction', () => expect(operate(8, 2, '-')).toBe('6'));
  it('test multiplication', () => expect(operate(8, 2, 'x')).toBe('16'));
  it('test division', () => expect(operate(8, 2, '÷')).toBe('4'));
  it('test division by 0', () => expect(operate(8, 0, '÷')).toBe("Can't divide by 0."));
  it('test module', () => expect(operate(8, 2, '%')).toBe('0'));
  test('testing fail logic', () => {
    const operation = '#';
    expect(() => operate(8, 2, operation)).toThrow(`Unknown operation '${operation}'`);
  });
});
