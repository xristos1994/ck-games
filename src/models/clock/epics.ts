import { Observable } from "rxjs";
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable,
} from "redux-observable";
import { debounceTime, mergeMap, withLatestFrom } from "rxjs/operators";
import {
  updateRemainingTime,
  updateClockIsRunning,
  reduceRemainingTime,
  clockRemainingTimeBecameZero,
  resetClock,
  startClock,
  clockTriggerTikTakSound,
} from "./actions";

import { IState } from "@models/interfaces";
import { IActionWithPayload } from "@core/actions/interfaces";
import { IState as IModelState } from "./interfaces";

const startClockEpic = (
  action$: ActionsObservable<IActionWithPayload<IModelState["remainingTime"]>>,
  state$: StateObservable<IState>
): Observable<
  | IActionWithPayload<IModelState["remainingTime"]>
  | IActionWithPayload<IModelState["isRunning"]>
  | IActionWithPayload
> => {
  return action$.pipe(
    ofType(startClock.type),
    withLatestFrom(state$),
    mergeMap(([{ payload }]) => {
      return [
        updateRemainingTime(payload),
        updateClockIsRunning(true),
        reduceRemainingTime(null),
      ];
    })
  );
};

const reduceRemainingTimeEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  IActionWithPayload<IModelState["remainingTime"]> | IActionWithPayload
> => {
  return action$.pipe(
    ofType(reduceRemainingTime.type),
    debounceTime(1000),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const newRemainingTime = state.websiteRootReducer.clock.remainingTime - 1;
      const clockIsRunning = state.websiteRootReducer.clock.isRunning;

      if (newRemainingTime === 0) {
        return [
          updateRemainingTime(newRemainingTime),
          clockRemainingTimeBecameZero(null),
        ];
      }
      if (!clockIsRunning) {
        return [updateRemainingTime(newRemainingTime)];
      }
      return [
        updateRemainingTime(newRemainingTime),
        reduceRemainingTime(null),
        clockTriggerTikTakSound(null),
      ];
    })
  );
};

const resetClockEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  | IActionWithPayload<IModelState["remainingTime"]>
  | IActionWithPayload<IModelState["isRunning"]>
> => {
  return action$.pipe(
    ofType(resetClock.type),
    mergeMap(() => {
      return [updateRemainingTime(null), updateClockIsRunning(false)];
    })
  );
};

export const clockEpic = combineEpics(
  startClockEpic,
  resetClockEpic,
  reduceRemainingTimeEpic
);