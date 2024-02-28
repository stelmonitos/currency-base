import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('a')).toBeNaN();
    expect(convertPLNToUSD('-10')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('schould return "Error" if value is NaN or string', () => {
      expect(convertPLNToUSD([])).toBe('Error');
      expect(convertPLNToUSD(null)).toBe('Error');
      expect(convertPLNToUSD({})).toBe('Error');
      expect(convertPLNToUSD(function() {})).toBe('Error');
  })
  it('should return zero if input is less than 0', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-2)).toBe('$0.00');
    expect(convertPLNToUSD(-56)).toBe('$0.00');
  });


});