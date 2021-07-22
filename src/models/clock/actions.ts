import { Action } from '@core/actions';
import { IActionCreator } from '@core/actions/interfaces';
import { IState } from './interfaces';

export const startClock: IActionCreator<IState['remainingTime']> = Action<IState['remainingTime']>(
  'CLOCK',
  'START_CLOCK'
);

export const reduceRemainingTime: IActionCreator<void> = Action('CLOCK', 'REDUCE_REMAINING_TIME');

export const updateRemainingTime: IActionCreator<IState['remainingTime']> = Action<IState['remainingTime']>(
  'CLOCK',
  'UPDATE_REMAINING_TIME'
);

export const setClockIsRunning: IActionCreator<IState['isRunning']> = Action<IState['isRunning']>(
  'CLOCK',
  'SET_CLOCK_IS_RUNNING'
);

export const updateClockIsRunning: IActionCreator<IState['isRunning']> = Action<IState['isRunning']>(
  'CLOCK',
  'UPDATE_CLOCK_IS_RUNNING'
);

export const clockRemainingTimeBecameZero: IActionCreator<void> = Action('CLOCK', 'REMAINING_TIME_BECAME_ZERO');

export const clockTriggerTikTakSound: IActionCreator<void> = Action('CLOCK', 'TRIGGER_TIK_TAK_SOUND');

export const resetClock: IActionCreator<void> = Action('CLOCK', 'RESET_CLOCK');
