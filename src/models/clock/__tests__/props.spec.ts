import { IState } from '@models/interfaces';
import { isClockRunning, clockRemainingTime } from './../props';

describe('models/clock/props', () => {
  it('return the right values', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tempState = {
      websiteRootReducer: {
        clock: {
          isRunning: 'isRunning',
          remainingTime: 'remainingTime'
        }
      }
    } as IState;

    expect(isClockRunning(tempState)).toEqual('isRunning');
    expect(clockRemainingTime(tempState)).toEqual('remainingTime');
  });
});