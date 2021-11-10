import { testEpic } from '@utils/test-utils';
import { noAction } from '@models/pantomime/actions';
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
import { Action } from '@core/actions';

describe('models/clocks/epics/startClockEpic', () => {
  it('should trigger the right actions', (done) => {
    testEpic(
      startClockEpic,
      startClock(50),
      null,
      [updateRemainingTime(50), updateClockIsRunning(true), reduceRemainingTime()],
      done
    );
  });

  it('should trigger no actions', (done) => {
    testEpic(
      startClockEpic,
      Action('TEST', 'DUMMY_ACTION')(),
      null,
      [],
      done
    );
  });
});

describe('models/clocks/epics/reduceRemainingTimeEpic', () => {
  it('should trigger noAction due to not running', (done) => {
    testEpic(
      reduceRemainingTimeEpic,
      reduceRemainingTime(),
      {
        websiteRootReducer: {
          clock: {
            remainingTime: 1,
            isRunning: false
          }
        }
      },
      [noAction()],
      done
    );
  });

  it('should trigger noAction due to newRemainingTime < 0', (done) => {
    testEpic(
      reduceRemainingTimeEpic,
      reduceRemainingTime(),
      {
        websiteRootReducer: {
          clock: {
            remainingTime: 0,
            isRunning: true
          }
        }
      },
      [noAction()],
      done
    );
  });

  it('should trigger the right actions', (done) => {
    testEpic(
      reduceRemainingTimeEpic,
      reduceRemainingTime(),
      {
        websiteRootReducer: {
          clock: {
            remainingTime: 1,
            isRunning: true
          }
        }
      },
      [updateRemainingTime(0), clockRemainingTimeBecameZero()],
      done
    );
  });

  it('should trigger the right actions', (done) => {
    testEpic(
      reduceRemainingTimeEpic,
      reduceRemainingTime(),
      {
        websiteRootReducer: {
          clock: {
            remainingTime: 5,
            isRunning: true
          }
        }
      },
      [updateRemainingTime(4), reduceRemainingTime(), clockTriggerTikTakSound()],
      done
    );
  });
});

describe('models/clocks/epics/setClockIsRunningEpic', () => {
  it('should trigger the right actions with truthy payload', (done) => {
    testEpic(
      setClockIsRunningEpic,
      setClockIsRunning(true),
      null,
      [updateClockIsRunning(true)],
      done
    );
  });

  it('should trigger the right actions with falsy payload', (done) => {
    testEpic(
      setClockIsRunningEpic,
      setClockIsRunning(false),
      null,
      [updateClockIsRunning(false)],
      done
    );
  });

  it('should trigger no actions', (done) => {
    testEpic(
      setClockIsRunningEpic,
      Action('TEST', 'DUMMY_ACTION')(),
      null,
      [],
      done
    );
  });
});

describe('models/clocks/epics/resetClockEpic', () => {
  it('should trigger the right actions', (done) => {
    testEpic(
      resetClockEpic,
      resetClock(),
      null,
      [updateRemainingTime(null), updateClockIsRunning(false)],
      done
    );
  });

  it('should trigger no actions', (done) => {
    testEpic(
      resetClockEpic,
      Action('TEST', 'DUMMY_ACTION')(),
      null,
      [],
      done
    );
  });
});
