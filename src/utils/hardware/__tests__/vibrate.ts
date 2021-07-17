// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { vibrate } from './..';

describe('utils/hardware/vibrate', () => {
  const OLD_WINDOW = { ...global.window };

  afterAll(() => {
    global.window = OLD_WINDOW;
  });

  it('does not break when window is undefined', () => {
    expect(vibrate()).toBeUndefined;
  });

  it('should call the function window.navigator.vibrate', () => {
    vibrate();

    window.navigator = {
      vibrate: jest.fn()
    };

    vibrate();
    expect(window.navigator.vibrate).toHaveBeenCalledTimes(1);
    expect(window.navigator.vibrate).toHaveBeenLastCalledWith(200);

    vibrate(100);
    expect(window.navigator.vibrate).toHaveBeenCalledTimes(2);
    expect(window.navigator.vibrate).toHaveBeenLastCalledWith(100);

    vibrate([100, 200, 300]);
    expect(window.navigator.vibrate).toHaveBeenCalledTimes(3);
    expect(window.navigator.vibrate).toHaveBeenLastCalledWith([100, 200, 300]);
  });
});
