// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { getRandomInteger } from './..';

describe('utils/general/isPositiveInteger', () => {
  it('returns -1 when invalid parameters are passed', () => {
    expect(getRandomInteger()).toBe(-1);
    expect(getRandomInteger(1)).toBe(-1);
    expect(getRandomInteger(4, 3)).toBe(-1);
    expect(getRandomInteger('A', 3)).toBe(-1);
    expect(getRandomInteger(3, 3)).toBe(-1);
    expect(getRandomInteger(3, 3, false)).toBe(-1);
    expect(getRandomInteger('A', 3)).toBe(-1);
  });

  it('returns a valid number when proper parameters are passed', () => {
    expect(getRandomInteger(3, 4, false)).toBe(3);

    let randomNumber = getRandomInteger(3, 4, true);
    expect([3, 4].includes(randomNumber)).toBeTruthy;

    randomNumber = getRandomInteger(3, 4);
    expect([3, 4].includes(randomNumber)).toBeTruthy;

    randomNumber = getRandomInteger(3, 6, false);
    expect(randomNumber).toBeGreaterThanOrEqual(3);
    expect(randomNumber).toBeLessThan(6);

    randomNumber = getRandomInteger(3, 6, true);
    expect(randomNumber).toBeGreaterThanOrEqual(3);
    expect(randomNumber).toBeLessThanOrEqual(6);

    randomNumber = getRandomInteger(3, 6);
    expect(randomNumber).toBeGreaterThanOrEqual(3);
    expect(randomNumber).toBeLessThanOrEqual(6);
  });
});
