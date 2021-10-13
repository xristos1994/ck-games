import { Observable, of } from 'rxjs';
import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { updateLang, setLang, initI18n } from './actions';

import { IAction } from '@core/actions/interfaces';
import { IState as IModelState } from './interfaces';
import { availableLangs, setLocalStorageLang, getLocalStorageLang, getLangFromPathname } from './utils';

export const startI18nEpic = (): Observable<IAction> => of(initI18n());

// --------------------------------------------------------------------

interface IInitI18nEpic {
  (action$: ActionsObservable<IAction>): Observable<IAction<IModelState['lang']>>;
}

export const initI18nEpic: IInitI18nEpic = (action$) => {
  return action$.pipe(
    ofType(initI18n.type),
    map(() => {
      const langInBrowser = getLangFromPathname() || getLocalStorageLang();

      const selectedLang = availableLangs[langInBrowser] || availableLangs.default;

      return setLang(selectedLang);
    })
  );
};

// --------------------------------------------------------------------

interface ISetLangEpic {
  (action$: ActionsObservable<IAction<IModelState['lang']>>): Observable<IAction<IModelState['lang']>>;
}

export const setLangEpic: ISetLangEpic = (action$) => {
  return action$.pipe(
    ofType(setLang.type),
    map((action) => {
      setLocalStorageLang(action.payload.code);
      return updateLang(action.payload);
    })
  );
};

// --------------------------------------------------------------------

export const i18nEpic = combineEpics(startI18nEpic, initI18nEpic, setLangEpic);
