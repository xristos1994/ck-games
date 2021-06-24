import { IState } from '@models/interfaces';
import { IState as IModelState } from './interfaces';

export const isClockRunning: (
  state: IState
) => IModelState['isRunning'] = state =>
  state.websiteRootReducer.clock.isRunning;

export const clockRemainingTime: (
  state: IState
) => IModelState['remainingTime'] = state =>
  state.websiteRootReducer.clock.remainingTime;
