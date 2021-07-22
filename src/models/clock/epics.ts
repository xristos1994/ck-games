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
import { IAction } from '@core/actions/interfaces';
import { IState as IModelState } from './interfaces';
import { noAction } from '@models/pantomime/actions';

interface IStartClockEpic {
  (action$: ActionsObservable<IAction<IModelState['remainingTime']>>): Observable<
    IAction<IModelState['remainingTime']> | IAction<IModelState['isRunning']> | IAction
  >;
}

export const startClockEpic: IStartClockEpic = (action$) => {
  return action$.pipe(
    ofType(startClock.type),
    mergeMap(({ payload }) => {
      return [updateRemainingTime(payload), updateClockIsRunning(true), reduceRemainingTime()];
    })
  );
};

// --------------------------------------------------------------------

interface IReduceRemainingTimeEpic {
  (action$: ActionsObservable<IAction>, state$: StateObservable<IState>): Observable<
    IAction<IModelState['remainingTime']> | IAction
  >;
}

export const reduceRemainingTimeEpic: IReduceRemainingTimeEpic = (action$, state$) => {
  return action$.pipe(
    ofType(reduceRemainingTime.type),
    debounceTime(1000),
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      const newRemainingTime = (state.websiteRootReducer.clock.remainingTime || 0) - 1;
      const clockIsRunning = state.websiteRootReducer.clock.isRunning;

      if (!clockIsRunning || newRemainingTime < 0) {
        return [noAction()];
      }

      if (newRemainingTime === 0) {
        return [updateRemainingTime(newRemainingTime), clockRemainingTimeBecameZero()];
      }
      return [updateRemainingTime(newRemainingTime), reduceRemainingTime(), clockTriggerTikTakSound()];
    })
  );
};

// --------------------------------------------------------------------

interface ISetClockIsRunningEpic {
  (action$: ActionsObservable<IAction<boolean>>): Observable<IAction<IModelState['isRunning']>>;
}

export const setClockIsRunningEpic: ISetClockIsRunningEpic = (action$) => {
  return action$.pipe(
    ofType(setClockIsRunning.type),
    map(({ payload }) => {
      return updateClockIsRunning(payload);
    })
  );
};

// --------------------------------------------------------------------

interface IResetClockEpic {
  (action$: ActionsObservable<IAction>): Observable<
    IAction<IModelState['remainingTime']> | IAction<IModelState['isRunning']>
  >;
}

export const resetClockEpic: IResetClockEpic = (action$) => {
  return action$.pipe(
    ofType(resetClock.type),
    mergeMap(() => {
      return [updateRemainingTime(null), updateClockIsRunning(false)];
    })
  );
};

// --------------------------------------------------------------------

export const clockEpic = combineEpics(startClockEpic, resetClockEpic, setClockIsRunningEpic, reduceRemainingTimeEpic);
