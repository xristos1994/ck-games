/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAction } from '@core/actions/interfaces';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Observable, of, Subject } from 'rxjs';
import { toArray } from 'rxjs/operators';

interface ITestEpic {
  (
    epic: (
      action$: ActionsObservable<IAction<any | void>>,
      state$: StateObservable<any>
    ) => Observable<IAction<any | void>>,
    action: IAction<any | void>,
    state: any,
    expectedActions: IAction<any | void>[],
    done: () => void
  ): void;
}

export const testEpic: ITestEpic = (epic, action, state, expectedActions, done) => {
  const action$ = of(action) as ActionsObservable<IAction<any | void>>;
  const state$ = new StateObservable<any>(new Subject(), state);

  epic(action$, state$)
    .pipe(toArray())
    .subscribe((actions) => {
      expect(actions).toMatchObject(expectedActions);
      done();
    });
};
