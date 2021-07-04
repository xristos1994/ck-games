// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { vibrate } from './..';

describe('utils/hardware/vibrate', () => {
  it('does not break when window is undefined', () => {
    expect(vibrate()).toBeUndefined;
  });

  it.todo('should call the function window.navigator.vibrate');
});