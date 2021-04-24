import { Observable, of } from "rxjs";
import {
  combineEpics,
  ActionsObservable,
  StateObservable,
  ofType,
} from "redux-observable";
import { map } from "rxjs/operators";
import { IActionWithPayload } from "@core/actions/interfaces";
import { startWebsite, updateSelectedGame } from "./actions";
import { IState, AvailableGames } from "./interfaces";
import { initializeGame as initializePantomime } from "@models/pantomime/actions";
import { initializeGame as initializeTikTakBoom } from "@models/tik-tak-boom/actions";

const startEpic = (): Observable<IActionWithPayload> => of(startWebsite(null));

const initializePantomimeEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IState["selectedGame"]>> => {
  return action$.pipe(
    ofType(initializePantomime.type),
    map(() => {
      return updateSelectedGame(AvailableGames.pantomime);
    })
  );
};

const initializeTikTakBoomEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IState["selectedGame"]>> => {
  return action$.pipe(
    ofType(initializeTikTakBoom.type),
    map(() => {
      return updateSelectedGame(AvailableGames.tikTakBoom);
    })
  );
};

export const websiteEpic = combineEpics(
  startEpic,
  initializePantomimeEpic,
  initializeTikTakBoomEpic
);
