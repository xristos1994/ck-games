import { IAction } from '@core/actions/interfaces';
import { noAction } from '@models/pantomime/actions';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { of, Subject } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { IRemainingTime } from '../interfaces';

import {
  startClock,
  reduceRemainingTime,
  updateRemainingTime,
  updateClockIsRunning,
  clockRemainingTimeBecameZero,
  clockTriggerTikTakSound,
  setClockIsRunning,
  resetClock
} from './../actions';
import { startClockEpic, reduceRemainingTimeEpic, setClockIsRunningEpic, resetClockEpic } from './../epics';

describe('models/clocks/epics/startClockEpic', () => {
  it('should trigger the right actions', (done) => {
    const action$ = of(startClock(50)) as ActionsObservable<IAction<IRemainingTime>>;

    startClockEpic(action$)
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([updateRemainingTime(50), updateClockIsRunning(true), reduceRemainingTime()]);
        done();
      });
  });

  it('should trigger no actions', (done) => {
    const dummyAction$ = of({ type: 'Dummy Action' }) as ActionsObservable<IAction<IRemainingTime>>;

    startClockEpic(dummyAction$)
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([]);
        done();
      });
  });
});

describe('models/clocks/epics/reduceRemainingTimeEpic', () => {
  it('should trigger noAction due to not running', (done) => {
    const action$ = of(reduceRemainingTime()) as ActionsObservable<IAction>;

    const state = {
      websiteRootReducer: {
        clock: {
          remainingTime: 1,
          isRunning: false
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reduceRemainingTimeEpic(action$, new StateObservable<any>(new Subject(), state))
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([noAction()]);
        done();
      });
  });

  it('should trigger noAction due to newRemainingTime < 0', (done) => {
    const action$ = of(reduceRemainingTime()) as ActionsObservable<IAction>;

    const state = {
      websiteRootReducer: {
        clock: {
          remainingTime: 0,
          isRunning: true
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reduceRemainingTimeEpic(action$, new StateObservable<any>(new Subject(), state))
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([noAction()]);
        done();
      });
  });

  it('should trigger the right actions', (done) => {
    const action$ = of(reduceRemainingTime()) as ActionsObservable<IAction>;

    const state = {
      websiteRootReducer: {
        clock: {
          remainingTime: 1,
          isRunning: true
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reduceRemainingTimeEpic(action$, new StateObservable<any>(new Subject(), state))
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([updateRemainingTime(0), clockRemainingTimeBecameZero()]);
        done();
      });
  });

  it('should trigger the right actions', (done) => {
    const action$ = of(reduceRemainingTime()) as ActionsObservable<IAction>;

    const state = {
      websiteRootReducer: {
        clock: {
          remainingTime: 5,
          isRunning: true
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reduceRemainingTimeEpic(action$, new StateObservable<any>(new Subject(), state))
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([updateRemainingTime(4), reduceRemainingTime(), clockTriggerTikTakSound()]);
        done();
      });
  });
});

describe('models/clocks/epics/setClockIsRunningEpic', () => {
  it('should trigger the right actions with truthy payload', (done) => {
    const action$ = of(setClockIsRunning(true)) as ActionsObservable<IAction<boolean>>;

    setClockIsRunningEpic(action$)
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([updateClockIsRunning(true)]);
        done();
      });
  });

  it('should trigger the right actions with falsy payload', (done) => {
    const action$ = of(setClockIsRunning(false)) as ActionsObservable<IAction<boolean>>;

    setClockIsRunningEpic(action$)
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([updateClockIsRunning(false)]);
        done();
      });
  });

  it('should trigger no actions', (done) => {
    const dummyAction$ = of({ type: 'Dummy Action', payload: true }) as ActionsObservable<IAction<boolean>>;

    setClockIsRunningEpic(dummyAction$)
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([]);
        done();
      });
  });
});

describe('models/clocks/epics/resetClockEpic', () => {
  it('should trigger the right actions', (done) => {
    const action$ = of(resetClock()) as ActionsObservable<IAction>;

    resetClockEpic(action$)
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([updateRemainingTime(null), updateClockIsRunning(false)]);
        done();
      });
  });

  it('should trigger no actions', (done) => {
    const dummyAction$ = of({ type: 'Dummy Action' }) as ActionsObservable<IAction>;

    resetClockEpic(dummyAction$)
      .pipe(toArray())
      .subscribe((actions) => {
        expect(actions).toMatchObject([]);
        done();
      });
  });
});
