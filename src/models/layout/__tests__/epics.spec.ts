import { testEpic } from '@utils/test-utils';
import { startLayout, updateIsMenuOpen, setIsMenuOpen } from './../actions';
import { startLayoutEpic, setIsMenuOpenEpic } from './../epics';
import { Action } from '@core/actions';
import * as clockActions from '@models/clock/actions';

const mockedPantomimeGameStates = {
  setTeams: 'setTeams',
  setScoreTarget: 'setScoreTarget',
  setAvailableTime: 'setAvailableTime',
  waitForRoundStart: 'waitForRoundStart',
  roundInProgress: 'roundInProgress',
  roundEnded: 'roundEnded',
  gameEnded: 'gameEnded'
};

jest.doMock('@models/pantomime/config', () => ({
  __esModule: true,
  GameStates: mockedPantomimeGameStates
}));

const mockedTikTakBoomGameStates = {
  setPlayers: 'setPlayers',
  setScoreTarget: 'setScoreTarget',
  waitForRoundStart: 'waitForRoundStart',
  roundInProgress: 'roundInProgress',
  roundEnded: 'roundEnded',
  gameEnded: 'gameEnded'
};

jest.doMock('@models/tik-tak-boom/config', () => ({
  __esModule: true,
  GameStates: mockedTikTakBoomGameStates
}));

const setClockIsRunning = Action('TEST', 'SET_CLOCK_IS_RUNNING');
const reduceRemainingTime = Action('TEST', 'REDUCE_REMAINING_TIME');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
clockActions.setClockIsRunning = setClockIsRunning; clockActions.reduceRemainingTime = reduceRemainingTime;

describe('models/layout/epics/startI18nEpic', () => {
  it('should trigger the right actions', (done) => {
    testEpic(
      startLayoutEpic,
      null,
      null,
      [startLayout()],
      done
    );
  });
});

describe('models/layout/epics/setIsMenuOpenEpic', () => {
  it('should trigger the right actions when pantomime in progress and opening menu', (done) => {
    testEpic(
      setIsMenuOpenEpic,
      setIsMenuOpen(true),
      {
        websiteRootReducer: {
          pantomime: {
            gameState: mockedPantomimeGameStates.roundInProgress
          },
          tikTakBoom: {},
          website: {
            selectedGame: 'Has selected Game'
          }
        }
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [setClockIsRunning(false), updateIsMenuOpen(true)],
      done
    );
  });

  it('should trigger the right actions when tikTakBoom in progress and opening menu', (done) => {
    testEpic(
      setIsMenuOpenEpic,
      setIsMenuOpen(true),
      {
        websiteRootReducer: {
          tikTakBoom: {
            gameState: mockedTikTakBoomGameStates.roundInProgress
          },
          pantomime: {},
          website: {
            selectedGame: 'Has selected Game'
          }
        }
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [setClockIsRunning(false), updateIsMenuOpen(true)],
      done
    );
  });

  it('should trigger the right actions when pantomime in progress and closing menu', (done) => {
    testEpic(
      setIsMenuOpenEpic,
      setIsMenuOpen(false),
      {
        websiteRootReducer: {
          pantomime: {
            gameState: mockedPantomimeGameStates.roundInProgress
          },
          tikTakBoom: {},
          website: {
            selectedGame: 'Has selected Game'
          }
        }
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [setClockIsRunning(true), reduceRemainingTime(), updateIsMenuOpen(false)],
      done
    );
  });

  it('should trigger the right actions when tikTakBoom in progress and closing menu', (done) => {
    testEpic(
      setIsMenuOpenEpic,
      setIsMenuOpen(false),
      {
        websiteRootReducer: {
          tikTakBoom: {
            gameState: mockedTikTakBoomGameStates.roundInProgress
          },
          pantomime: {},
          website: {
            selectedGame: 'Has selected Game'
          }
        }
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [setClockIsRunning(true), reduceRemainingTime(), updateIsMenuOpen(false)],
      done
    );
  });

  it('should trigger no actions', (done) => {
    testEpic(
      setIsMenuOpenEpic,
      Action('TEST', 'DUMMY_ACTION')(),
      null,
      [],
      done
    );
  });
});

