import { updateRemainingTime, updateClockIsRunning } from './../actions';
import { reducer, initialState } from './../reducer';

describe('models/clock/reducer', () => {
  it('should update the state accordingly', () => {
    const tempState = {
      remainingTime: null,
      isRunning: false
    };

    expect(reducer(tempState, updateRemainingTime(10))).toMatchObject({ ...tempState, remainingTime: 10 });
    expect(reducer(tempState, updateRemainingTime(0))).toMatchObject({ ...tempState, remainingTime: 0 });
    expect(reducer(tempState, updateRemainingTime(-3))).toMatchObject({ ...tempState, remainingTime: -3 });
    expect(reducer(tempState, updateRemainingTime(10.3))).toMatchObject({ ...tempState, remainingTime: 10.3 });

    expect(reducer(tempState, updateClockIsRunning(false))).toMatchObject({ ...tempState, isRunning: false });
    expect(reducer(tempState, updateClockIsRunning(true))).toMatchObject({ ...tempState, isRunning: true });

    expect(reducer(tempState, { type: 'any test action type', payload: true })).toMatchObject(initialState);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(reducer(undefined, { type: 'any test action type', payload: undefined })).toMatchObject(initialState);
  });
});