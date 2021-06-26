import { Observable, of } from 'rxjs';
import { ActionsObservable, combineEpics, ofType, StateObservable } from 'redux-observable';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import {
  noAction,
  startTikTakBoom,
  setPlayerById,
  updatePlayers,
  removePlayerById,
  addPlayer,
  playersSetupSubmit,
  updateGameState,
  setScoreTarget,
  updateScoreTarget,
  scoreSetupSubmit,
  startRound,
  updateMode,
  updateSyllable,
  goToNextPlayer,
  goToPreviousPlayer,
  startClock,
  resetClock,
  clockRemainingTimeBecameZero,
  clockTriggerTikTakSound,
  endRound,
  goToNextRound,
  restartGame,
  updateGameReduxState,
  initializeGame,
  setWhoLost,
  goBack
} from './actions';
import { GameStates, BoomTimer } from './config';
import {
  findModeAndSyllable,
  assignNextPlayer,
  assignPreviousPlayer,
  assignNextRoundStarter,
  assignScoreAfterRoundEnds,
  createNewPlayer,
  restartGameState,
  assignWhoLost,
  getAudio
} from './utils';
import { vibrate } from '@utils/hardware';
import { getRandomInteger } from '@utils/general';
import { IMode, IPlayer, IScoreTarget, ISyllable } from './interfaces';
import { IState } from '@models/interfaces';
import { IActionWithPayload } from '@core/actions/interfaces';
import { IState as IModelState } from './interfaces';
import { IState as IClock } from '@models/clock/interfaces';
import { AvailableGames } from '@models/website/interfaces';

const startEpic = (): Observable<IActionWithPayload> => of(startTikTakBoom(null));

const setPlayerByIdEpic = (
  action$: ActionsObservable<IActionWithPayload<IPlayer>>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IPlayer[]>> => {
  return action$.pipe(
    ofType(setPlayerById.type),
    withLatestFrom(state$),
    map(([{ payload }, state]) => {
      return updatePlayers(
        state.websiteRootReducer.tikTakBoom.players.map((player) => {
          if (player.id === payload.id) {
            return { ...player, ...payload };
          }
          return player;
        })
      );
    })
  );
};

const removePlayerByIdEpic = (
  action$: ActionsObservable<IActionWithPayload<IPlayer['id']>>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IPlayer[] | null>> => {
  return action$.pipe(
    ofType(removePlayerById.type),
    withLatestFrom(state$),
    map(([{ payload }, state]) => {
      const players = state.websiteRootReducer.tikTakBoom.players;
      if (players.length === 2) {
        return noAction(null);
      }
      return updatePlayers(
        players.filter((player) => player.id !== payload).map((player, index) => ({ ...player, id: index }))
      );
    })
  );
};

const addPlayerByIdEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IPlayer[]>> => {
  return action$.pipe(
    ofType(addPlayer.type),
    withLatestFrom(state$),
    map(([, state]) => {
      const players = state.websiteRootReducer.tikTakBoom.players;
      return updatePlayers(players.concat(createNewPlayer(players.length)));
    })
  );
};

const playersSetupSubmitEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<GameStates>> => {
  return action$.pipe(
    ofType(playersSetupSubmit.type),
    withLatestFrom(state$),
    map(([, state]) => {
      const gameState = state.websiteRootReducer.tikTakBoom.gameState;
      if (gameState === GameStates.setPlayers) {
        return updateGameState(GameStates.setScoreTarget);
      }
      return updateGameState(GameStates.waitForRoundStart);
    })
  );
};

const setScoreTargetEpic = (
  action$: ActionsObservable<IActionWithPayload<IScoreTarget>>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IScoreTarget>> => {
  return action$.pipe(
    ofType(setScoreTarget.type),
    withLatestFrom(state$),
    map(([{ payload }]) => {
      return updateScoreTarget(payload);
    })
  );
};

const scoreSetupSubmitEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IPlayer[]> | IActionWithPayload<GameStates>> => {
  return action$.pipe(
    ofType(scoreSetupSubmit.type),
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      const players = state.websiteRootReducer.tikTakBoom.players;
      const newPlayers = assignNextRoundStarter(players, true);
      return [updatePlayers(newPlayers), updateGameState(GameStates.waitForRoundStart)];
    })
  );
};

const startRoundEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  | IActionWithPayload<IPlayer[]>
  | IActionWithPayload<IMode>
  | IActionWithPayload<ISyllable>
  | IActionWithPayload<GameStates>
  | IActionWithPayload<IClock['remainingTime']>
> => {
  return action$.pipe(
    ofType(startRound.type),
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      const players = state.websiteRootReducer.tikTakBoom.players;
      const newPlayers = assignNextPlayer(players);
      const { mode, syllable } = findModeAndSyllable();

      return [
        updatePlayers(newPlayers),
        updateMode(mode),
        updateSyllable(syllable),
        updateGameState(GameStates.roundInProgress),
        startClock(getRandomInteger(BoomTimer.minSeconds, BoomTimer.maxSeconds))
      ];
    })
  );
};

const goToNextPlayerEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IPlayer[]>> => {
  return action$.pipe(
    ofType(goToNextPlayer.type),
    withLatestFrom(state$),
    map(([, state]) => {
      const players = state.websiteRootReducer.tikTakBoom.players;
      const newPlayers = assignNextPlayer(players);

      return updatePlayers(newPlayers);
    })
  );
};

const goToPreviousPlayerEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IPlayer[]>> => {
  return action$.pipe(
    ofType(goToPreviousPlayer.type),
    withLatestFrom(state$),
    map(([, state]) => {
      const players = state.websiteRootReducer.tikTakBoom.players;
      const newPlayers = assignPreviousPlayer(players);

      return updatePlayers(newPlayers);
    })
  );
};

const clockRemainingTimeBecameZeroEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload> => {
  return action$.pipe(
    ofType(clockRemainingTimeBecameZero.type),
    withLatestFrom(state$),
    map(([, state]) => {
      const isTikTakBoomSelected = state.websiteRootReducer.website.selectedGame === AvailableGames.tikTakBoom;

      if (!isTikTakBoomSelected) {
        return noAction(null);
      }

      const newRemainingTime = state.websiteRootReducer.clock.remainingTime || 0 - 1;
      const clockIsRunning = state.websiteRootReducer.clock.isRunning;

      if (clockIsRunning) {
        if (newRemainingTime <= 0) {
          vibrate([200, 100, 200, 100, 200]);
          const audio = getAudio('boom');
          audio && audio.play();
        }
      }

      return endRound(null);
    })
  );
};

const clockTriggerTikTakSoundEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload> => {
  return action$.pipe(
    ofType(clockTriggerTikTakSound.type),
    withLatestFrom(state$),
    map(([, state]) => {
      if (state.websiteRootReducer.website.selectedGame === AvailableGames.tikTakBoom) {
        const audio = getAudio('tikTak');
        audio && audio.play();
      }

      return noAction(null);
    })
  );
};

const endRoundEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload | IActionWithPayload<GameStates> | IActionWithPayload<IPlayer[]>> => {
  return action$.pipe(
    ofType(endRound.type),
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      const players = state.websiteRootReducer.tikTakBoom.players;
      const newPlayers = assignScoreAfterRoundEnds(players);

      return [updatePlayers(newPlayers), resetClock(null), updateGameState(GameStates.roundEnded)];
    })
  );
};

const goToNextRoundEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<GameStates> | IActionWithPayload<IPlayer[]>> => {
  return action$.pipe(
    ofType(goToNextRound.type),
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      const scoreTarget = state.websiteRootReducer.tikTakBoom.scoreTarget;
      const players = state.websiteRootReducer.tikTakBoom.players;

      let newPlayers: IPlayer[] = players.map((player) => ({ ...player, playsNow: null }));

      const shouldActivateAllPlayers = newPlayers.filter((player) => player.isActive).length === 1;

      newPlayers = assignNextRoundStarter(newPlayers, shouldActivateAllPlayers);

      const gameEnded = !!newPlayers.find((player) => player.numOfBooms === scoreTarget);

      return [
        updatePlayers(newPlayers),
        updateGameState(gameEnded ? GameStates.gameEnded : GameStates.waitForRoundStart)
      ];
    })
  );
};

const restartGameEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IModelState> | IActionWithPayload> => {
  return action$.pipe(
    ofType(restartGame.type, initializeGame.type),
    withLatestFrom(state$),
    mergeMap(([, state]) => {
      const tikTakBoomState = state.websiteRootReducer.tikTakBoom;
      const newTikTakBoomState = restartGameState(tikTakBoomState);

      return [updateGameReduxState(newTikTakBoomState), resetClock(null)];
    })
  );
};

const setWhoLostEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IPlayer[]>> => {
  return action$.pipe(
    ofType(setWhoLost.type),
    withLatestFrom(state$),
    map(([action, state]) => {
      const playerLostId = action.payload || 0;
      const players = state.websiteRootReducer.tikTakBoom.players;
      const newPlayers = assignWhoLost(players, playerLostId);

      return updatePlayers(newPlayers);
    })
  );
};

const goBackEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<GameStates>> => {
  return action$.pipe(
    ofType(goBack.type),
    withLatestFrom(state$),
    map(([, state]) => {
      const gameState = state.websiteRootReducer.tikTakBoom.gameState;
      const newGameState
        = gameState === GameStates.setScoreTarget
          ? GameStates.setPlayers
          : gameState === GameStates.waitForRoundStart
            ? GameStates.setScoreTarget
            : gameState;

      return updateGameState(newGameState);
    })
  );
};

export const tikTakBoomEpic = combineEpics(
  startEpic,
  setPlayerByIdEpic,
  removePlayerByIdEpic,
  addPlayerByIdEpic,
  playersSetupSubmitEpic,
  setScoreTargetEpic,
  scoreSetupSubmitEpic,
  startRoundEpic,
  goToNextPlayerEpic,
  goToPreviousPlayerEpic,
  clockRemainingTimeBecameZeroEpic,
  clockTriggerTikTakSoundEpic,
  endRoundEpic,
  goToNextRoundEpic,
  restartGameEpic,
  setWhoLostEpic,
  goBackEpic
);
