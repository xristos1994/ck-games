import { isPositiveInteger } from './..';

describe('utils/general/isPositiveInteger', () => {
  it('returns only true if positive integer is passed', () => {
    expect(isPositiveInteger(0)).toBe(false);
    expect(isPositiveInteger(-5)).toBe(false);
    expect(isPositiveInteger('A')).toBe(false);
    expect(isPositiveInteger(1.2)).toBe(false);
    expect(isPositiveInteger(' ')).toBe(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(isPositiveInteger(['5'])).toBe(false);

    expect(isPositiveInteger('5')).toBe(true);
    expect(isPositiveInteger(1.0)).toBe(true);
    expect(isPositiveInteger(5)).toBe(true);
  });
});
