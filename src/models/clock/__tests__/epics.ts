import { IAction } from '@core/actions/interfaces';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { IRemainingTime } from '../interfaces';

import { startClock, reduceRemainingTime, updateRemainingTime, updateClockIsRunning } from './../actions';
import { startClockEpic } from './../epics';

describe('epic', () => {
  it('tests epic', (done) => {
    const action$ = of(startClock(50)) as ActionsObservable<IAction<IRemainingTime>>;

    startClockEpic(action$)
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([updateRemainingTime(50), updateClockIsRunning(true), reduceRemainingTime()]);
        done();
      });
  });
});
