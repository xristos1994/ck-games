import { IActionWithPayload } from '@core/actions/interfaces';
import { updateRemainingTime, updateClockIsRunning } from './actions';
import { IState } from './interfaces';

const initialState: IState = {
  remainingTime: null,
  isRunning: false
};

const reducer = (state: IState = initialState, action: IActionWithPayload): IState => {
  const { type, payload } = action;

  switch (type) {
    case updateRemainingTime.type:
      return { ...state, remainingTime: payload };

    case updateClockIsRunning.type:
      return { ...state, isRunning: payload || false };

    default:
      return state;
  }
};

export const clockReducer = {
  clock: reducer
};
