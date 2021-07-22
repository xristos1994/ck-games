import { Observable, of } from 'rxjs';
import { combineEpics, ActionsObservable, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { IAction } from '@core/actions/interfaces';
import { startWebsite, updateSelectedGame, restartAllGames } from './actions';
import { IState, AvailableGames } from './interfaces';
import { IState as ILayoutState } from '@models/layout/interfaces';
import { initializeGame as initializePantomime, restartGame as restartPantomime } from '@models/pantomime/actions';
import { initializeGame as initializeTikTakBoom, restartGame as restartTikTakBoom } from '@models/tik-tak-boom/actions';
import { setIsMenuOpen } from '@models/layout/actions';

const startEpic = (): Observable<IAction> => of(startWebsite());

// --------------------------------------------------------------------

interface IInitializePantomimeEpic {
  (action$: ActionsObservable<IAction>): Observable<IAction<IState['selectedGame'] | void>>;
}

const initializePantomimeEpic: IInitializePantomimeEpic = (action$) => {
  return action$.pipe(
    ofType(initializePantomime.type),
    mergeMap(() => {
      return [restartTikTakBoom(), updateSelectedGame(AvailableGames.pantomime)];
    })
  );
};

// --------------------------------------------------------------------

interface IInitializeTikTakBoomEpic {
  (action$: ActionsObservable<IAction>): Observable<IAction<IState['selectedGame'] | void>>;
}

const initializeTikTakBoomEpic: IInitializeTikTakBoomEpic = (action$) => {
  return action$.pipe(
    ofType(initializeTikTakBoom.type),
    mergeMap(() => {
      return [restartPantomime(), updateSelectedGame(AvailableGames.tikTakBoom)];
    })
  );
};

// --------------------------------------------------------------------

interface IRestartAllGamesEpic {
  (action$: ActionsObservable<IAction>): Observable<
    IAction<IState['selectedGame'] | ILayoutState['isMenuOpen'] | void>
  >;
}

const restartAllGamesEpic: IRestartAllGamesEpic = (action$) => {
  return action$.pipe(
    ofType(restartAllGames.type),
    mergeMap(() => {
      return [restartPantomime(), restartTikTakBoom(), updateSelectedGame(null), setIsMenuOpen(false)];
    })
  );
};

// --------------------------------------------------------------------

export const websiteEpic = combineEpics(
  startEpic,
  initializePantomimeEpic,
  initializeTikTakBoomEpic,
  restartAllGamesEpic
);
