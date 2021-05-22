import { Observable, of } from "rxjs";
import {
  combineEpics,
  ActionsObservable,
  StateObservable,
  ofType,
} from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { IActionWithPayload } from "@core/actions/interfaces";
import { startWebsite, updateSelectedGame, restartAllGames } from "./actions";
import { IState, AvailableGames } from "./interfaces";
import {
  initializeGame as initializePantomime,
  restartGame as restartPantomime,
} from "@models/pantomime/actions";
import {
  initializeGame as initializeTikTakBoom,
  restartGame as restartTikTakBoom,
} from "@models/tik-tak-boom/actions";

const startEpic = (): Observable<IActionWithPayload> => of(startWebsite(null));

const initializePantomimeEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  IActionWithPayload | IActionWithPayload<IState["selectedGame"]>
> => {
  return action$.pipe(
    ofType(initializePantomime.type),
    mergeMap(() => {
      return [
        restartTikTakBoom(null),
        updateSelectedGame(AvailableGames.pantomime),
      ];
    })
  );
};

const initializeTikTakBoomEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  IActionWithPayload | IActionWithPayload<IState["selectedGame"]>
> => {
  return action$.pipe(
    ofType(initializeTikTakBoom.type),
    mergeMap(() => {
      return [
        restartPantomime(null),
        updateSelectedGame(AvailableGames.tikTakBoom),
      ];
    })
  );
};

const restartAllGamesEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload> => {
  return action$.pipe(
    ofType(restartAllGames.type),
    mergeMap(() => {
      return [restartPantomime(null), restartTikTakBoom(null)];
    })
  );
};

export const websiteEpic = combineEpics(
  startEpic,
  initializePantomimeEpic,
  initializeTikTakBoomEpic,
  restartAllGamesEpic
);
