import { Observable, of } from 'rxjs';
import { combineEpics, ActionsObservable, StateObservable, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { startLayout, updateIsMenuOpen, setIsMenuOpen } from './actions';
import { IState } from '@models/interfaces';
import { IActionWithPayload } from '@core/actions/interfaces';
import { IState as IModelState } from './interfaces';
import { IState as IClockState } from '@models/clock/interfaces';
import { setClockIsRunning, reduceRemainingTime } from '@models/clock/actions';
import { GameStates as PantomimeGameStates } from '@models/pantomime/config';
import { GameStates as TikTakBoomGameStates } from '@models/tik-tak-boom/config';

const startEpic = (): Observable<IActionWithPayload> => of(startLayout(null));

const setIsMenuOpenEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<
  IActionWithPayload<IModelState['isMenuOpen']> | IActionWithPayload<IClockState['isRunning']> | IActionWithPayload
> => {
  return action$.pipe(
    ofType(setIsMenuOpen.type),
    withLatestFrom(state$),
    mergeMap(([{ payload }, state]) => {
      const isRoundInProgress
        = state.websiteRootReducer.pantomime.gameState === PantomimeGameStates.roundInProgress
        || state.websiteRootReducer.tikTakBoom.gameState === TikTakBoomGameStates.roundInProgress;

      return [
        ...(payload && !!state.websiteRootReducer.website.selectedGame && isRoundInProgress
          ? [setClockIsRunning(false)]
          : []),
        ...(!payload && !!state.websiteRootReducer.website.selectedGame && isRoundInProgress
          ? [setClockIsRunning(true), reduceRemainingTime(null)]
          : []),
        updateIsMenuOpen(payload || false)
      ];
    })
  );
};

export const layoutEpic = combineEpics(startEpic, setIsMenuOpenEpic);
