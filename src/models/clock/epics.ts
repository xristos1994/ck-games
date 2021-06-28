import { Observable } from 'rxjs';
import { ActionsObservable, combineEpics, ofType, StateObservable } from 'redux-observable';
import { debounceTime, mergeMap, map, withLatestFrom } from 'rxjs/operators';
import {
  updateRemainingTime,
  updateClockIsRunning,
  setClockIsRunning,
  reduceRemainingTime,
  clockRemainingTimeBecameZero,
  resetClock,
  startClock,
  clockTriggerTikTakSound
} from './actions';

import { IState } from '@models/interfaces';
import { IActionWithPayload } from '@core/actions/interfaces';
import { IState as IModelState } from './interfaces';

const startClockEpic = (
  action$: ActionsObservable<IActionWithPayload<IModelState['remainingTime']>>,
  state$: StateObservable<IState>
): Observable<
  IActionWithPayload<IModelState['remainingTime']> | IActionWithPayload<IModelState['isRunning']> | IActionWithPayload
> => {
  return action$.pipe(
    ofType(startClock.type),
    withLatestFrom(state$),
    mergeMap(([{ payload }]) => {
      return [updateRemainingTime(payload), updateClockIsRunning(true), reduceRemainingTime(null)];
    })
  );
};

const reduceRemainingTimeEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IModelState['remainingTime']> | IActionWithPayload> => {
  return action$.pipe(
    ofType(reduceRemainingTime.type),
    debounceTime(1000),
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      const newRemainingTime = (state.websiteRootReducer.clock.remainingTime || 0) - 1;
      const clockIsRunning = state.websiteRootReducer.clock.isRunning;

      if (newRemainingTime === 0) {
        return [updateRemainingTime(newRemainingTime), clockRemainingTimeBecameZero(null)];
      }
      if (!clockIsRunning) {
        return [updateRemainingTime(newRemainingTime)];
      }
      return [updateRemainingTime(newRemainingTime), reduceRemainingTime(null), clockTriggerTikTakSound(null)];
    })
  );
};

const setClockIsRunningEpic = (
  action$: ActionsObservable<IActionWithPayload<boolean>>
): Observable<IActionWithPayload<IModelState['isRunning']>> => {
  return action$.pipe(
    ofType(setClockIsRunning.type),
    map((action) => {
      return updateClockIsRunning(action.payload);
    })
  );
};

const resetClockEpic = (
  action$: ActionsObservable<IActionWithPayload>
): Observable<IActionWithPayload<IModelState['remainingTime']> | IActionWithPayload<IModelState['isRunning']>> => {
  return action$.pipe(
    ofType(resetClock.type),
    mergeMap(() => {
      return [updateRemainingTime(null), updateClockIsRunning(false)];
    })
  );
};

export const clockEpic = combineEpics(startClockEpic, resetClockEpic, setClockIsRunningEpic, reduceRemainingTimeEpic);
