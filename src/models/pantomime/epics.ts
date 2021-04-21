import { Observable, of } from "rxjs";
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable,
} from "redux-observable";
import { map, mergeMap, withLatestFrom } from "rxjs/operators";
import {
  noAction,
  startPantomime,
  setTeamById,
  updateTeams,
  removeTeamById,
  addTeam,
  teamsSetupSubmit,
  updateGameState,
  setScoreTarget,
  updateScoreTarget,
  scoreSetupSubmit,
  setAvailableTime,
  updateAvailableTime,
  availableTimeSetupSubmit,
  startRound,
  startClock,
  resetClock,
  clockRemainingTimeBecameZero,
  endRound,
  goToNextRound,
  restartGame,
  updateGameReduxState,
  initializeGame,
  setIfMovieFound,
  updateMovie,
  goBack,
  updateSelectedMovieIndex,
} from "./actions";
import { GameStates, Movies } from "./config";
import {
  findMovie,
  assignNextTeam,
  createNewTeam,
  restartGameState,
  assignIfMovieFound,
  getAudio,
} from "./utils";
import { vibrate } from "@utils/hardware";
import { ITeam, IScoreTarget } from "./interfaces";
import { IState } from "@models/interfaces";
import { IActionWithPayload } from "@core/actions/interfaces";
import { IState as IModelState } from "./interfaces";
import { IState as IClock } from "@models/clock/interfaces";

const startEpic = (): Observable<IActionWithPayload> =>
  of(startPantomime(null));

const setTeamByIdEpic = (
  action$: ActionsObservable<IActionWithPayload<ITeam>>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IModelState["teams"]>> => {
  return action$.pipe(
    ofType(setTeamById.type),
    withLatestFrom(state$),
    map(([{ payload }, state]) => {
      return updateTeams(
        state.websiteRootReducer.pantomime.teams.map(team => {
          if (team.id === payload.id) {
            return { ...team, ...payload };
          }
          return team;
        })
      );
    })
  );
};

const removeTeamByIdEpic = (
  action$: ActionsObservable<IActionWithPayload<ITeam["id"]>>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IModelState["teams"]>> => {
  return action$.pipe(
    ofType(removeTeamById.type),
    withLatestFrom(state$),
    map(([{ payload }, state]) => {
      const teams = state.websiteRootReducer.pantomime.teams;
      if (teams.length === 2) {
        return noAction(null);
      }
      return updateTeams(
        teams
          .filter(team => team.id !== payload)
          .map((team, index) => ({ ...team, id: index }))
      );
    })
  );
};

const addTeamByIdEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IModelState["teams"]>> => {
  return action$.pipe(
    ofType(addTeam.type),
    withLatestFrom(state$),
    map(([action, state]) => {
      const teams = state.websiteRootReducer.pantomime.teams;
      return updateTeams(teams.concat(createNewTeam(teams.length)));
    })
  );
};

const teamsSetupSubmitEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  | IActionWithPayload<GameStates>
  | IActionWithPayload<IModelState["movie"]>
  | IActionWithPayload<IModelState["selectedMovieIndex"]>
> => {
  return action$.pipe(
    ofType(teamsSetupSubmit.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const gameState = state.websiteRootReducer.pantomime.gameState;
      if (gameState === GameStates.setTeams) {
        return [updateGameState(GameStates.setScoreTarget)];
      }

      const newMovie = findMovie(
        state.websiteRootReducer.pantomime.selectedMovieIndex
      );

      return [
        updateGameState(GameStates.waitForRoundStart),
        updateMovie(newMovie.movie),
        updateSelectedMovieIndex(newMovie.index),
      ];
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
): Observable<IActionWithPayload<GameStates>> => {
  return action$.pipe(
    ofType(scoreSetupSubmit.type),
    map(() => {
      return updateGameState(GameStates.setAvailableTime);
    })
  );
};

const setAvailableTimeEpic = (
  action$: ActionsObservable<IActionWithPayload<IModelState["availableTime"]>>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IModelState["availableTime"]>> => {
  return action$.pipe(
    ofType(setAvailableTime.type),
    withLatestFrom(state$),
    map(([{ payload }]) => {
      return updateAvailableTime(payload);
    })
  );
};

const availableTimeSetupSubmitEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  | IActionWithPayload<IModelState["teams"]>
  | IActionWithPayload<GameStates>
  | IActionWithPayload<IModelState["movie"]>
  | IActionWithPayload<IModelState["selectedMovieIndex"]>
> => {
  return action$.pipe(
    ofType(availableTimeSetupSubmit.type, goToNextRound.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const newTeams = assignNextTeam(state.websiteRootReducer.pantomime.teams);
      const scoreTarget = state.websiteRootReducer.pantomime.scoreTarget;
      const gameEnded =
        !!newTeams.find(team => team.score === scoreTarget) &&
        newTeams[0].playsNow;
      const newMovie = findMovie(
        state.websiteRootReducer.pantomime.selectedMovieIndex
      );

      return [
        updateTeams(newTeams),
        updateGameState(
          gameEnded ? GameStates.gameEnded : GameStates.waitForRoundStart
        ),
        ...(gameEnded
          ? []
          : [
              updateMovie(newMovie.movie),
              updateSelectedMovieIndex(newMovie.index),
            ]),
      ];
    })
  );
};

const startRoundEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  IActionWithPayload<GameStates> | IActionWithPayload<IClock["remainingTime"]>
> => {
  return action$.pipe(
    ofType(startRound.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return [
        updateGameState(GameStates.roundInProgress),
        startClock(state.websiteRootReducer.pantomime.availableTime),
      ];
    })
  );
};

const clockRemainingTimeBecameZeroEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<ITeam["movieFound"]>> => {
  return action$.pipe(
    ofType(clockRemainingTimeBecameZero.type),
    withLatestFrom(state$),
    map(([action, state]) => {
      const newRemainingTime = state.websiteRootReducer.clock.remainingTime - 1;
      const clockIsRunning = state.websiteRootReducer.clock.isRunning;

      if (clockIsRunning) {
        if (newRemainingTime === 0) {
          vibrate([200, 100, 200, 100, 200]);
          const audio = getAudio("boom");
          audio && audio.play();
        }
      }

      return setIfMovieFound(false);
    })
  );
};

const endRoundEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  IActionWithPayload<GameStates | ITeam["movieFound"]> | IActionWithPayload
> => {
  return action$.pipe(
    ofType(endRound.type),
    mergeMap(() => {
      return [resetClock(null), updateGameState(GameStates.roundEnded)];
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
    mergeMap(([action, state]) => {
      const pantomimeState = state.websiteRootReducer.pantomime;
      const newPantomimeState = restartGameState(pantomimeState);

      return [updateGameReduxState(newPantomimeState), resetClock(null)];
    })
  );
};

const setIfMovieFoundEpic = (
  action$: ActionsObservable<IActionWithPayload<ITeam["movieFound"]>>,
  state$: StateObservable<IState>
): Observable<
  IActionWithPayload<IModelState["teams"]> | IActionWithPayload
> => {
  return action$.pipe(
    ofType(setIfMovieFound.type),
    withLatestFrom(state$),
    mergeMap(([{ payload }, state]) => {
      const teams = state.websiteRootReducer.pantomime.teams;
      const shouldReduceScore =
        !payload &&
        state.websiteRootReducer.pantomime.gameState === GameStates.roundEnded;
      const newTeams = assignIfMovieFound(teams, payload, shouldReduceScore);

      return [
        updateTeams(newTeams),
        ...(state.websiteRootReducer.pantomime.gameState ===
        GameStates.roundInProgress
          ? [endRound(null)]
          : []),
      ];
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
    map(([action, state]) => {
      const gameState = state.websiteRootReducer.pantomime.gameState;
      const newGameState =
        gameState === GameStates.setScoreTarget
          ? GameStates.setTeams
          : gameState === GameStates.setAvailableTime
          ? GameStates.setScoreTarget
          : gameState === GameStates.waitForRoundStart
          ? GameStates.setScoreTarget
          : gameState;

      return updateGameState(newGameState);
    })
  );
};

export const pantomimeEpic = combineEpics(
  startEpic,
  setTeamByIdEpic,
  removeTeamByIdEpic,
  addTeamByIdEpic,
  teamsSetupSubmitEpic,
  setScoreTargetEpic,
  scoreSetupSubmitEpic,
  setAvailableTimeEpic,
  availableTimeSetupSubmitEpic,
  startRoundEpic,
  clockRemainingTimeBecameZeroEpic,
  endRoundEpic,
  restartGameEpic,
  setIfMovieFoundEpic,
  goBackEpic
);
