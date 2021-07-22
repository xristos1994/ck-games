import { IAction } from '@core/actions/interfaces';
import { updateRemainingTime, updateClockIsRunning } from './actions';
import { IState } from './interfaces';

const initialState: IState = {
  remainingTime: null,
  isRunning: false
};

interface IReducer {
  (state: IState, action: IAction<IState['remainingTime' | 'isRunning']>): IState;
}

const reducer: IReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case updateRemainingTime.type:
      return { ...state, remainingTime: payload as IState['remainingTime'] };

    case updateClockIsRunning.type:
      return { ...state, isRunning: (payload as IState['isRunning']) || false };

    default:
      return state;
  }
};

export const clockReducer = {
  clock: reducer
};
