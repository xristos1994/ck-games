import { Observable, of } from 'rxjs';
import { combineEpics, ActionsObservable, StateObservable, ofType } from 'redux-observable';
import { request } from '@core/operators';
import { noAction } from '@core/models/core/actions';
import { map, withLatestFrom, delay } from 'rxjs/operators';
import { startLogging, log } from './actions';
import { IState } from '@models/interfaces';
import { IAction } from '@core/actions/interfaces';
import { initializeGame as initializeTikTakBoom, restartGame as restartTikTakBoom } from '@models/tik-tak-boom/actions';
import { initializeGame as initializePantomime, restartGame as restartPantomime } from '@models/pantomime/actions';
import { setLang } from '@models/i18n/actions';
import { setIsMenuOpen } from '@models/layout/actions';
import { AvailableGames } from '@models/website/interfaces';
import { ILoggingPayload } from './interfaces';
import * as services from './services';

const LOGGING_IN_DEV_MODE = false;

const SESSION_ID_KEY = 'ck-games-session-id';

const startEpic = (): Observable<IAction> => of(startLogging());

// --------------------------------------------------------------------

interface ICreateLogPayloadEpic {
  (action$: ActionsObservable<IAction>, state$: StateObservable<IState>): Observable<IAction<ILoggingPayload | void>>;
}

const createLogPayloadEpic: ICreateLogPayloadEpic = (action$, state$) => {
  return action$.pipe(
    ofType(
      startLogging.type,
      initializeTikTakBoom.type,
      initializePantomime.type,
      restartTikTakBoom.type,
      restartPantomime.type,
      setLang.type,
      setIsMenuOpen.type
    ),
    delay(1000),
    withLatestFrom(state$),
    map(([{ type, payload }, state]) => {
      if (typeof localStorage === 'undefined') {
        return noAction();
      }

      if (
        (type === initializeTikTakBoom.type
          && state.websiteRootReducer.website.selectedGame !== AvailableGames.tikTakBoom)
        || (type === initializePantomime.type
          && state.websiteRootReducer.website.selectedGame !== AvailableGames.pantomime)
      ) {
        return noAction();
      }

      let sessionId = localStorage.getItem(SESSION_ID_KEY);
      const isFirstTime = !sessionId;

      if (!sessionId) {
        sessionId = new Date().toUTCString() + '/' + Math.round(Math.random() * 10000000000);
        localStorage.setItem(SESSION_ID_KEY, sessionId);
      }

      const loggingPayload: ILoggingPayload = {
        application: 'CK-Games',
        env: process.env.NODE_ENV || '',
        origin: window.location.origin,
        pathname: window.location.pathname,
        language: state.websiteRootReducer.i18n.lang.code,
        sessionId,
        date: new Date().toUTCString(),
        isFirstTime,
        action: '',
        message: ''
      };

      if (type === startLogging.type) {
        loggingPayload.action = 'USER_ENTERED';
      } else if (
        type === initializeTikTakBoom.type
        && state.websiteRootReducer.website.selectedGame === AvailableGames.tikTakBoom
      ) {
        loggingPayload.action = 'USER_ENTERED_GAME';
        loggingPayload.message = 'tik-tak-boom';
      } else if (
        type === initializePantomime.type
        && state.websiteRootReducer.website.selectedGame === AvailableGames.pantomime
      ) {
        loggingPayload.action = 'USER_ENTERED_GAME';
        loggingPayload.message = 'pantomime';
      } else if (
        type === restartTikTakBoom.type
        && state.websiteRootReducer.website.selectedGame === AvailableGames.tikTakBoom
      ) {
        loggingPayload.action = 'USER_RESTARTED_GAME';
        loggingPayload.message = 'tik-tak-boom';
      } else if (
        type === restartPantomime.type
        && state.websiteRootReducer.website.selectedGame === AvailableGames.pantomime
      ) {
        loggingPayload.action = 'USER_RESTARTED_GAME';
        loggingPayload.message = 'pantomime';
      } else if (type === setLang.type) {
        loggingPayload.action = 'USER_CHANGED_LANGUAGE';
        loggingPayload.message = state.websiteRootReducer.i18n.lang.code;
      } else if (type === setIsMenuOpen.type && payload) {
        loggingPayload.action = 'USER_OPENED_MENU';
        loggingPayload.message = '';
      }

      if (loggingPayload.action) {
        return log(loggingPayload);
      }

      return noAction();
    })
  );
};

// --------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const logEpic = (action$) => {
  return action$.pipe(
    ofType(log.type),

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    request(log, services.createLog)
  );
};

// --------------------------------------------------------------------

export const loggingEpic
  = process.env.NODE_ENV === 'development' && !LOGGING_IN_DEV_MODE
    ? combineEpics(startEpic, createLogPayloadEpic)
    : combineEpics(startEpic, createLogPayloadEpic, logEpic);
